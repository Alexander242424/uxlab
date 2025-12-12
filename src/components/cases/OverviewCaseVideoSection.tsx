"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function OverviewCaseVideoSection({
    className,
    src,
    imageSrc,
    imageAlt,
    isAnimated = true,
}: {
    className?: string;
    src?: string;
    imageSrc?: string | StaticImageData;
    imageAlt?: string;
    isAnimated?: boolean;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        isAnimated ? (
            <motion.section
                ref={containerRef}
                className={cn(
                    "mx-4 case_case__video_section",
                    className
                )}
                style={{ clipPath }}
            >
                <div className="container-fluid">
                    {src ? (
                        <VideoPlayer aspectRatio="" src={src} />
                    ) : (
                        <Image loading={"lazy"} src={imageSrc || ""} alt={imageAlt || ""} className="w-full h-full object-cover" />
                    )}
                </div>
            </motion.section>
        ) : (
            <section ref={containerRef} className={cn("mx-4 case_case__video_section", className)}>
                <div className="container-fluid">
                    {src ? (
                        <VideoPlayer aspectRatio="" src={src} />
                    ) : (
                        <Image loading={"lazy"} src={imageSrc || ""} alt={imageAlt || ""} className="w-full h-full object-cover" />
                    )}
                </div>
            </section>
        )
    );
}
