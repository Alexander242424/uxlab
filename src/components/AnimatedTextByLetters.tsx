"use client";

import React from "react";
import { motion } from "motion/react";

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
  delayStep = 0.06, 
  duration = 1,
}: AnimatedTextByLettersProps) {
  const letters = React.useMemo(() => Array.from(text), [text]);

  
  const containerVariants = React.useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: delayStep,
        },
      },
    }),
    [delayStep]
  );

  
  const letterVariants = React.useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: "120%",      
        rotateX: -90,   
      },
      visible: {
        opacity: 1,
        y: "0%",
        rotateX: 0,
        transition: {
          duration,
          ease: [0.16, 1, 0.3, 1], 
        },
      },
    }),
    [duration]
  );

  return (
    <motion.div
      className={className}
      style={{
        display: "block",
        overflow: "hidden",
        textAlign: "center",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.4, 
        once: true, 
      }}
    >
      {letters.map((char, index) => {
        if (char === "\n") {
          return <br key={`br-${index}`} />;
        }

        return (
          <motion.span
            key={`${char}-${index}`}
            // variants={letterVariants}
            className={`${letterClassName ?? ""} animated_letter hoves-h2`}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
              transformOrigin: "50% 100%", 
              textAlign: "center",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
