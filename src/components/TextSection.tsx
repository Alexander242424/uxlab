"use client";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import { motion } from "motion/react";
import SplitText from "./SplitText";
import { useIsMobile } from "@/hooks/useIsMobile";

interface TextSectionProps {
  firstText: string;
  secondText: string;
  showButton?: boolean;
  buttonText?: string;
  className?: string;
  textColor?: string;
  rootMargin?: string;
  threshold?: number;
}

export default function TextSection({
  firstText,
  secondText,
  showButton = false,
  buttonText = "Book a Call",
  className = "",
  textColor = "text-text-700",
  rootMargin = "-100px",
  threshold = 0.3,
}: TextSectionProps) {
  const isMobile = useIsMobile();

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {isMobile ? (
        <div>
          <SplitText
            text={firstText + " " + secondText}
            className={textColor}
            style={{
              fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 8vw, 7.5rem)",
              lineHeight: "1.10",
              letterSpacing: "-0.03em",
            }}
            splitType="auto-lines"
            delay={200}
            duration={1.2}
            ease="power3.out"
            from={{ opacity: 0, y: 100 }}
            to={{ opacity: 1, y: 0 }}
            threshold={threshold}
            rootMargin={rootMargin}
            textAlign="left"
          />
        </div>
      ) : (
        <>
          {/* First text with SplitText animation */}
          <div className="flex justify-start md:justify-start lg:justify-end">
            <SplitText
              text={firstText}
              className={textColor}
              style={{
                fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 7.5rem)",
                lineHeight: "1.10",
                letterSpacing: "-0.03em",
              }}
              splitType="auto-lines"
              delay={200}
              duration={1.2}
              ease="power3.out"
              from={{ opacity: 0, y: 100 }}
              to={{ opacity: 1, y: 0 }}
              threshold={threshold}
              rootMargin={rootMargin}
              textAlign="left"
            />
          </div>

          {/* Second text with SplitText animation */}
          <div>
            <SplitText
              text={secondText}
              className={textColor}
              style={{
                fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 7.5rem)",
                lineHeight: "1.10",
                letterSpacing: "-0.03em",
              }}
              splitType="auto-lines"
              delay={200}
              duration={1.2}
              ease="power3.out"
              from={{ opacity: 0, y: 100 }}
              to={{ opacity: 1, y: 0 }}
              threshold={threshold}
              rootMargin={rootMargin}
              textAlign="left"
            />
          </div>
        </>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6,
          }}
          className="flex justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            iconRight={<ArrowUpRightSVG className="!size-6" />}
            className="max-w-40 mt-10"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
