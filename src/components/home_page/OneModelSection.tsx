"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";

import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import CheckIcon from "@/assets/image/check.svg";
import smallShape from "@/assets/image/small_shape.png"
type PackageCardProps = {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  note?: string;
  afterRowTitle?: string;
  bullets?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  bannerImage: StaticImageData | string;
  className?: string;
};

export default function PackageCard({
  title = "2 weeks\nDesign Sprint",
  subtitle = "Specific flow uplift",
  subtitle2 = "Starting from 5,000 USD",
  note,
  afterRowTitle = "For bigger requests (full redesign/rebrand) - let’s talk and find the best custom pricing model for you.",
  bullets = [
    "User Experience Strategy",
    "Analytics tools setup (if needed)",
    "Conversion Rate (CR) Uplift",
    "Engagement Rate (ER) Uplift",
    "Average Order Value (AOV) Uplift",
    "Live Time Value (LTV) Uplift",
    "Add to Cart Rate (ATC) Uplift",
    "Fast turnarounds, average every 48 hours.",
    "Always covered  no ghosting or project downtime",
  ],
  ctaLabel = "Let’s Talk",
  onCtaClick,
  bannerImage,
  className = "",
}: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Параллакс по скроллу (нижний баннер)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      className={`one_model_section mt-[80px] w-full bg-[#f7f7f7] pt-[96px] rounded-[4px] overflow-hidden shadow-sm mx-auto ${className}`}
    >
      <div className="container">
        <div
          ref={cardRef}
          className="row justify-content-center"
        >
          {/* Левая часть (текст с анимацией SplitText как в DesignOpsSection) */}
          <div className="col-md-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3 whitespace-pre-line">
              {subtitle && (
                <SplitText
                  text={subtitle}
                  className="text-black"
                  globalIndex={0}
                  style={{
                    fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "1.1",
                    letterSpacing: "-0.01em",
                  }}
                  splitType="lines"
                  delay={100}
                  duration={0.8}
                  ease="power3.out"
                  from={{ opacity: 0, y: 50 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.5}
                  rootMargin="-100px"
                  textAlign="left"
                />
              )}

              <SplitText
                text={title}
                className="text-black hoves-h1"
                globalIndex={1}
                style={{
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.04em",
                }}
                splitType="lines"
                delay={100}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 100 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.5}
                rootMargin="-100px"
                textAlign="left"
              />
            </div>

            <div className="mt-4">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-6 py-2 bg-black text-white hover:bg-neutral-900"
                iconRight={<ArrowUpRightSVG className="!size-5" />}
                onClick={onCtaClick}
              >
                {ctaLabel}
              </Button>
            </div>

            {subtitle2 && (
              <SplitText
                text={subtitle2}
                className="text-[#959595] not-sm:mb-[24px]"
                globalIndex={2}
                style={{
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.4",
                  letterSpacing: "-0.01em",
                }}
                splitType="lines"
                delay={150}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.5}
                rootMargin="-100px"
                textAlign="left"
              />
            )}
            {note && (
              <p className="mt-3 text-xs text-neutral-400">
                {note}
              </p>
            )}
          </div>

          {/* Правая часть (буллеты) */}
          <div className="col-md-5">
            <ul className="space-y-2 text-black">
              {bullets.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center mb-[16px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.4, once: false }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.05,
                  }}
                >
                  <CheckIcon className="bullet h-auto" />
                  <span className="hoves-p1">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="col-lg-12">
            {afterRowTitle && (
              <p className="after_row_title hoves-p1 ">{afterRowTitle}</p>
            )}
          </div>
        </div>
      </div>
      {/* Нижний баннер с параллаксом */}
      <div className="relative w-full h-[76px] md:h-[96px] overflow-hidden">
        <motion.div style={{ y }} className="w-full h-[200px]">
          <Image
            src={bannerImage}
            alt="DesignOps Framework"
            className="w-full h-full object-cover"
            width={1200}
            height={200}
            priority={false}
          />
        </motion.div>

        <div className="absolute shape_container inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-3 text-white small_shape">
            <Image
              src={smallShape}
              alt="Small Shape"
              className="w-full h-full object-cover"
              priority={false}
            />
            <span className="text whitespace-nowrap hoves-p1">
              DesignOps Framework
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
