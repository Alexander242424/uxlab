"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { gsap } from "gsap";
import VideoPlayer from "./VideoPlayer";
import OptionImage from "../assets/image/Option 22.png";
import ShapphireImage from "../assets/image/Shapphire 5.png";
import GuideImage from "../assets/image/Option 28.png";

interface OurCasesItem {
  src: StaticImageData;
  alt: string;
  title: string;
  videoSrc?: string;
  fallbackImage?: StaticImageData;
}

const cases: OurCasesItem[] = [
  {
    src: OptionImage,
    alt: "Emma usability audit case study",
    title:
      "+47% Engagement Lift in 1 Month After a 5-Minute Boostra Usability & Accessibility Audit of Emma",
    videoSrc: "/video/reel-short.mp4",
  },
  {
    src: ShapphireImage,
    alt: "Sapphire analysis case study",
    title:
      "+38% Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis of Sapphire",
    videoSrc: "/video/reel-short.mp4",
  },
  {
    src: GuideImage,
    alt: "Forbes Travel Guide analysis case study",
    title:
      "+54% More Hotel Bookings in Just 1 Month After a 5-Minute Boostra Analysis of ForbesTravelGuide.com",
    videoSrc: "/video/reel-short.mp4",
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

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

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
  }, [isHovering, isMobile, hoveredIndex, mousePosition.x, mousePosition.y, windowSize.width, windowSize.height]);

  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current && cursorStyles && isInitialized) {
      const cursorWidth = 200;
      const cursorHeight = 264;
      
      let targetLeft = mousePosition.x - cursorWidth / 2;
      let targetTop = mousePosition.y - cursorHeight / 2;
      
      if (targetLeft < 0) targetLeft = 0;
      if (targetLeft + cursorWidth > windowSize.width) targetLeft = windowSize.width - cursorWidth;
      if (targetTop < 0) targetTop = 0;
      if (targetTop + cursorHeight > windowSize.height) targetTop = windowSize.height - cursorHeight;
      
      gsap.to(cursorRef.current, {
        left: targetLeft,
        top: targetTop,
        duration: 0.6,
        ease: "power1.out"
      });
    }
  }, [isHovering, isMobile, mousePosition.x, mousePosition.y, windowSize.width, windowSize.height, cursorStyles, isInitialized]);

  const handleVideoError = useCallback((index: number) => {
    setVideoError(index);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setVideoError(null);
    }
  }, [hoveredIndex]);

  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current) {
      gsap.fromTo(cursorRef.current, 
        { 
          scale: 0.9, 
          opacity: 0 
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.5, 
          ease: "power2.out" 
        }
      );
    } else if (!isHovering && cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }, [isHovering, isMobile]);

  return (
    <div className="flex flex-col gap-8 my-[160px] mx-10 relative">
      {isHovering && !isMobile && hoveredIndex !== null && cases[hoveredIndex]?.videoSrc && cursorStyles && isInitialized && (
        <div
          ref={cursorRef}
          className="video-cursor video-cursor-enter"
          style={cursorStyles}
        >
          <div className="bg-transparent">
            {videoError === hoveredIndex ? (
              // <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center rounded-lg">
              //   <div className="text-center">
              //     <p className="text-gray-500 hoves-p1-reg text-xs">Video unavailable</p>
              //     <Image
              //       src={cases[hoveredIndex].src}
              //       alt={cases[hoveredIndex].alt}
              //       width={200}
              //       height={150}
              //       className="w-full h-auto object-cover mt-2 rounded-lg"
              //     />
              //   </div>
              // </div>
              <></>
            ) : (
              <div className="rounded-[8px] overflow-hidden">
                <VideoPlayer
                  src={cases[hoveredIndex].videoSrc!}
                  className="w-full object-cover"
                  onError={() => handleVideoError(hoveredIndex)}
                />
              </div>
            )}
            <div className="video-cursor-content">
              <p className="text-text-700 hoves-p3-reg text-right">
                {cases[hoveredIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}

      <motion.h2
        className="hoves-p1-reg text-text-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Cases
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
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
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className={`w-full h-auto rounded-md image-hover-darken ${
                  isHovering && hoveredIndex === index ? "brightness-50" : "brightness-100"
                }`}
              />
            </div>
            <p className="text-text-500 hoves-p1-reg">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
