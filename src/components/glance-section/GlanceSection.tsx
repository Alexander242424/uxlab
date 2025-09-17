"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SplitText from "../SplitText";
import EmblaCarousel from "../EmblaCarousel";
import NestPresso from "../../assets/image/Glance/Frame 2147229118.png";
import Calendly from "../../assets/image/Glance/Group 1820549637.png";
import { useIsMobile } from "@/hooks/useIsMobile";
import VideoCard from "./VideoCard";

const slides = [
  { element: <Image className="pointer-events-none" src={NestPresso} alt={""} /> },
  { element: <Image className="pointer-events-none" src={Calendly} alt={""} /> },
  { element: <Image className="pointer-events-none" src={NestPresso} alt={""} /> },
  { element: <Image className="pointer-events-none" src={Calendly} alt={""} /> },
  { element: <VideoCard videoSrc={"/glance-section-video/4069480-uhd_3840_2160_25fps-2.mp4"} /> },
];

export default function GlanceSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const isMobile = useIsMobile();

  return (
    <div ref={ref} className="flex flex-col bg-bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-4 md:left-10 right-4 md:right-10 h-[1px] z-10 bg-border-100 block md:block"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="flex justify-between mx-4 md:mx-10 md:py-8 py-4 hoves-p1-reg">
        <div>
          <SplitText
            text="UxLab at a Glance."
            className="hoves-p1-reg text-black"
            splitType="lines"
            delay={100}
            duration={0.5}
            ease="power3.out"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="left"
          />
        </div>
        <div className="relative group">
          <a 
            href="mailto:hello@uxlab.digital" 
            className="text-black relative group"
          >
            <SplitText
              text="hello@uxlab.digital"
              className="hoves-p1-reg text-black"
              splitType="lines"
              delay={200}
              duration={0.5}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
            <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] header-underline underline-animation"></span>
          </a>
        </div>
      </div>
      <EmblaCarousel
        slides={slides}
        slideSpacing={isMobile ? 8 : 32}
        speed={40}
        className="cursor-grab"
      />
      <motion.div
        className="absolute bottom-0 left-4 md:left-10 right-4 md:right-10 h-[1px] z-10 bg-border-100 block md:block"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="flex mx-4 md:mx-10 my-[96px] md:my-40 hoves-p1-reg" />
    </div>
  );
}
