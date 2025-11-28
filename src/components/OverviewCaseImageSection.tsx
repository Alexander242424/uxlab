"use client";

import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface OverviewCaseImageSectionProps {
  className?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imageSrc2?: string | StaticImageData;
  imageAlt2?: string;
  videoSrc?: string;
  iSvideoPositionLeft?: boolean;
  imageClassName?: string;
  imageClassName2?: string;
  videoClassName?: string;
}

export default function OverviewCaseImageSection({
  className,
  imageSrc,
  imageAlt,
  imageSrc2,
  imageAlt2,
  videoSrc,
  iSvideoPositionLeft = false,
  imageClassName,
  imageClassName2,
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
        "w-full px-4 pt-4 pb-4 md:px-10 md:pt-10 md:pb-10 flex flex-col md:flex-row gap-4 md:gap-8",
        iSvideoPositionLeft && "md:flex-row-reverse",
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
            ? "w-full md:min-w-[calc(50% - 32px)]"
            : "md:min-w-1/2 md:max-w-1/2 md:pl-[1px]"
        )}
      >
        <Image
          className={cn("w-full h-full object-cover", imageClassName)}
          loading={"lazy"}
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
            ? "md:min-w-1/2 md:max-w-1/2 md:pl-[1px]"
            : "w-full md:min-w-[calc(50% - 32px)]"
        )}
      >
      {videoSrc ? (
        <VideoPlayer
          className={cn("w-full h-full object-cover", videoClassName)}
          src={videoSrc}
        />
      ) : (
        <Image
          className={cn("w-full h-full object-cover", imageClassName2)}
          loading={"lazy"}
          src={imageSrc2 || ""
          }
          alt={imageAlt2 || ""}
        />
      )}
      </motion.div>
    </div>
  );
}
