"use client";
import { motion } from "framer-motion";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import SplitText from "./SplitText";
import { useIsMobile } from "@/hooks/useIsMobile";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Image1 from "@/assets/image/OurCases/image/Shapphire 5.png";

interface ServiceItem {
  title: string;
  subtitle: string;
  imageSrc: string | StaticImageData;
  time: string;
}

const services: ServiceItem[] = [
  {
    title: "Conversion-Centered Design",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
    imageSrc: Image1,
    time: "3 weeks",
  },
  {
    title: "User Experience Research",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
    imageSrc: Image1,
    time: "3 weeks",
  },
  {
    title: "Brand Identity Design",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
    imageSrc: Image1,
    time: "3 weeks",
  },
  {
    title: "Product Strategy",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
    imageSrc: Image1,
    time: "3 weeks",
  },
];

// Define text arrays for SplitText components
const firstParagraph = [
  "Over 10 years grinding alongside founders with a chip",
  "on their shoulder and a story that needs telling.",
];

const secondParagraph = [
  "UXLab is the design partner teams turn to when speed",
  "and quality matter most. Our approach is fast and",
  "flexible - purpose built for startup speed.",
];

const firstParagraphMobile = [
  "Over 10 years grinding alongside",
  "founders with a chip on their",
  "shoulder and a story that needs",
  "telling.",
];

const secondParagraphMobile = [
  "UXLab is the design partner ",
  "teams turn to when speed ",
  "and quality matter most. ",
  "Our approach is fast and ",
  "flexible - purpose built for ",
  "startup speed.",
];

export default function ServiceItems() {
  const isMobile = useIsMobile();
  return (
    <section
      id="services"
      className="bg-bg-black mx-4 md:mx-10 pt-10 md:pt-20 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-border-50"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="flex flex-col sm:flex-row gap-12">
        <div className="sm:w-[47%] flex items-start">
          <div className="grid not-sm:flex not-sm:gap-8 w-full">
            <SplitText
              text="Your Grow Starts Here"
              className="text-text-700 hoves-p1-reg"
              splitType="lines"
              delay={100}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin={isMobile ? "-100px" : "-200px"}
              textAlign="left"
            />
            <div className="flex flex-col sm:hidden gap-4">
              <div className="flex flex-col">
                {firstParagraphMobile.map((text, index) => (
                  <SplitText
                    key={index}
                    text={text}
                    className="text-text-700 hoves-p1-reg !text-nowrap"
                    globalIndex={1 + index} // Продовжуємо після заголовка
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
              <div className="flex flex-col">
                {secondParagraphMobile.map((text, index) => (
                  <SplitText
                    key={`second-${index}`}
                    text={text}
                    className="text-text-700 leading-relaxed hoves-p1-reg !text-nowrap"
                    globalIndex={1 + firstParagraph.length + index}
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
        </div>

        <div className="w-full flex flex-col">
          <div className="space-y-6 mb-20 w-full not-sm:hidden">
            <div className="flex flex-col">
              {firstParagraph.map((text, index) => (
                <SplitText
                  key={index}
                  text={text}
                  className="text-text-700 hoves-p1-reg !text-nowrap"
                  globalIndex={1 + index} // Продовжуємо після заголовка
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

            <div className="flex flex-col">
              {secondParagraph.map((text, index) => (
                <SplitText
                  key={`second-${index}`}
                  text={text}
                  className="text-text-700 leading-relaxed hoves-p1-reg !text-nowrap"
                  globalIndex={1 + firstParagraph.length + index} // Продовжуємо після першого абзацу
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

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-[1px] bg-border-50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.15 + 0.3,
                  }}
                  style={{ transformOrigin: "left" }}
                />
                <a href={"https://cal.com/eugene.orehov/30min?overlayCalendar=true"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 sm:py-10">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col -mt-3">
                        <h3 className="hoves-h5-med text-text-700 relative group/title max-w-fit">
                          {service.title}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] header-underline underline-animation"></span>
                        </h3>
                        <p className="text-text-500 hoves-p1-reg pt-2 md:pt-3">
                          {service.subtitle}
                        </p>
                        <p className="text-text-500 hoves-p1-reg pt-4 md:pt-6">
                          {service.time}
                        </p>
                      </div>
                      <div className="flex items-end justify-center">
                        <div className="group-hover:max-h-[200px] group-hover:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out">
                          <Image
                            src={service.imageSrc}
                            alt={service.title}
                            width={270}
                            height={180}
                          />
                        </div>
                      </div>
                      <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <ArrowUpRightSVG className="w-6 h-6 text-text-700 lg:scale-[130%]" />
                      </div>
                    </div>
                  </div>
                </a>
                {index === services.length - 1 && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-border-50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.15 + 0.3,
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
