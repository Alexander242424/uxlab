"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

type AnimatedTextByLettersProps = {
  text: string;
  className?: string;
  letterClassName?: string;
  delayStep?: number;
  duration?: number;
};

export default function AnimatedTextByLetters({
  text,
  className,
  letterClassName,
  delayStep = 0.045,
  duration = 0.5,
}: AnimatedTextByLettersProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const letters = React.useMemo(() => Array.from(text), [text]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "block",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {letters.map((char, index) => {
        
        if (char === "\n") {
          return <br key={`br-${index}`} />;
        }

        return (
          <motion.span
            key={`${char}-${index}`}
            className={`${letterClassName ?? ""} animated_letter hoves-h2`}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
              transformOrigin: "50% 100%",
              textAlign: "center",
            }}
            initial={{
              opacity: 0,
              y: 200,
              rotateX: -100,
            }}
            animate={
              inView
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: 200, rotateX: -100 }
            }
            transition={{
              duration,
              ease: [0.16, 1, 0.3, 1],
              delay: index * delayStep,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </div>
  );
}
