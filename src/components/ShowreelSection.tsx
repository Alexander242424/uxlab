"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";
import VideoPlayer from "./VideoPlayer";
import { useVideoModal } from "@/context/VideoModalContext";
import ScrollAnimatedSection from "./ScrollAnimatedSection";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ShowreelSectionProps {
  mobileSrc: string;
  desktopSrc: string;
}

export default function ShowreelSection({ mobileSrc, desktopSrc }: ShowreelSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { openModal } = useVideoModal();
  const isMobile = useIsMobile();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const checkWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    window.addEventListener("mousemove", handleMouseMove);

    if (!isInitialized) {
      setMousePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setIsInitialized(true);
    }

    return () => {
      window.removeEventListener("resize", checkWindowSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, isInitialized]);

  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current) {
      const cursorWidth = 120;
      const cursorHeight = 40;

      let targetLeft = mousePosition.x - 5;
      let targetTop = mousePosition.y - 5;

      if (targetLeft < 0) targetLeft = 0;
      if (targetLeft + cursorWidth > windowSize.width)
        targetLeft = windowSize.width - cursorWidth;
      if (targetTop < 0) targetTop = 0;
      if (targetTop + cursorHeight > windowSize.height)
        targetTop = windowSize.height - cursorHeight;

      gsap.to(cursorRef.current, {
        left: targetLeft,
        top: targetTop,
        duration: 0.6,
        ease: "power1.out",
      });
    }
  }, [
    isHovering,
    isMobile,
    mousePosition.x,
    mousePosition.y,
    windowSize.width,
    windowSize.height,
  ]);

  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current) {
      gsap.fromTo(
        cursorRef.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    } else if (!isHovering && cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isHovering, isMobile]);

  return (
    <div
      className="relative w-full"
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
      onMouseMove={(e) => {
        if (!isMobile && isHovering) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
      }}
      onClick={() => openModal("/video/reel-short.mp4")}
    >
      {isHovering && !isMobile && (
        <div
          ref={cursorRef}
          className="showreel-cursor"
          style={{
            position: "fixed",
            left: mousePosition.x + 5,
            top: mousePosition.y + 5,
            width: "120px",
            height: "40px",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M8 5L19 12L8 19V5Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-white hoves-p2-reg header-text">Play Reel</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="hoves-h3-med text-text-700 relative group select-none">
          Showreel
          <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
        </h2>
      </div>

      <div className="relative cursor-pointer max-h-[600px] md:max-h-[800px] overflow-hidden">
        <ScrollAnimatedSection>
          <VideoPlayer src={isMobile ? mobileSrc : desktopSrc} />
        </ScrollAnimatedSection>
      </div>
    </div>
  );
}
