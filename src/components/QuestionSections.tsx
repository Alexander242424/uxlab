"use client";
import React from "react";
import { Button } from "./ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import AvatarsSVG from "@/assets/avatars.svg";
import { motion, useInView } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "How will UXLab learn about my business?",
    answer: "We combine startup speed with proven efficiency. Our clients raised over $600M+ in 2024 alone, powered in part by our design execution.",
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
    <div ref={ref} className="flex flex-col mb-[96px] lg:mb-[160px] lg:flex-row text-black px-4 lg:px-10 py-4 lg:py-8 relative">
      <motion.div 
        className="absolute top-0 left-4 right-4 lg:left-10 lg:right-10 h-[1px] z-10 bg-border-100"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      <div className="w-full flex flex-col lg:flex-row">
        {/* Ліва частина - заголовок + картка */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-between mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <h3 className="hoves-p1-reg mb-6 lg:mb-0">Frequently Asked Question</h3>
          <motion.div 
            className="flex flex-col p-8 bg-bg-gray gap-6 rounded-[8px] lg:h-[340px] lg:max-w-[456px]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
          >
            <AvatarsSVG />
            <div className="flex flex-col gap-2.5">
              <h4 className="hoves-h4-med">Book an intro call</h4>
              <p className="hoves-p1-reg">
                Time to get introduced and explore how Uxlab can help
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              iconRight={<ArrowUpRightSVG className="!size-6" />}
              className="max-w-40 w-full sm:w-auto"
            >
              Book a Call
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Права частина - акордеон */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5 + index * 0.1,
              }}
            >
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[1px] bg-border-100"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.5 + index * 0.1 + 0.3,
                }}
                style={{ transformOrigin: "left" }}
              />
              <AccordionItem value={item.id} className="border-b-0">
                <AccordionTrigger 
                  className="hoves-p1-reg text-left"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="hoves-p2-reg">
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
