"use client";

import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

type ListContent = {
    type: "list";
    intro?: string;
    items: string[];
};

type MetricsItem = {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
};

type MetricsContent = {
    type: "metrics";
    items: MetricsItem[];
};

type RightColumnItem = string | ListContent | MetricsContent;

interface OverviewCaseTestimonialSectionProps {
    leftColumn: string[];
    rightColumn: RightColumnItem[];
    mobileText?: string | string[];
    authorText?: string;
    lineRows?: number[];
    textColorClass?: string;
    threshold?: number;
}
const CountUp = dynamic(() => import("react-countup"), {
    ssr: false,
});
export default function OverviewCaseTestimonialSection({
    leftColumn,
    rightColumn,
    lineRows,
    textColorClass,
    threshold,
}: OverviewCaseTestimonialSectionProps) {
    const rowsCount = Math.max(leftColumn.length, rightColumn.length);
    const lineRowsSet = new Set(lineRows ?? []);

    const renderRightContent = (item: RightColumnItem | undefined, idx: number) => {
        if (!item) return null;

        if (typeof item === "string") {
            const parts = item.split(/\r?\n/);

            return (
                <div className="t-p1 text-neutral-100 max-w-[640px] space-y-4">
                    {parts.map((part, i) => (
                        <p key={`${idx}-p-${i}`}>{part}</p>
                    ))}
                </div>
            );
        }

        if (item.type === "list") {
            return (
                <>
                    {item.intro && (
                        <p className="t-p1">
                            {item.intro}
                        </p>
                    )}
                    <ul className="t-p1 list-disc pl-5">
                        {item.items.map((li, i) => (
                            <li key={`${idx}-li-${i}`}>{li}</li>
                        ))}
                    </ul>
                </>
            );
        }


        if (item.type === "metrics") {
            return (
                <div className="flex flex-col gap-10 md:gap-12">
                    {item.items.map((metric, i) => (
                        <div key={`${idx}-metric-${i}`} className="flex flex-col">
                            <CountUp
                                start={0}
                                end={metric.value}
                                duration={3}
                                decimals={Number.isInteger(metric.value) ? 0 : 1}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                // ❌ enableScrollSpy — УБРАЛИ (он даёт target null в Next dev)
                                // scrollSpyOnce / scrollSpyDelay тоже не нужны без enableScrollSpy
                                prefix={metric.prefix ?? ""}
                                suffix={metric.suffix ?? ""}
                            >
                                {({ containerRef, countUpRef }: any) => (
                                    <span
                                        ref={containerRef ?? countUpRef}
                                        className="not-md:text-[7.5rem] text-[10.5rem] big_quants"
                                    />
                                )}
                            </CountUp>

                            <span className="t-p1 text-[#A3A3A3] mt-3">{metric.label}</span>
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <section className="mx-4 case_text_section">
            <div className="container-fluid">
                <div className="row">
                    {Array.from({ length: rowsCount }).map((_, idx) => {
                        const left = leftColumn[idx];
                        const right = rightColumn[idx];
                        const showLine = lineRowsSet.has(idx);

                        return (
                            <React.Fragment key={idx}>
                                {/* левая колонка — лейблы */}
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    {left && <span className="t-p1">{left}</span>}
                                </div>

                                {/* правая колонка — контент + опциональная линия */}
                                <div className="col-lg-8">
                                    <div className="col-lg-4">
                                        {renderRightContent(right, idx)}
                                    </div>
                                    {showLine && (
                                        <motion.div
                                            className={`my-[32px] h-[1px] line_animated ${textColorClass || "text-text-300"
                                                }`}
                                            style={{
                                                backgroundColor: "#FFFFFF29",
                                                transformOrigin: "left center",
                                            }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{
                                                amount: threshold ?? 0.5,
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 2.0,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                        />
                                    )}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
