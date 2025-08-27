"use client";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import { motion } from "motion/react";

interface TextSectionProps {
  firstText: string;
  secondText: string;
  showButton?: boolean;
  buttonText?: string;
  className?: string;
  textColor?: string;
}

export default function TextSection({
  firstText,
  secondText,
  showButton = false,
  buttonText = "Book a Call",
  className = "",
  textColor = "text-text-700",
}: TextSectionProps) {
  return (
    <motion.div 
      className={`flex flex-col w-full hoves-h1-med px-4 sm:px-6 lg:px-10 pt-12 pb-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.p 
        className={`${textColor} text-right`}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        {firstText}
      </motion.p>
      <motion.p 
        className={textColor}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        {secondText}
      </motion.p>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="flex justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            iconRight={<ArrowUpRightSVG className="!size-6" />}
            className="max-w-40 mt-10"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
