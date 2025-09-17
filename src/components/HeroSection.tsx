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
      className="flex flex-col relative min-h-[calc(100vh-72px-170px)] sm:min-h-[calc(100vh-72px-120px)] lg:min-h-[calc(100vh-72px-140px)]"
    >
      <motion.div
        className="absolute sm:-top-[30px] -top-[50px] 2xl:top-0 right-0 flex items-end w-full mb-[160px] mt-0 px-4 lg:px-0"
        style={{ y: textBlockY }}
      >
        <div className="w-full flex">
          {/* Left part - empty, takes half of the screen */}
          <div className="hidden sm:block sm:w-1/2"></div>

          {/* Right part - contains the text block */}
          <div className="sm:w-1/2 w-full flex justify-start">
            <div className="hidden flex-col xs:flex">
              <p className="text-text-700 hoves-p1-reg md:text-right sm:text-nowrap">
                We unite User Experience,
              </p>
              <p className="text-text-700 hoves-p1-reg sm:text-nowrap">
                conversions and data-driven design to help digital products,             
              </p>
              <p className="text-text-700 hoves-p1-reg sm:text-nowrap">
                convert, scale, and win in competitive markets.
              </p>
            </div>
            <div className="flex flex-col xs:hidden">
              <p className="text-text-700 hoves-p1-reg md:text-right sm:text-nowrap">
                We unite User Experience,
              </p>
              <p className="text-text-700 hoves-p1-reg sm:text-nowrap">
                conversions and data-driven design             
              </p>
              <p className="text-text-700 hoves-p1-reg sm:text-nowrap">
                to help digital products, convert, scale,
              </p>
              <p className="text-text-700 hoves-p1-reg sm:text-nowrap">
              and win in competitive markets.
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
