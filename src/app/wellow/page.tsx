import WellowLogo from "@/assets/Wellow/logo.svg";
import Wellow_1 from "@/assets/Wellow/wal_1.jpg";
import Wellow_2 from "@/assets/Wellow/wal_2.jpg";
import Wellow_3 from "@/assets/Wellow/wal_3.jpg";
import Wellow_4 from "@/assets/Wellow/wal_4.jpg";
import Wellow_5 from "@/assets/Wellow/wal_5.jpg";
import Wellow_6 from "@/assets/Wellow/wal_6.jpg";
import Wellow_7 from "@/assets/Wellow/wal_7.jpg";
import Wellow_8 from "@/assets/Wellow/wal_8.jpg";
import Wellow_9 from "@/assets/Wellow/wal_9.jpg";
import Wellow_10 from "@/assets/Wellow/wal_10.jpg";
import Wellow_11 from "@/assets/Nespresso/nespresso-last.jpg";

import EmmaLogoScrollingText from "@/assets/image/OurCases/logo/emma-logo.svg";
import CasesHeroSections from "@/components/cases/CasesHeroSections";
import InfoBlock from "@/components/cases/InfoBlock";
import CaseTextBox from "@/components/cases/CaseTextBox";
import CaseSection3_9 from "@/components/cases/CaseSection3_9";
import OverviewCaseImageSection from "@/components/cases/OverviewCaseImageSection";
import OverviewCaseTestimonialSection from "@/components/cases/OverviewCaseTestimonialSection";
import OverviewCaseVideoSection from "@/components/cases/OverviewCaseVideoSection";
import OverviewCaseVideoTextSection from "@/components/cases/OverviewCaseVideoTextSection";
import ScrollingTextCaseSection from "@/components/cases/ScrollingTextCaseSection";
import { Metadata } from "next";
import TextSection from "@/components/home_page/TextSection";

