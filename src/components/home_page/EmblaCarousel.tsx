"use client";
import React, { useRef, useEffect, useState } from "react";

interface SlideItem {
  element: React.ReactNode;
}

interface EmblaCarouselProps {
  slides: SlideItem[];
  className?: string;
  slideSpacing?: number;

  speed?: number;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  slides,
  className = "",
  slideSpacing = 32,
  speed = 20,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [animationId, setAnimationId] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [initialPosition, setInitialPosition] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);


  const lastFrameTimeRef = useRef(0);
  const speedFactorRef = useRef(1);
  const targetSpeedFactorRef = useRef(1);


  const duplicatedSlides = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ];

  const animate = (currentTime: number = 0) => {
    if (!trackRef.current || isPaused || isDragging) {
      setAnimationId(null);
      return;
    }

    const track = trackRef.current;
    const slideWidth = track.children[0]?.clientWidth || 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;


    const lastTime = lastFrameTimeRef.current || currentTime;
    const deltaTime = currentTime - lastTime;
    lastFrameTimeRef.current = currentTime;


    const currentFactor = speedFactorRef.current;
    const targetFactor = targetSpeedFactorRef.current;
    const lerpAmount = 0.08;
    const nextFactor =
      currentFactor + (targetFactor - currentFactor) * lerpAmount;
    speedFactorRef.current = nextFactor;


    if (nextFactor < 0.001) {
      const id = requestAnimationFrame(animate);
      setAnimationId(id);
      return;
    }


    const currentTransform = track.style.transform;
    let currentX = 0;
    if (currentTransform) {
      const match = currentTransform.match(/-?\d+\.?\d*/);
      currentX = match ? parseFloat(match[0]) : initialPosition;
    } else {
      currentX = initialPosition;
    }


    const basePxPerSec = totalWidth / speed;
    // сколько пикселей проезжаем за этот кадр
    const stepSize =
      basePxPerSec * nextFactor * (deltaTime > 0 ? deltaTime / 1000 : 1 / 60);

    const newX = currentX - stepSize;


    if (Math.abs(newX) >= totalWidth) {
      const resetX = newX + totalWidth;
      track.style.transform = `translateX(${resetX}px)`;
      setInitialPosition(resetX);
    } else {
      track.style.transform = `translateX(${newX}px)`;
      setInitialPosition(newX);
    }

    const id = requestAnimationFrame(animate);
    setAnimationId(id);
  };


  useEffect(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }

    if (!isPaused && !isDragging) {
      const timeoutId = window.setTimeout(() => {
        lastFrameTimeRef.current = 0;
        const id = requestAnimationFrame(animate);
        setAnimationId(id);
      }, 16);

      return () => clearTimeout(timeoutId);
    }
  }, [isPaused, isDragging, speed]);


  useEffect(() => {
    if (!isInitialized && trackRef.current) {
      const slideWidth = trackRef.current.children[0]?.clientWidth || 0;
      const totalSlides = slides.length;
      const totalWidth = slideWidth * totalSlides;

      const startPosition = -totalWidth * 2;
      trackRef.current.style.transform = `translateX(${startPosition}px)`;
      setInitialPosition(startPosition);
      setIsInitialized(true);
    }
  }, [isInitialized, slides.length]);


  useEffect(() => {
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [animationId]);


  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);

    setStartX(e.pageX - trackRef.current.offsetLeft);
    const currentPos = parseFloat(
      trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"
    );
    setScrollLeft(currentPos);
    setInitialPosition(currentPos);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newTransform = scrollLeft + walk;

    const slideWidth = trackRef.current.children[0]?.clientWidth || 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;

    let finalTransform = newTransform;

    if (newTransform > 0) {
      finalTransform = newTransform - totalWidth;
    } else if (newTransform < -totalWidth * 4) {
      finalTransform = newTransform + totalWidth;
    }

    trackRef.current.style.transform = `translateX(${finalTransform}px)`;
  };

  const handleMouseUp = () => {
    if (trackRef.current) {
      const currentPos = parseFloat(
        trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"
      );
      setInitialPosition(currentPos);
    }
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseLeaveTrack = () => {
    setIsDragging(false);
    setIsPaused(false);
  };


  const handleMouseEnterContainer = () => {
    setIsHovered(true);

    targetSpeedFactorRef.current = 0;
  };

  const handleMouseLeaveContainer = () => {
    setIsHovered(false);

    targetSpeedFactorRef.current = 1;
    lastFrameTimeRef.current = 0;

    if (trackRef.current) {
      const currentPos = parseFloat(
        trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"
      );
      setInitialPosition(currentPos);
    }
  };


  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);

    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    const currentPos = parseFloat(
      trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"
    );
    setScrollLeft(currentPos);
    setInitialPosition(currentPos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();

    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newTransform = scrollLeft + walk;

    const slideWidth = trackRef.current.children[0]?.clientWidth || 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;

    let finalTransform = newTransform;

    if (newTransform > 0) {
      finalTransform = newTransform - totalWidth;
    } else if (newTransform < -totalWidth * 4) {
      finalTransform = newTransform + totalWidth;
    }

    trackRef.current.style.transform = `translateX(${finalTransform}px)`;
  };

  const handleTouchEnd = () => {
    if (trackRef.current) {
      const currentPos = parseFloat(
        trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"
      );
      setInitialPosition(currentPos);
    }
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div
      className={`infinite-carousel ${className}`}
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      <div
        ref={trackRef}
        className="infinite-carousel__track"
        style={{ "--slide-spacing": `${slideSpacing}px` } as React.CSSProperties}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeaveTrack}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="infinite-carousel__slide"
            style={{ paddingRight: `${slideSpacing}px` }}
          >
            <div className="w-full">{slide.element}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
