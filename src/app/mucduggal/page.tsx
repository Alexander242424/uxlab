import MucduggalLogo from "@/assets/Mucduggal/logo.svg";
import Mucduggal_1 from "@/assets/Mucduggal/muc_1.jpg";
import Mucduggal_2 from "@/assets/Mucduggal/muc_2.jpg";
import Mucduggal_3 from "@/assets/Mucduggal/muc_3.jpg";
import Mucduggal_4 from "@/assets/Mucduggal/muc_4.jpg";
import Mucduggal_5 from "@/assets/Mucduggal/muc_5.jpg";
import Mucduggal_6 from "@/assets/Mucduggal/muc_6.jpg";
import Mucduggal_7 from "@/assets/Mucduggal/muc_7.jpg";
import Mucduggal_8 from "@/assets/Mucduggal/muc_8.jpg";
import Mucduggal_9 from "@/assets/Mucduggal/muc_9.jpg";
import Mucduggal_10 from "@/assets/Mucduggal/muc_10.jpg";
import Mucduggal_11 from "@/assets/image/OurCases/valyou.webp";

import EmmaLogoScrollingText from "@/assets/OurCases/logo/valyou_log.svg";
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
                    logo={<MucduggalLogo/>}
                    logoMobile={<MucduggalLogo/>}
                    text={[
                        "Designing confidence for",
                        "moments that matter",
                    ]}
                    mobileText={[
                        "Designing confidence for",
                        "moments that matter",
                    ]}
                    companyName="Mac Duggal"
                    year="5x(2-Week Design Sprint)"
                    deliverables="Optimize the Core User Flow  →  Checkout  ·  Homepage  ·  Subscription  ·  Mobile UX"
                />
                <OverviewCaseVideoSection
                    className="!p-0 mb-[80px] first_case_hero_section "
                    imageSrc={Mucduggal_1}
                    imageAlt="Foundrae Case Study"
                    isAnimated={false}
                />
                <TextSection
                    className=""
                    text={[
                        "Mac Duggal creates dresses",
                        "for life’s biggest events - we redesigned the digital experience to match the emotional weight of the purchase. Every detail now removes hesitation, guides intent, and elevates the feeling of choosing the perfect gown.",
                    ]}
                    mobileText={[
                        "Mac Duggal creates dresses",
                        "for life’s biggest events - we redesigned the digital experience to match the emotional weight of the purchase. Every detail now removes hesitation, guides intent, and elevates the feeling of choosing the perfect gown.",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Goal", "Challenges", "Outcomes"]}
                    rightColumn={[
                        "The goal was simple: remove user friction, and increase Average Order Value with our UX work.",
                        {
                            type: "list",
                            intro:
                                "",
                            items: [
                                "The luxury price point made users fear making the wrong choice.",
                                "Catalog layout didn’t reflect the brand’s storytelling potential.",
                                "Visitors lacked clarity around fit, styling, and delivery — leading to drop-offs.",
                                "Product pages weren't answering core emotional objections.",
                                "Checkout caused uncertainty when clarity mattered most.",
                            ],
                        },
                        {
                            type: "metrics",
                            items: [
                                {value: 26, prefix: "+", suffix: "%", label: "Increase in Conversion Rate"},
                                {value: 18, prefix: "+", suffix: "%", label: "Increase in Add-to-Cart Rate"},
                                {value: 22, prefix: "+", suffix: "%", label: "Increase in Average Order Value"},
                                {value: -17, prefix: "", suffix: "%", label: "Drop in Bounce Rate"},
                                {value: 34, prefix: "+", suffix: "%", label: "Higher Returning Customer Revenue (LTV)"},
                            ],
                        },
                    ]}
                    lineRows={[1]}
                    textColorClass="text-text-300"
                    threshold={0.5}
                />

                <OverviewCaseImageSection
                    imageSrc={Mucduggal_3}
                    imageAlt="Mucduggal case study"
                    videoSrc=""
                    imageSrc2={Mucduggal_2}
                    iSsmallColumn={false}
                    imageClassName=""

                />
                <CaseTextBox
                    className="pb-0"
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "Intent-Based Navigation That Mirrors How Customers Actually Shop",
                            body: [
                                "Customers don’t browse dresses - they shop for a moment, an event, a feeling. The navigation now aligns with that intent instantly, guiding shoppers to the right category without cognitive load. This reduces friction and sharply increases the rate of “first click → relevant product.”",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "Discovery That Creates Emotional Attachment, Not Just Browsing",
                            body: [
                                "We shifted from a static catalog to an editorial discovery flow built around trends, moods, and occasions. This gives shoppers a reason to explore, compare, and imagine themselves in the product - leading to longer sessions and more add-to-cart actions. Emotion becomes the bridge between interest and conversion.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection imageSrc={Mucduggal_4}/>
                <OverviewCaseVideoTextSection
                    imageSrc={Mucduggal_5}
                    firstText="Every step was stripped down to its essentials, removing anything that could spark doubt or slow momentum."
                    secondText="The result is a checkout experience that feels fast, transparent, and calm - letting customers finish their purchase without a single moment of friction."
                    textMaxWidth={"col-lg-6"}
                />
                <TextSection
                    className="mt-[200px]"
                    text={[
                        "They brought a level of design",
                        "thinking that redefined the Mac Duggal digital experience. By moving beyond a standard e-commerce site to create an intentional digital gallery, they proved they could translate a brand’s unique heritage into a sophisticated, high-performance interface.",
                    ]}
                    mobileText={[
                        "They brought a level of design",
                        "thinking that redefined the Mac Duggal digital experience. By moving beyond a standard e-commerce site to create an intentional digital gallery, they proved they could translate a brand’s unique heritage into a sophisticated, high-performance interface.",
                    ]}
                    showLine={false}
                />
                <InfoBlock
                    title="Felix Focken, CEO (Emma Sleep)"
                    className={"not-md:hidden mt-[32px] mb-[205px]"}
                />
                <OverviewCaseVideoSection
                    className=""
                    imageSrc={Mucduggal_6}

                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Checkout Built for Clarity, Not Guesswork",
                            body: [
                                "The new checkout removes all last-minute anxiety around duties, returns, and delivery timing.",
                                "",
                                "Every cost and timeline is transparent, so customers never fear a surprise after clicking “Place Order.” This directly reduces cart abandonment and increases completed payments."
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    imageSrc={Mucduggal_7}
                    firstText="Shoppers see curated pairings that feel natural - complementary silhouettes, accessories, and event-appropriate looks."
                    secondText="Nothing feels forced because recommendations are tied to intent, not upsell pressure. When relevance increases, customers willingly spend more."
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Retention That Feels Personal, Not Automated",
                            body: [
                                "Wishlists, event-date reminders, and tailored recommendations turn the brand into a stylist rather than a shop.",
                                "",
                                "Customers return because the experience feels crafted around their tastes and their upcoming moments. This transforms one-time buyers into recurring, high-LTV clients."
                            ],
                        },
                    ]}
                />
                <CaseSection3_9
                    leftImageSrc={Mucduggal_8}
                    leftImageAlt="Concept sketch"
                    leftTitle=""
                    leftBody={[
                        "Dress shopping is high-stakes; uncertainty kills conversions.We added fit information, model height, movement shots, and fabric texture details so customers know exactly what they’re buying.",
                        "",
                        "This eliminates hesitation and turns more PDP views into confident purchases."
                    ]}
                    videoImageSrc={Mucduggal_9}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Designing the Yes-Moment",
                            body: [
                                "This is the instant where emotion, clarity, and trust align - the point at which hesitation dissolves and the customer commits.",
                                "",
                                "We shaped every micro-interaction to support that moment, making the path to “yes” feel natural, confident, and inevitable."
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className="md:pb-8 not-md:mt-[24px]"
                    imageSrc={Mucduggal_10}
                    aspectRatio="1"
                />

                <ScrollingTextCaseSection
                    videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
                    imageSrc={Mucduggal_11}
                    imageAlt="Case study description"
                    videoTitle="Video title for cursor"
                    logo={<EmmaLogoScrollingText/>}
                    link="/valyou"
                />
            </div>
        </div>
    );
}
