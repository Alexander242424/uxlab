"use client";

import VideoPlayer from "@/components/VideoPlayer";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface OverviewCaseVideoTextSectionProps {
    videoSrc?: string;
    imageSrc?: string | StaticImageData;
    imageAlt?: string;
    firstText: string;
    secondText: string;
    videoClassName?: string;
    textMaxWidth?: string;
    videoColClass?: string;
    textColClass?: string;
}

export default function OverviewCaseVideoTextSection({
                                                         videoSrc,
                                                         imageSrc,
                                                         imageAlt,
                                                         firstText,
                                                         secondText,
                                                         videoClassName = "",
                                                         textMaxWidth = "",
                                                         videoColClass = "col-lg-6",
                                                         textColClass = "col-lg-6",
                                                     }: OverviewCaseVideoTextSectionProps) {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
        rootMargin: "-100px",
    });

    return (
        <section
            ref={ref}
            className="overview_case_video_text_section mt-[40px] mx-4"
        >
            <div className="container-fluid">
                <div className="row">
                    <motion.div
                        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        animate={
                            inView
                                ? { clipPath: "inset(0% 0% 0% 0%)" }
                                : { clipPath: "inset(0% 0% 100% 0%)" }
                        }
                        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                        className={cn("overflow-hidden", videoColClass, videoClassName)}
                    >
                        {videoSrc ? (
                            <VideoPlayer
                                className="w-full h-full object-cover rounded-[4px]"
                                aspectRatio=""
                                src={videoSrc}
                            />
                        ) : (
                            <Image
                                loading="lazy"
                                src={imageSrc || ""}
                                alt={imageAlt || ""}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </motion.div>

                    <div className={cn(textColClass)}>
                        <div className={cn("", textMaxWidth)}>
                            <p className="t-p1 mb-4">{firstText}</p>
                            <p className="t-p1">{secondText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
