"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import LogoSVG from "@/assets/logo.svg";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const groups = document.querySelectorAll(".group");

    groups.forEach((group) => {
      const handleMouseEnter = () => {
        group.classList.add("has-hovered");
      };

      group.addEventListener("mouseenter", handleMouseEnter);

      // Cleanup
      return () => {
        group.removeEventListener("mouseenter", handleMouseEnter);
      };
    });
  }, []);

  return (
    <header className="bg-transparent min-h-[72px] sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-10 mt-8 mb-4 max-w-[1512px] mx-auto">
        <div className="w-full flex">
          {/* Ліва частина - логотип */}
          <div className="w-1/2 flex items-center">
            <Link href="/">
              <LogoSVG className="header-logo" />
            </Link>
          </div>

          {/* Права частина - навігація + Book a Call */}
          <div className="w-1/2 flex justify-between items-center">
            <nav className="hidden md:flex space-x-4 lg:space-x-8 hoves-p2-reg">
              <Link
                href="/"
                className={`relative group header-text ${
                  pathname === "/" ? "header-text-active" : ""
                }`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
              </Link>
              <Link
                href="/work"
                className={`relative group header-text ${
                  pathname === "/work" ? "header-text-active" : ""
                }`}
              >
                Work
                <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
              </Link>
              <Link
                href="/services"
                className={`relative group header-text ${
                  pathname === "/services" ? "header-text-active" : ""
                }`}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
              </Link>
              <Link
                href="/insights"
                className={`relative group header-text ${
                  pathname === "/insights" ? "header-text-active" : ""
                }`}
              >
                Insights
                <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
              </Link>
            </nav>
            <div className="flex items-center ml-auto">
              <Link
                href="/"
                className="header-text flex items-center gap-1 relative group"
              >
                <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>{" "}
                <span className="relative">
                  {/* Icon on the right (visible by default) */}
                  <ArrowUpRightSVG className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-100 group-hover:opacity-0 header-icon" />
                  {/* Icon on the left (visible on hover) */}
                  <ArrowUpRightSVG className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1 header-icon" />
                  <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 hoves-p2-reg">
                    Book a Call
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
