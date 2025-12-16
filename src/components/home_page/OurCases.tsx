"use client";

import { motion } from "motion/react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";


import GuideImage from "../../assets/image/OurCases/nespresso.webp";
import Foundrae_main from "../../assets/image/OurCases/foundrae.webp";
import MacDuggal from "../../assets/image/OurCases/mac_duggal.webp";
import Valyou from "../../assets/image/OurCases/valyou.webp";
import Wellow from "../../assets/image/OurCases/wellow.webp";
import Royal from "../../assets/image/OurCases/royal_queen_seeds_2.webp";


import VideoPlayer from "../VideoPlayer";

interface OurCasesItem {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  ImageSrc?: string | StaticImageData;
  videoSrc?: string;
  videoTitle?: string;
  fallbackImage?: StaticImageData;
  logo?: string;
  link?: string;
}

const cases: OurCasesItem[] = [
  {
    src: GuideImage,
    alt: "Nespresso",
    title: "Nespresso",
    description: "Designing a leading online coffee marketplace with a focus on higher CR and LTV",
    videoSrc: "/video/our_cases/Nespresso.mp4",
    videoTitle: "Nespresso case study",
    logo: "/image/OurCases/logo/nespresso_log.svg",
    link: "/nespresso",
  },
  {
    src: Foundrae_main,
    alt: "Foundrae",
    title: "Foundrae",
    description: "Elevating revenue of jewerly online store by additional 23% in 2 months",
    videoSrc: "/video/our_cases/Foundrae.mp4",
    videoTitle: "Foundrae AOV improvement case",
    logo: "/image/OurCases/logo/foundrae_log.svg",
    link: "/foundrae",
  },
  {
    src: MacDuggal,
    alt: "Mac Duggal",
    title: "Mac Duggal",
    description: "Uplifting Add-to-Cart rate by 33%  for luxury fashion brand with A/B tests in 3 months",
    videoSrc: "/video/our_cases/Mac_Duggal.mp4",
    videoTitle: "Luxury Fashion Brand A/B testing",
    logo: "/image/OurCases/logo/mac_duggal_log.svg",
    link: "/mucduggal",
  },
  {
    src: Valyou,
    alt: "Valyou Furniture",
    title: "Valyou Furniture",
    description: "Running A/B tests to find the most performing case based on real data",
    videoSrc: "/video/our_cases/Valyou_Furniture.mp4",
    videoTitle: "Furniture brand CR unlock",
    logo: "/image/OurCases/logo/valyou_log.svg",
    link: "/valyou",
  },
  {
    src: Wellow,
    alt: "Wellow Socks",
    title: "Wellow Socks",
    description: "Transforming brand into niche leader by increasing Conversion Rate",
    videoSrc: "/video/our_cases/Wellow_Socks.mp4",
    videoTitle: "Sales uplift without no ads spent",
    logo: "/image/OurCases/logo/wellow_log.svg",
    link: "/wellow",
  },
  {
    src: Royal,
    alt: "Royal Queen Seeds",
    title: "Royal Queen Seeds",
    description: "Improving Conversion Rate from 3.2% to 4% while increasing AOV from $23 to $54 in 3 months",
    videoSrc: "/video/our_cases/Royal_Queen_Seeds.mp4",
    videoTitle: "CR and AOV eCommerce grow",
    logo: "/image/OurCases/logo/rqs_rebranding_logo_header_log.svg",
    link: "/seeds",
  },

];


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


   const [previewConfig, setPreviewConfig] = useState(() => {
    // на сервере window нет
    if (typeof window === "undefined") {
      return {
        width: 200,
        height: 264,
        boundaryPadding: 80,
      };
    }

    const windowSize = window.innerWidth;
    const isTabletOrLess = windowSize <= 1023;

    const wdt = isTabletOrLess ? 150 : 200;
    const ht = isTabletOrLess ? 200 : 264;
    const boundary = Math.max(20, Math.min(windowSize * 0.05, 120));

    return {
      width: wdt,
      height: ht,
      boundaryPadding: boundary,
    };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const windowSize = window.innerWidth;
      const isTabletOrLess = windowSize <= 1023;

      const wdt = isTabletOrLess ? 150 : 200;
      const ht = isTabletOrLess ? 200 : 264;
      const boundary = Math.max(20, Math.min(windowSize * 0.05, 120));

      setPreviewConfig({
        width: wdt,
        height: ht,
        boundaryPadding: boundary,
      });
    };

    handleResize(); // посчитать сразу при маунте
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const PREVIEW_WIDTH = previewConfig.width;
  const PREVIEW_HEIGHT = previewConfig.height;
  const PREVIEW_PADDING_X = 0;
  const BOUNDARY_PADDING = previewConfig.boundaryPadding;


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


      const relativeX = (e.clientX - imageRect.left) / imageRect.width;
      const clampedRelativeX = Math.min(Math.max(relativeX, 0), 1);

      const innerWidth = PREVIEW_WIDTH - PREVIEW_PADDING_X * 2;
      const captionWidth = captionRef.current.getBoundingClientRect().width;


      if (captionWidth >= innerWidth) {
        setCaptionOffset((innerWidth - captionWidth) / 2);
        return;
      }


      const freeSpace = innerWidth + 20 - captionWidth;


      const offset = freeSpace * clampedRelativeX;
      setCaptionOffset(offset);
    },
    [isHovering, isMobile, hoveredIndex]
  );




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


  const cursorStyles = useMemo(() => {
    if (!isHovering || isMobile || hoveredIndex === null) return null;

    const currentImage = document.querySelector(`#cases .cursor-pointer img[data-index="${hoveredIndex}"]`) as HTMLElement | null;


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


    let minLeft = imageRect.left + BOUNDARY_PADDING;
    let maxLeft = imageRect.right - BOUNDARY_PADDING - PREVIEW_WIDTH;
    let minTop = imageRect.top + BOUNDARY_PADDING;
    let maxTop = imageRect.bottom - BOUNDARY_PADDING - PREVIEW_HEIGHT;


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
    <div id="cases" className="mx-4 flex flex-col gap-8 my-[96px] md:my-[160px]  relative">

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
                    aspectRatio=""
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
                className="t-p2 text-text-700 inline-block"
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

      <div className="container-fluid">
        {/* Карточки кейсов */}
        <div
          className="row case_box_container"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cases.map((item, index) => (
            <div key={index} className="col-md-6 flex flex-col gap-[21px] case_box">
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
                    width={950}
                    height={300}
                    quality={95}
                    data-index={index}
                    className={`w-full rounded-[4px] image-hover-darken ${isHovering && hoveredIndex === index ? "brightness-50" : "brightness-100"}`}
                  />

                  {item.logo && (
                    <div
                      className={`absolute bottom-4 mb-[20px] md:mb-[32px] transition-opacity duration-300 ${isHovering && hoveredIndex === index ? "opacity-0" : "opacity-100"
                        }`}
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.title} logo`}
                        width={147}
                        height={37}
                        className="w-auto h-auto max-w-full not-md:scale-[0.8]"
                      />
                    </div>
                  )}
                </Link>
              </div>
              <div className="cases_text_box flex justify-between items-start w-full">
                <p className={`t-p1 transition-all text duration-300 ${isHovering && hoveredIndex === index ? "opacity-75" : "opacity-100"
                  }`}
                >
                  {item.title}
                </p>
                <p className=" t-p1 transition-all text-[#A3A3A3] duration-300 mx-auto">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}