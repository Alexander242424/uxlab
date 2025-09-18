"use client";
import { motion } from "motion/react";
import SplitText from "./SplitText";

interface OutcomeItem {
  title: string;
  subtitle: string;
}

const outcomes: OutcomeItem[] = [
  {
    title: "12K",
    subtitle:
      "Turn Visitors into Loyal Customers with Strategic, Goal-Oriented Interfaces.",
  },
  {
    title: "10K",
    subtitle:
      "Turn Visitors into Loyal Customers with Strategic, Goal-Oriented Interfaces.",
  },
  {
    title: "500",
    subtitle:
      "Turn Visitors into Loyal Customers with Strategic, Goal-Oriented Interfaces.",
  },
];

export default function CasesOutcome() {
  return (
    <div className="bg-bg-black mx-4 md:mx-10 pb-[64px] md:pb-[120px] pt-8 md:pt-10 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-border-50"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <SplitText
            text="Outcomes"
            className="text-text-700 hoves-p1-reg mb-10"
            splitType="lines"
            delay={100}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="100px"
            textAlign="left"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-10 md:gap-20">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <div className="flex w-full gap-2">
                <SplitText
                  text={outcome.title}
                  className="font-[300] text-[104px] leading-[104px] md:text-[168px] md:leading-[144px]"
                  splitType="chars"
                  delay={100 + index * 150}
                  duration={0.8}
                  ease="power3.out"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="100px"
                  textAlign="left"
                  style={{
                    letterSpacing: "-3%",
                  }}
                />
                <SplitText
                  text="+"
                  className="font-[300] text-[48px] leading-[44px]"
                  splitType="chars"
                  delay={100 + index * 150}
                  duration={0.8}
                  ease="power3.out"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="100px"
                  textAlign="left"
                  style={{
                    letterSpacing: "-3%",
                  }}
                />
              </div>
              <SplitText
                text={outcome.subtitle}
                className="hoves-p1-reg text-text-500"
                splitType="lines"
                delay={200 + index * 150}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="100px"
                textAlign="left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
