"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface SlideItem {
  icon: React.ReactNode;
  label?: string;
}

interface EmblaCarouselProps {
  slides: SlideItem[];
  className?: string;
  slideSpacing?: number;
  autoplaySpeed: number;
  animationDuration: number;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  slides,
  className = "",
  slideSpacing = 32,
  autoplaySpeed,
  animationDuration,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: animationDuration,
    slidesToScroll: 1,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    let autoplayTimer: NodeJS.Timeout;

    const scroll = () => {
      emblaApi.scrollNext();
      autoplayTimer = setTimeout(scroll, autoplaySpeed);
    };

    scroll();

    return () => {
      if (autoplayTimer) {
        clearTimeout(autoplayTimer);
      }
    };
  }, [emblaApi, autoplaySpeed]);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla API is ready");
      const cleanup = autoplay();
      return cleanup;
    }
  }, [emblaApi, autoplay]);

  return (
    <div className={`embla ${className}`} ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="embla__slide"
            style={{ paddingRight: `${slideSpacing}px` }}
          >
            <div className="w-full">{slide.icon}</div>
          </div>
        ))}

        {slides.map((slide, index) => (
          <div
            key={`duplicate-${index}`}
            className="embla__slide"
            style={{ paddingRight: `${slideSpacing}px` }}
          >
            <div className="w-full">{slide.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
