"use client";

import VideoPlayer from "@/components/VideoPlayer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface OverviewCaseVideoTextSectionProps {
  videoSrc: string;
  firstText: string;
  secondText: string;
  videoClassName?: string;
  textMaxWidth?: string;
}

export default function OverviewCaseVideoTextSection({
  videoSrc,
  firstText,
  secondText,
  videoClassName = "lg:min-w-1/2 lg:max-w-1/2 lg:pr-8",
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
      className="w-full px-4 pb-4 lg:px-10 lg:pb-10 flex flex-col lg:flex-row gap-6 lg:gap-0"
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
        <VideoPlayer className="w-full h-full object-cover" src={videoSrc} />
      </motion.div>
      <div className={`flex flex-col gap-4 ${textMaxWidth}`}>
        <p className="text-text-500 hoves-p1-reg">{firstText}</p>
        <p className="text-text-500 hoves-p1-reg">{secondText}</p>
      </div>
    </div>
  );
}
