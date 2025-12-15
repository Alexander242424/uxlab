import NespressoLogoMobile from "@/assets/Nespresso Logo mobile.svg";
import NespressoLogo from "@/assets/Nespresso Logo.svg";
import HeroImage from "@/assets/Nespresso/Nespresso.jpg";
import NespressoCase1 from "@/assets/Nespresso/mediaRowImg1.jpg";
import OptionImage from "@/assets/Nespresso/nespresso-last.jpg";
import EmmaLogoScrollingText from "@/assets/image/OurCases/logo/emma-logo.svg";
import Case3_9Image from "@/assets/Nespresso/case-3-8.jpg";


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
                    logo={<NespressoLogo/>}
                    logoMobile={<NespressoLogoMobile/>}
                    companyName="Nespresso"
                    year="3 × (2-week Design Sprint)"
                    deliverables="Optimize the Core User Flow  →  Checkout  ·  Homepage  ·  Subscription  ·  Mobile UX"
                />
                <OverviewCaseVideoSection
                    className="!p-0 mb-[80px] first_case_hero_section "
                    imageSrc={HeroImage}
                    imageAlt="Nespresso Case Study"
                    isAnimated={false}
                />
                <TextSection
                    className=""
                    text={[
                        "WHOOP.com — Building",
                        "a sophisticated digital experience for a one-of-a-kind product.",
                    ]}
                    mobileText={[
                        "WHOOP.com — Building",
                        "a sophisticated digital experience for a one-of-a-kind product.",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Goal", "Challenges", "Outcomes"]}
                    rightColumn={[
                        "The sprint aimed to optimize the core user flow to increase engagement, conversion, and AOV. This included simplifying the checkout, reducing drop-off, strengthening mobile UX, and clarifying the page structure to remove friction.",
                        {
                            type: "list",
                            intro:
                                "A short and clear overview of the issues that were holding back conversion:",
                            items: [
                                "Weak CTAs & missing trust signals",
                                "Unnecessary fields, high checkout drop-off",
                                "No upsells, bundles, or recommendations",
                                "Poor mobile optimization",
                                "Confusing page structure, high friction",
                                "No prioritization of key actions",
                            ],
                        },
                        {
                            type: "metrics",
                            items: [
                                { value: +32, prefix: "+", suffix: "%", label: "Checkout Completion Rate" },
                                { value: +20, prefix: "+", suffix: "%", label: "AOV Growth" },
                                { value: -23, prefix: "", suffix: "%", label: "Bounce Rate" },
                            ],
                        },
                    ]}
                    lineRows={[1]}
                    textColorClass="text-text-300"
                    threshold={0.5}
                />

                <OverviewCaseImageSection
                    imageSrc={NespressoCase1}
                    imageAlt="Nespresso case study"
                    videoSrc="/video/nespressso/K4xdYvP5VrJ66kjBBQZ0fSXonFw.mp4"
                    iSsmallColumn={true}
                    imageClassName="md:max-h-[450px]"

                />
                <CaseTextBox
                    className="pb-0"
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "Experience strategy from the elite to the individual",
                            body: [
                                "Nespresso needed to evolve from a niche, connoisseur-focused experience to one that serves a broader spectrum of users. We restructured the digital ecosystem around three core segments, aligning navigation, guidance, and product pathways to how real customers make decisions.",
                                "",
                                "The result is a premium yet approachable experience that adapts to different levels of knowledge and intent — positioning Nespresso as a companion to individual taste and routine, not just a product catalog.",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Solving pain points through key features and design language",
                            body: [
                                "We rebuilt core journeys to remove friction and guide users toward high-value actions: clearer product pathways, faster decisions, and a more intuitive route into subscriptions and repeat purchases. Each feature was shaped around measurable impact across discovery, comparison, and checkout.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection src="/video/nespressso/KAd7i5wQV7Vl9SQimeRdzNcYFyo.mp4"/>
                <OverviewCaseVideoTextSection
                    videoSrc="/video/nespressso/eCJwaoTQaLP2oGuCsWxqErqWUw.mp4"
                    firstText="A streamlined visual system brings clarity and consistency throughout the experience, improving scanning, hierarchy, and overall conversion while scaling across Nespresso’s full product ecosystem."
                    secondText=""
                />
                <TextSection
                    className="mt-[200px]"
                    text={[
                        "The site now feels as refined",
                        "as the coffee itself—calm, clean, and intentional. It guides me through the experience instead of just displaying products. Shopping here has become part of my ritual.",
                    ]}
                    mobileText={[
                        "The site now feels as refined",
                        "as the coffee itself—calm, clean, and intentional. It guides me through the experience instead of just displaying products. Shopping here has become part of my ritual.",
                    ]}
                    showLine={false}
                />
                <InfoBlock
                    title="Laura Bennett, Nespresso Member"
                    className={"not-md:hidden mt-[32px] mb-[205px]"}
                />
                <OverviewCaseVideoSection
                    className=""
                    src="/video/nespressso/JW9tBsFi0Xm6810KHjTgnbuBo.mp4"

                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "A streamlined, insight-driven design system",
                            body: [
                                "With the updated visual direction established, we built a modular design system that unifies Nespresso’s product storytelling with clearer, more functional decision support. The system scales across machines, capsules, and subscriptions — adapting to different levels of product complexity while keeping the interface clean and predictable.",
                                "",
                                "It enables users to compare options quickly, understand key differentiators, and make confident choices without navigating unnecessary noise. Subjective preferences like flavor profiles or intensity are surfaced alongside essential functional attributes, giving customers the right level of context at the right moment."
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    videoSrc="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"
                    firstText="We aimed to develop a design system for Nespresso to guarantee consistency and optimal performance at scale. The navigation emerged as our primary focus, utilizing a blend of functional and expressive motion to create an innovative wayfinding solution that directs and engages users effectively."
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "A smarter approach to storytelling",
                            body: [
                                "Given the breadth of Nespresso’s product ecosystem — machines, capsules, accessories, services, and subscriptions — the previous structure made it difficult for users to quickly understand what mattered to them. To resolve this, we redefined the information architecture from the ground up.",
                                "",
                                "We mapped a new, streamlined site structure and developed a content system that aligns each page with a specific user intent. This clarified where new pages were required, where consolidation improved clarity, and how guidance should scale across different product categories."
                            ],
                        },
                    ]}
                />
                <CaseSection3_9
                    leftImageSrc={Case3_9Image}
                    leftImageAlt="Concept sketch"
                    leftTitle=""
                    leftBody={[
                        "The updated visual identity was paired with modular content patterns that allow pages to adapt based on user needs — simplifying the surface for newcomers while enabling deeper exploration for returning customers.",
                        "Motion and progressive disclosure were integrated to keep the experience lightweight, reducing cognitive load while supporting higher-intent decision making."
                    ]}
                    videoSrc="/video/nespressso/ozQmpxgVh0h8ImZ4FFkvEIsYTXs.mp4"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "A frictionless product-to-checkout flow",
                            body: [
                                "We rebuilt the product flow to minimize decision friction and shorten the path from interest to purchase. The new product page surfaces only the essentials — clear visuals, key specs, flavor cues, and transparent pricing — allowing users to make confident choices in seconds.",
                                "",
                                "The redesigned Add to Cart step removes unnecessary barriers and keeps users in context, while the checkout flow has been streamlined into a fast, logical sequence optimized for mobile-first completion.",
                                "",
                                "By reducing cognitive load and tightening the journey end-to-end, the experience now converts at a significantly higher rate — moving shoppers from product discovery to confirmed purchase with far less drop-off."
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className="md:pb-8 not-md:mt-[24px]"
                    src="/video/nespressso/iBewqx3CIxQdNYTE587gLEtR7c.mp4"
                    aspectRatio="1"
                />

                <ScrollingTextCaseSection
                    videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
                    imageSrc={OptionImage}
                    imageAlt="Case study description"
                    videoTitle="Video title for cursor"
                    logo={<EmmaLogoScrollingText/>}
                    link="/emma"
                />
            </div>
        </div>
    );
}
