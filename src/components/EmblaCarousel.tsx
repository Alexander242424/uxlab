"use client";
import React, { useRef, useEffect, useState } from "react";

interface SlideItem {
  element: React.ReactNode;
}

interface EmblaCarouselProps {
  slides: SlideItem[];
  className?: string;
  slideSpacing?: number;
  speed?: number; // швидкість руху в секундах для одного циклу
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
  const [lastFrameTime, setLastFrameTime] = useState(0);

  // Створюємо багато дублікатів для справжньої безкінечності
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides];

  // Функція для плавного руху
  const animate = (currentTime: number = 0) => {
    // Перевіряємо всі умови перед продовженням
    if (!trackRef.current || isPaused || isDragging || isHovered) {
      setAnimationId(null);
      return;
    }

    const track = trackRef.current;
    const slideWidth = track.children[0]?.clientWidth || 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;

    // Отримуємо поточну позицію
    const currentTransform = track.style.transform;
    let currentX = 0;
    
    if (currentTransform) {
      const match = currentTransform.match(/-?\d+\.?\d*/);
      currentX = match ? parseFloat(match[0]) : initialPosition;
    } else {
      currentX = initialPosition;
    }

    // Розраховуємо delta time для стабільної швидкості
    const deltaTime = currentTime - lastFrameTime;
    const stepSize = (totalWidth / speed) * (deltaTime / 1000); // pixels per second
    
    // Якщо це перший кадр або delta time занадто великий, використовуємо базовий розрахунок
    const finalStepSize = lastFrameTime === 0 || deltaTime > 100 ? 
      totalWidth / (speed * 60) : stepSize;
    
    const newX = currentX - finalStepSize;

    // Безкінечний цикл - коли досягаємо кінця одного набору слайдів, 
    // переміщуємося на початок наступного набору
    if (Math.abs(newX) >= totalWidth) {
      // Переміщуємося на початок наступного набору слайдів
      const resetX = newX + totalWidth;
      track.style.transform = `translateX(${resetX}px)`;
      setInitialPosition(resetX);
    } else {
      track.style.transform = `translateX(${newX}px)`;
      setInitialPosition(newX);
    }

    setLastFrameTime(currentTime);

    // Продовжуємо анімацію тільки якщо не паузимо
    if (!isPaused && !isDragging && !isHovered) {
      const id = requestAnimationFrame(animate);
      setAnimationId(id);
    } else {
      setAnimationId(null);
    }
  };

  // Запускаємо анімацію
  useEffect(() => {
    // Скасовуємо попередню анімацію
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }

    // Запускаємо нову анімацію тільки якщо не паузимо
    if (!isPaused && !isDragging && !isHovered) {
      // Невелика затримка для стабілізації
      const timeoutId = setTimeout(() => {
        const id = requestAnimationFrame(animate);
        setAnimationId(id);
      }, 16); // ~1 frame delay

      return () => clearTimeout(timeoutId);
    }
  }, [isPaused, isDragging, isHovered, speed]);

  // Ініціалізація початкової позиції
  useEffect(() => {
    if (!isInitialized && trackRef.current) {
      const slideWidth = trackRef.current.children[0]?.clientWidth || 0;
      const totalSlides = slides.length;
      const totalWidth = slideWidth * totalSlides;
      
      // Починаємо з середини (3-й набір слайдів)
      const startPosition = -totalWidth * 2;
      trackRef.current.style.transform = `translateX(${startPosition}px)`;
      setInitialPosition(startPosition);
      setIsInitialized(true);
    }
  }, [isInitialized, slides.length]);

  // Cleanup при unmount
  useEffect(() => {
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Обробники для ручного прокручування
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - trackRef.current!.offsetLeft);
    const currentPos = parseFloat(trackRef.current!.style.transform.match(/-?\d+\.?\d*/)?.[0] || '0');
    setScrollLeft(currentPos);
    setInitialPosition(currentPos);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newTransform = scrollLeft + walk;
    
    // Обробляємо безкінечність при ручному прокручуванні
    const slideWidth = trackRef.current.children[0]?.clientWidth || 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;
    
    let finalTransform = newTransform;
    
    // Якщо прокрутили занадто далеко вліво, переміщуємося на початок наступного набору
    if (newTransform > 0) {
      finalTransform = newTransform - totalWidth;
    }
    // Якщо прокрутили занадто далеко вправо, переміщуємося на кінець попереднього набору
    else if (newTransform < -totalWidth * 4) { // 4 набори слайдів
      finalTransform = newTransform + totalWidth;
    }
    
    trackRef.current.style.transform = `translateX(${finalTransform}px)`;
  };

  const handleMouseUp = () => {
    if (trackRef.current) {
      const currentPos = parseFloat(trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || '0');
      setInitialPosition(currentPos);
    }
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    // Скасовуємо поточну анімацію
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
    setIsHovered(true);
    setIsPaused(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsHovered(false);
    setIsPaused(false);
    // Скидаємо lastFrameTime для правильного розрахунку delta time
    setLastFrameTime(0);
    // Оновлюємо початкову позицію при залишенні курсора
    if (trackRef.current) {
      const currentPos = parseFloat(trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || '0');
      setInitialPosition(currentPos);
    }
  };

  // Touch handlers для мобільних пристроїв
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current!.offsetLeft);
    const currentPos = parseFloat(trackRef.current!.style.transform.match(/-?\d+\.?\d*/)?.[0] || '0');
    setScrollLeft(currentPos);
    setInitialPosition(currentPos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newTransform = scrollLeft + walk;
    
    // Обробляємо безкінечність при touch прокручуванні
    const slideWidth = trackRef.current.children[0]?.clientWidth || 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;
    
    let finalTransform = newTransform;
    
    // Якщо прокрутили занадто далеко вліво, переміщуємося на початок наступного набору
    if (newTransform > 0) {
      finalTransform = newTransform - totalWidth;
    }
    // Якщо прокрутили занадто далеко вправо, переміщуємося на кінець попереднього набору
    else if (newTransform < -totalWidth * 4) { // 4 набори слайдів
      finalTransform = newTransform + totalWidth;
    }
    
    trackRef.current.style.transform = `translateX(${finalTransform}px)`;
  };

  const handleTouchEnd = () => {
    if (trackRef.current) {
      const currentPos = parseFloat(trackRef.current.style.transform.match(/-?\d+\.?\d*/)?.[0] || '0');
      setInitialPosition(currentPos);
    }
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div 
      className={`infinite-carousel ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveContainer}
    >
      <div 
        ref={trackRef}
        className="infinite-carousel__track"
        style={{
          '--slide-spacing': `${slideSpacing}px`,
        } as React.CSSProperties}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
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
