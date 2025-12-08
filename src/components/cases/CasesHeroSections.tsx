"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import TextSection from "../home_page/TextSection";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface CasesHeroSectionsProps {
  logo: React.ReactNode;
  logoMobile: React.ReactNode;
  text: string | string[];
  companyName: string;
  year: string;
  deliverables: string;
}

export default function CasesHeroSections({
  logo,
  logoMobile,
  text,
  companyName,
  year,
  deliverables,
}: CasesHeroSectionsProps) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  // // Паралакс ефект для текстового блоку (повільний рух вниз)
  // const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  const textArray = Array.isArray(text) ? text : [text];

  return (
    <div
      ref={containerRef}
      className="flex case_hero_section flex-col relative min-h-[calc(100vh-72px-130px)] sm:min-h-[calc(100vh-72px-120px)] lg:min-h-[calc(100vh-72px-200px)]"
    >
      <motion.div
        className="absolute -top-[120px] sm:top-[90px] right-0 flex items-end w-full mb-[160px] mt-0 px-0 md:px-0"
      // className="absolute sm:-top-[110px] -top-[200px] lg:top-[200px] right-0 flex items-end w-full mb-[160px] mt-0 px-0 md:px-0"
      // style={{ y: textBlockY }}
      >
        <div className="w-full flex flex-col sm:flex-row px-4 sm:px-6 md:px-10">
          <div className="mb-[48px] mt-[40px] sm:mt-0 sm:mb-0 sm:w-1/3">
            {isMobile ? logoMobile : logo}
          </div>

          <div className="w-full sm:w-2/3 flex flex-col">
            <p className="block sm:hidden text-text-500 t-p1 pb-4">
              Emma Sleep
            </p>
            {textArray.map((text, index) => (
              <TextSection
                className=""
                text={[
                  "Innovating Personalized Sleep Worldwide",
                ]}
                mobileText={[
                  "Innovating Personalized Sleep Worldwide",
                ]}
                showLine={false}
              />
            ))}

          </div>
        </div>
      </motion.div>
      <div className="w-full mt-auto px-4 md:px-10 flex mb-10">
        <div className="sm:w-1/3 hidden sm:block">
          <p className="t-p2 text-[#A3A3A3]">Year</p>
          <p className="t-p2">{companyName}</p>
        </div>

        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2 sm:min-w-[212px]">
            <p className="t-p2 text-[#A3A3A3]">Year</p>
            <p className="t-p2">{year}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="t-p2 text-[#A3A3A3]">Deliverables</p>
            <p className="t-p2">{deliverables}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
