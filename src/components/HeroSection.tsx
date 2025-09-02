"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/SplitText";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Паралакс ефект для текстового блоку (повільний рух вниз)
  const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative min-h-[calc(100vh-72px-170px)] md:min-h-[calc(100vh-72px-80px)] 2xl:min-h-[calc(100vh-72px-140px)]"
    >
      <motion.div
        className="absolute md:-top-[30px] -top-[50px] 2xl:top-[200px] right-0 flex items-end w-full mb-[160px] mt-0 px-4 lg:px-0"
        style={{ y: textBlockY }}
      >
        <div className="w-full flex sm:px-6 lg:px-10">
          {/* Ліва частина - пуста, займає половину екрану */}
          <div className="hidden lg:block md:w-1/2"></div>
          
          {/* Права частина - містить текстовий блок */}
          <div className="lg:w-1/2 w-full flex justify-start">
            <div className="flex flex-col max-w-[456px] 2xl:max-w-[1100px]">
            <SplitText
              className="hoves-p1-reg 2xl:text-[50px]! 2xl:leading-[60px]!"
              text="We unite User Experience"
              delay={500}
              duration={1}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 100 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.01}
              textAlign={isMobile ? "left" : "right"}
            />
            <SplitText
              className="hoves-p1-reg 2xl:text-[50px]! 2xl:leading-[60px]!"
              text="CRO and data-driven design to help digital products convert, scale,
                and win in competitive markets."
                delay={1000}
                duration={2}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 100 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.01}
                textAlign="left"
            />
              {/* <p className="text-text-700 lg:text-right">We unite User Experience</p>
              <p className="text-text-700" style={{ letterSpacing: "-0.03em" }}>
                CRO and data-driven design to help digital products convert, scale,
                and win in competitive markets.
              </p> */}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-auto px-4 lg:px-10">
        <SplitText
          text="We Make Interfaces"
          className="
          w-full 
          text-center 
          whitespace-nowrap
          [font-size:clamp(1rem,10.3vw,9rem)]
          md:[font-size:clamp(1rem,10.2vw,10rem)]
          lg:[font-size:clamp(1rem,10.6vw,10rem)]
          2xl:[font-size:clamp(1rem,15vw,16rem)]
          [-letter-spacing:0.04em] 
          [font-family:var(--font-tt-hoves)] 
          font-light
        "        
          delay={50}
          duration={2}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0.9, y: -200 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
      </div>
    </div>
  );
}
