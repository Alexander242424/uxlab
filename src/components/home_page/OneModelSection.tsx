"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";

import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import check from "@/assets/image/check.svg"

type PackageCardProps = {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  note?: string;
  bulletTitle?: string;
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
  bulletTitle = "",
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

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      className={`mt-[80px] w-full bg-[#f7f7f7] pt-[96px] rounded-[4px] overflow-hidden shadow-sm ${className}`}
    >
      <div
        ref={cardRef}
        className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 md:px-10 pb-10"
      >
        {/* Левая часть (текст с анимацией SplitText как в DesignOpsSection) */}
        <div className="md:w-1/2 max-w-[635px] flex flex-col gap-6">
          <div className="flex flex-col gap-3 whitespace-pre-line">
            {subtitle && (
              <SplitText
                text={subtitle}
                className="text-black"
                globalIndex={0}
                style={{
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
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
              className="text-black"
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

            {subtitle2 && (
              <SplitText
                text={subtitle2}
                className="text-neutral-500"
                globalIndex={2}
                style={{
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
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

          {note && (
            <p className="mt-3 text-xs text-neutral-400">
              {note}
            </p>
          )}
        </div>

        {/* Правая часть (буллеты) */}
        <div className="md:w-1/2 max-w-[635px] flex flex-col gap-4">
          <motion.p
            className="text-xs uppercase tracking-[0.18em] text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {bulletTitle}
          </motion.p>

          <ul className="space-y-2 text-sm text-neutral-700">
            {bullets.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4, once: false }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: idx * 0.05,
                }}
              >
                <Image src={check} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Нижний баннер с параллаксом */}
      <div className="relative w-full h-[76px] md:h-[96px] overflow-hidden">
        <motion.div style={{ y }} className="w-full h-full">
          <Image
            src={bannerImage}
            alt="DesignOps Framework"
            className="w-full h-full object-cover"
            width={1200}
            height={200}
            priority={false}
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center justify-center w-7 h-7 rounded-sm bg-white/15 backdrop-blur">
              <span className="text-xs font-semibold">✶</span>
            </div>
            <span className="text-sm md:text-base font-medium">
              DesignOps Framework
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
