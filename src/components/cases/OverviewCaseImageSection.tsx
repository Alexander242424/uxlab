"use client";

import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
type TextBlock = {
    title: string;
    body: string | string[];
};
interface OverviewCaseImageSectionProps {
    className?: string;
    imageSrc: string | StaticImageData;
    imageAlt: string;
    imageSrc2?: string | StaticImageData;
    imageAlt2?: string;
    videoSrc?: string;
    iSsmallColumn?: boolean;
    imageClassName?: string;
    imageClassName2?: string;
    videoClassName?: string;
}

export default function OverviewCaseImageSection({
    className,
    imageSrc,
    imageAlt,
    imageSrc2,
    imageAlt2,
    videoSrc,
    iSsmallColumn = false,
    imageClassName,
    imageClassName2,
    videoClassName,
}: OverviewCaseImageSectionProps) {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: "-100px",
    });

    return (
        <section
            ref={ref}
            className={cn(
                "case_images_section mx-4",
                className
            )}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className={iSsmallColumn ? "col-lg-4" : "col-lg-6"}>
                        <motion.div
                            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                            animate={
                                inView
                                    ? { clipPath: "inset(0% 0% 0% 0%)" }
                                    : { clipPath: "inset(0% 0% 100% 0%)" }
                            }
                            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                            className={cn(
                                "overflow-hidden",
                                !iSsmallColumn
                                    ? ""
                                    : ""
                            )}
                        >
                            {videoSrc ? (
                                <VideoPlayer
                                    className={cn("w-full h-full object-cover", videoClassName)}
                                    src={videoSrc}
                                    aspectRatio={""}
                                />
                            ) : (
                                <Image
                                    className={cn("w-full h-full object-cover", imageClassName2)}
                                    loading={"lazy"}
                                    src={imageSrc2 || ""
                                    }
                                    alt={imageAlt2 || ""}
                                />
                            )}
                        </motion.div>
                    </div>
                    <div className={iSsmallColumn ? "col-lg-8" : "col-lg-6"}>
                        <motion.div
                            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                            animate={
                                inView
                                    ? { clipPath: "inset(0% 0% 0% 0%)" }
                                    : { clipPath: "inset(0% 0% 100% 0%)" }
                            }
                            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
                            className={cn(
                                "overflow-hidden",
                                !iSsmallColumn
                                    ? ""
                                    : ""
                            )}
                        >
                            <Image
                                className={cn("w-full h-full object-cover", imageClassName)}
                                loading={"lazy"}
                                src={imageSrc}
                                alt={imageAlt}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
