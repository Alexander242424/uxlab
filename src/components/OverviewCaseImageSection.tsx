"use client";

import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface OverviewCaseImageSectionProps {
  className?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  videoSrc: string;
  iSvideoPositionLeft?: boolean;
  imageClassName?: string;
  videoClassName?: string;
}

export default function OverviewCaseImageSection({
  className,
  imageSrc,
  imageAlt,
  videoSrc,
  iSvideoPositionLeft = false,
  imageClassName,
  videoClassName,
}: OverviewCaseImageSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10 flex flex-col lg:flex-row gap-4 lg:gap-8",
        iSvideoPositionLeft && "lg:flex-row-reverse",
        className
      )}
    >
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={
          inView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
        className={cn(
          "overflow-hidden",
          !iSvideoPositionLeft
            ? "lg:min-w-[calc(50% - 32px)]"
            : "lg:min-w-1/2 lg:max-w-1/2 lg:pl-[1px]"
        )}
      >
        <Image
          className={cn("w-full h-full object-cover", imageClassName)}
          src={imageSrc}
          alt={imageAlt}
        />
      </motion.div>
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={
          inView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
        className={cn(
          "overflow-hidden",
          !iSvideoPositionLeft
            ? "lg:min-w-1/2 lg:max-w-1/2 lg:pl-[1px]"
            : "lg:min-w-[calc(50% - 32px)]"
        )}
      >
        <VideoPlayer
          className={cn("w-full h-full object-cover", videoClassName)}
          src={videoSrc}
        />
      </motion.div>
    </div>
  );
}
