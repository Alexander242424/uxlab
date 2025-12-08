"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoSVG from "@/assets/logo.svg";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import { useCalModal } from "@/context/CalModalContext";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const { openModal } = useCalModal();

  const handleCalClick = () => {
    openModal("https://cal.com/eugene.orehov/30min?overlayCalendar=true");
  };

  useEffect(() => {
    // Перевіряємо, чи window існує (клієнтська сторона)
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // Handle active section
      const sections = [
        "services",
        "work",
        "insights"
      ];
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 66 : 72;
      const scrollPosition = window.scrollY + headerHeight + 50;

      // Find the section we're currently in
      let currentSection = "";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if we're within this section's bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    const groups = document.querySelectorAll(".group");

    groups.forEach((group) => {
      const handleMouseEnter = () => {
        group.classList.add("has-hovered");
      };

      group.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        group.removeEventListener("mouseenter", handleMouseEnter);
      };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return;

    // If sectionId is empty, scroll to top
    if (sectionId === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 66 : 72;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-transparent mx-4 min-h-[72px] sticky top-0 z-50">
      <div className="mt-8 mb-4">
        <div className="container-fluid">
          <div className="row">
            {/* Ліва частина - логотип */}
            <div className="col-6 col-md-6 flex items-center">
              <Link href="/">
                <LogoSVG  className="header-logo" />
              </Link>
            </div>

            {/* Права частина - навігація + Book a Call */}
            <div className="col-6 col-md-6  flex justify-between items-center">
              <nav className="hidden md:flex space-x-4 md:space-x-8 t-p1">
                {pathname === "/" ? (
                  <button
                    onClick={() => scrollToSection("services")}
                    className={`relative group header-text cursor-pointer ${activeSection === "services" ? "header-text-active" : ""
                      }`}
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                  </button>
                ) : (
                  <Link
                    href="/#services"
                    className={`relative group header-text cursor-pointer ${pathname === "/" && activeSection === "services" ? "header-text-active" : ""
                      }`}
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                  </Link>
                )}

                {pathname === "/" ? (
                  <button
                    onClick={() => scrollToSection("cases")}
                    className={`relative group header-text cursor-pointer ${activeSection === "work" ? "header-text-active" : ""
                      }`}
                  >
                    Cases
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                  </button>
                ) : (
                  <Link
                    href="/#cases"
                    className={`relative group header-text cursor-pointer ${pathname === "/" && activeSection === "work" ? "header-text-active" : ""
                      }`}
                  >
                    Cases
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                  </Link>
                )}

                {pathname === "/" ? (
                  <button
                    onClick={() => scrollToSection("insights")}
                    className={`relative group header-text cursor-pointer ${activeSection === "insights" ? "header-text-active" : ""
                      }`}
                  >
                    Insights
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                  </button>
                ) : (
                  <Link
                    href="/#insights"
                    className={`relative group header-text cursor-pointer ${pathname === "/" && activeSection === "insights" ? "header-text-active" : ""
                      }`}
                  >
                    Insights
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                  </Link>
                )}
              </nav>
              <div className="flex items-center ml-auto cursor-pointer">
                <div
                  onClick={handleCalClick}
                  className="header-text flex items-center gap-1 relative group"
                >
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
                  <span className="relative">
                    <ArrowUpRightSVG className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-100 group-hover:opacity-0 header-icon md:scale-[120%] lg:scale-[140%]" />
                    <ArrowUpRightSVG className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1 header-icon md:scale-[120%] lg:scale-[140%]" />
                    <span className="pr-6 pt-1 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 t-p1">
                      Book a Call
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
