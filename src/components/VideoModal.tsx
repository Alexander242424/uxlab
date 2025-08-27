"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";
import VideoPlayer from "./VideoPlayer";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
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
        onClose();
      }
    });
  }, [isAnimating, onClose]);

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
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleMouseMove, isInitialized, onClose, isOpen, handleClose]);

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
    if (!isOpen) {
      setIsHovering(false);
      setIsInitialized(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center px-10 py-5"
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
          <span className="text-white hoves-p2-reg header-text">Close Reel</span>
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
