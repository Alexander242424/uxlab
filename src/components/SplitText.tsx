"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // в МИЛЛИСЕКУНДАХ как у тебя
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars"; // оставляем для совместимости, но не используем
  from?: { opacity?: number; y?: number };
  to?: { opacity?: number; y?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
  globalIndex?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  style = {},
  delay = 0,
  duration = 0.6,
  ease = "easeOut",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  globalIndex = 0,
}) => {
  // useInView — просто следим, когда блок попадает в вьюпорт
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const convertEase = (gsapEase: string) => {
    switch (gsapEase) {
      case "power3.out":
      case "power2.out":
        return [0.25, 0.46, 0.45, 0.94] as const;
      case "power3.in":
      case "power2.in":
        return [0.55, 0.055, 0.675, 0.19] as const;
      case "power3.inOut":
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

  return (
    <motion.div
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
        ...style,
      }}
      initial={from}
      animate={inView ? to : from}
      transition={{
        duration,
        delay: (delay / 1000) + globalIndex * 0.3,
        ease: framerEase,
      }}
      onAnimationComplete={() => {
        onLetterAnimationComplete?.();
      }}
    >
      {text}
    </motion.div>
  );
};

export default SplitText;
