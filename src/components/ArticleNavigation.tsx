"use client";

import { useState, useEffect } from "react";

export interface ArticleNavigationProps {
  navigationItems: {
    title: string;
    id: string;
  }[];
}

const ArticleNavigation = ({ navigationItems }: ArticleNavigationProps) => {

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const offset = 300; // Offset from top of viewport

      let currentSection = "";
      let minDistance = Infinity;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top;
          const distance = Math.abs(elementTop - offset);
          
          // Find the section closest to the offset point
          if (distance < minDistance && elementTop <= offset + 100) {
            minDistance = distance;
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col h-[450px]">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className={`flex pl-4 py-2 cursor-pointer transition-colors duration-200 ${
            activeSection === item.id ? "border-l-[1px] border-l-black" : ""
          }`}
          onClick={() => scrollToSection(item.id)}
        >
          <p
            className={`hoves-p2-reg transition-colors duration-200 truncate max-w-[300px] ${
              activeSection === item.id ? "text-black" : "text-[#5C5C5C]"
            }`}
            title={item.title}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArticleNavigation;
