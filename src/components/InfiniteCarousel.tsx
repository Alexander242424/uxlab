"use client";
import React, { useRef, useEffect, useState } from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const [animationId, setAnimationId] = useState<number | null>(null);
  const [initialPosition, setInitialPosition] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [lastFrameTime, setLastFrameTime] = useState(0);

  // Створюємо багато дублікатів для справжньої безкінечності
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides];

  // Функція для плавного руху
  const animate = (currentTime: number = 0) => {
    if (!trackRef.current) {
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

    // Плавний безкінечний цикл - коли досягаємо кінця одного набору слайдів, 
    // плавно переміщуємося на початок наступного набору
    if (Math.abs(newX) >= totalWidth) {
      // Плавно переміщуємося на початок наступного набору слайдів
      const resetX = newX + totalWidth;
      track.style.transform = `translateX(${resetX}px)`;
      setInitialPosition(resetX);
    } else {
      track.style.transform = `translateX(${newX}px)`;
      setInitialPosition(newX);
    }

    setLastFrameTime(currentTime);

    // Продовжуємо анімацію
    const id = requestAnimationFrame(animate);
    setAnimationId(id);
  };

  // Запускаємо анімацію
  useEffect(() => {
    // Скасовуємо попередню анімацію
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }

    // Запускаємо нову анімацію
    const timeoutId = setTimeout(() => {
      const id = requestAnimationFrame(animate);
      setAnimationId(id);
    }, 16); // ~1 frame delay

    return () => clearTimeout(timeoutId);
  }, [speed]);

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

  return (
    <div className={`infinite-carousel ${className}`}>
      <div 
        ref={trackRef}
        className="infinite-carousel__track flex"
        style={{
          '--slide-spacing': `${slideSpacing}px`,
          transition: 'none', // Відключаємо CSS transitions для плавної JS анімації
          paddingLeft: `${slideSpacing}px`, // Додаємо padding зліва щоб логотипи не обрізалися
          paddingRight: `${slideSpacing}px`, // Додаємо padding справа для симетричності
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
              width: 'auto', // Автоматична ширина
              minWidth: 'fit-content', // Мінімальна ширина під контент
              maxWidth: 'none' // Без обмежень максимальної ширини
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
