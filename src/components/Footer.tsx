"use client";
import Link from "next/link";
import { useEffect } from "react";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import ArrowRightSVG from "@/assets/arrow-right.svg";
import WeMakeInterfacesSVG from "@/assets/We Make Interfaces";
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

  useEffect(() => {
    const handleScroll = () => {
      const footerParallax = document.querySelector('footer .transition-transform') as HTMLElement;
      const insightsSection = document.querySelector('[data-section="insights"]');
      
      if (footerParallax && insightsSection) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const insightsRect = insightsSection.getBoundingClientRect();
        const insightsBottom = insightsRect.bottom;
        
        // Start parallax only when Footer is already in viewport
        if (insightsBottom < windowHeight * 0.3) { // Change condition - start later
          const parallaxOffset = Math.max(0, (windowHeight * 0.3 - insightsBottom) * 0.10); // Зменшено з 0.12 до 0.06
          footerParallax.style.transform = `translateY(-${parallaxOffset}px)`; // Use negative value for upward movement
        } else {
          footerParallax.style.transform = 'translateY(0px)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative z-10">
      {/* Частина з паралаксом */}
      <div className="transition-transform duration-300 ease-out">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <div className="px-4 sm:px-6 lg:px-10 pt-10 pb-[48px] md:pb-[70px] text-text-700 md:min-h-[calc(100dvh-400px)]">
            <div className="w-full flex flex-col md:flex-row md:mt-2">
              {/* Left part - title + contacts + input */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="hoves-h5-med mb-8">Relax. We&apos;ve Got You.</h3>
                <div className="flex md:gap-8">
                  <div className="not-md:min-w-1/2">
                    <p className="hoves-p2-reg">Contact us:</p>
                    <Link href="mailto:hello@uxlab.com" className="relative group text-text-700 hoves-p2-reg">
                      hello@uxlab.com
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                    </Link>
                  </div>
                  <div className="not-md:min-w-1/2">
                    <p className="hoves-p2-reg">Terms of use</p>
                    <p className="hoves-p2-reg">©13—25</p>
                  </div>
                </div>
                <div className="hidden md:flex flex-col md:mt-32 gap-5 max-w-[420px]">
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

              {/* Right part - navigation + social networks */}
              <div className="w-full lg:w-1/2 flex xl:gap-[154px]">
                <div className="text-nowrap not-md:min-w-1/2 lg:pl-[1px] mb-8 lg:mb-0 lg:min-w-[212px]">
                  <ul className="space-y-4">
                    <li>
                      <Link href="/#" className={`relative group text-text-700 hoves-p2-reg`}>
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#work" className={`relative group text-text-700 hoves-p2-reg`}>
                        Work
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className={`relative group text-text-700 hoves-p2-reg`}>
                        Services
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-nowrap lg:min-w-[212px] not-md:min-w-1/2">
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
              <div className="flex flex-col md:hidden mt-[180px]">
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

          </div>
        </motion.div>
      </div>

      {/* Фіксована частина без паралаксу */}
      <div className="mx-4 pb-4 lg:mx-10 lg:pb-10">
        <WeMakeInterfacesSVG />
      </div>
    </footer>
  );
}
