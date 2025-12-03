"use client";

import Image from "next/image";
import SplitText from "../SplitText";
import { Button } from "../ui/button";
import { useCalModal } from "@/context/CalModalContext";

import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import WhatAppSVG from "@/assets/whatapp.svg";
import designImage from "@/assets/design_section_image.png";
import designShape from "@/assets/desing_section_shape.png";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type DesignOpsSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  firstText?: string;
  secondText?: string | string[];
  mobileText?: string | string[];
  showButton?: boolean;
  buttonText?: string;
  textColor?: string;
  rootMargin?: string;
  threshold?: number;
};

export default function DesignOpsSection({
  title = "DesignOps\nFramework",
  subtitle,
  description = "Our framework integrates behavioral science, quantitative analysis, and systematic UX refinement to reveal friction, model uplift potential, and guide precise interface improvements. The outcome is a predictable, research-backed path to sustainable ecommerce growth.",
  ctaLabel = "Contact us",
  ctaHref = "/contact",
  textColor = "text-text-700",
  rootMargin = "-100px",
  threshold = 0.6,
}: DesignOpsSectionProps) {
  const { openModal } = useCalModal();

  const handleCalClick = () => {
    openModal("https://cal.com/eugene.orehov/30min?overlayCalendar=true");
  };

  // 🔹 ПАРАЛЛАКС: реф и привязка скролла к правому блоку
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"], // когда блок входит и выходит из вьюпорта
  });

  // designImage будет слегка двигаться вверх/вниз
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-45%", "45%"]);

  return (
    <section className="bg-bg-black mx-4 md:mx-10 my-16 md:my-24">
      <div className="container-fluid">
        <div className="row items-end design_container">
          {/* Левая текстовая колонка */}
          <div className="col-md-4 flex flex-col gap-6">
            {subtitle && (
              <p className="text-text-500 hoves-p1-reg uppercase tracking-[0.12em]">
                {subtitle}
              </p>
            )}

            <div className="flex justify-start">
              <SplitText
                text={title}
                className={`${textColor} design_title not-md:!text-nowrap`}
                globalIndex={0}
                style={{
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 5vw, 7.5rem)",
                  lineHeight: "1.10",
                  letterSpacing: "-0.03em",
                }}
                splitType="lines"
                delay={100}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 100 }}
                to={{ opacity: 1, y: 0 }}
                threshold={threshold}
                rootMargin={rootMargin}
                textAlign="left"
              />
            </div>

            <p className="text-text-500 hoves-p1-reg leading-relaxed">
              {description}
            </p>

            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  iconRight={<ArrowUpRightSVG className="!size-6" />}
                  className="max-w-40 w-full xs:w-auto bg-white text-black hover:bg-bg-white"
                  onClick={handleCalClick}
                >
                  {ctaLabel || "Book a Call"}
                </Button>

                <a
                  href="https://wa.me/qr/AI6ZRCL4ZECGM1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-full w-[56px] h-[55px] hover:bg-[#00000014] bg-[#0000000F] cursor-pointer"
                >
                  <WhatAppSVG />
                </a>
              </div>
            </div>
          </div>

          {/* Правая колонка с параллаксом */}
          <div className="col-md-8" ref={imageContainerRef}>
            <div className="relative w-full overflow-hidden rounded-[4px] bg-black design_section_image_container">
              <motion.div
                style={{ y: parallaxY }}
                className="relative w-full h-full"
              >
                <Image
                  src={designImage}
                  alt={
                    typeof title === "string"
                      ? title.replace(/\n/g, " ")
                      : "DesignOps image"
                  }
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </motion.div>

              <div className="pointer-events-none  inset-0 flex items-center justify-center">
                <Image
                  src={designShape}
                  alt="Design shape"
                  className="max-w-[70%] h-auto absolute object-contain design_section_image_shape"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