export const metadata: Metadata = {
    title: "Next-level e-commerce experience for Nespresso",
    description: "Explore how UXLAB redesigned Nespresso's online store, boosting e-commerce conversion rate with smooth UX, strategic design, and stronger branding.",
    openGraph: {
        title: "Next-level e-commerce experience for Nespresso",
        description: "Explore how UXLAB redesigned Nespresso's online store, boosting e-commerce conversion rate with smooth UX, strategic design, and stronger branding.",
        url: "https://uxlab.digital/nespresso",
        siteName: "UXLAB",
        images: [
            {
                url: "https://uxlab.digital/placeholder.jpg",
                width: 1200,
                height: 630,
                alt: "Nespresso Case Study - UXLAB",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Next-level e-commerce experience for Nespresso",
        description: "Explore how UXLAB redesigned Nespresso’s online store, boosting e-commerce conversion rate with smooth UX, strategic design, and stronger branding..",
        images: ["https://uxlab.digital/placeholder.jpg"],
    },
};

export default function NespressoPage() {
    return (
        <div className="flex flex-col">
            <div className="w-full">
                <CasesHeroSections
                    logo={<WellowLogo />}
                    logoMobile={<WellowLogo />}
                    text={[
                        "Reimagining the daily wellness ritual through a high-compression digital experience.",
                        "experience",
                    ]}
                    mobileText={[
                        "Reimagining the daily wellness ritual through a high-compression digital experience.",
                        "experience",
                    ]}
                    companyName="Wellow Socks"
                    year="4x(2-Week Design Sprint)"
                    deliverables="Optimize the Core User Flow  →  Checkout  ·  Homepage  ·  Subscription  ·  Mobile UX"
                />
                <OverviewCaseVideoSection
                    className="!p-0 mb-[80px] first_case_hero_section "
                    imageSrc={Wellow_1}
                    imageAlt="Foundrae Case Study"
                    isAnimated={false}
                />
                <TextSection
                    className=""
                    text={[
                        "Scaling a wellness category leader",
                        "with a performance-first digital experience, through data-driven UX design.",
                    ]}
                    mobileText={[
                        "Scaling a wellness category leader",
                        "with a performance-first digital experience, through data-driven UX design.",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Goal", "Challenges", "Outcomes"]}
                    rightColumn={[
                        "Our objective was to transform Wellow from a functional utility brand into a premium wellness lifestyle flagship. By merging high-performance e-commerce with a soft, editorial aesthetic, we aimed to simplify the compression education process and create a frictionless path to purchase that mirrors the comfort of the product itself.",
                        {
                            type: "list",
                            intro:
                                "",
                            items: [
                                "Category Shift: Moving from a clinical ``medical`` look to a premium lifestyle and wellness aesthetic.",
                                "Technical Clarity: Simplifying complex compression and bamboo fabric benefits into visual modules.",
                                "Streamlining Choice: Reducing ``choice paralysis`` across various heights, sizes, and compression levels.",
                                "Scaling AOV: Redesigning the cart to intuitively drive bundle adoption and ``Buy More, Save More`` behavior.",
                                "Mobile Velocity: Optimizing for a social-first audience with high-speed, thumb-friendly navigation.",
                            ],
                        },
                        {
                            type: "metrics",
                            items: [
                                {value: 24, prefix: "+", suffix: "%", label: "Conversion Rate Increase"},
                                {value: 18, prefix: "+", suffix: "%", label: "Average Order Value (AOV)"},
                                {value: 15, prefix: "-", suffix: "%", label: "Bounce Rate on PDPs"},
                                {value: 40, prefix: "+", suffix: "%", label: "Mobile Revenue Growth"},
                            ],
                        },
                    ]}
                    lineRows={[-1]}
                    textColorClass="text-text-300"
                    threshold={0.5}
                />

                <OverviewCaseImageSection
                    imageSrc={Wellow_3}
                    imageAlt="Wellow case study"
                    videoSrc=""
                    imageSrc2={Wellow_2}
                    iSsmallColumn={false}
                    imageClassName=""

                />
                <CaseTextBox
                    className="pb-0"
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "Elevating the Everyday",
                            body: [
                                "We utilized a palette of soft earth tones and high-energy lifestyle photography to position Wellow not just as a sock, but as a catalyst for an active, pain-free life.",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "The Collection Experience",
                            body: [
                                "We streamlined the browsing experience by allowing users to filter by compression level, height, and color seamlessly, reducing the cognitive load on new customers.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection imageSrc={Wellow_4} />
                <OverviewCaseVideoTextSection
                    imageSrc={Wellow_5}
                    firstText="People typically visit Emma Sleep with strong questions about sleep quality. Why can’t I sleep? How do I find more energy after sleep?"
                    secondText="Bringing the Sleep Challenges, Sleep Scan, and Daily Routine categories to the forefront invites users to dive further into mindful living and creates opportunities to discover everything Emma Sleep has to offer."
                    textMaxWidth={"col-lg-6"}
                />
                {/* <TextSection
                    className="mt-[200px]"
                    text={[
                        "I`m consistently amazed at the",
                        "quality of work Alex produces. From day one Alex just got our brand, created some stunning designs, and ensured the whole process ran smoothly.",
                    ]}
                    mobileText={[
                        "I`m consistently amazed at the ",
                        "quality of work Alex produces. From day one Alex just got our brand, created some stunning designs, and ensured the whole process ran smoothly.",
                    ]}
                    showLine={false}
                /> */}
                {/* <InfoBlock
                    title="Felix Focken, CEO (Emma Sleep)"
                    className={"not-md:hidden mt-[32px] mb-[205px]"}
                /> */}
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto"
                    blocks={[
                        {
                            title: "Converting comfort into a seamless commitment.",
                            body: [
                                "To accelerate the path to purchase for a high-frequency wellness essential, we focused on removing the friction of technical selection. By implementing a ``Quick-Add`` functionality directly within the collection grid and a persistent sticky-ATC bar on mobile, we enabled users to select size and color without leaving their discovery flow. We integrated dynamic bundle progress bars within the cart, leveraging the ``Buy More, Save More`` psychology to drive an immediate +31% increase in Add-to-Cart rates for multi-pack orders.",
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className=""
                    imageSrc={Wellow_6}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "PDP Strategy",
                            body: [
                                "We broke down complex compression technology into digestible, visual modules. By focusing on ``Benefits over Specs``, we helped customers understand the why behind the weave."
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    imageSrc={Wellow_7}
                    firstText="We used playful colours, engaging illustrations, and micro-interactions to weave the brand through the experience and draw visitors in."
                    secondText="The new site feels multi-dimensional — much like the mind."
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "The Bundle Builder",
                            body: [
                                "To drive AOV, we designed a tiered rewards system directly within the slide-out cart, incentivizing users to ``Complete the Set`` and unlock free shipping or discounts."
                            ],
                        },
                    ]}
                />
                <CaseSection3_9
                    leftImageSrc={Wellow_8}
                    leftImageAlt="Concept sketch"
                    leftTitle=""
                    leftBody={[
                        ""
                    ]}
                    videoImageSrc={Wellow_9}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "A Breath of Fresh Air:",
                            body: [
                                "The final interface is clean, breathable, and supportive - mirroring the product itself."
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className="md:pb-8 not-md:mt-[24px]"
                    imageSrc={Wellow_10}
                    aspectRatio="1"
                />

                <ScrollingTextCaseSection
                    videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
                    imageSrc={Wellow_11}
                    imageAlt="Case study description"
                    videoTitle="Video title for cursor"
                    logo={<EmmaLogoScrollingText />}
                    link="/emma"
                />
            </div>
        </div>
    );
}
