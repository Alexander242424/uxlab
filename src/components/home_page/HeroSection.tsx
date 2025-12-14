"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import WeMakeInterfacesSVG from "@/assets/We_Make_Interfaces";
import {useRef} from "react";
import {useIsMobile} from "@/hooks/useIsMobile";

export default function HeroSection() {
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the text block (slow down motion)
    const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <section
            ref={containerRef}
            className="hero_section mx-4 flex flex-col relative min-h-[calc(100dvh - 20%)]"
        >
            <motion.div
                className="container-fluid hero-section-text 2xl:top-0 right-0 w-full mb-[160px] mt-0 "
                style={{y: textBlockY}}
            >
                <div className="row mx-0 min-h-[300px]">
                    <div className="col-sm-6 col-12 sm:ml-auto flex justify-start  hero_text_block">
                        <div className="flex-col flex">
                            <p className="t-p1 sm:text-right !text-nowrap ">
                                Work with eCommerce brands
                            </p>
                            <p className="t-p1 !text-nowrap">
                                to uplift CR, AOV, LTV, ATC, Checkout rate, Retention,
                            </p>
                            <p className="t-p1 !text-nowrap">
                                and more metrics to unlock revenue grow.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="mt-auto row mx-0">
                <div className="col-lg-12">
                    <WeMakeInterfacesSVG word="interfaces"/>
                </div>
            </div>
        </section>
    );
}
