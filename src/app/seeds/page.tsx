import SeedsLogo from "@/assets/Seeds/logo.svg";
import Seeds_1 from "@/assets/Seeds/seed_1.jpg";
import Seeds_2 from "@/assets/Seeds/seed_2.jpg";
import Seeds_3 from "@/assets/Seeds/seed_3.jpg";
import Seeds_4 from "@/assets/Seeds/seed_4.jpg";
import Seeds_5 from "@/assets/Seeds/seed_5.jpg";
import Seeds_6 from "@/assets/Seeds/seed_6.jpg";
import Seeds_7 from "@/assets/Seeds/seed_7.jpg";
import Seeds_8 from "@/assets/Seeds/seed_8.jpg";
import Seeds_9 from "@/assets/Seeds/seed_9.jpg";
import Seeds_10 from "@/assets/Seeds/seed_10.jpg";
import Seeds_11 from "@/assets/Nespresso/nespresso-last.jpg";

import EmmaLogoScrollingText from "@/assets/OurCases/logo/nespresso_log.svg";
import CasesHeroSections from "@/components/cases/CasesHeroSections";
import InfoBlock from "@/components/cases/InfoBlock";
import CaseTextBox from "@/components/cases/CaseTextBox";
import CaseSection3_9 from "@/components/cases/CaseSection3_9";
import OverviewCaseImageSection from "@/components/cases/OverviewCaseImageSection";
import OverviewCaseTestimonialSection from "@/components/cases/OverviewCaseTestimonialSection";
import OverviewCaseVideoSection from "@/components/cases/OverviewCaseVideoSection";
import OverviewCaseVideoTextSection from "@/components/cases/OverviewCaseVideoTextSection";
import ScrollingTextCaseSection from "@/components/cases/ScrollingTextCaseSection";
import {Metadata} from "next";
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
                    logo={<SeedsLogo/>}
                    logoMobile={<SeedsLogo/>}
                    text={[
                        "Defining a high-performance",
                        "e-commerce ecosystem for the modern brand.",
                    ]}
                    mobileText={[
                        "Defining a high-performance",
                        "e-commerce ecosystem for the modern brand.",
                    ]}
                    companyName="Royal Queen Seeds"
                    year="5x(2-Week Design Sprint)"
                    deliverables="Optimize the Core User Flow  →  Checkout  ·  Homepage  ·  Bundles  ·  Mobile UX"
                />
                <OverviewCaseVideoSection
                    className="!p-0 mb-[80px] first_case_hero_section "
                    imageSrc={Seeds_1}
                    imageAlt="Foundrae Case Study"
                    isAnimated={false}
                />
                <TextSection
                    className=""
                    text={[
                        "Empowering the world's leading",
                        "cannabis marketplace through a high-velocity digital flagship designed for global scale by merging data with an intuitive e-commerce framework.",
                    ]}
                    mobileText={[
                        "Empowering the world's leading",
                        "cannabis marketplace through a high-velocity digital flagship designed for global scale by merging data with an intuitive e-commerce framework.",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Goal", "Challenges", "Outcomes"]}
                    rightColumn={[
                        "Our objective was to maximize the digital footprint of a global cannabis leader. We aimed to build a conversion-optimized marketplace that simplifies the purchase of high-quality goods while leveraging data-driven design to increase lifetime value (LTV) and lower acquisition costs across competitive international markets.",
                        {
                            type: "list",
                            intro:
                                "",
                            items: [
                                "Conversion Friction: Streamlining a high-risk checkout process to ensure security without sacrificing speed.",
                                "Complex Data Sets: Displaying vital THC, CBD, and yield metrics without cluttering the mobile shopping experience.",
                                "LTV Stagnation: Moving beyond one-off seed purchases to build a recurring ecosystem of nutrients and equipment.",
                            ],
                        },
                        {
                            type: "metrics",
                            items: [
                                {value: 32, prefix: "+", suffix: "%", label: "Increase in Customer Lifetime Value (LTV)"},
                                {value: 3.5, prefix: "", suffix: "x", label: "Return on Ad Spend (ROAS) on Targeted Campaigns"},
                                {value: 48, prefix: "+", suffix: "%", label: "Growth in Subscription-based Products Sales"},
                                {value: 22, prefix: "-", suffix: "%", label: "Cart Abandonment Rate via One-Step Checkout"},
                            ],
                        },
                    ]}
                    lineRows={[1]}
                    textColorClass="text-text-300"
                    threshold={0.5}
                />

                <OverviewCaseImageSection
                    imageSrc={Seeds_3}
                    imageAlt="Seeds case study"
                    videoSrc=""
                    imageSrc2={Seeds_2}
                    iSsmallColumn={false}
                    imageClassName=""

                />
                <CaseTextBox
                    className="pb-0"
                    colClass="col-lg-5 mx-auto"
                    blocks={[
                        {
                            title: "Visual Narrative",
                            body: [
                                "We utilized high-contrast macro photography of premium flower, deep forest greens, and sharp typography to weave the brand’s authority through the experience. The new site feels like a high-end dispensary - focused on quality, potency, and a premium user journey.",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto"
                    blocks={[
                        {
                            title: "Engineered for high-conversion discovery.",
                            body: [
                                "We redesigned the cannabis marketplace to function as a data-rich filter engine. Users can instantly pivot between different products reducing the time from landing page to ``Add to Cart`` by 40%.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection imageSrc={Seeds_4}/>
                <OverviewCaseVideoTextSection
                    imageSrc={Seeds_5}
                    firstText="Users typically approach Royal Queen Seeds with specific desires for their experience. How can I find deep relaxation? Which strain will sharpen my creative focus?"
                    secondText="By bringing the Strain Effects, Terpene Profiles, and Curated Moods to the forefront, we invite users to explore a deeper level of cannabis appreciation and create opportunities to discover the full breadth of the RQS collection."
                    textMaxWidth={"col-lg-6"}
                />
                {/* <TextSection
                    className="mt-[200px]"
                    text={[
                        "I’m consistently amazed at the",
                        "quality of work Alex produces. From day one Alex just got our brand, created some stunning designs, and ensured the whole process ran smoothly.",
                    ]}
                    mobileText={[
                        "I’m consistently amazed at the ",
                        "quality of work Alex produces. From day one Alex just got our brand, created some stunning designs, and ensured the whole process ran smoothly.",
                    ]}
                    showLine={false}
                />
                <InfoBlock
                    title="Felix Focken, CEO (Emma Sleep)"
                    className={"not-md:hidden mt-[32px]"}
                /> */}
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto"
                    blocks={[
                        {
                            title: "Selling the harvest, not just the seed.",
                            body: [
                                "Each PDP was optimized to highlight ``Potency and Performance.`` By showcasing terpene profiles and visual growth timelines alongside clear ``Buy Now`` triggers, we built the consumer confidence necessary for high-ticket genetic sales.",
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className=""
                    imageSrc={Seeds_6}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Seamless mobile commerce",
                            body: [
                                "With over 85% of traffic arriving via mobile social discovery, we prioritized a ``Thumb-to-Checkout`` pathway. We minimized load times for high-res imagery and implemented biometrically-secure payment gateways to ensure a frictionless mobile finish."
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    imageSrc={Seeds_7}
                    firstText="We utilized deep, organic tones, high-fidelity macro photography, and seamless micro-interactions to weave the brand's premium identity through the experience and draw connoisseurs in."
                    secondText=""
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Data-driven bundling for higher AOV",
                            body: [
                                "To drive LTV, we implemented an intelligent cross-sell engine in the slide-out cart. Based on the selected strain, the system automatically suggests the specific nutrient starter kit or protection equipment required for that specific plant type."
                            ],
                        },
                    ]}
                />
                <CaseSection3_9
                    leftImageSrc={Seeds_8}
                    leftImageAlt="Concept sketch"
                    leftTitle=""
                    leftBody={[
                        ""
                    ]}
                    videoImageSrc={Seeds_9}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Converting intent into action at high speed",
                            body: [
                                "To drive record-breaking add-to-cart rates, we focused on removing every point of friction between strain discovery and the bag. By implementing ``Quick-Shop`` overlays and a persistent, high-contrast ``Add to Bag`` bar on mobile, we enabled users to act on their preferences instantly. We integrated real-time inventory triggers and ``User-Favorite`` badges that leverage social proof, resulting in a +38% increase in ATC velocity and a significantly more efficient path to purchase for the modern cannabis consumer."
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className="md:pb-8 not-md:mt-[24px]"
                    imageSrc={Seeds_10}
                    aspectRatio="1"
                />

                <ScrollingTextCaseSection
                    videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
                    imageSrc={Seeds_11}
                    imageAlt="Case study description"
                    videoTitle="Video title for cursor"
                    logo={<EmmaLogoScrollingText/>}
                    link="/emma"
                />
            </div>
        </div>
    );
}
