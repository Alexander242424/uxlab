"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import ArrowRightSVG from "@/assets/arrow-right.svg";
import WeMakeInterfacesSVG from "@/assets/We_Make_Interfaces";
import { motion } from "motion/react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Successfully subscribed!");
        setEmail("");
      } else {
        // Handle specific error codes
        if (data.code === "MEMBER_EXISTS") {
          setMessage("This email is already subscribed to our newsletter");
        } else if (data.code === "INVALID_EMAIL") {
          setMessage("Please enter a valid email address");
        } else if (data.code === "API_ERROR") {
          setMessage(
            "Service temporarily unavailable. Please try again later."
          );
        } else {
          setMessage(data.error || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      const footerParallax = document.querySelector(
        "footer .transition-transform"
      ) as HTMLElement;
      const insightsSection = document.querySelector(
        '[data-section="insights"]'
      );

      if (footerParallax && insightsSection) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const insightsRect = insightsSection.getBoundingClientRect();
        const insightsBottom = insightsRect.bottom;

        // Start parallax only when Footer is already in viewport
        if (insightsBottom < windowHeight * 0.3) {
          // Change condition - start later
          const parallaxOffset = Math.max(
            0,
            (windowHeight * 0.3 - insightsBottom) * 0.1
          ); // Зменшено з 0.12 до 0.06
          footerParallax.style.transform = `translateY(-${parallaxOffset}px)`; // Use negative value for upward movement
        } else {
          footerParallax.style.transform = "translateY(0px)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="mx-4 relative z-10 bg-black">
      {/* Частина з паралаксом */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        className="transition-transform duration-300 ease-out"
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <div className="container-fluid md:pb-10 pt-10 pb-[48px] sm:pb-[70px] text-text-700 sm:min-h-[calc(100dvh-400px)]">
            <div className="row flex flex-col md:flex-row sm:mt-2">
              {/* Left part - title + contacts + input */}
              <div className="col-md-6 mb-8 md:mb-0">
                <h3 className="hoves-h5-med mb-8">
                  Relax. We&apos;ve Got You.
                </h3>
                <div className="flex sm:gap-8">
                  <div className="not-sm:min-w-1/2">
                    <p className="t-p1">Contact us:</p>
                    <Link
                      href="mailto:hello@uxlab.com"
                      className="relative group text-text-700 t-p1"
                    >
                      hello@uxlab.com
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                    </Link>
                  </div>
                  <div className="not-sm:min-w-1/2">
                    <p className="t-p1">Terms of use</p>
                    <p className="t-p1">©13—25</p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col sm:mt-32 gap-5 max-w-[420px]">
                  <p className="t-p1">Sign up for our newsletter</p>
                  <form onSubmit={handleSubmit} className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`t-p1 pb-4 border-b w-full bg-transparent outline-none appearance-none ${
                        message && !message.includes("Success")
                          ? "border-red-500"
                          : "border-border-50"
                      }`}
                      placeholder="Email Address"
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-0 top-0 cursor-pointer disabled:opacity-50"
                    >
                      <ArrowRightSVG />
                    </button>
                    {message && (
                    <p
                      className={`t-p1 text-sm mt-2 ${
                        message.includes("Success")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                  </form>
                </div>
              </div>

              {/* Right part - navigation + social networks */}
              <div className="col-md-6 flex xl:gap-[154px]">
                <div className="text-nowrap not-sm:min-w-1/2 md:pl-[1px] mb-8 md:mb-0 md:min-w-[212px]">
                  <ul className="space-y-4">
                    {/* <li>
                      <Link href="/#" className={`relative group text-text-700 t-p1`}>
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/#services"
                        className={`relative group text-text-700 t-p1`}
                      >
                        Services
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#cases"
                        className={`relative group text-text-700 t-p1`}
                      >
                        Cases
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#insights"
                        className={`relative group text-text-700 t-p1`}
                      >
                        Insights
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-700 underline-animation"></span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-nowrap md:min-w-[212px] not-sm:min-w-1/2">
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
                          <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 t-p1">
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
                          <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 t-p1">
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
                          <span className="pr-6 group-hover:pl-6 group-hover:pr-0 transition-all duration-300 t-p1">
                            X
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:hidden mt-[180px]">
                <p className="t-p1">Sign up for our newsletter</p>
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`t-p1 pb-8 border-b w-full bg-transparent outline-none appearance-none ${
                      message && !message.includes("Success")
                        ? "border-red-500"
                        : "border-border-50"
                    }`}
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-0 top-0 cursor-pointer disabled:opacity-50"
                  >
                    <ArrowRightSVG />
                  </button>
                  {message && (
                    <p
                      className={`t-p1 text-sm mt-2 ${
                        message.includes("Success")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>

      {/* Фіксована частина без паралаксу */}
      <div className="mx-4 pb-4 md:mx-10 md:pb-10">
        <WeMakeInterfacesSVG  word="interfaces" />
      </div>
    </footer>
  );
}
