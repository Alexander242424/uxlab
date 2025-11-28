"use client";

import { motion } from "motion/react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import OptionImage from "../../assets/image/OurCases/Option 22.jpg";
import GuideImage from "../../assets/image/OurCases/Option 28.png";
import BoostraImage from "../../assets/image/OurCases/Option23.jpg";

import EmmaLogo from "../../assets/image/OurCases/logo/emma-logo.svg";
import NestpressoLogo from "../../assets/image/OurCases/logo/Vector.svg";
import BoostraLogo from "../../assets/image/OurCases/logo/logo-main.svg";

import BoostraSmallImage from "../../assets/image/OurCases/4.png";
import SplitText from "../SplitText";
import VideoPlayer from "../VideoPlayer";

interface OurCasesItem {
  src: StaticImageData;
  alt: string;
  title: string;
  ImageSrc?: string | StaticImageData;
  videoSrc?: string;
  videoTitle?: string;
  fallbackImage?: StaticImageData;
  logo?: React.ReactNode;
  link?: string;
}

const cases: OurCasesItem[] = [{
  src: OptionImage,
  alt: "Emma usability audit case study",
  title: "Scaling Emma Sleep from Utility App to AI-Driven Lifestyle Platform",
  videoSrc: "/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4",
  videoTitle: "Emma usability audit\ncase study",
  logo: <EmmaLogo className="not-md:scale-[0.8]!" />,
  link: "/emma",
},
{
  src: BoostraImage,
  alt: "Boostra analysis case study",
  ImageSrc: BoostraSmallImage,
  title: "Designing an AI SaaS That Turns Drop-Offs into Revenue",
  videoTitle: "Boostra analysis case study",
  logo: <BoostraLogo className="not-md:scale-[0.8]!" />,
  link: "/boostra",
},
{
  src: GuideImage,
  alt: "Nespresso case study",
  title: "Redesigned Coffee Shopping into a High-Voltage Brand Experience",
  videoSrc: "/video/nespressso/1RrLHJkvBJzSxSMJgpCTlVSsrs.mp4",
  videoTitle: "Nespresso case study",
  logo: <NestpressoLogo className="not-md:scale-[0.8]!" />,
  link: "/nespresso",
},
];

const PREVIEW_WIDTH = 200;
const PREVIEW_HEIGHT = 264;
const PREVIEW_PADDING_X = 0;
const BOUNDARY_PADDING = 80;

