"use client";
import React from "react";
import InfiniteCarousel from "../InfiniteCarousel";

interface SlideItem {
  icon: React.ReactNode;
  label?: string;
}

interface InfiniteSliderProps {
  slides: SlideItem[];
  duration?: number;
  className?: string;
  slideSpacing?: number;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  slides,
  duration = 15,
  className = "",
  slideSpacing = 80,
}) => {
  // Конвертуємо slides в формат, який очікує InfiniteCarousel
  const carouselSlides = slides.map((slide, index) => ({
    element: (
      <div
        key={index}
        className="flex-shrink-0 flex items-center justify-center"
        style={{ 
          width: 'auto',
          minWidth: 'fit-content',
          maxWidth: 'none',
          height: '100%'
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          {slide.icon}
        </div>
      </div>
    ),
  }));

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <InfiniteCarousel
        slides={carouselSlides}
        slideSpacing={slideSpacing}
        speed={duration}
        className="cursor-none pointer-events-none"
      />
    </div>
  );
};

export default InfiniteSlider;
