"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: { opacity: number; y: number };
  to?: { opacity: number; y: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

// Типи для різних частин тексту
type CharPart = { char: string; index: number };
type WordPart = { word: string; index: number };
type LinePart = { line: string; index: number };
type WordCharPart = { char: string; wordIndex: number; charIndex: number; index: number };

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  style = {},
  delay = 100,
  duration = 0.6,
  ease = "easeOut",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Використовуємо useInView для визначення, коли елемент видимий
  const [inViewRef, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true, // Анімація виконується тільки один раз
  });

  // Функція для розбиття тексту на частини
  const splitText = (text: string, type: string): (CharPart | WordPart | LinePart | WordCharPart)[] => {
    switch (type) {
      case "chars":
        return text.split("").map((char, index) => ({
          char,
          index,
        } as CharPart));
      case "words":
        return text.split(" ").map((word, index) => ({
          word,
          index,
        } as WordPart));
      case "lines":
        // Для ліній використовуємо <br> як роздільник
        return text.split("\n").map((line, index) => ({
          line,
          index,
        } as LinePart));
      case "words, chars":
        const words = text.split(" ");
        let globalIndex = 0;
        const result: WordCharPart[] = [];
        
        words.forEach((word, wordIndex) => {
          // Додаємо символи слова
          word.split("").forEach((char, charIndex) => {
            result.push({
              char,
              wordIndex,
              charIndex,
              index: globalIndex++,
            } as WordCharPart);
          });
          
          // Додаємо пробіл між словами (крім останнього слова)
          if (wordIndex < words.length - 1) {
            result.push({
              char: " ",
              wordIndex,
              charIndex: -1, // -1 для пробілів
              index: globalIndex++,
            } as WordCharPart);
          }
        });
        
        return result;
      default:
        return text.split("").map((char, index) => ({
          char,
          index,
        } as CharPart));
    }
  };

  // Розбиваємо текст
  const textParts = splitText(text, splitType);
  
  // Логуємо для діагностики
  if (splitType === "words, chars") {
    console.log("SplitText: Text parts for 'words, chars':", textParts);
  }

  // Конвертуємо GSAP ease в Framer Motion ease
  const convertEase = (gsapEase: string) => {
    switch (gsapEase) {
      case "power3.out":
        return [0.25, 0.46, 0.45, 0.94] as const;
      case "power3.in":
        return [0.55, 0.055, 0.675, 0.19] as const;
      case "power3.inOut":
        return [0.645, 0.045, 0.355, 1] as const;
      case "power2.out":
        return [0.25, 0.46, 0.45, 0.94] as const;
      case "power2.in":
        return [0.55, 0.055, 0.675, 0.19] as const;
      case "power2.inOut":
        return [0.645, 0.045, 0.355, 1] as const;
      case "back.out":
        return [0.175, 0.885, 0.32, 1.275] as const;
      case "back.in":
        return [0.6, -0.28, 0.735, 0.045] as const;
      case "back.inOut":
        return [0.68, -0.55, 0.265, 1.55] as const;
      default:
        return "easeOut";
    }
  };

  const framerEase = convertEase(ease);

  // Рендеримо текст залежно від типу розбиття
  const renderText = () => {
    if (splitType === "lines") {
      return textParts.map((part, index) => {
        if ('line' in part) {
          return (
            <motion.span
              key={index}
              initial={from}
              animate={inView ? to : from}
              transition={{
                duration,
                delay: (delay / 1000) * index,
                ease: framerEase,
              }}
              onAnimationComplete={() => {
                if (index === textParts.length - 1) {
                  onLetterAnimationComplete?.();
                }
              }}
              style={{ display: "block" }}
            >
              {part.line}
            </motion.span>
          );
        }
        return null;
      });
    }

    if (splitType === "words") {
      return textParts.map((part, index) => {
        if ('word' in part) {
          return (
            <motion.span
              key={index}
              initial={from}
              animate={inView ? to : from}
              transition={{
                duration,
                delay: (delay / 1000) * index,
                ease: framerEase,
              }}
              onAnimationComplete={() => {
                if (index === textParts.length - 1) {
                  onLetterAnimationComplete?.();
                }
              }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {part.word}
            </motion.span>
          );
        }
        return null;
      });
    }

    if (splitType === "words, chars") {
      return textParts.map((part, index) => {
        if ('wordIndex' in part && 'charIndex' in part) {
          // Для пробілів використовуємо звичайний span без анімації
          if (part.char === " ") {
            return <span key={`space-${part.index}`}>&nbsp;</span>;
          }
          
          return (
            <motion.span
              key={`${part.wordIndex}-${part.charIndex}-${part.index}`}
              initial={from}
              animate={inView ? to : from}
              transition={{
                duration,
                delay: (delay / 1000) * part.index,
                ease: framerEase,
              }}
              onAnimationComplete={() => {
                console.log(`SplitText: Animation completed for char '${part.char}' at index ${part.index}`);
                if (index === textParts.length - 1) {
                  onLetterAnimationComplete?.();
                }
              }}
              style={{ display: "inline-block" }}
            >
              {part.char}
            </motion.span>
          );
        }
        return null;
      });
    }

    // По замовчуванню - символи
    return textParts.map((part, index) => {
      if ('char' in part) {
        return (
          <motion.span
            key={index}
            initial={from}
            animate={inView ? to : from}
            transition={{
              duration,
              delay: (delay / 1000) * index,
              ease: framerEase,
            }}
            onAnimationComplete={() => {
              if (index === textParts.length - 1) {
                onLetterAnimationComplete?.();
              }
            }}
            style={{ display: "inline-block" }}
          >
            {part.char}
          </motion.span>
        );
      }
      return null;
    });
  };

  return (
    <div
      ref={(node) => {
        // Об'єднуємо refs
        if (node) {
          ref.current = node;
          inViewRef(node);
        }
      }}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
        ...style,
      }}
    >
      {renderText()}
    </div>
  );
};

export default SplitText;
