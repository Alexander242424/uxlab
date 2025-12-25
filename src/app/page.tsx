"use client";
import dynamic from "next/dynamic";

import HeroSection from "@/components/home_page/HeroSection";
import ShowreelSection from "@/components/home_page/ShowreelSection";
import TextSection from "@/components/home_page/TextSection";

// SVG можно оставить так, но лучше тоже лениво, если слайдер далеко вниз
import Slidelogo_1 from "@/assets/logoicons/logo_1.svg";
import Slidelogo_2 from "@/assets/logoicons/logo_2.svg";
import Slidelogo_3 from "@/assets/logoicons/logo_3.svg";
import Slidelogo_4 from "@/assets/logoicons/logo_4.svg";
import Slidelogo_5 from "@/assets/logoicons/logo_5.svg";
import Slidelogo_6 from "@/assets/logoicons/logo_6.svg";
import Slidelogo_7 from "@/assets/logoicons/logo_7.svg";
import Slidelogo_8 from "@/assets/logoicons/logo_8.svg";
import Slidelogo_9 from "@/assets/logoicons/logo_9.svg";
import Slidelogo_10 from "@/assets/logoicons/logo_10.svg";

import designImage from "@/assets/design_section_image.jpg";
const ServiceItems = dynamic(() => import("@/components/home_page/ServiceItems"));
const DesignOptionSection = dynamic(() => import("@/components/home_page/DesignOptionSection"));
const AnimatedTextByLetters = dynamic(() => import("@/components/AnimatedTextByLetters"));
const OurCases = dynamic(() => import("@/components/home_page/OurCases"));
const ServicesList = dynamic(() => import("@/components/home_page/ServicesList"));

const OneModelSection = dynamic(() => import("@/components/home_page/OneModelSection"));
const InfiniteSlider = dynamic(() => import("@/components/home_page/LogosSection"));
const GlanceSection = dynamic(() => import("@/components/home_page/glance-section/GlanceSection"));
const OverviewCaseVideoSection = dynamic(() => import("@/components/cases/OverviewCaseVideoSection"));
const InsightsSection = dynamic(() => import("@/components/home_page/InsightsSection"));

const slides = [
  { icon: <Slidelogo_1 /> },
  { icon: <Slidelogo_2 /> },
  { icon: <Slidelogo_3 /> },
  { icon: <Slidelogo_4 /> },
  { icon: <Slidelogo_5 /> },
  { icon: <Slidelogo_6 /> },
  { icon: <Slidelogo_7 /> },
  { icon: <Slidelogo_8 /> },
  { icon: <Slidelogo_9 /> },
  { icon: <Slidelogo_10 /> },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <HeroSection />

        {/* Если этот блок реально в первом экране — ок. Если нет — тоже в dynamic */}
        <section className="show_reel_section">
          <ShowreelSection mobileSrc="/video/reel-short-mobile.mp4" desktopSrc="/video/reel-short.mp4" />
        </section>

        <TextSection
          text={[
            "We help eCommerce",
            "brands grow with decisions based on data, not",
            "guesswork, so you can unlock tomorrow’s",
            "revenue today.",
          ]}
          mobileText={[
            "We help eCommerce",
            "brands grow with decisions based on data, not",
            "guesswork, so you can unlock tomorrow’s",
            "revenue today.",
          ]}
          showLine
        />

        <ServiceItems />
        <DesignOptionSection />

        <AnimatedTextByLetters
          text={"Selected\nResults"}
          className="animated_text_by_letters"
          letterClassName="will-change-transform"
          delayStep={0.045}
        />

        <OurCases />

        <AnimatedTextByLetters
          text={"Challenges\nWe Solve"}
          className="font-semibold leading-tight animated_text_by_letters mb-[80px]"
          letterClassName="will-change-transform"
          delayStep={0.045}
        />

        <ServicesList />
      </div>

      <div className="w-full pt-[160px] bg-bg-white">
        <AnimatedTextByLetters
          text={"One\nModel"}
          className="font-semibold leading-tight animated_text_by_letters text-black"
          letterClassName="will-change-transform"
          delayStep={0.045}
        />

        <div className="mx-4">
          <div className="container-fluid">
            <OneModelSection bannerImage={designImage} />
          </div>
        </div>

        <InfiniteSlider slides={slides} duration={20} className="py-[160px] logos_slider" />

        <GlanceSection />

        <section className="overview_section mx-4">
          <div className="container-fluid px-0">
            <OverviewCaseVideoSection
              className="!p-0 !m-0 last_video_screen"
              src="/video/nespressso/JW9tBsFi0Xm6810KHjTgnbuBo.mp4"
            />
          </div>
        </section>

        <InsightsSection />
      </div>
    </div>
  );
}
