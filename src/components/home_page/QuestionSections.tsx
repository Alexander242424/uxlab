"use client";
import React from "react";
import { Button } from "../ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import AvatarsSVG from "@/assets/avatars.svg";
import { motion, useInView } from "motion/react";
import SplitText from "../SplitText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useCalModal } from "@/context/CalModalContext";
import WhatAppSVG from "@/assets/whatapp.svg";

const faqData = [
  {
    id: "item-1",
    question: "What sets UXLAB apart from the rest of the design agencies?",
    answer:
      "In a crowded market of UX and branding agencies, UXLAB stands out by forging trusted, long-term partnerships where our client's success drives our own. Combining cross-disciplinary design and product expertise, we deliver scalable, future-proof experiences that strengthen brands and drive measurable growth.",
  },
  {
    id: "item-2",
    question: "What makes a client a great fit for UXLAB?",
    answer:
      "We partner with clients who understand that brand and design are more than aesthetics - they're powerful drivers of business growth. Our ideal partners embrace collaboration, prioritize leadership alignment, and welcome strategic thinking. By actively engaging in the process and supporting our structured approach, they allow us to transform ideas into meaningful, measurable outcomes that deliver lasting impact.",
  },
  {
    id: "item-3",
    question: "How much input will I have during the process?",
    answer:
      "By involving clients throughout the process, we make sure every decision reflects your vision. Continuous feedback allows us to fine-tune solutions that truly resonate with your goals.",
  },
  {
    id: "item-4",
    question: "What size companies does UXLAB work with?",
    answer:
      "We partner with B2B companies worldwide—from early-stage startups gearing up for funding to billion-dollar enterprises preparing for IPOs, including private equity-backed tech companies managing rapid growth through acquisitions. No matter your size or stage, we believe a strong, strategic brand drives measurable business impact, and we’re ready to help you achieve it.",
  },
  {
    id: "item-5",
    question: "How much does it cost to hire you for the design project?",
    answer:
      "Let's discuss more details about your project, scope, timeline and then we will have a better understanding of what the costs could be.",
  },
  {
    id: "item-6",
    question: "What if I don't like the initial concepts?",
    answer:
      "We follow a collaborative process with continuous feedback loops to keep every project aligned with your vision. When initial concepts don’t hit the mark, we actively discuss your input and refine our approach to deliver a successful, results-driven outcome.",
  },
];

export default function QuestionSections() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { openModal } = useCalModal();

  const handleCalClick = () => {
    openModal("https://cal.com/eugene.orehov/30min?overlayCalendar=true");
  };

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
          <div className="mb-4 md:mb-[175px] hidden md:block">
            <SplitText
              text="Frequently Asked Questions"
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
            className="flex flex-col p-8 bg-bg-gray gap-6 rounded-[8px] md:h-[340px] md:max-w-[456px] lg:h-[350px] lg:scale-[130%] lg:ml-16"
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
              <h4 className="hoves-h4-med">Book a Call</h4>
              <p className="t-p1">
                Tell us about your project, your timeline, and budget. 
                We&apos;ll get back to you within 12 hours.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                variant="secondary"
                size="lg"
                iconRight={<ArrowUpRightSVG className="!size-6" />}
                className="max-w-40 w-full xs:w-auto"
                onClick={handleCalClick}
              >
                Book a Call
              </Button>
              <a href="https://wa.me/qr/AI6ZRCL4ZECGM1" target="_blank" className="flex items-center justify-center rounded-full w-[56px] h-[55px] hover:bg-[#00000014] bg-[#0000000F] cursor-pointer"
              >
                <WhatAppSVG />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative block md:hidden">
          <div className="block mb-4">
            <SplitText
              text="Frequently Asked Questions"
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
                      "t-p1 text-left",
                      index === 0 && "md:!pt-0 lg:!pt-10"
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="t-p1 max-w-[90%]">
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
