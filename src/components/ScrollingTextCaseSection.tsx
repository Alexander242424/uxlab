"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import VideoPlayer from "./VideoPlayer";

interface ScrollingTextCaseSectionProps {
  videoSrc: string;
  imageSrc: string;
  imageAlt: string;
  videoTitle: string;
  logo?: React.ReactNode;
  link?: string;
}

export default function ScrollingTextCaseSection({
  videoSrc,
  imageSrc,
  imageAlt,
  videoTitle,
  logo,
  link = "#",
}: ScrollingTextCaseSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [captionOffset, setCaptionOffset] = useState(0);
  const isMobileHook = useIsMobile();

  // Scrolling text animation (from ScrollingTextVideoSection)
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 2; // Змінюємо на негативне значення для руху справа наліво
      textElement.style.transform = `translateX(${position}px)`;

      // Скидаємо позицію коли текст повністю вийшов зліва
      if (position <= -textElement.offsetWidth / 2) {
        position = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Mouse move handler (from OurCases)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Обчислюємо зміщення підпису на основі позиції миші
    if (isHovering && !isMobile) {
      // Знаходимо поточний елемент для обчислення відносної позиції
      const imageElement = document.querySelector(`img[alt="${imageAlt}"]`) as HTMLElement;
      
      if (imageElement) {
        const imageRect = imageElement.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const normalizedX = (e.clientX - imageCenterX) / (imageRect.width / 2);
        
        // Обчислюємо максимальне зміщення на основі ширини блоку відео (200px)
        const videoBlockWidth = 200;
        const maxOffset = Math.min(20, (videoBlockWidth - 80) / 2);
        
        const offset = normalizedX * maxOffset;
        setCaptionOffset(offset);
      } else {
        // Fallback до центру екрану
        const centerX = windowSize.width / 2;
        const normalizedX = (e.clientX - centerX) / centerX;
        const offset = normalizedX * 20;
        setCaptionOffset(offset);
      }
    }
  }, [isHovering, isMobile, windowSize.width, imageAlt]);

  // Initialize mobile detection and mouse tracking
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    if (!isInitialized) {
      setMousePosition({ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      });
      setIsInitialized(true);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, isInitialized]);

  // Cursor styles calculation (from OurCases)
  const cursorStyles = React.useMemo(() => {
    if (!isHovering || isMobile || !isInitialized) return null;
    
    const cursorWidth = 200;
    const cursorHeight = 264;
    
    // Знаходимо елемент зображення для обмеження курсора
    const imageElement = document.querySelector(`img[alt="${imageAlt}"]`) as HTMLElement;
    
    if (!imageElement) {
      // Fallback до вікна браузера якщо зображення не знайдено
      let left = mousePosition.x - cursorWidth / 2;
      let top = mousePosition.y - cursorHeight / 2;
      
      if (left < 0) left = 0;
      if (left + cursorWidth > windowSize.width) left = windowSize.width - cursorWidth;
      if (top < 0) top = 0;
      if (top + cursorHeight > windowSize.height) top = windowSize.height - cursorHeight;
      
      return {
        left,
        top,
        width: `${cursorWidth}px`,
        height: `${cursorHeight}px`,
      };
    }
    
    const imageRect = imageElement.getBoundingClientRect();
    const padding = 40; // Відступ від країв зображення
    
    // Обчислюємо межі зображення з відступом (відносно viewport)
    const imageLeft = imageRect.left + padding;
    const imageTop = Math.max(imageRect.top + padding, 0); // Не менше 0
    const imageRight = imageRect.right - padding - cursorWidth;
    const imageBottom = imageRect.bottom - padding - 270;
    
    // Обмежуємо позицію курсора межами зображення та вікна
    let left = mousePosition.x - cursorWidth / 2;
    let top = mousePosition.y - cursorHeight / 2;
    
    // Обмеження по горизонталі
    if (left < imageLeft) left = imageLeft;
    if (left > imageRight) left = imageRight;
    
    // Обмеження по вертикалі з урахуванням скролу
    if (top < imageTop) top = imageTop;
    if (top > imageBottom) top = imageBottom;
    
    // Додаткові обмеження для країв вікна
    if (left < 0) left = 0;
    if (left + cursorWidth > windowSize.width) left = windowSize.width - cursorWidth;
    if (top < 0) top = 0;
    if (top + cursorHeight > windowSize.height) top = windowSize.height - cursorHeight;
    
    return {
      left,
      top,
      width: `${cursorWidth}px`,
      height: `${cursorHeight}px`,
    };
  }, [isHovering, isMobile, mousePosition.x, mousePosition.y, windowSize.width, windowSize.height, isInitialized, imageAlt]);

  // GSAP animation for cursor (from OurCases)
  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current && cursorStyles && isInitialized) {
      gsap.to(cursorRef.current, {
        left: cursorStyles.left,
        top: cursorStyles.top,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }, [isHovering, isMobile, cursorStyles, isInitialized]);

  // Video error handler
  const handleVideoError = useCallback(() => {
    setVideoError(true);
  }, []);

  // Show video with delay
  useEffect(() => {
    if (isHovering && !isMobile) {
      setVideoError(false);
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 300);
      
      return () => {
        clearTimeout(timer);
        setShowVideo(false);
      };
    } else {
      setShowVideo(false);
      setCaptionOffset(0);
    }
  }, [isHovering, isMobile]);

  return (
    <div className="relative w-full h-[600px] md:h-[840px] overflow-hidden">
      {/* Scrolling text background (from ScrollingTextVideoSection) */}
      <div className="absolute inset-0 flex items-center">
        <div
          ref={textRef}
          className="tt-hoves font-light text-text-700 select-none whitespace-nowrap"
          style={{
            transform: "translateX(0px)",
            willChange: "transform",
            fontSize: "clamp(60px, 15vw, 175px)",
            lineHeight: "clamp(30px, 8vw, 80px)",
            letterSpacing: "-0.04em",
            verticalAlign: "middle",
          }}
        >
          {Array(20)
            .fill("View Next Case")
            .map((text, i) => (
              <span key={i} style={{ marginRight: "0.5em" }}>
                {text}
              </span>
            ))}
        </div>
      </div>

      {/* Centered case card (from OurCases) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-[21px] w-full max-w-[283px] md:max-w-[500px] h-full max-h-[360px] md:max-h-[720px]">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (!isMobile) {
                setIsHovering(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setIsHovering(false);
              }
            }}
          >
            <Link href={link}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className={`w-full rounded-md image-hover-darken ${
                  isHovering ? "brightness-50" : "brightness-100"
                }`}
              />
              
              {logo && (
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-[21px] sm:mb-[48px] transition-opacity duration-300 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}>
                  {logo}
                </div>
              )}
            </Link>
          </div>
          {/* <p className={`text-text-700 hoves-p1-reg transition-all duration-300 ${
            isHovering ? "opacity-75" : "opacity-100"
          }`}>
            {title}
          </p> */}
        </div>
      </div>

      {/* Custom cursor with video (from OurCases) */}
      {isHovering && !isMobile && cursorStyles && isInitialized && showVideo && (
        <div
          ref={cursorRef}
          className="video-cursor video-cursor-enter"
          style={{
            ...cursorStyles,
            opacity: 0,
            transform: 'scale(0.95) translateY(10px)'
          }}
        >
          <div className="bg-transparent">
            {videoError ? (
              <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500 hoves-p1-reg text-xs">Video unavailable</p>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={200}
                    height={150}
                    className="w-full h-auto object-cover mt-2 rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-[8px] overflow-hidden max-h-[300px]">
                <VideoPlayer
                  src={videoSrc}
                  className="w-full object-cover"
                  onError={handleVideoError}
                />
              </div>
            )}
            <div className="video-cursor-content">
              <motion.p 
                className="text-text-700 hoves-p3-reg text-center"
                animate={{ 
                  x: captionOffset,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut" 
                  } 
                }}
              >
                {videoTitle}
              </motion.p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
