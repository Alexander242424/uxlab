"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
      <div className="flex items-end w-full my-[160px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col ml-auto max-w-[456px] mr-0 lg:mr-[284px] hoves-p1-reg">
          <p className="text-text-700 text-right">We unite User Experience</p>
          <p className="text-text-700" style={{ letterSpacing: "-0.03em" }}>
            CRO and data-driven design to help digital products convert, scale,
            and win in competitive markets.
          </p>
        </div>
      </div>
      <SplitText
        text="We Make Interfaces"
        className="w-full text-center"
        delay={60}
        duration={3}
        ease="power3.out"
        splitType="words, chars"
        from={{ opacity: 0.9, y: -200 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />
    </motion.div>
  );
}
