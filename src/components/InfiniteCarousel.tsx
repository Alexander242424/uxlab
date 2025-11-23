"use client";
import React from "react";

interface SlideItem {
  element: React.ReactNode;
}

interface InfiniteCarouselProps {
  slides: SlideItem[];
  className?: string;
  slideSpacing?: number;
  speed?: number; // швидкість руху в секундах для одного циклу
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  slides,
  className = "",
  slideSpacing = 16,
  speed = 20,
}) => {
  // Створюємо багато дублікатів для справжньої безкінечності
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides];

  return (
    <div className={`infinite-carousel ${className}`}>
      <div 
        className="infinite-carousel__track flex"
        style={{
          '--slide-spacing': `${slideSpacing}px`,
          paddingLeft: `${slideSpacing}px`,
          paddingRight: `${slideSpacing}px`,
          animation: `infiniteScroll ${speed}s linear infinite`,
        } as React.CSSProperties}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="infinite-carousel__slide flex-shrink-0"
            style={{ 
              paddingRight: `${slideSpacing}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
              minWidth: 'fit-content',
              maxWidth: 'none'
            }}
          >
            <div className="w-full">{slide.element}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
