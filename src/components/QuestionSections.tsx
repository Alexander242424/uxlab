"use client";
import React from "react";
import { Button } from "./ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import AvatarsSVG from "@/assets/avatars.svg";
import { motion } from "motion/react";
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
  return (
    <div className="flex flex-col lg:flex-row text-black mx-10 gap-8 lg:gap-16 xl:gap-[276px] mt-20 py-8 border-t border-border-100">
      <motion.div 
        className="flex flex-col justify-between lg:min-w-[30%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <h3 className="hoves-p1-reg mb-6 lg:mb-0">Frequently Asked Question</h3>
        <motion.div 
          className="flex flex-col p-8 bg-bg-gray gap-6 rounded-[8px] xl:h-[340px] xl:self-end"
          initial={{ opacity: 0, y: 30 }}
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
      <motion.div 
        className="w-full lg:max-w-[60%]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5 + index * 0.1,
              }}
            >
              <AccordionItem value={item.id}>
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
  );
}
