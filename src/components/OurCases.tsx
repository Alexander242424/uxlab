"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import OptionImage from "../assets/image/Option 22.png";
import ShapphireImage from "../assets/image/Shapphire 5.png";
import GuideImage from "../assets/image/Option 28.png";

interface OurCasesItem {
  src: StaticImageData;
  alt: string;
  title: string;
}

const cases: OurCasesItem[] = [
  {
    src: OptionImage,
    alt: "Emma usability audit case study",
    title:
      "+47% Engagement Lift in 1 Month After a 5-Minute Boostra Usability & Accessibility Audit of Emma",
  },
  {
    src: ShapphireImage,
    alt: "Sapphire analysis case study",
    title:
      "+38% Sign-Ups in 3 Weeks After a 5-Minute Getboostra Analysis of Sapphire",
  },
  {
    src: GuideImage,
    alt: "Forbes Travel Guide analysis case study",
    title:
      "+54% More Hotel Bookings in Just 1 Month After a 5-Minute Boostra Analysis of ForbesTravelGuide.com",
  },
];

export default function OurCases() {
  return (
    <div className="flex flex-col gap-8 my-[160px] mx-10">
      <motion.h2
        className="hoves-p1-reg text-text-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Cases
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="w-full h-auto rounded-md"
            />
            <p className="text-text-500 hoves-p1-reg">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