export default function OurCases() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [captionOffset, setCaptionOffset] = useState(0);
  const captionRef = useRef<HTMLSpanElement | null>(null);
  

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (!isHovering || isMobile || hoveredIndex === null) return;

      const currentImage = document.querySelector(
        `#cases .cursor-pointer img[data-index="${hoveredIndex}"]`
      ) as HTMLElement | null;

      if (!currentImage || !captionRef.current) {
        setCaptionOffset(0);
        return;
      }

      const imageRect = currentImage.getBoundingClientRect();

      // положение мыши по ширине картинки: 0..1
      const relativeX = (e.clientX - imageRect.left) / imageRect.width;
      const clampedRelativeX = Math.min(Math.max(relativeX, 0), 1);

      const innerWidth = PREVIEW_WIDTH - PREVIEW_PADDING_X * 2;
      const captionWidth = captionRef.current.getBoundingClientRect().width;

      // если текст шире, чем область — просто ставим по центру, без движения
      if (captionWidth >= innerWidth) {
        setCaptionOffset((innerWidth - captionWidth) / 2);
        return;
      }

      // сколько свободного места от края до края, где может кататься текст
      const freeSpace = innerWidth + 20 - captionWidth; // >= 0

      // двигаем от 0 (левый край) до freeSpace (правый край)
      const offset = freeSpace * clampedRelativeX;
      setCaptionOffset(offset);
    },
    [isHovering, isMobile, hoveredIndex]
  );



  // === resize + mousemove ===
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    if (!isInitialized) {
      setMousePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setIsInitialized(true);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, isInitialized]);

  // === позиция/размер hover-превью (как курсор) ===
  const cursorStyles = useMemo(() => {
    if (!isHovering || isMobile || hoveredIndex === null) return null;

    const currentImage = document.querySelector(`#cases .cursor-pointer img[data-index="${hoveredIndex}"]`) as HTMLElement | null;

    // если не нашли картинку — ограничиваем окном
    if (!currentImage) {
      let left = mousePosition.x - PREVIEW_WIDTH / 2;
      let top = mousePosition.y - PREVIEW_HEIGHT / 2;

      if (left < 0) left = 0;
      if (left + PREVIEW_WIDTH > windowSize.width) left = windowSize.width - PREVIEW_WIDTH;
      if (top < 0) top = 0;
      if (top + PREVIEW_HEIGHT > windowSize.height) top = windowSize.height - PREVIEW_HEIGHT;

      return {
        left,
        top,
        width: `${PREVIEW_WIDTH}px`,
        height: `${PREVIEW_HEIGHT}px`,
      };
    }

    const imageRect = currentImage.getBoundingClientRect();

    let left = mousePosition.x - PREVIEW_WIDTH / 2;
    let top = mousePosition.y - PREVIEW_HEIGHT / 2;

    // Границы с учётом BOUNDARY_PADDING
    let minLeft = imageRect.left + BOUNDARY_PADDING;
    let maxLeft = imageRect.right - BOUNDARY_PADDING - PREVIEW_WIDTH;
    let minTop = imageRect.top + BOUNDARY_PADDING;
    let maxTop = imageRect.bottom - BOUNDARY_PADDING - PREVIEW_HEIGHT;

    // если карточка слишком маленькая / узкая — фоллбек без паддинга
    if (maxLeft < minLeft) {
      minLeft = imageRect.left;
      maxLeft = imageRect.right - PREVIEW_WIDTH;
    }
    if (maxTop < minTop) {
      minTop = imageRect.top;
      maxTop = imageRect.bottom - PREVIEW_HEIGHT;
    }

    left = Math.min(Math.max(left, minLeft), maxLeft);
    top = Math.min(Math.max(top, minTop), maxTop);

    // подстраховка границ окна
    if (left < 0) left = 0;
    if (left + PREVIEW_WIDTH > windowSize.width) left = windowSize.width - PREVIEW_WIDTH;
    if (top < 0) top = 0;
    if (top + PREVIEW_HEIGHT > windowSize.height) top = windowSize.height - PREVIEW_HEIGHT;

    return {
      left,
      top,
      width: `${PREVIEW_WIDTH}px`,
      height: `${PREVIEW_HEIGHT}px`,
    };
  }, [isHovering, isMobile, hoveredIndex, mousePosition.x, mousePosition.y, windowSize.width, windowSize.height]);

  // === gsap: плавное перемещение превью-курcора ===
  useEffect(() => {
    if (isHovering && !isMobile && cursorRef.current && cursorStyles && isInitialized) {
      gsap.to(cursorRef.current, {
        left: cursorStyles.left,
        top: cursorStyles.top,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, [isHovering, isMobile, cursorStyles, isInitialized]);

  const handleVideoError = useCallback((index: number) => {
    setVideoError(index);
  }, []);

  // === включаем/выключаем превью ===
  useEffect(() => {
    if (hoveredIndex !== null) {
      setVideoError(null);
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 0);

      return () => {
        clearTimeout(timer);
        setShowVideo(false);
      };
    } else {
      setShowVideo(false);
      setCaptionOffset(0);
    }
  }, [hoveredIndex]);

  return (
    <div id="cases" className="flex flex-col gap-8 my-[96px] md:my-[160px] mx-4 md:mx-10 relative">

      {isHovering &&
        !isMobile &&
        hoveredIndex !== null &&
        (cases[hoveredIndex]?.videoSrc || cases[hoveredIndex]?.ImageSrc) &&
        cursorStyles &&
        isInitialized &&
        showVideo && (
          <div
            ref={cursorRef}
            className="video-cursor hover-image"
            style={{
              ...cursorStyles,
            }}
          >

            <div className="image__wrapper">
              <div className="media cover">
                {cases[hoveredIndex].ImageSrc ? (
                  <Image
                    src={cases[hoveredIndex].ImageSrc}
                    alt={cases[hoveredIndex].alt}
                    loading="lazy"
                    width={PREVIEW_WIDTH}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                ) : videoError === hoveredIndex ? (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg">
                    <div className="text-center px-2">
                      <p className="text-gray-500 hoves-p1-reg text-xs">Video unavailable</p>
                      <Image
                        src={cases[hoveredIndex].src}
                        alt={cases[hoveredIndex].alt}
                        loading="lazy"
                        width={PREVIEW_WIDTH}
                        height={160}
                        className="w-full h-auto object-cover mt-2 rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <VideoPlayer
                    src={cases[hoveredIndex].videoSrc!}
                    className="w-full h-full object-cover"
                    onError={() => handleVideoError(hoveredIndex)}
                  />
                )}
              </div>
            </div>

            <span
              className="anime__wrapper block"
              style={{
                width: PREVIEW_WIDTH - 20,
                paddingLeft: PREVIEW_PADDING_X,
                paddingRight: PREVIEW_PADDING_X,
                boxSizing: "border-box",
              }}
            >
              <motion.span
                ref={captionRef}
                key={hoveredIndex}
                className="hoves-p3-reg text-text-700 inline-block"
                style={{ x: captionOffset }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: captionOffset }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {cases[hoveredIndex].videoTitle}
              </motion.span>
            </span>

          </div>
        )}

      {/* Заголовок */}
      <div className="hoves-p1-reg text-text-700">
        <SplitText
          text="Case Studies"
          className="hoves-p1-reg text-text-700"
          splitType="lines"
          delay={100}
          duration={0.5}
          ease="power3.out"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="left"
        />
      </div>

      {/* Карточки кейсов */}
      <div
        className="flex gap-2 md:gap-8 overflow-x-auto md:overflow-x-visible"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 w-full">
          {cases.map((item, index) => (
            <div key={index} className="flex flex-col gap-[21px] w-full case_box">
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => {
                  if (!isMobile) {
                    setHoveredIndex(index);
                    setIsHovering(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile) {
                    setHoveredIndex(null);
                    setIsHovering(false);
                  }
                }}
              >
                <Link href={item.link || "#"}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    data-index={index}
                    className={`w-full rounded-md image-hover-darken ${isHovering && hoveredIndex === index ? "brightness-50" : "brightness-100"}`}
                  />

                  {item.logo && (
                    <div
                      className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-[20px] md:mb-[32px] transition-opacity duration-300 ${isHovering && hoveredIndex === index ? "opacity-0" : "opacity-100"
                        }`}
                    >
                      {item.logo}
                    </div>
                  )}
                </Link>
              </div>

              <p className={`text-text-700 hoves-p1-reg transition-all duration-300 ${isHovering && hoveredIndex === index ? "opacity-75" : "opacity-100"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}