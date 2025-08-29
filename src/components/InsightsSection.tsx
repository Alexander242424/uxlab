"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Background from "../assets/image/Insights/Background.png";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const insightsData = [
  {
    id: 1,
    image: Background,
    title: "Improving User Retention Through UX Design",
    author: "John Doe",
    date: "20 November 2024",
  },
  {
    id: 2,
    image: Background,
    title: "The Future of Mobile App Design Trends",
    author: "Jane Smith",
    date: "18 November 2024",
  },
  {
    id: 3,
    image: Background,
    title: "Improving User Retention Through UX Design",
    author: "Mike Johnson",
    date: "15 November 2024",
  },
  {
    id: 4,
    image: Background,
    title: "Design Thinking in Product Development",
    author: "Sarah Wilson",
    date: "12 November 2024",
  },
];

export default function InsightsSection() {
  const insightsRef = useRef(null);
  const borderRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: insightsRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 8], [0, 1000]);
  const isInView = useInView(borderRef, { once: true, margin: "100px" });

  return (
    <motion.div ref={insightsRef} style={{ y }}>
      <div ref={borderRef} className="flex flex-col bg-bg-white px-10 mb-40 relative">
        <motion.div 
          className="absolute top-0 left-10 right-10 h-[1px] bg-border-100"
          style={{
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div 
          className="flex py-8 hoves-p1-reg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="text-black">Insights, Inspirations</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          {insightsData.map((insight, index) => (
            <motion.div
              key={insight.id}
              className="flex flex-col gap-3 w-full md:max-w-[334px]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2 + index * 0.1,
              }}
            >
              <Image src={insight.image} alt={insight.title} />
              <div className="flex flex-col gap-6">
                <p className="text-black hoves-p1-reg">{insight.title}</p>
                <p className="text-black hoves-p3-reg">
                  {insight.author} · {insight.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
