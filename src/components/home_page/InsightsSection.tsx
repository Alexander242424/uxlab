"use client";
import React, { useRef } from "react";
import Image from "next/image";
import AIAgentImage from "@/assets/image/Insights/01.jpg";
import DesignSystemsImage from "@/assets/image/Insights/02.jpg";
import ConversionRateOptimizationImage from "@/assets/image/Insights/03.jpg";
import { motion, useInView } from "motion/react";
import SplitText from "../SplitText";
import Link from "next/link";

const insightsData = [
  {
    id: 1,
    href: "/how-to-design-an-ai-agent",
    image: AIAgentImage,
    title: ["How to Design an Agentic AI"],
    author: "Alex Tyshchenko",
    date: "1 October 2025",
    badgeText: "UX Design",
  },
  {
    id: 2,
    href: "/mastering-design-systems",
    image: DesignSystemsImage,
    title: ["How to Improve Website Conversions"],
    author: "Alex Tyshchenko",
    date: "29 August 2025",
    badgeText: "Research",
  },
  {
    id: 3,
    href: "/mastering-design-systems",
    image: ConversionRateOptimizationImage,
    title: ["How to Improve Website Conversions"],
    author: "Alex Tyshchenko",
    date: "29 August 2025",
    badgeText: "Research",
  },
  {
    id: 4,
    href: "/how-to-design-an-ai-agent2",
    image: AIAgentImage,
    title: ["How to Design an Agentic AI"],
    author: "Alex Tyshchenko",
    date: "1 October 2025",
    badgeText: "UX Design",
  },
];

export default function InsightsSection() {
  const borderRef = useRef(null);

  const isInView = useInView(borderRef, { once: true, margin: "-200px" });

  return (
    <div id="insights" ref={borderRef} data-section="insights" className="bg-bg-white mx-4  mb-40 relative z-20">
      <div className="container-fluid">
        <motion.div
            className={`h-[1px] insight_line`}
            style={{
              backgroundColor: "#E5E5E5",
              transformOrigin: "left center",
            }}
            initial={{width: 0}}
            whileInView={{width: "100%"}}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1],
            }}
        />
        <div
            className="flex py-4 md:py-8 hoves-p1-reg"
        >
          <SplitText
              text="Insights, Inspirations"
              className="insight_title text-black"
              splitType="lines"
              delay={100}
              duration={0.5}
              ease="power3.out"
              from={{opacity: 0, y: 50}}
              to={{opacity: 1, y: 0}}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
          />
        </div>

        <div className="row">
          {insightsData.map((insight, index) => (
              <Link href={insight.href} key={insight.id}
                    className="col-md-3 flex-col gap-3 min-w-[268px] sm:flex-1 sm:min-w-0 group">
                <div className="overflow-hidden posts_box relative">
                  <Image
                      src={insight.image}
                      alt={""}
                      loading={"lazy"}
                      className="transition-transform duration-300 ease-out hover:scale-110 w-full h-auto aspect-[5/3] hover:cursor-pointer"
                  />
                  <div
                      className="absolute bottom-1 left-1 bg-white/80 backdrop-blur-sm rounded w-fit h-6 px-2 py-1 flex items-center justify-center uppercase">
                  <span className="text-black font-tt-hoves font-medium text-[10px] leading-[16px]">
                    {insight.badgeText}
                  </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1 md:gap-2 mt-[12px] insight_post__title">
                    {insight.title.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-black t-p1 relative group w-fit">
                          {line}
                          <span className="absolute title_hover_line left-0 w-0 h-[1px] bg-black underline-animation"></span>
                        </p>
                    ))}
                  </div>
                  <p className="author_name text-black t-p2 mt-[24px]">
                    {insight.author} · {insight.date}
                  </p>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
