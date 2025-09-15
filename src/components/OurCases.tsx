"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import OptionImage from "../assets/image/OurCases/Option 22.png";
import GuideImage from "../assets/image/OurCases/Option 28.png";
import ShapphireImage from "../assets/image/OurCases/Shapphire 5.png";
import EmmaLogo from "../assets/image/OurCases/logo/emma.svg";
import NestpressoLogo from "../assets/image/OurCases/logo/nestpresso.svg";
import SplitText from "./SplitText";
import VideoPlayer from "./VideoPlayer";

interface OurCasesItem {
  src: StaticImageData;
  alt: string;
  title: string;
  videoSrc?: string;
  videoTitle?: string;
  fallbackImage?: StaticImageData;
  logo?: React.ReactNode;
  link?: string;
}

const cases: OurCasesItem[] = [
  {
    src: OptionImage,
    alt: "Emma usability audit case study",
    title:
      "+47% Engagement Lift in 1 Month After a 5-Minute Boostra Usability & Accessibility Audit of Emma",
    videoSrc: "/video/reel-short-mobile.mp4",
    videoTitle: "Emma usability audit case study",
    logo: <EmmaLogo className="not-md:scale-[0.8]!" />,
    link: "/emma",
  },
  {
    src: ShapphireImage,
    alt: "Sapphire analysis case study",
    title:
      "+38% Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis of Sapphire",
    videoSrc: "/video/reel-short-mobile.mp4",
    videoTitle: "Sapphire analysis case study", 
    logo: <NestpressoLogo className="not-md:scale-[0.8]!" />,
    link: "/cases",
  },
  {
    src: GuideImage,
    alt: "Forbes Travel Guide analysis case study",
    title:
      "+54% More Hotel Bookings in Just 1 Month After a 5-Minute Boostra Analysis of ForbesTravelGuide.com",
    videoSrc: "/video/reel-short-mobile.mp4",
    videoTitle: "Forbes Travel Guide analysis case study",
    logo: <NestpressoLogo className="not-md:scale-[0.8]!" />,
    link: "/nespresso",
  },
];

export default function OurCases() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [captionOffset, setCaptionOffset] = useState(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Обчислюємо зміщення підпису на основі позиції миші
    if (isHovering && !isMobile && hoveredIndex !== null) {
      // Знаходимо поточний елемент для обчислення відносної позиції
      const imageElements = document.querySelectorAll('img[alt]');
      const currentImage = imageElements[hoveredIndex] as HTMLElement;
      
      if (currentImage) {
        const imageRect = currentImage.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const normalizedX = (e.clientX - imageCenterX) / (imageRect.width / 2); // Нормалізована позиція відносно центру зображення
        
        // Обчислюємо максимальне зміщення на основі ширини блоку відео (200px)
        const videoBlockWidth = 200;
        const maxOffset = Math.min(20, (videoBlockWidth - 80) / 2); // Обмежуємо зміщення, щоб текст не виходив за межі блоку
        
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
  }, [isHovering, isMobile, hoveredIndex, windowSize.width]);

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

  const cursorStyles = useMemo(() => {
    if (!isHovering || isMobile || hoveredIndex === null) return null;
    
    const cursorWidth = 200;
    const cursorHeight = 264;
    
    // Знаходимо елемент зображення для обмеження курсора
    const imageElements = document.querySelectorAll('img[alt]');
    const currentImage = imageElements[hoveredIndex] as HTMLElement;
    
    if (!currentImage) {
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
    
    const imageRect = currentImage.getBoundingClientRect();
    const padding = 40; // Відступ від країв зображення
    
    // Обчислюємо межі зображення з відступом (відносно viewport)
    const imageLeft = imageRect.left + padding;
    const imageTop = Math.max(imageRect.top + padding, 0); // Не менше 0
    const imageRight = imageRect.right - padding - cursorWidth;
    const imageBottom = imageRect.bottom - padding - 330;
    
    // Логування для дебагу
    // console.log('Image rect:', imageRect);
    // console.log('Scroll Y:', scrollY);
    // console.log('Absolute image coords:', { top: absoluteImageTop, bottom: absoluteImageBottom });
    // console.log('Cursor dimensions:', { width: cursorWidth, height: cursorHeight });
    // console.log('Computed boundaries:', { imageLeft, imageTop, imageRight, imageBottom });
    // console.log('Mouse position:', mousePosition);
    
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
  }, [isHovering, isMobile, hoveredIndex, mousePosition.x, mousePosition.y, windowSize.width, windowSize.height]);

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

  const handleVideoError = useCallback((index: number) => {
    setVideoError(index);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setVideoError(null);
      // Затримка перед показом відео
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 300);
      
      return () => {
        clearTimeout(timer);
        setShowVideo(false);
      };
    } else {
      setShowVideo(false);
      setCaptionOffset(0); // Скидаємо зміщення підпису
    }
  }, [hoveredIndex]);

  return (
    <div id="work" className="flex flex-col gap-8 my-[96px] lg:my-[160px] mx-4 lg:mx-10 relative">
      {isHovering && !isMobile && hoveredIndex !== null && cases[hoveredIndex]?.videoSrc && cursorStyles && isInitialized && showVideo && (
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
            {videoError === hoveredIndex ? (
              <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500 hoves-p1-reg text-xs">Video unavailable</p>
                  <Image
                    src={cases[hoveredIndex].src}
                    alt={cases[hoveredIndex].alt}
                    width={200}
                    height={150}
                    className="w-full h-auto object-cover mt-2 rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-[8px] overflow-hidden max-h-[300px]">
                <VideoPlayer
                  src={cases[hoveredIndex].videoSrc!}
                  className="w-full object-cover"
                  onError={() => handleVideoError(hoveredIndex)}
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
                 {cases[hoveredIndex].videoTitle}
               </motion.p>
             </div>
          </div>
        </div>
      )}

      <div className="hoves-p1-reg text-text-700">
        <SplitText
          text="Our Cases"
          className="hoves-p1-reg text-text-700"
          splitType="lines"
          delay={100}
          duration={0.5}
          ease="power3.out"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="left"
        />
      </div>
      
      <div 
        className="flex gap-2 lg:gap-8 overflow-x-auto lg:overflow-x-visible"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}
      >
        {cases.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[21px] flex-shrink-0 w-full h-full not-lg:max-w-[300px] not-lg:max-h-[553px] lg:flex-1 lg:max-w-none lg:aspect-[456/677]"
          >
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => {
                if (!isMobile) {
                  setHoveredIndex(index);
                  setIsHovering(true);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setHoveredIndex(null);
                  setIsHovering(false);
                }
              }}
            >
              <Link href={item.link || "#"}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className={`w-full rounded-md image-hover-darken ${
                    isHovering && hoveredIndex === index ? "brightness-50" : "brightness-100"
                  }`}
                />
                
                {item.logo && (
                  <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-[21px] lg:mb-[48px] transition-opacity duration-300 ${
                    isHovering && hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}>
                    {item.logo}
                  </div>
                )}
              </Link>
            </div>
            <p className={`text-text-700 hoves-p1-reg transition-all duration-300 ${
              isHovering && hoveredIndex === index ? "underline cursor-pointer" : ""
            }`}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
