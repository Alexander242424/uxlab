import HeroSection from "@/components/home_page/HeroSection";
import ShowreelSection from "@/components/home_page/ShowreelSection";
import TextSection from "@/components/home_page/TextSection";
import ServiceItems from "@/components/home_page/ServiceItems";
import DesignOptionSection from "@/components/home_page/DesignOptionSection";
import OurCases from "@/components/home_page/OurCases";
import ServicesList from "@/components/home_page/ServicesList";
import OneModelSection from "@/components/home_page/OneModelSection";
import AnimatedTextByLetters from "@/components/AnimatedTextByLetters";
import InfiniteSlider from "@/components/home_page/InfiniteSlider";
import GlanceSection from "@/components/home_page/glance-section/GlanceSection";
import OverviewCaseVideoSection from "@/components/home_page/OverviewCaseVideoSection";
import InsightsSection from "@/components/home_page/InsightsSection";


// import BMWLogo from "../assets/logoicons/BMW_logo_(gray) 1.svg";
import ForbesLogo from "../assets/logoicons/Forbes_logo 1.svg";
import MaskGroup1 from "../assets/logoicons/Mask group-1.svg";
import MaskGroup2 from "../assets/logoicons/Mask group-2.svg";
import MaskGroup3 from "../assets/logoicons/Mask group-3.svg";
import MaskGroup4 from "../assets/logoicons/Mask group-4.svg";
// import MaskGroup from "../assets/logoicons/Mask group.svg";
import CalendlyLogo from "../assets/logoicons/calendly-logo-vector 5.svg";
import UserwayLogo from "../assets/logoicons/userway-org-vector-logo-2022 1.svg";
import designImage from "@/assets/design_section_image.png";



const slides = [
  { icon: <ForbesLogo /> },
  { icon: <MaskGroup1 /> },
  { icon: <MaskGroup2 /> },
  { icon: <MaskGroup3 /> },
  { icon: <MaskGroup4 /> },
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
          className="px-4 pt-8 pb-12 md:px-10 md:pt-12 md:pb-20"
          text={[
            "Trusted by founders who",
            "need design decisions backed by evidence,",
            "not guesswork when the stakes are highest.",
          ]}
          mobileText={[
            "Trusted by founders who",
            "need design decisions",
            "backed by evidence,",
            "not guesswork when",
            "the stakes are highest.",
          ]}
        />
        <ServiceItems />
        <DesignOptionSection />
        <AnimatedTextByLetters
          text={"Selected\nResults"}
          className="font-semibold leading-tight animated_text_by_letters"
          letterClassName="will-change-transform"
          delayStep={0.045}
        />
        <OurCases />
        <AnimatedTextByLetters
          text={"Challenges\nWe Solve"}
          className="font-semibold leading-tight animated_text_by_letters"
          letterClassName="will-change-transform"
          delayStep={0.045}
        />
        <ServicesList />
      </div>
      <div className="w-full pt-[120px] bg-bg-white">
        <AnimatedTextByLetters
          text={"One\nModel"}
          className="font-semibold leading-tight animated_text_by_letters text-black"
          letterClassName="will-change-transform"
          delayStep={0.045}
        />

        <div className="mx-4">
          <OneModelSection bannerImage={designImage} />
        </div>
        <div className="w-full">
          <InfiniteSlider
            slides={slides}
            duration={20}
            className="py-[90px] md:py-[173px]"
          />
          <GlanceSection />
          <div className="w-full px-4 md:px-10 mt-[56px] md:mt-40 mb-[96px] md:mb-[161px]">
            <OverviewCaseVideoSection
              className="!p-0 !m-0"
              src="/video/nespressso/JW9tBsFi0Xm6810KHjTgnbuBo.mp4"
            />
          </div>
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
            className="mb-[96px] md:pb-[161px] px-4 md:px-10"
          />
          <InsightsSection />
        </div>
      </div>
    </div>
  );
}
