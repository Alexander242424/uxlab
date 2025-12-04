"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCalModal } from "@/context/CalModalContext";

interface TextSectionProps {
  text: string | string[];
  bigText?: string | string[];
  mobileText?: string | string[];
  showButton?: boolean;
  buttonText?: string;
  className?: string;
  textColor?: string;
  rootMargin?: string;
  threshold?: number;
  firstText?: string;
  secondText?: string[];
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

  // контейнер: стэггер между строками
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // строка: стэггер между словами
  const lineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  // слово
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
            className="inline-block"
            style={{
              overflow: "hidden",
            }}
          >
            {words.map((word, wordIndex) => (
              <motion.span
                key={`w-${lineIndex}-${wordIndex}-${word}`}
                variants={wordVariants}
                className={textColor}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.span>
        );
      });
  };

  return (
    <section className={`text_section py-20 md:py-32 ${className}`}>
      <div className="container-fluid">
      {/* ===== ТЕКСТ ===== */}
      {isMobile ? (
        <motion.div
          className="block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: threshold ?? 0.4,
            once: false,
          }}
        >
          {renderAnimatedText(
            mobileTextArray as string[],
            "clamp(1.3rem, 4.8vw, 2rem)"
          )}
        </motion.div>
      ) : (
        <motion.div
          className="main_text_section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: threshold ?? 0.5,
            once: false,
          }}
        >
          {renderAnimatedText(
            textArray as string[],
            "min(4.306vw, 82.6666666667px)"
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
      </div>
    </section>
  );
}
