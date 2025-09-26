"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SplitText from "../SplitText";
import EmblaCarousel from "../EmblaCarousel";
import { useIsMobile } from "@/hooks/useIsMobile";
import VideoCard from "./VideoCard";

// Logos
import ForbesAvatar from "@/assets/Glance/Ellipse 3316.svg";
import CalendlyLogo from "@/assets/Glance/Logo for cases/calendly.svg";
import ArhiveLogo from "@/assets/Glance/Logo for cases/archive.svg";
import EasyjetLogo from "@/assets/Glance/Logo for cases/easyjet.svg";
import ForbesLogo from "@/assets/Glance/Logo for cases/forbes.svg";
import NumaLogo from "@/assets/Glance/Logo for cases/numa.svg";
import RoyalQueenLogo from "@/assets/Glance/Logo for cases/royal.svg";
import ScheiderLogo from "@/assets/Glance/Logo for cases/Schneider.svg";
import ToyotaLogo from "@/assets/Glance/Logo for cases/Toyota_Logo 1.svg";
import WellowLogo from "@/assets/Glance/Logo for cases/wellow.svg";

// Images
import CalendlyImage from "../../assets/Glance/Images/Calendly.jpg";
import ArhiveImage from "../../assets/Glance/Images/Archive.jpg";
import EasyjetImage from "../../assets/Glance/Images/Easyjet.jpg";
import ForbesImage from "../../assets/Glance/Images/Forbes.jpg";
import NumaImage from "../../assets/Glance/Images/Numa.jpg";
import RoyalQueenImage from "../../assets/Glance/Images/Royal queen seeds.jpg";
import ScheiderImage from "../../assets/Glance/Images/Scheider.jpg";
import ToyotaImage from "../../assets/Glance/Images/Toyota.jpg";
import WellowImage from "../../assets/Glance/Images/Wellow.jpg";

const slides = [
  {
    element: (
      <VideoCard
      classNames="max-w-[456px] min-h-[305px] text-black"
      containerClassName="min-h-[305px]"
      badgetText="saas"
      imageSrc={CalendlyImage}
      descriptionText="Calendly's clear vision definition prduct roadmap and feature positioning for the future."
      logo={<CalendlyLogo />}
      withAuthor={false}
    />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={ScheiderImage}
        classNames="max-w-[456px] min-h-[305px]"
        containerClassName="min-h-[305px]"
        badgetText="IOT"
        descriptionText="Helped Schneider Electric achieve a 22% revenue uplift by optimizing the ordering funnel for EV charging wallbox systems."
        logo={<ScheiderLogo />}
        withAuthor={false}
        videoSrc={"/glance-section-video/schneider.mp4"}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={NumaImage}
        classNames="max-w-[456px] min-h-[482px] text-black"
        containerClassName="min-h-[482px]"
        badgetText="Travel"
        descriptionText="Next-level experience for booking boutique apartments online."
        logo={<NumaLogo />}
        withAuthor={false}
        videoSrc={"/glance-section-video/numa.mp4"}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={ForbesImage}
        classNames="max-w-[456px] min-h-[440px]"
        containerClassName="min-h-[440px]"
        badgetText="Marketplaces"
        descriptionText="They helped us to launch and scal 4 new products from zero-to-one and reach 50k paid users in less than 12 months."
        authorText="Gerhard Marringer"
        logo={<ForbesLogo />}
        avatar={<ForbesAvatar />}
        isForbes={true}
        videoSrc={"/glance-section-video/forbes.mp4"}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={ArhiveImage}
        classNames="max-w-[456px] min-h-[440px]"
        containerClassName="min-h-[440px]"
        badgetText="SaaS | AI"
        descriptionText="They helped us revolutionize our creator tracking tools, particularly by launching the Social Flirting product within our Archive ecosystem. Before UXLAB, we had 1 client and after their deep dive, we secured 10 long-term clients in less than 3 months."
        authorText="Paul Benigeri"
        logo={<ArhiveLogo />}
        avatar={<ForbesAvatar />}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={EasyjetImage}
        classNames="max-w-[456px] min-h-[305px]"
        containerClassName="min-h-[305px]"
        badgetText="e-commerce | Airlines"
        descriptionText="UXLAB helped us launch 3 new ecommerce apps that attracted 1m new MAU."
        authorText="Stelios Haji-Ioannou"
        logo={<EasyjetLogo />}
        avatar={<ForbesAvatar />}
        videoSrc={"/glance-section-video/easyjet.mp4"}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={WellowImage}
        classNames="max-w-[456px] min-h-[549px]"
        containerClassName="min-h-[549px]"
        badgetText="e-commerce"
        descriptionText="Launched a new brand from Zero-To-One in just 3 months with exceptional design partnership. They helped us to convert website visitors to customers within 2 hours of soft website launch."
        authorText="Gerhard Marringer"
        logo={<WellowLogo />}
        avatar={<ForbesAvatar />}
        videoSrc={"/glance-section-video/wellow.mp4"}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={RoyalQueenImage}
        classNames="max-w-[456px] min-h-[440px]"
        containerClassName="min-h-[440px]"
        badgetText="e-commerce"
        descriptionText="UXLAB increased the conversion score from 3.2% to 4% while increasing revenue by 17.8%. We value our day-to-day cooperation with them like partners."
        authorText="Nick Ave"
        logo={<RoyalQueenLogo />}
        avatar={<ForbesAvatar />}
      />
    ),
  },
  {
    element: (
      <VideoCard
        imageSrc={ToyotaImage}
        classNames="max-w-[456px] min-h-[305px]"
        containerClassName="min-h-[305px]"
        badgetText="Automotive | Logistics"
        descriptionText="The new Vehicle Management System (VLS) boosted our revenue by 9% and increased car shipment speed by 30%."
        authorText="Gerhard Marringer"
        logo={<ToyotaLogo />}
        avatar={<ForbesAvatar />}
      />
    ),
  },
];

export default function GlanceSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const isMobile = useIsMobile();

  return (
    <div className="relative">
        <div className="relative mx-4 md:mx-10">
          <motion.div
            className="absolute -top-3 left-0 w-full h-[1px] bg-border-100"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      <div
        ref={ref}
        className="flex flex-col bg-bg-white relative overflow-hidden"
      >
        <div className="flex justify-between mx-4 md:mx-10 md:py-8 py-4 hoves-p1-reg">
          <div>
            <SplitText
              text="UXLAB at a Glance."
              className="hoves-p1-reg text-black"
              splitType="lines"
              delay={100}
              duration={0.5}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
          </div>
          <div className="relative group">
            <a
              href="mailto:hello@uxlab.digital"
              className="text-black relative group"
            >
              <SplitText
                text="hello@uxlab.digital"
                className="hoves-p1-reg text-black"
                splitType="lines"
                delay={200}
                duration={0.5}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
              <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] header-underline underline-animation"></span>
            </a>
          </div>
        </div>
        <EmblaCarousel
          slides={slides}
          slideSpacing={isMobile ? 8 : 32}
          speed={40}
          className="cursor-grab"
        />
        <div className="flex mx-4 md:mx-10 my-[96px] md:my-40 hoves-p1-reg" />
      </div>
      <div className="relative mx-4 md:mx-10">
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-[1px] bg-border-100"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transformOrigin: "left" }}
          />
        </div>
    </div>
  );
}
