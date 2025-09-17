"use client";
import React from "react";
import { Button } from "./ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import AvatarsSVG from "@/assets/avatars.svg";
import { motion, useInView } from "motion/react";
import SplitText from "./SplitText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqData = [
  {
    id: "item-1",
    question: "How will UXLab learn about my business?",
    answer:
      "We combine startup speed with proven efficiency. Our clients raised over $600M+ in 2024 alone, powered in part by our design execution.",
  },
  {
    id: "item-2",
    question: "What do you require before starting a project?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-3",
    question: "How much input will I have during the process?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-4",
    question: "Can you assist in redesigning B2B/Enterprise apps?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-5",
    question: "What if I don't like the initial concepts?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export default function QuestionSections() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div
      ref={ref}
      className="flex flex-col mb-[96px] md:mb-[160px] md:flex-row text-black px-4 md:px-10 py-4 md:py-8 relative"
    >
      <motion.div
        className="absolute top-0 left-4 right-4 md:left-10 md:right-10 h-[1px] z-10 bg-border-100 hidden md:block"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="w-full flex flex-col md:flex-row">
        {/* Left part - title + card */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-between mb-8 md:mb-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          animate={{
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <div className="mb-4 md:mb-28 hidden md:block">
            <SplitText
              text="Frequently Asked Question"
              className="hoves-p1-reg"
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
          <motion.div
            className="flex flex-col p-8 bg-bg-gray gap-6 rounded-[8px] md:h-[340px] md:max-w-[456px] lg:h-[400px]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            animate={{
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
          >
            <div className="min-h-14">
              <AvatarsSVG />
            </div>
            <div className="flex flex-col gap-3.5">
              <h4 className="hoves-h4-med">Book an intro call</h4>
              <p className="hoves-p1-med !font-[400]">
                Time to get introduced and explore how Uxlab can help
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              iconRight={<ArrowUpRightSVG className="!size-6" />}
              className="max-w-40 w-full xs:w-auto 2xl:scale-[150%] 2xl:ml-10 2xl:mt-10"
              onClick={() =>
                window.open(
                  "https://cal.com/eugene.orehov/30min?overlayCalendar=true",
                  "_blank"
                )
              }
            >
              Book a Call
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative block md:hidden">
          <div className="block mb-4">
            <SplitText
              text="Frequently Asked Question"
              className="hoves-p1-reg"
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

          <motion.div
            className="absolute -bottom-3 left-0 w-full h-[1px] bg-border-100"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Right part - accordion */}
        <motion.div
          className="w-full md:w-1/2 lg:-mt-[32px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
          animate={{
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <motion.div
                  className="absolute -bottom-3 left-0 w-full h-[1px] bg-border-100"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{ transformOrigin: "left" }}
                />
                <AccordionItem value={item.id} className="border-b-0">
                  <AccordionTrigger
                    className={cn(
                      "hoves-p1-big text-left",
                      index === 0 && "md:!pt-0 lg:!pt-8"
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="hoves-p2-reg max-w-[90%]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
