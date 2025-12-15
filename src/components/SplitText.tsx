"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export interface SplitTextProps {
    text: string | string[];
    className?: string;
    style?: React.CSSProperties;
    delay?: number; // в МИЛЛИСЕКУНДАХ
    duration?: number;
    ease?: string;
    splitType?: "chars" | "words" | "lines" | "words, chars";
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
    duration = 0.7,
    ease = "power3.out",
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    threshold = 0.0,
    rootMargin = "200px",
    textAlign = "left",
    onLetterAnimationComplete,
    globalIndex = 0,
}) => {
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

    // 🔥 ВАЖНО: нормализуем text к массиву строк
    const lines = React.useMemo(
        () =>
            Array.isArray(text)
                ? text.filter(Boolean)
                : (text ?? "").split("\n").filter(Boolean),
        [text]
    );

    const containerVariants = React.useMemo(
        () => ({
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.1,
                },
            },
        }),
        []
    );

    const lineVariants = React.useMemo(
        () => ({
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0,
                },
            },
        }),
        []
    );

    const wordVariants = React.useMemo(
        () => ({
            hidden: {
                opacity: from.opacity ?? 0,
                y: from.y ?? 50,
            },
            visible: {
                opacity: to.opacity ?? 1,
                y: to.y ?? 0,
                transition: {
                    duration,
                    ease: framerEase,
                },
            },
        }),
        [from, to, duration, framerEase]
    );

    return (
        <motion.div
            ref={ref}
            className={`split-parent flex flex-col ${className}`}
            style={{
                textAlign,
                wordWrap: "break-word",
                ...style,
            }}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
                delay: delay / 1000 + globalIndex * 0.3,
            }}
            onAnimationComplete={() => {
                onLetterAnimationComplete?.();
            }}
        >
            {lines.map((line, lineIndex) => (
                <motion.p
                    key={`line-${lineIndex}`}
                    variants={lineVariants}
                    className="inline-block t-p1"
                    style={{
                        textAlign,
                        overflow: "hidden",
                    }}
                >
                    {line
                        .split(" ")
                        .filter(Boolean)
                        .map((word, wordIndex) => (
                            <motion.span
                                key={`w-${lineIndex}-${wordIndex}-${word}`}
                                variants={wordVariants}
                                className={`${className} leading-none`}
                                style={{
                                    display: "inline-block",
                                    overflow: "hidden",
                                    textAlign,
                                }}
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                </motion.p>
            ))}
        </motion.div>
    );
};

export default SplitText;
