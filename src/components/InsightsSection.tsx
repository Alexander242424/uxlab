"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Background from "../assets/image/Insights/Background.png";
import { motion, useInView } from "motion/react";
import SplitText from "./SplitText";

const insightsData = [
  {
    id: 1,
    image: Background,
    title: "Improving User Retention",
    author: "John Doe",
    date: "20 November 2024",
    badgeText: "UX Design",
  },
  {
    id: 2,
    image: Background,
    title: "The Future ",
    author: "Jane Smith",
    date: "18 November 2024",
    badgeText: "Research",
  },
  {
    id: 3,
    image: Background,
    title: "Through UX Design",
    author: "Mike Johnson",
    date: "15 November 2024",
    badgeText: "Strategy",
  },
  // {
  //   id: 4,
  //   image: Background,
  //   title: "Thinking in Product",
  //   author: "Sarah Wilson",
  //   date: "12 November 2024",
  //   badgeText: "Product",
  // },
  // {
  //   id: 5,
  //   image: Background,
  //   title: "Thinking in Product",
  //   author: "Sarah Wilson",
  //   date: "12 November 2024",
  //   badgeText: "Product",
  // },
];

export default function InsightsSection() {
  const borderRef = useRef(null);

  const isInView = useInView(borderRef, { once: true, margin: "-200px" });

  return (
      <div id="insights" ref={borderRef} data-section="insights" className="flex flex-col bg-bg-white px-4 lg:px-10 mb-40 relative z-20">
        <motion.div
          className="absolute top-0 left-4 right-4 lg:left-10 lg:right-10 h-[1px] bg-border-100"
          style={{
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div
          className="flex py-4 lg:py-8 hoves-p1-reg"
        >
          <SplitText
              text="Insights, Inspirations"
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

        <div className="flex flex-row gap-2 lg:gap-8 w-full overflow-x-auto lg:overflow-x-visible">
          {insightsData.map((insight, index) => (
            <div key={insight.id} className="flex flex-col gap-3 min-w-[268px] lg:flex-1 lg:min-w-0 group">
              <div className="overflow-hidden rounded-lg relative">
                <Image 
                  src={insight.image} 
                  alt={insight.title}
                  className="transition-transform duration-300 ease-out hover:scale-110 w-full h-auto aspect-[5/3] hover:cursor-pointer"
                />
                <div className="absolute bottom-1 left-1 bg-white/80 backdrop-blur-sm rounded w-fit h-6 px-2 py-1 flex items-center justify-center uppercase">
                  <span className="text-black font-tt-hoves font-medium text-[10px] leading-[16px]">
                    {insight.badgeText}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-6">
                <p className="text-black hoves-p1-reg relative group w-fit">
                  {insight.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black underline-animation"></span>
                </p>
                <p className="text-black hoves-p3-reg">
                  {insight.author} · {insight.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
