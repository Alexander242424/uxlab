"use client";

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
    content: "",
  },
  {
    id: 2,
    title: "02",
    content: "",
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
    content: "",
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
      }, 700);

      return () => {
        clearTimeout(timer);
        setShowContent(null);
      };
    } else {
      setShowContent(null);
    }
  }, [hoveredSection]);

  return (
    <section className="w-full bg-white px-10">
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

      <div className="flex flex-col md:flex-row">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`relative border-r border-border-100 last:border-r-0 transition-all duration-1000 ease-in-out hover-section group flex-smooth ${
              hoveredSection === section.id ? "bg-bg-gray" : "hover:bg-bg-white"
            }`}
            style={{
              flexBasis: hoveredSection === section.id ? "50%" : `${100 / sections.length}%`,
              transition:
                "flex-basis 1s ease-in-out, background-color 0.7s ease-out",
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
            <div className="absolute top-4 left-4 hoves-p3-reg text-black transition-opacity duration-300">
              {section.title}
            </div>

            {/* Контент секції */}
            <div className="pt-16 pb-8 px-4 h-64 flex flex-col justify-center">
              {(showContent === section.id || (isMobile && section.content)) &&
                section.content && (
                  <div className="hover-section-content show animate-fade-in-left">
                    <div className="flex items-start">
                      {/* Текст контенту */}
                      <div className="flex-1">
                        <p className="text-black hoves-p1-reg">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            {/* Підпис "UX Analysis" */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hoves-h6-med text-black">
              UX Analysis
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoverSection;
