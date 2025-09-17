"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useCallback } from "react";

interface SectionData {
  id: number;
  title: string;
  content: string;
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "01",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
  },
  {
    id: 2,
    title: "02",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",

  },
  {
    id: 3,
    title: "03",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
  },
  {
    id: 4,
    title: "04",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",
  },
  {
    id: 5,
    title: "05",
    content:
      "Boostra drove an 18% conversion lift and paid for itself in hours. No more wasting budget on overpriced CRO or UX teams.",

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
    <section className="w-full bg-white px-4 lg:px-10">
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

      <div className="flex flex-col lg:flex-row">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`overflow-hidden relative border-r border-border-100 last:border-r-0 transition-all duration-1000 ease-in-out hover-section group flex-smooth ${
              index === 0 ? 'lg:border-l lg:border-border-100' : ''
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
            <div className="absolute top-[20px] lg:top-4 left-0 lg:left-4 hoves-p3-reg text-black transition-opacity duration-300">
              {section.title}
            </div>

            {/* Контент секції */}
            <div className="lg:pt-16 pb-5 lg:pb-8 lg:px-4 h-[180px] lg:h-72 flex flex-col justify-end">
              <div className="flex flex-col lg:flex-row lg:items-end gap-3 lg:gap-0">
                {/* Підпис "UX Analysis" - завжди зліва */}
                <div className={cn("flex-shrink-0 text-black", isMobile ? "hoves-h4-med" : "hoves-h6-med")}
                style={{
                  minWidth: `${(100 / sections.length)-2}dvw`,
                }}>
                  UX Analysis
                </div>

                {/* Контент - справа від підпису */}
                {section.content && (
                  // <div className="hidden lg:flex absolute right-4 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-120 group-hover:delay-200 delay-0 max-w-[calc(100%-200px)] flex-1">
                  <div className="hidden lg:flex transition-all duration-300 max-h-[35dvh] min-w-[35dvh] lg:pr-[5%]">
                    <div className="flex items-start">
                      {/* Текст контенту */}
                      <div className="flex-1">
                        <p className="text-black hoves-p2-reg">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {section.content && (
                  <div className="block lg:hidden flex-1">
                    <div className="flex items-start">
                      {/* Текст контенту */}
                      <div className="flex-1">
                        <p className="text-black hoves-p1-med !font-[400]">
                          {section.content}
                        </p>
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
