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


import BMWLogo from "@/assets/logoicons/BMW_logo.svg";
import ForbesLogo from "@/assets/logoicons/Forbes_logo_1.svg";
import Whop from "@/assets/logoicons/whop.svg";
import RepAi from "@/assets/logoicons/rep_ai.svg";
import RedBull from "@/assets/logoicons/red_bull.svg";
import Numa from "@/assets/logoicons/numa.svg";
import Jasper from "@/assets/logoicons/jasper.svg";
// import MaskGroup from "@/assets/logoicons/Mask group.svg";
import CalendlyLogo from "@/assets/logoicons/calendly-logo-vector_5.svg";
import UserwayLogo from "@/assets/logoicons/userway-org-vector-logo-2022_1.svg";
import designImage from "@/assets/design_section_image.png";


const slides = [
    {icon: <BMWLogo/>},
    {icon: <ForbesLogo/>},
    {icon: <Whop/>},
    {icon: <RepAi/>},
    {icon: <RedBull/>},
    {icon: <Numa/>},
    {icon: <Jasper/>},
    {icon: <CalendlyLogo/>},
    {icon: <UserwayLogo/>},
];

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <div className="w-full">
                <HeroSection/>
                <div className="w-full">
                    <ShowreelSection
                        mobileSrc="/video/reel-short-mobile.mp4"
                        desktopSrc="/video/reel-short.mp4"
                    />
                </div>
                <TextSection
                    className="pt-8 pb-12 md:pt-12 md:pb-20"
                    text={[
                        "We help eCommerce",
                        "brands grow with decisions based on data, not",
                        "guesswork, so you win unlock tomorrow`s",
                        "not  revenue today."
                    ]}
                    mobileText={[
                        "We help",
                        "e-commerce brands",
                        "grow with decisions",
                        "based on data, not",
                        "guesswork, so you",
                        "win unlock",
                        "tomorrow’s revenue",
                        "today.",
                    ]}
                />
                <ServiceItems/>
                <DesignOptionSection/>
                <AnimatedTextByLetters
                    text={"Selected\nResults"}
                    className="font-semibold leading-tight animated_text_by_letters"
                    letterClassName="will-change-transform"
                    delayStep={0.045}
                />
                <OurCases/>
                <AnimatedTextByLetters
                    text={"Challenges\nWe Solve"}
                    className="font-semibold leading-tight animated_text_by_letters"
                    letterClassName="will-change-transform"
                    delayStep={0.045}
                />
                <ServicesList/>
            </div>
            <div className="w-full pt-[120px] bg-bg-white">
                <AnimatedTextByLetters
                    text={"One\nModel"}
                    className="font-semibold leading-tight animated_text_by_letters text-black"
                    letterClassName="will-change-transform"
                    delayStep={0.045}
                />

                <div className="mx-4">
                    <OneModelSection bannerImage={designImage}/>
                </div>
                <div className="w-full">
                    <InfiniteSlider
                        slides={slides}
                        duration={20}
                        className="py-[90px] md:py-[173px]"
                    />

                    <GlanceSection/>

                    <div className="container-fluid">
                        <OverviewCaseVideoSection
                            className="!p-0 !m-0 last_video_screen"
                            src="/video/nespressso/JW9tBsFi0Xm6810KHjTgnbuBo.mp4"
                        />
                    </div>
                    <InsightsSection/>
                </div>
            </div>
        </div>
    );
}