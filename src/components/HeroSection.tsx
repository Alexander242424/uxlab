"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/SplitText";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Паралакс ефект для текстового блоку (повільний рух вниз)
  const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col relative min-h-[calc(100vh-72px-170px)] md:min-h-[calc(100vh-72px-80px)]"
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
      <motion.div
        className="absolute top-0 right-0 flex items-end w-full mb-[160px] mt-0 px-4 lg:px-0"
        style={{ y: textBlockY }}
      >
        <div className="w-full flex px-4 sm:px-6 lg:px-10">
          {/* Ліва частина - пуста, займає половину екрану */}
          <div className="hidden lg:block md:w-1/2"></div>
          
          {/* Права частина - містить текстовий блок */}
          <div className="lg:w-1/2 w-full flex justify-start">
            <div className="flex flex-col max-w-[456px] hoves-p1-reg">
              <p className="text-text-700 lg:text-right">We unite User Experience</p>
              <p className="text-text-700" style={{ letterSpacing: "-0.03em" }}>
                CRO and data-driven design to help digital products convert, scale,
                and win in competitive markets.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <SplitText
        text="We Make Interfaces"
        className="w-full text-center mt-auto text-nowrap"
        style={{
          fontSize: "clamp(1.5rem, 12vw, 11rem)",
          letterSpacing: "-0.04em",
        }}
        delay={50}
        duration={2}
        ease="power3.out"
        splitType="words, chars"
        from={{ opacity: 0.9, y: -200 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />
    </motion.div>
  );
}
