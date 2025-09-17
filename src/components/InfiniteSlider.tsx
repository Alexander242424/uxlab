"use client";
import { motion } from "motion/react";
import React from "react";

interface SlideItem {
  icon: React.ReactNode;
  label?: string;
}

interface InfiniteSliderProps {
  slides: SlideItem[];
  duration?: number;
  className?: string;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  slides,
  duration = 15,
  className = "",
}) => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[150px] md:min-w-[100px]"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-full h-full flex items-center justify-center">
                {slide.icon}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
