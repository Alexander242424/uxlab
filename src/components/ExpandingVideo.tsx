"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

interface ExpandingVideoProps {
  src: string;
  className?: string;
}

export default function ExpandingVideo({ src, className = "" }: ExpandingVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftShutterRef = useRef<HTMLDivElement>(null);
  const rightShutterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftShutterRef.current || !rightShutterRef.current) return;

    const container = containerRef.current;
    const leftShutter = leftShutterRef.current;
    const rightShutter = rightShutterRef.current;

    gsap.set(leftShutter, {
      x: "0%",
    });
    gsap.set(rightShutter, {
      x: "0%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 100%",
        end: "center center",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(leftShutter, {
            x: `-${progress * 100}%`,
            duration: 0.05,
            ease: "power3.out",
          });
          gsap.to(rightShutter, {
            x: `${progress * 100}%`,
            duration: 0.05,
            ease: "power3.out",
          });
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="w-full block rounded-[8px] overflow-hidden lg:hidden">
        <VideoPlayer src={src} />
      </div>
      <div
        ref={containerRef}
        className={`w-full relative overflow-hidden hidden lg:flex ${className}`}
      >
        <div className="w-full">
          <VideoPlayer src={src} />
        </div>

        <div
          ref={leftShutterRef}
          className="absolute top-0 left-0 w-1/4 h-full bg-bg-white z-10"
        />

        <div
          ref={rightShutterRef}
          className="absolute top-0 right-0 w-1/4 h-full bg-bg-white z-10"
        />
      </div>
    </>
  );
}
