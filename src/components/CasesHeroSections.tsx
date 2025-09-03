"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/SplitText";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface CasesHeroSectionsProps {
  logo: React.ReactNode;
  logoMobile: React.ReactNode;
  text: string;
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Паралакс ефект для текстового блоку (повільний рух вниз)
  const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative min-h-[calc(100vh-72px-130px)] md:min-h-[calc(100vh-72px-120px)] 2xl:min-h-[calc(100vh-72px-200px)]"
    >
      <motion.div
        className="absolute md:-top-[110px] -top-[200px] 2xl:top-[200px] right-0 flex items-end w-full mb-[160px] mt-0 px-0 lg:px-0"
        style={{ y: textBlockY }}
      >
        <div className="w-full flex flex-col md:flex-row px-4 sm:px-6 lg:px-10">
          <div className="mb-[48px] mt-[40px] md:mt-0 md:mb-0 md:w-1/3">
            {isMobile ? logoMobile : logo}
          </div>

          <div className="w-full md:w-2/3 flex flex-col">
            <p className="block md:hidden text-text-500 hoves-p2-reg pb-4">
              Emma Sleep
            </p>
            <SplitText
              text={text}
              style={{
                fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 8vw, 4.5rem)",
                lineHeight: "1.15",
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
          </div>
        </div>
      </motion.div>
      <div className="w-full mt-auto px-4 lg:px-10 flex mb-10">
        <div className="md:w-1/3 hidden md:block">
          <p className="text-text-500 hoves-p2-reg">{companyName}</p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2 md:min-w-[212px]">
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
