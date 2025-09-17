import ServiceItems from "@/components/ServiceItems";
import OurCases from "@/components/OurCases";
import HeroSection from "@/components/HeroSection";
// import BMWLogo from "../assets/logoicons/BMW_logo_(gray) 1.svg";
import ForbesLogo from "../assets/logoicons/Forbes_logo 1.svg";
import MaskGroup1 from "../assets/logoicons/Mask group-1.svg";
import MaskGroup2 from "../assets/logoicons/Mask group-2.svg";
import MaskGroup3 from "../assets/logoicons/Mask group-3.svg";
import MaskGroup4 from "../assets/logoicons/Mask group-4.svg";
// import MaskGroup from "../assets/logoicons/Mask group.svg";
import CalendlyLogo from "../assets/logoicons/calendly-logo-vector 5.svg";
import UserwayLogo from "../assets/logoicons/userway-org-vector-logo-2022 1.svg";

import InfiniteSlider from "@/components/InfiniteSlider";
import GlanceSection from "@/components/glance-section/GlanceSection";
import HoverSection from "@/components/HoverSection";
import InsightsSection from "@/components/InsightsSection";
import QuestionSections from "@/components/QuestionSections";
import ShowreelSection from "@/components/ShowreelSection";
import TextSection from "@/components/TextSection";
import OverviewCaseVideoSection from "@/components/OverviewCaseVideoSection";

const slides = [
  // { icon: <BMWLogo /> },
  { icon: <ForbesLogo /> },
  { icon: <MaskGroup1 /> },
  { icon: <MaskGroup2 /> },
  { icon: <MaskGroup3 /> },
  { icon: <MaskGroup4 /> },
  // { icon: <MaskGroup /> },
  { icon: <CalendlyLogo /> },
  { icon: <UserwayLogo /> },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <HeroSection />
        <div className="w-full">
          <ShowreelSection
            mobileSrc="/video/reel-short-mobile.mp4"
            desktopSrc="/video/reel-short.mp4"
          />
        </div>
        <TextSection
          className="px-4 pt-8 pb-12 lg:px-10 lg:pt-12 lg:pb-20"
          firstText="Design for founders who care about"
          secondText={[
            "conversions, revenue, acquisition, and",
            "the metrics that drive growth.",
          ]}
          mobileText={[
            "Design for founders who",
            "care about conversions,",
            "revenue, acquisition, and",
            "the metrics that drive",
            "growth.",
          ]}
        />
        <ServiceItems />
        <OurCases />
      </div>
      <div className="w-full bg-bg-white">
        <div className="w-full">
          <InfiniteSlider
            slides={slides}
            duration={20}
            className="py-[90px] lg:py-[173px]"
          />
          <GlanceSection />
          <TextSection
            className="px-4 pt-8 pb-12 lg:px-10 lg:pt-12 lg:pb-20"
            firstText="After shipping hundreds of products,"
            secondText={[
              "there are a few key things we've learned",
              "are needed to do the best work",
            ]}
            mobileText={[
              "After shipping hundreds",
              "of products, we've",
              "learned a few key things",
              "that help us do our best",
              "works."
            ]}
            textColor="text-black"
          />
          <HoverSection />
          <div className="w-full px-4 lg:px-10 mt-[56px] lg:mt-40 mb-[96px] lg:mb-[161px]">
            <OverviewCaseVideoSection
              className="!p-0 !m-0"
              src="/video/reel-short.mp4"
            />
          </div>
          <QuestionSections />
          <TextSection
            firstText="Work seamlessly with a creative"
            secondText={[
              "team that's built to match your pace and",
              "exceed your expectations.",
            ]}
            mobileText={[
              "Work seamlessly with a",
              "creative team that's built",
              "to match your pace and",
              "exceed your",
              "expectations.",
            ]}
            showButton={true}
            textColor="text-black"
            className="mb-[96px] lg:pb-[161px] px-4 lg:px-10"
          />
          <InsightsSection />
        </div>
      </div>
    </div>
  );
}
