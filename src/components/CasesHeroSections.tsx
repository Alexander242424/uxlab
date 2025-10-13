"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/SplitText";
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
      className="flex flex-col relative min-h-[calc(100vh-72px-130px)] sm:min-h-[calc(100vh-72px-120px)] lg:min-h-[calc(100vh-72px-200px)]"
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
            <p className="block sm:hidden text-text-500 hoves-p2-reg pb-4">
              Emma Sleep
            </p>
            {textArray.map((text, index) => (
            <SplitText
              key={index}
              globalIndex={index}
              text={text || ""}
              className="!text-nowrap"
              style={{
                fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 4.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
              delay={40}
              duration={0.8}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 100 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.01}
              textAlign="left"
              />
            ))}
            
          </div>
        </div>
      </motion.div>
      <div className="w-full mt-auto px-4 md:px-10 flex mb-10">
        <div className="sm:w-1/3 hidden sm:block">
          <p className="text-text-500 hoves-p2-reg">{companyName}</p>
        </div>

        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2 sm:min-w-[212px]">
            <p className="text-text-500 hoves-p2-reg">Year</p>
            <p className="text-text-700 hoves-p2-reg">{year}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-text-500 hoves-p2-reg">Deliverables</p>
            <p className="text-text-700 hoves-p2-reg">{deliverables}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
