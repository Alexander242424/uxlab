"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";
import VideoPlayer from "./VideoPlayer";
import { useVideoModal } from "@/context/VideoModalContext";

export default function VideoModal() {
  const { isModalOpen, videoSrc, closeModal } = useVideoModal();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleClose = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Анімація фону (швидша)
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.05,
      rotation: -20,
      duration: 0.6,
      ease: "power2.in",
    });
    
    // Анімація відео (повільніша)
    gsap.to(videoRef.current, {
      opacity: 0,
      scale: 0.05,
      rotation: -20,
      duration: 0.7,
      ease: "power2.in",
      onComplete: () => {
        setIsAnimating(false);
        closeModal();
      }
    });
  }, [isAnimating, closeModal]);

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

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleMouseMove, isInitialized, isModalOpen, handleClose]);

  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current) {
      const cursorWidth = 120;
      const cursorHeight = 40;
      
      let targetLeft = mousePosition.x + 5;
      let targetTop = mousePosition.y + 5;
      
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
  }, [isHovering, isMobile, mousePosition.x, mousePosition.y, windowSize.width, windowSize.height]);

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

  useEffect(() => {
    if (!isModalOpen) {
      setIsHovering(false);
      setIsInitialized(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setIsAnimating(true);
      
      // Анімація фону (швидша)
      gsap.fromTo(modalRef.current,
        {
          opacity: 0,
          scale: 0.05,
          rotation: -20,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
      
      // Анімація відео (повільніша)
      gsap.fromTo(videoRef.current,
        {
          opacity: 0,
          scale: 0.05,
          rotation: -20,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false)
        }
      );
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black z-[999999] flex items-center justify-center px-10 py-5"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.95)'
      }}
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
      {isHovering && !isMobile && (
        <div
          ref={cursorRef}
          className="showreel-cursor"
          style={{
            position: 'fixed',
            left: mousePosition.x + 5,
            top: mousePosition.y + 5,
            width: '120px',
            height: '40px',
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
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white hoves-p2-reg header-text">Close Reel</span>
          </div>
        </div>
      )}

      <div 
        ref={videoRef}
        className="w-full h-full"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClose();
        }}
      >
        <VideoPlayer className="max-w-[87dvw] mx-auto" controls={true} loop={false} muted={false} src={videoSrc} />
      </div>
    </div>
  );
}
