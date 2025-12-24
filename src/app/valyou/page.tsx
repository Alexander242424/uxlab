import ValyouLogo from "@/assets/Valyou/logo.svg";
import Valyou_1 from "@/assets/Valyou/val_1.jpg";
import Valyou_2 from "@/assets/Valyou/val_2.jpg";
import Valyou_3 from "@/assets/Valyou/val_3.jpg";
import Valyou_4 from "@/assets/Valyou/val_4.jpg";
import Valyou_5 from "@/assets/Valyou/val_5.jpg";
import Valyou_6 from "@/assets/Valyou/val_6.jpg";
import Valyou_7 from "@/assets/Valyou/val_7.jpg";
import Valyou_8 from "@/assets/Valyou/val_8.jpg";
import Valyou_9 from "@/assets/Valyou/val_9.jpg";
import Valyou_10 from "@/assets/Valyou/val_10.jpg";
import Valyou_11 from "@/assets/image/OurCases/wellow.webp";

import EmmaLogoScrollingText from "@/assets/OurCases/logo/wellow_log.svg";
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
                    logo={<ValyouLogo/>}
                    logoMobile={<ValyouLogo/>}
                    text={[
                        "Transforming the high-end",
                        "living experience through a trend-driven digital leader.",
                    ]}
                    mobileText={[
                        "Transforming the high-end",
                        "living experience through a trend-driven digital leader.",
                    ]}
                    companyName="VALYŌU Furniture"
                    year="7x(2-Week Design Sprint)"
                    deliverables="Optimize the Core User Flow  →  Checkout  ·  Homepage  ·  Subscription  ·  Mobile UX"
                />
                <OverviewCaseVideoSection
                    className="!p-0 mb-[80px] first_case_hero_section "
                    imageSrc={Valyou_1}
                    imageAlt="Foundrae Case Study"
                    isAnimated={false}
                />
                <TextSection
                    className=""
                    text={[
                        "Scaling a disruptive furniture",
                        "brand through an immersive, fashion-forward digital experience.",
                    ]}
                    mobileText={[
                        "Scaling a disruptive furniture",
                        "brand through an immersive, fashion-forward digital experience.",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Goal", "Challenges","Outcomes"]}
                    rightColumn={[
                        "Our objective was to bridge the gap between high-end designer aesthetics and accessible furniture pricing. We aimed to evolve the Valyou digital experience into a curated interior gallery that builds consumer trust through editorial storytelling, immersive 3D visualization, and a frictionless path to high-ticket conversion.",
                        {
                            type: "list",
                            intro:
                                "",
                            items: [
                                "The Trust Barrier: Overcoming the hesitation of purchasing high-ticket furniture without a physical ``sit-test.``",
                                "Visual Disconnect: Elevating the brand aesthetic from ``discount warehouse`` to ``premium interior design.``",
                                "Choice Paralysis: Navigating a massive 10,000+ SKU catalog without overwhelming the user experience.",
                                "Tactile Education: Communicating material quality—like spill-proof fabrics and solid oak—through a flat screen.",
                                "Conversion Velocity: Streamlining the heavy mobile traffic from social media into a lightning-fast checkout flow.",
                            ],
                        },
                        {
                            type: "metrics",
                            items: [
                                {value: 35, prefix: "+", suffix: "%", label: "Conversion Rate Increase"},
                                {value: 26, prefix: "+", suffix: "%", label: "Average Order Value (AOV)"},
                                {value: 20, prefix: "-", suffix: "%", label: "Bounce Rate"},
                                {value: 50, prefix: "+", suffix: "%", label: "Engagement on Product Detail Pages"},
                            ],
                        },
                    ]}
                    lineRows={[1]}
                    textColorClass="text-text-300"
                    threshold={0.5}
                />

                <OverviewCaseImageSection
                    imageSrc={Valyou_3}
                    imageAlt="Valyou case study"
                    videoSrc=""
                    imageSrc2={Valyou_2}
                    iSsmallColumn={false}
                    imageClassName=""

                />
                <CaseTextBox
                    className="pb-0"
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "An intuitive discovery experience.",
                            body: [
                                "We reimagined the collection grid to act as a digital mood board. Users can now explore ``Scenes`` rather than just categories, allowing them to visualize complete rooms and move from inspiration to purchase in a single flow.",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "Design for the modern curator.",
                            body: [
                                "The interface was built to mirror the brand’s minimalist, trendy aesthetic. Using clean grid structures and cinematic product photography, we created a visual rhythm that guides the user through the brand’s multi-brand ecosystem.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection imageSrc={Valyou_4}/>
                <OverviewCaseVideoTextSection
                    imageSrc={Valyou_5}
                    firstText="To maximize AOV on high-ticket furniture, we redesigned the slide-out cart to act as a digital design assistant. By implementing a ``Complete the Look`` recommendation engine, we encouraged users to add matching accents—like pillows or side tables—directly within the checkout flow. We also integrated flexible financing options (Buy Now, Pay Later) at the point of decision, removing the final barrier to purchase and increasing conversion by 26%."
                    secondText=""
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
                    className={"not-md:hidden mt-[32px] mb-[205px]"}
                /> */}
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto"
                    blocks={[
                        {
                            title: "Transforming high-ticket browsing into confident action.",
                            body: [
                                "Buying furniture online requires a high degree of confidence; our goal was to make that ``Add to Bag`` moment feel effortless. We introduced a ``Complete the Scene`` ATC feature that allows users to add an entire room’s worth of items with a single interaction. By placing financing eligibility (BNPL) and real-time shipping estimates directly next to the primary CTA, we neutralized price-point anxiety at the most critical moment. This strategic clarity resulted in a +24% lift in ATC velocity and a significant reduction in mid-funnel drop-off.",
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className=""
                    imageSrc={Valyou_6}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-5 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "A PDP designed for high-ticket confidence",
                            body: [
                                "To solve the ``visualization gap``, we developed Benefit-Driven modules. We highlighted technical features like ``Spill-Proof Fabric`` and ``10-Minute Assembly`` through bite-sized, visual-first content that removes any barrier to buying online."
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    imageSrc={Valyou_7}
                    firstText="We used a refined neutral palette, elegant typography, and seamless transitions to weave a sense of luxury through the experience and draw visitors in."
                    secondText="The new site feels architecturally structured - much like a modern living space."
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Frictionless conversion and bundling",
                            body: [
                                "We implemented a ``Complete the Look`` logic in the cart, suggesting matching nightstands or accessories. This transformed the cart from a simple checkout step into a personalized interior design assistant."
                            ],
                        },
                    ]}
                />
                <CaseSection3_9
                    leftImageSrc={Valyou_8}
                    leftImageAlt="Concept sketch"
                    leftTitle=""
                    leftBody={[
                        ""
                    ]}
                    videoImageSrc={Valyou_9}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Focused on the mobile-first lifestyle",
                            body: [
                                "With a majority of traffic arriving via social discovery, the mobile UI was optimized for high-speed scrolling, quick-view interactions, and a seamless ``Thumb-to-Checkout`` pathway."
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className="md:pb-8 not-md:mt-[24px]"
                    imageSrc={Valyou_10}
                    aspectRatio="1"
                />

                <ScrollingTextCaseSection
                    videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
                    imageSrc={Valyou_11}
                    imageAlt="Case study description"
                    videoTitle="Video title for cursor"
                    logo={<EmmaLogoScrollingText/>}
                    link="/wellow"
                />
            </div>
        </div>
    );
}
