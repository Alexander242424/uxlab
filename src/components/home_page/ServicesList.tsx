"use client";

import React from "react";
import { motion } from "motion/react";
import VideoPlayer from "../VideoPlayer";

// 👉 СНАЧАЛА тип
export type ServiceItem = {
  title: string;
  subtitle: string;
  videoSrc: string;
};

type ServicesListProps = {
  services?: ServiceItem[]; // опционально
  onServiceClick?: (service: ServiceItem, index: number) => void;
  baseDelay?: number;
  viewportMargin?: string;
};

// 👉 ДЕФОЛТНЫЕ СЕРВИСЫ
const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: "Enhance customer\nexperience",
    subtitle: "When you need to design MVP from the ground up with a high-powered product team.",
    videoSrc: "/ServiceItemVideo/landnq.mp4",
  },
  {
    title: "Set the bar for category\ndefining brand",
    subtitle: "If you've proven product market fit and want to ensure your user experience is best-in-class, performant, and scalable.",
    videoSrc: "/ServiceItemVideo/pinance.mp4",
  },
  {
    title: "Sales grow thought\nboosting metrics",
    subtitle: "Working closely every day to support your team effectively and deliver fast design solutions within 24-48 hours.",
    videoSrc: "/ServiceItemVideo/paydesk.mp4",
  },
  {
    title: "Product and pricing\nexperimentation",
    subtitle: "We run and scale high-velocity A/B testing programs with one goal: increasing conversions and growing revenue.",
    videoSrc: "/ServiceItemVideo/seviceBell.mp4",
  },
];

export default function ServicesList({
  services = DEFAULT_SERVICES, 
  onServiceClick,
  baseDelay = 0.15,
  viewportMargin = "100px",
}: ServicesListProps) {
  return (
    <div className="space-y-0">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group cursor-pointer relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: viewportMargin }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * baseDelay,
          }}
        >
          {/* Верхняя линия */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px] bg-border-50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * baseDelay + 0.3,
            }}
            style={{ transformOrigin: "left" }}
          />

          <div
            className="flex items-center justify-between  min-h-[248px]"
            onClick={() => {
              onServiceClick?.(service, index);
            }}
          >
            <div className="flex px-10 items-center w-full flex-[3_1_auto] justify-between not-md:flex-wrap services_row">
              <div className="flex-col w-[50%] not-sm:w-full sm:flex-[1]">
                <h3 className="hoves-40px-fluid w-full text-text-700 relative group/title">
                  {service.title}
                </h3>
                <p className="text-text-500 hoves-p1-reg pt-2 md:pt-3 hidden not-md:block">
                  {service.subtitle}
                </p>
              </div>
              <div className="flex w-[100%] not-sm:mt-[20px] sm:w-[50%] ml-auto justify-center">
                <div className="group-hover:max-h-[468px] flex justify-center group-hover:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-1000 ease-out video_box">
                  <VideoPlayer
                    src={service.videoSrc}
                    className="w-full h-full  w-full sm:max-w-[468px] object-cover"
                  />
                </div>
              </div>
              <p className="text-text-500 w-[20%] hidden md:block hoves-p1-reg pt-2 md:pt-3">
                {service.subtitle}
              </p>
            </div>
          </div>

          {/* Нижняя линия только у последнего */}
          {index === services.length - 1 && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[1px] bg-border-50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: viewportMargin }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * baseDelay + 0.3,
              }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
