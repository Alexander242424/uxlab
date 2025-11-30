"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCalModal } from "@/context/CalModalContext";

interface TextSectionProps {
  /** Основной текст (одна строка или массив строк) */
  text: string | string[];
  /** Отдельный текст для мобилки, если нужно */
  mobileText?: string | string[];
  showButton?: boolean;
  buttonText?: string;
  className?: string;
  textColor?: string;
  rootMargin?: string;
  threshold?: number;
}

export default function TextSection({
  text,
  mobileText,
  showButton = false,
  buttonText = "Book a Call",
  className = "",
  textColor = "text-text-700",
  threshold = 1,
}: TextSectionProps) {
  const isMobile = useIsMobile();
  const { openModal } = useCalModal();

  const handleCalClick = () => {
    openModal("https://cal.com/eugene.orehov/30min?overlayCalendar=true");
  };

  const textArray = Array.isArray(text) ? text : [text];

  const mobileTextArray = Array.isArray(mobileText)
    ? mobileText
    : mobileText
    ? [mobileText]
    : textArray;

  // === Контейнер: стэггер МЕЖДУ строками ===
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // задержка между строками
      },
    },
  };

  // === Линия: стэггер МЕЖДУ словами внутри строки ===
  const lineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01, // задержка между словами в строке
      },
    },
  };

  // === Слово ===
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "120%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Рендер: строки → контейнер строки → слова
  const renderAnimatedText = (lines: string[], fontSize: string) => {
    return lines
      .filter(Boolean)
      .map((line, lineIndex) => {
        const words = line.split(" ").filter(Boolean);

        return (
          <motion.span
            key={`line-${lineIndex}`}
            variants={lineVariants}
            className="block"
            style={{
              overflow: "hidden",
              textAlign: "right", // для десктопа ты и так делаешь text-right
            }}
          >
            {words.map((word, wordIndex) => (
              <motion.span
                key={`w-${lineIndex}-${wordIndex}-${word}`}
                variants={wordVariants}
                className={textColor}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  textAlign: "right",
                }}
              >
                <span style={{ display: "inline-block" }}>
                  {word}&nbsp;
                </span>
              </motion.span>
            ))}
          </motion.span>
        );
      });
  };

  return (
    <section className={`text_section py-20 md:py-32 ${className}`}>
      {/* ===== ТЕКСТ ===== */}
      {isMobile ? (
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: threshold ?? 0.4,
            once: true,
          }}
        >
          {renderAnimatedText(
            mobileTextArray as string[],
            "clamp(1.3rem, 4.8vw, 2rem)"
          )}
        </motion.div>
      ) : (
        <motion.div
          className="text-right ml-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: threshold ?? 0.5,
            once: true,
          }}
        >
          {renderAnimatedText(
            textArray as string[],
            "clamp(2.1rem, 3.8vw, 3.4rem)"
          )}
        </motion.div>
      )}

      {/* ===== КНОПКА ===== */}
      {showButton && (
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            iconRight={<ArrowUpRightSVG className="!size-6" />}
            className="w-full max-w-40 mt-10 scale-100 lg:scale-[130%]"
            onClick={handleCalClick}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  );
}
