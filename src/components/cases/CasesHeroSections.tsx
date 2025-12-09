"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import TextSection from "../home_page/TextSection";
import {useRef} from "react";
import {useIsMobile} from "@/hooks/useIsMobile";

interface CasesHeroSectionsProps {
    logo: React.ReactNode;
    logoMobile: React.ReactNode;
    text: string | string[];
    companyName: string;
    year: string;
    deliverables: string;
}

export default function CasesHeroSections({
                                              logo,
                                              logoMobile,
                                              text,
                                              companyName,
                                              year,
                                              deliverables,
                                          }: CasesHeroSectionsProps) {
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);


    const textArray = Array.isArray(text) ? text : [text];

    return (
        <section ref={containerRef} className="mx-4 case_hero_section flex-col flex relative min-h-[calc(100vh-72px-130px)] sm:min-h-[calc(100vh-72px-120px)] lg:min-h-[calc(100vh-72px-200px)]">
            <motion.div className="mt-0 container-fluid">
                <div className="row">
                    <div className="mb-[48px] mt-[40px] col-lg-4">
                        {isMobile ? logoMobile : logo}
                    </div>

                    <div className="col-lg-8">
                        <p className="block sm:hidden text-text-500 t-p1 pb-4">
                            Emma Sleep
                        </p>

                        <TextSection
                            className=""
                            text={[
                                "Innovating Personalized Sleep Worldwide",
                            ]}
                            mobileText={[
                                "Innovating Personalized Sleep Worldwide",
                            ]}
                            showLine={false}
                        />

                    </div>
                </div>
            </motion.div>
            <div className="mt-0 container-fluid">
                <div className="row case_hero__info_row mt-auto">
                    <div className="col-lg-4">
                        <p className="t-p2 text-[#A3A3A3]">Client</p>
                        <p className="t-p2">{companyName}</p>
                    </div>

                    <div className="col-lg-8 flex flex-col sm:flex-row gap-8">
                        <div className="flex flex-col gap-2 sm:min-w-[212px]">
                            <p className="t-p2 text-[#A3A3A3]">Duration</p>
                            <p className="t-p2">{year}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="t-p2 text-[#A3A3A3]">Focus</p>
                            <p className="t-p2">{deliverables}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
