import React from "react";
import Image from "next/image";
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
  return (
    <div className="flex flex-col bg-bg-white">
      <div className="flex justify-between mx-10 py-8 border-t border-border-100 hoves-p1-reg">
        <p className="text-black">UxLab at a Glance.</p>
        <p className="text-black underline">hello@uxlab.digital</p>
      </div>
      <EmblaCarousel
        autoplaySpeed={3000}
        animationDuration={3000}
        slides={slides}
        className="cursor-grab"
      />
      <div className="flex mx-10 my-20 md:my-40 border-b border-border-100 hoves-p1-reg" />
    </div>
  );
}
