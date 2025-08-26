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
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center text-text-700 hover:text-text-500">
            <Link href="/">
              <LogoSVG />
            </Link>
          </div>

          <div className="flex justify-between items-center h-full w-full max-w-[49%]">
            <nav className="hidden md:flex space-x-4 lg:space-x-8 hoves-p2-reg">
              <Link
                href="/"
                className={`relative group ${
                  pathname === "/" ? "text-text-500" : "text-text-700"
                }`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
              </Link>
              <Link
                href="/work"
                className={`relative group ${
                  pathname === "/work" ? "text-text-500" : "text-text-700"
                }`}
              >
                Work
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
              </Link>
              <Link
                href="/services"
                className={`relative group ${
                  pathname === "/services" ? "text-text-500" : "text-text-700"
                }`}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
              </Link>
              <Link
                href="/insights"
                className={`relative group ${
                  pathname === "/insights" ? "text-text-500" : "text-text-700"
                }`}
              >
                Insights
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
              </Link>
            </nav>
            <div className="flex items-center ml-auto">
              <Link
                href="/"
                className="text-text-700 flex items-center gap-1 relative group"
              >
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
                <span className="relative">
                  {/* Icon on the right (visible by default) */}
                  <ArrowUpRightSVG className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-100 group-hover:opacity-0" />
                  {/* Icon on the left (visible on hover) */}
                  <ArrowUpRightSVG className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1" />
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
