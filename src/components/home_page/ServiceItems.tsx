"use client";
import { motion } from "motion/react";
import Link from "next/link";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import SplitText from "../SplitText";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCalModal } from "@/context/CalModalContext";
import VideoPlayer from "../VideoPlayer";
import dynamic from "next/dynamic";
interface ServiceItem {
  title: string;
  subtitle: string;
  videoSrc: string;
  time: string;
}
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
// Кастомний компонент для рендерингу тексту з посиланнями
const TextWithLinks = ({
  text,
  className,
  globalIndex,
  delay = 100,
  duration = 0.8,
  ease = "power3.out",
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "100px",
}: {
  text: string;
  className: string;
  globalIndex: number;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: { opacity: number; y: number };
  to?: { opacity: number; y: number };
  threshold?: number;
  rootMargin?: string;
}) => {
  const isMobile = useIsMobile();

  // Функція для розбиття тексту на частини з посиланнями
  const parseTextWithLinks = (text: string) => {
    const parts: Array<{ type: "text" | "link"; content: string; href?: string }> = [];

    // Знаходимо всі посилання в тексті
    const linkPatterns = [
      { pattern: /Boostra/g, href: "http://getboostra.com" },
      { pattern: /Tapmy\.store/g, href: "https://app.tapmy.store/get-started" },
    ];

    // Збираємо всі знайдені посилання з їх позиціями
    const allMatches: Array<{ content: string; href: string; index: number }> = [];
    linkPatterns.forEach(({ pattern, href }) => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        allMatches.push({
          content: match[0],
          href,
          index: match.index,
        });
      }
    });

    // Сортуємо за позицією
    allMatches.sort((a, b) => a.index - b.index);

    if (allMatches.length === 0) {
      parts.push({ type: "text", content: text });
    } else {
      let lastIndex = 0;

      allMatches.forEach((match) => {
        // Додаємо текст перед посиланням
        if (match.index > lastIndex) {
          const beforeText = text.substring(lastIndex, match.index);
          if (beforeText) {
            parts.push({ type: "text", content: beforeText });
          }
        }

        // Додаємо посилання
        parts.push({ type: "link", content: match.content, href: match.href });
        lastIndex = match.index + match.content.length;
      });

      // Додаємо текст після останнього посилання
      if (lastIndex < text.length) {
        const afterText = text.substring(lastIndex);
        if (afterText) {
          parts.push({ type: "text", content: afterText });
        }
      }
    }

    return parts;
  };

  const textParts = parseTextWithLinks(text);

  return (
    <motion.span
      className="inline-block"
      initial={from}
      whileInView={to}
      viewport={{ once: true, margin: rootMargin }}
      transition={{
        duration,
        delay: delay / 1000 + globalIndex * 0.3,
        ease: ease === "power3.out" ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
      }}
    >
      {textParts.map((part, index) => {
        if (part.type === "link" && part.href) {
          return (
            <Link key={index} href={part.href} className={`${className} inline relative group`}>
              {part.content}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] header-underline underline-animation"></span>
            </Link>
          );
        }
        return (
          <span key={index} className={className}>
            {part.content}
          </span>
        );
      })}
    </motion.span>
  );
};

const services: ServiceItem[] = [
  {
    title: "Ship new products from zero-to-one",
    subtitle: "When you need to design MVP from the ground up with a high-powered product team.",
    videoSrc: "/ServiceItemVideo/landnq.mp4",
    time: "4 - 8 weeks",
  },
  {
    title: "Set the bar for category defining design",
    subtitle: "If you've proven product market fit and want to ensure your user experience is best-in-class, performant, and scalable.",
    videoSrc: "/ServiceItemVideo/pinance.mp4",
    time: "8 - 12 weeks",
  },
  {
    title: "Day-to-day exceptional design support",
    subtitle: "Working closely every day to support your team effectively and deliver fast design solutions within 24-48 hours.",
    videoSrc: "/ServiceItemVideo/paydesk.mp4",
    time: "Starting from 4 weeks",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    subtitle: "We run and scale high-velocity A/B testing programs with one goal: increasing conversions and growing revenue.",
    videoSrc: "/ServiceItemVideo/seviceBell.mp4",
    time: "4 - 12 weeks",
  },
];

// Define text arrays for SplitText components
const firstParagraph = [
  "Since 2012, we helped the most innovative and",
  "reputable brands design, improve and ship the most",
  "effective experiences.",
];

const secondParagraph = [
  "Consistent results are delivered through our unique,",
  "DesignOps Framework and flexible collaboration",
  "model.",
];

const firstParagraphMobile = [
  "Since 2012, we've helped",
  "the most innovative startups and",
  "reputable brands design and launch",
  "digital products people",
  "talk about loudly.",
];

const secondParagraphMobile = [
  "UXLAB moves at the speed of",
  "your roadmap; we don't design ",
  "screens, we design revenue.",
  "Working shoulder-to shoulder",
  "with founders and your product",
  "team to deliver fast.",
];

const quantsList = [
  { value: 2.2, suffix: "B", label: "Global users reached" },
  { value: 138, suffix: "", label: "Brands uplifted" },
  { value: 2, suffix: "", label: "Product sprint" },
];

export default function ServiceItems() {
  const isMobile = useIsMobile();
  const { openModal } = useCalModal();

  const handleCalClick = () => {
    openModal("https://cal.com/eugene.orehov/30min?overlayCalendar=true");
  };

  return (
    <section id="services" className="bg-bg-black mx-4 md:mx-10 pt-10 md:pt-20 relative overflow-hidden">
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
        <div className="sm:w-[47%] hidden md:flex items-start">
          <div className="grid not-sm:flex-col not-sm:gap-8 w-full">
            <SplitText
              text="Your Growth Starts Here."
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
          <div className="flex quants_row">
            {quantsList.map((quant, index) => (
              <div key={index} className="flex flex-col mr-8 last:mr-0 quant">
                <span className="hoves-h3-med text-text-700 main_text">
                  <CountUp
                    start={0}
                    end={quant.value}
                    duration={3}
                    decimals={Number.isInteger(quant.value) ? 0 : 1} // 2.2 -> 1 знак
                    enableScrollSpy
                  />
                  {quant.suffix}
                </span>
                <span className="text-text-500 hoves-p1-reg mt-2">{quant.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
