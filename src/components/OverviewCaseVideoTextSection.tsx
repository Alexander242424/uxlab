"use client";

import VideoPlayer from "@/components/VideoPlayer";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface OverviewCaseVideoTextSectionProps {
  videoSrc?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  firstText: string;
  secondText: string;
  videoClassName?: string;
  textMaxWidth?: string;
}

export default function OverviewCaseVideoTextSection({
  videoSrc,
  imageSrc,
  imageAlt,
  firstText,
  secondText,
  videoClassName = "md:min-w-1/2 md:max-w-1/2 md:pr-8",
  textMaxWidth = "max-w-[456px]",
}: OverviewCaseVideoTextSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div
      ref={ref}
      className="w-full px-4 pb-4 md:px-10 md:pb-10 flex flex-col md:flex-row gap-6 md:gap-0"
    >
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={
          inView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
        className={cn("overflow-hidden", videoClassName)}
      >
        {videoSrc ? (
          <VideoPlayer className="w-full h-full object-cover" src={videoSrc} />
        ) : (
          <Image loading={"lazy"} src={imageSrc || ""} alt={imageAlt || ""} className="w-full h-full object-cover" />
        )}
      </motion.div>
      <div className={`flex flex-col gap-4 ${textMaxWidth}`}>
        <p className="text-text-500 hoves-p1-reg">{firstText}</p>
        <p className="text-text-500 hoves-p1-reg">{secondText}</p>
      </div>
    </div>
  );
}
