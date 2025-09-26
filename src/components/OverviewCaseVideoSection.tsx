"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import {StaticImageData } from "next/image";
import Image from "next/image";

export default function OverviewCaseVideoSection({
  className,
  src,
  imageSrc,
  imageAlt,
  isAnimated = true,
}: {
  className?: string;
  src?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  isAnimated?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    isAnimated ? (
    <motion.div
      ref={containerRef}
      className={cn(
        "w-full px-4 pt-4 pb-4 sm:px-10 sm:pt-10 sm:pb-10",
        className
      )}
      style={{ clipPath }}
    >
      {src ? (
        <VideoPlayer src={src} />
      ) : (
        <Image src={imageSrc || ""} alt={imageAlt || ""} className="w-full h-full object-cover" />
      )}
    </motion.div>
    ) : (
      <div ref={containerRef} className={cn("w-full px-4 pt-4 pb-4 sm:px-10 sm:pt-10 sm:pb-10", className)}>
        {src ? (
          <VideoPlayer src={src} />
        ) : (
          <Image src={imageSrc || ""} alt={imageAlt || ""} className="w-full h-full object-cover" />
        )}
      </div>
    )
  );
}
