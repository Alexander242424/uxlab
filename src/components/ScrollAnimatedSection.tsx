"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  offset?: ("start end" | "end start")[];
  transformRange?: [number, number];
  transformValues?: [number, number];
}

export default function ScrollAnimatedSection({
  children,
  className = "",
  offset = ["start end", "end start"],
  transformRange = [0, 1],
  transformValues = [-200, 200],
}: ScrollAnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const animatedY = useTransform(scrollYProgress, transformRange, transformValues);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ y: animatedY }}
    >
      {children}
    </motion.div>
  );
}
