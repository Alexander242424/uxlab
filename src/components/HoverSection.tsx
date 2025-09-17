"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useCallback } from "react";
import SplitText from "./SplitText";
import { motion } from "motion/react";

interface SectionData {
  id: number;
  title: string;
  content: string;
  contentMobile: string[];
  contentTablet: string[];
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "01",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
    contentMobile: [
      "Boostra drove an 18% conversion lift",
      "and paid for itself in hours. No more",
      "wasting budget on overpriced",
      " CRO or UX teams.",
    ],
    contentTablet: [
      "Boostra drove an 18% conversion lift and paid for itself in hours.",
      "No more wasting budget on overpriced CRO or UX teams.",
    ],
  },
  {
    id: 2,
    title: "02",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
    contentMobile: [
      "Boostra drove an 18% conversion lift",
      "and paid for itself in hours. No more",
      "wasting budget on overpriced",
      " CRO or UX teams.",
    ],
    contentTablet: [
      "Boostra drove an 18% conversion lift and paid for itself in hours.",
      "No more wasting budget on overpriced CRO or UX teams.",
    ],
  },
  {
    id: 3,
    title: "03",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
    contentMobile: [
      "Boostra drove an 18% conversion lift",
      "and paid for itself in hours. No more",
      "wasting budget on overpriced",
      " CRO or UX teams.",
    ],
    contentTablet: [
      "Boostra drove an 18% conversion lift and paid for itself in hours.",
      "No more wasting budget on overpriced CRO or UX teams.",
    ],
  },
  {
    id: 4,
    title: "04",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
    contentMobile: [
      "Boostra drove an 18% conversion lift",
      "and paid for itself in hours. No more",
      "wasting budget on overpriced",
      " CRO or UX teams.",
    ],
    contentTablet: [
      "Boostra drove an 18% conversion lift and paid for itself in hours.",
      "No more wasting budget on overpriced CRO or UX teams.",
    ],
  },
  {
    id: 5,
    title: "05",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
    contentMobile: [
      "Boostra drove an 18% conversion lift",
      "and paid for itself in hours. No more",
      "wasting budget on overpriced",
      " CRO or UX teams.",
    ],
    contentTablet: [
      "Boostra drove an 18% conversion lift and paid for itself in hours.",
      "No more wasting budget on overpriced CRO or UX teams.",
    ],
  },
];

const HoverSection: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isHovering && !isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isHovering, handleMouseMove, isMobile]);

  useEffect(() => {
    if (hoveredSection) {
      const timer = setTimeout(() => {
        setShowContent(hoveredSection);
      }, 400); // Зменшено з 800ms до 400ms

      return () => {
        clearTimeout(timer);
        setShowContent(null);
      };
    } else {
      setShowContent(null);
    }
  }, [hoveredSection]);

  return (
    <section className="w-full bg-white px-4 md:px-10 relative">
      {isHovering && !isMobile && (
        <div
          className="hover-cursor hoves-p3-reg"
          style={{
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          Hover
        </div>
      )}
      <div className="relative">
        <motion.div
          className="absolute -top-3 left-0 w-full h-[1px] bg-border-100 md:hidden"
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

      <div className="flex flex-col md:flex-row">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`overflow-hidden relative border-r border-border-100 last:border-r-0 transition-all duration-1000 ease-in-out hover-section group flex-smooth ${
              index === 0 ? "md:border-l md:border-border-100" : ""
            }`}
            style={{
              flexBasis:
                hoveredSection === section.id
                  ? "50%"
                  : `${100 / sections.length}%`,
              transition:
                "flex-basis 0.3s ease-in-out, background-color 0.3s ease-out",
            }}
            onMouseEnter={() => {
              if (!isMobile) {
                setHoveredSection(section.id);
                setIsHovering(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setHoveredSection(null);
                setIsHovering(false);
              }
            }}
          >
            {/* Номер секції */}
            <div className="absolute top-[20px] lg:top-4 left-0 md:left-4 hoves-p3-reg text-black transition-opacity duration-300">
              {section.title}
            </div>

            {/* Контент секції */}
            <div className="md:pt-16 pb-5 md:pb-8 md:px-4 h-[240px] sm:h-[150px] md:h-72 flex flex-col justify-end">
              <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-0">
                {/* Підпис "UX Analysis" - завжди зліва */}
                <div
                  className={cn(
                    "flex-shrink-0 text-black",
                    isMobile ? "hoves-h4-med" : "hoves-h6-med"
                  )}
                  style={{
                    minWidth: `${105 / sections.length - 2}dvw`,
                  }}
                >
                  UX Analysis
                </div>

                {/* Контент - справа від підпису */}
                {section.content && (
                  // <div className="hidden lg:flex absolute right-4 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-120 group-hover:delay-200 delay-0 max-w-[calc(100%-200px)] flex-1">
                  <div className="hidden md:flex max-h-[33dvh] w-full max-w-[34dvh] lg:pr-[5%]">
                    <div className="flex items-start">
                      {/* Текст контенту */}
                      <div className="flex-1">
                        {section.content.split(' ').reduce((acc: string[][], word: string, index: number) => {
                          const groupIndex = Math.floor(index / 4);
                          if (!acc[groupIndex]) acc[groupIndex] = [];
                          acc[groupIndex].push(word);
                          return acc;
                        }, []).map((wordGroup: string[], index: number) => (
                          <p key={index} className="text-black hoves-p2-reg !font-[400] !text-nowrap">
                            {wordGroup.join(' ')}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {section.contentMobile && (
                  <div className="block sm:hidden flex-1">
                    <div className="flex items-start">
                      {/* Текст контенту */}
                      <div className="flex-1 flex flex-col gap-0">
                        {Array.isArray(section.contentMobile) &&
                          section.contentMobile.map((text, index) => (
                            <SplitText
                              key={index}
                              text={text}
                              className="leading-relaxed hoves-p1-med !font-[400] text-black !text-nowrap"
                              globalIndex={index}
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
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                {section.contentTablet && (
                  <div className="block not-sm:hidden md:hidden flex-1">
                    <div className="flex items-start">
                      {/* Текст контенту */}
                      <div className="flex-1 flex flex-col gap-0">
                        {Array.isArray(section.contentTablet) &&
                          section.contentTablet.map((text, index) => (
                            <SplitText
                              key={index}
                              text={text}
                              className="leading-relaxed hoves-p2-reg text-black !text-nowrap"
                              globalIndex={index}
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
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoverSection;
