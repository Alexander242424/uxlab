"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import WeMakeInterfacesSVG from "@/assets/We Make Interfaces";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the text block (slow down motion)
  const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative min-h-[calc(100vh-72px-230px)] sm:min-h-[calc(100vh-72px-120px)] lg:min-h-[calc(100vh-72px-140px)]"
    >
      <motion.div
        className="absolute hero-section-text 2xl:top-0 right-0 flex items-end w-full mb-[160px] mt-0 px-4 lg:px-0"
        style={{ y: textBlockY }}
      >
        <div className="w-full flex min-h-[300px]">
          {/* Left part - empty, takes half of the screen */}
          <div className="hidden sm:block sm:w-1/2"></div>

          {/* Right part - contains the text block */}
          <div className="sm:w-1/2 w-full flex justify-start  hero_text_block">
            <div className="flex-col flex">
              <p className="text-text-700 hoves-p1-reg sm:text-right !text-nowrap ">
                Work with eCommerce bands
              </p>
              <p className="text-text-700 hoves-p1-reg !text-nowrap">
                to uplift CR, AOV, LTV, ATC, Checkout rate, Retention,
              </p>
              <p className="text-text-700 hoves-p1-reg !text-nowrap">
                 and more metrics to unlock revenue grow.   
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-auto pb-4 px-4 md:px-10 md:pb-10">
        <WeMakeInterfacesSVG />
      </div>
    </div>
  );
}
