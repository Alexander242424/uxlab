"use client";
import React from "react";

interface SlideItem {
    icon: React.ReactNode;
    label?: string;
}

interface InfiniteSliderProps {
    slides: SlideItem[];
    duration?: number;   
    className?: string;
    slideSpacing?: number;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
    slides,
    className = "",
    slideSpacing = 80,
}) => {
    return (
        <section
            className={`w-full h-full flex md:flex-nowrap items-center ${className}`}
            style={{ columnGap: slideSpacing, rowGap: 24 }}
        >
            <div className="container-fluid">
                <div className="row justify-center overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="col col-md-3 flex items-center justify-center"
                            style={{
                                minWidth: "fit-content",
                            }}
                        >
                            <div className="flex items-center justify-center">
                                {slide.icon}
                            </div>
                            {slide.label && (
                                <span className="ml-2 t-p2 text-neutral-300">
                                    {slide.label}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfiniteSlider;
