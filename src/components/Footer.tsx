"use client";
import Link from "next/link";
import { useEffect } from "react";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import ArrowRightSVG from "@/assets/arrow-right.svg";
import SplitText from "@/components/SplitText";
import { motion } from "motion/react";

export default function Footer() {
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
    <footer>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <div className="px-4 sm:px-6 lg:px-10 py-10 max-w-[1512px] mx-auto text-text-700">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,580px)_1fr_1fr] gap-8">
            <div>
              <h3 className="hoves-h5-reg mb-8">Relax. We&apos;ve Got You.</h3>
              <div className="flex gap-8">
                <div>
                  <p className="hoves-p2-reg">Contact us:</p>
                  <p className="hoves-p2-reg">hello@uxlab.com</p>
                </div>
                <div>
                  <p className="hoves-p2-reg">Terms of use</p>
                  <p className="hoves-p2-reg">©13—25</p>
                </div>
              </div>
              <div className="flex flex-col md:mt-32 gap-5 max-w-[420px]">
                <p className="hoves-p2-reg">Sign up for our newsletter</p>
                <div className="relative">
                  <input
                    className="hoves-p2-reg pb-8 border-b border-border-50 w-full bg-transparent outline-none appearance-none"
                    placeholder="Email Address"
                  />
                  <ArrowRightSVG className="absolute right-0 top-0" />
                </div>
              </div>
            </div>

            <div className="text-nowrap">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className={`relative group text-text-700`}>
                    Our Expertise
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className={`relative group text-text-700`}>
                    Case Studies
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className={`relative group text-text-700`}>
                    Industries
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-nowrap">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-text-700 flex items-center gap-1 relative group max-w-fit"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
                    <span className="relative">
                      {/* Icon on the right (visible by default) */}
                      <ArrowUpRightSVG className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-100 group-hover:opacity-0" />
                      {/* Icon on the left (visible on hover) */}
                      <ArrowUpRightSVG className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1" />
                      <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 hoves-p2-reg">
                        Instagram
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-text-700 flex items-center gap-1 relative group max-w-fit"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
                    <span className="relative">
                      {/* Icon on the right (visible by default) */}
                      <ArrowUpRightSVG className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-100 group-hover:opacity-0" />
                      {/* Icon on the left (visible on hover) */}
                      <ArrowUpRightSVG className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1" />
                      <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 hoves-p2-reg">
                        Linkedin
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-text-700 flex items-center gap-1 relative group max-w-fit"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>{" "}
                    <span className="relative">
                      {/* Icon on the right (visible by default) */}
                      <ArrowUpRightSVG className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-100 group-hover:opacity-0" />
                      {/* Icon on the left (visible on hover) */}
                      <ArrowUpRightSVG className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1" />
                      <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 hoves-p2-reg">
                        X
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 UXLab. All rights reserved.
          </p>
        </div> */}
        </div>
        <SplitText
          text="We Make Interfaces"
          className="w-full text-center"
          style={{
            fontSize: "clamp(3rem, 12vw, 11rem)",
            letterSpacing: "-0.04em",
          }}
          delay={60}
          duration={3}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0.9, y: -200 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
      </motion.div>
    </footer>
  );
}
