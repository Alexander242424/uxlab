// src/components/cases/CaseSection3_9.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import OverviewCaseVideoSection from "@/components/cases/OverviewCaseVideoSection";

interface CaseSection3_9Props {
    className?: string;

    // левая колонка
    leftImageSrc?: string | StaticImageData;
    leftImageAlt?: string;
    leftOverline?: string;
    leftTitle?: string;
    leftBody?: string | string[];
    videoSrc?: string;
    videoImageSrc?: string | StaticImageData;
    videoImageAlt?: string;
    isAnimated?: boolean;
}

export default function CaseSection3_9({
    className,
    leftImageSrc,
    leftImageAlt,
    leftOverline,
    leftTitle,
    leftBody,
    videoSrc,
    videoImageSrc,
    videoImageAlt,
    isAnimated = true,
}: CaseSection3_9Props) {
    const hasLeft = leftImageSrc || leftOverline || leftTitle || leftBody;

    return (
        <section className={cn("case_section_3_8 mx-4", className)}>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3 flex flex-col justify-between mb-4 mb-lg-0">
                        {hasLeft && (
                            <>
                                {leftTitle && (
                                    <h2 className="t-h3">
                                        {leftTitle}
                                    </h2>
                                )}

                                {leftBody && (
                                    Array.isArray(leftBody) ? (
                                        <div className="space-y-3">
                                            {leftBody.map((p, i) => (
                                                <p key={i} className="t-p1 text-neutral-200">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="t-p1 text-neutral-200">
                                            {leftBody}
                                        </p>
                                    )
                                )}
                                {leftImageSrc && (
                                    <Image
                                        src={leftImageSrc}
                                        alt={leftImageAlt || ""}
                                        loading="lazy"
                                        className="w-full object-cover rounded-[4px]"
                                    />
                                )}
                            </>
                        )}
                    </div>

                    {/* правая колонка 9/12 — видео / картинка */}
                    <div className="col-lg-9">
                        <OverviewCaseVideoSection
                            className="w-full mx-0"
                            src={videoSrc}
                            imageSrc={videoImageSrc}
                            imageAlt={videoImageAlt}
                            isAnimated={isAnimated}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
