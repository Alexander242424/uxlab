"use client";
import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ScrollingTextVideoSectionProps {
  videoSrc: string;
  poster: string;
}

export default function ScrollingTextVideoSection({
  videoSrc,
  poster,
}: ScrollingTextVideoSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

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

  // Додаємо useEffect для керування відео
  useEffect(() => {
    if (videoRef.current) {
      if (isHovering && !isMobile) {
        // На десктопі - запускаємо при наведенні
        videoRef.current.play().catch(console.error);
      } else if (isMobile) {
        // На мобільних - завжди запускаємо
        videoRef.current.play().catch(console.error);
      } else {
        // На десктопі - зупиняємо та показуємо poster
        videoRef.current.pause();
        videoRef.current.load();
      }
    }
  }, [isHovering, isMobile]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="relative w-full h-[390px] sm:h-[840px] overflow-hidden">
      {/* Scrolling text background */}
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

      {/* Centered video block */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[280px] h-[360px] xs:w-[400px] xs:h-[500px] sm:w-[560px] sm:h-[720px] rounded-xl overflow-hidden relative"
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
          onMouseMove={handleMouseMove}
          style={{ cursor: isHovering && !isMobile ? "none" : "default" }}
        >
          {/* Video with custom autoplay logic */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
          />

          {/* Custom cursor overlay - positioned relative to viewport */}
          {isHovering && !isMobile && (
            <div
              className="fixed pointer-events-none z-50"
              style={{
                left: mousePosition.x - 20,
                top: mousePosition.y - 20,
                transform: "translate3d(0, 0, 0)",
              }}
            >
              <div className="hover-cursor hoves-p3-reg backdrop-blur-md bg-white/20 rounded-full px-4 py-2 border !border-text-500 !text-white">
                Explore
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
