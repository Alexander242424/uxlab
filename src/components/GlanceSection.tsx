"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import EmblaCarousel from "./EmblaCarousel";
import NestPresso from "../assets/image/Glance/Frame 2147229118.png";
import Calendly from "../assets/image/Glance/Group 1820549637.png";

const slides = [
  { icon: <Image src={NestPresso} alt={""} /> },
  { icon: <Image src={Calendly} alt={""} /> },
  { icon: <Image src={NestPresso} alt={""} /> },
  { icon: <Image src={Calendly} alt={""} /> },
];

export default function GlanceSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div ref={ref} className="flex flex-col bg-bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-4 lg:left-10 right-4 lg:right-10 h-[1px] z-10 bg-border-100"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="flex justify-between mx-4 lg:mx-10 lg:py-8 py-4 hoves-p1-reg">
        <p className="text-black">UxLab at a Glance.</p>
        <div className="relative group">
          <a 
            href="mailto:hello@uxlab.digital" 
            className="text-black relative group"
          >
            hello@uxlab.digital
            <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] header-underline underline-animation"></span>
          </a>
        </div>
      </div>
      <EmblaCarousel
        autoplaySpeed={3000}
        animationDuration={3000}
        slides={slides}
        className="cursor-grab"
      />
      <motion.div
        className="absolute bottom-0 left-4 lg:left-10 right-4 lg:right-10 h-[1px] z-10 bg-border-100"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
      <div className="flex mx-4 lg:mx-10 my-[96px] lg:my-40 hoves-p1-reg" />
    </div>
  );
}
