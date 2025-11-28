"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

type AnimatedTextByLettersProps = {
    text: string;
    className?: string;         // стили для всего текста
    letterClassName?: string;   // стили для каждой буквы
    delayStep?: number;         // шаг задержки между буквами
    duration?: number;          // длительность анимации одной буквы
};

export default function AnimatedTextByLetters({
    text,
    className,
    letterClassName,
    delayStep = 0.045, // как в твоих path'ах
    duration = .5,
}: AnimatedTextByLettersProps) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // Array.from, чтобы корректно работать с emoji/диакритикой
    const letters = React.useMemo(() => Array.from(text), [text]);

    return (
        <span
            ref={ref}
            className={className}
            style={{
                display: "inline-block",
                overflow: "hidden",
                textAlign: "center",
            }}
        >
            {letters.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className={`${letterClassName ?? ""} animated_letter`}
                    style={{
                        display: "inline-block",
                        whiteSpace: char === " " ? "pre" : "normal",
                        transformOrigin: "50% 100%",
                    }}
                    initial={{
                        opacity: 0,
                        y: 200,
                        rotateX: -90,
                    }}
                    animate={
                        inView
                            ? { opacity: 1, y: 0, rotateX: 0 }
                            : { opacity: 0, y: 200, rotateX: -90 }
                    }
                    transition={{
                        duration,
                        ease: "easeOut",
                        delay: index * delayStep,
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>

            ))}
        </span>
    );
}
