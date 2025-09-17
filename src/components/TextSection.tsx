"use client";
import { Button } from "@/components/ui/button";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import { motion } from "motion/react";
import SplitText from "./SplitText";
import { useIsMobile } from "@/hooks/useIsMobile";

interface TextSectionProps {
  firstText: string;
  secondText: string | string[];
  mobileText?: string | string[];
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
  mobileText,
  showButton = false,
  buttonText = "Book a Call",
  className = "",
  textColor = "text-text-700",
  rootMargin = "-100px",
  threshold = 0.6,
}: TextSectionProps) {
  const isMobile = useIsMobile();

  // Convert secondText to array if it's a string
  const secondTextArray = Array.isArray(secondText) ? secondText : [secondText];

  // Create combined array for mobile
  const mobileTextArray = Array.isArray(mobileText) ? mobileText : [mobileText];

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {isMobile ? (
        <div className="flex flex-col">
          {mobileTextArray.map((text, index) => (
            <SplitText
              key={index}
              text={text || ""}
              className={textColor}
              globalIndex={index} // Додаємо глобальний індекс
              style={{
                fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.3rem, 8.8vw, 3rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
              splitType="lines"
              delay={100}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 100 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin={rootMargin}
              textAlign="left"
            />
          ))}
        </div>
      ) : (
        <>
          {/* First text with SplitText animation */}
          <div className="flex justify-start sm:justify-start md:justify-end">
            <SplitText
              text={firstText}
              className={textColor}
              globalIndex={0} // Перший елемент
              style={{
                fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 7.5rem)",
                lineHeight: "1.10",
                letterSpacing: "-0.03em",
              }}
              splitType="lines"
              delay={100}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 100 }}
              to={{ opacity: 1, y: 0 }}
              threshold={threshold}
              rootMargin={rootMargin}
              textAlign="left"
            />
          </div>

          {/* Second text with SplitText animation - each line as separate SplitText */}
          <div>
            {secondTextArray.map((text, index) => (
              <SplitText
                key={index}
                text={text}
                className={textColor}
                globalIndex={1 + index} // Продовжуємо нумерацію після першого тексту
                style={{
                  fontFamily: "var(--font-tt-hoves), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 5vw, 7.5rem)",
                  lineHeight: "1.10",
                  letterSpacing: "-0.03em",
                }}
                splitType="lines"
                delay={200}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 100 }}
                to={{ opacity: 1, y: 0 }}
                threshold={threshold}
                rootMargin={rootMargin}
                textAlign="left"
              />
            ))}
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
            className="w-full max-w-40 mt-10 scale-100 2xl:scale-[150%] 2xl:ml-10 2xl:mt-10"
            onClick={() => window.open('https://cal.com/eugene.orehov/30min?overlayCalendar=true', '_blank')}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
