import VideoPlayer from "@/components/VideoPlayer";
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
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";

import InfiniteSlider from "@/components/InfiniteSlider";
import GlanceSection from "@/components/GlanceSection";
import HoverSection from "@/components/HoverSection";
import { Button } from "@/components/ui/button";
import InsightsSection from "@/components/InsightsSection";
import QuestionSections from "@/components/QuestionSections";
import ShowreelSection from "@/components/ShowreelSection";

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

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="w-full">
        <ShowreelSection />
      </div>
      <div className="flex flex-col w-full hoves-h1-med px-4 sm:px-6 lg:px-10 pt-12 pb-20">
        <p className="text-text-700 text-right">
          The design dream team for founders
        </p>
        <p className="text-text-700">
          obsessed with speed and efficiency, clients raised over $600M+ in 2024
          alone.
        </p>
      </div>
      <ServiceItems />
      <OurCases />
      <div className="w-full bg-bg-white">
        <InfiniteSlider slides={slides} duration={20} className="py-[173px]" />
        <GlanceSection />
        <div className="flex flex-col w-full hoves-h1-med px-4 sm:px-6 lg:px-10 pt-12 pb-20 text-black">
          <p className="text-right">After shipping hundreds of products,</p>
          <p>
            there are a few key things we&apos;ve learned are needed to do the best
            work
          </p>
        </div>
        <HoverSection />
        <div className="w-full px-10 mt-40">
          <ShowreelSection />
        </div>
        <QuestionSections />
        <div className="flex flex-col w-full hoves-h1-med px-4 sm:px-6 lg:px-10 pt-12 pb-40 text-black">
          <p className="text-right">Work seamlessly with a creative</p>
          <p>
            team that&apos;s built to match your pace and exceed your expectations.
          </p>
          <Button
            variant="secondary"
            size="lg"
            iconRight={<ArrowUpRightSVG className="!size-6" />}
            className="max-w-40 self-center mt-10"
          >
            Book a Call
          </Button>
        </div>
        <InsightsSection />
      </div>
    </div>
  );
}
