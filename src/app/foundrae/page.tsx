import FoundraeLogo from "@/assets/Foundrae/foundrae.svg";
import HeroImage from "@/assets/image/OurCases/foundrae.webp";
import FoundraeBigImg1 from "@/assets/Foundrae/found-1.jpg";
import FoundraeBigImg2 from "@/assets/Foundrae/found-2.jpg";
import FoundraeBigVideoImage from "@/assets/Foundrae/big_video_image.jpg";
import FoundraeBigVideoImage2 from "@/assets/Foundrae/big_video_image_2.jpg";
import FoundraeBigLeftImage from "@/assets/Foundrae/foundrae_left_big_image.jpg";
import BigHeightImage from "@/assets/Foundrae/big_heigth_img.jpg";
import BigVideoImage from "@/assets/Foundrae/big_video_image.jpg";
import OptionImage from "@/assets/image/OurCases/mac_duggal.webp";
import EmmaLogoScrollingText from "@/assets/OurCases/logo/mac_duggal_log.svg";
import FoundraeLeftImage from "@/assets/Foundrae/left_image.jpg";
import FoundraeRightBigImage from "@/assets/Foundrae/right_big_image.jpg";


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
                    logo={<FoundraeLogo/>}
                    logoMobile={<FoundraeLogo/>}
                    text={[
                        "Reframing a digital jewelry",
                        "gallery into a revenue engine",
                    ]}
                    mobileText={[
                        "Reframing a digital jewelry",
                        "gallery into a revenue engine",
                    ]}
                    companyName=""
                    year="6x(2-Week Design Sprint)"
                    deliverables="Optimize the Core User Flow  →  Checkout  ·  Homepage  ·  Subscription  ·  Mobile UX"
                />
                <OverviewCaseVideoSection
                    className="!p-0 mb-[80px] first_case_hero_section "
                    imageSrc={HeroImage}
                    imageAlt="Foundrae Case Study"
                    isAnimated={false}
                />
                <TextSection
                    className=""
                    text={[
                        "Elevating a modern heirloom",
                        "brand into a high-performing digital flagship.",
                    ]}
                    mobileText={[
                        "Elevating a modern heirloom",
                        "brand into a high-performing digital flagship.",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Goal", "Challenges", "Outcomes"]}
                    rightColumn={[
                        "Foundrae already felt like a gallery of modern heirlooms. The problem was that the online experience behaved like a gallery too: beautiful, slow, and difficult to shop. Customers were browsing, bookmarking and leaving. The brand story was strong, but the path to purchase was fragile.\n\rWe set one goal: Turn Foundrae’s storytelling into a frictionless, repeatable buying ritual.",
                        {
                            type: "list",
                            intro:
                                "The main bottlenecks were:\n",
                            items: [
                                "Luxury price point + fragile UX made customers hesitate instead of commit.",
                                "Navigation was complex, especially for first-time visitors discovering the brand.",
                                "Catalog was organized like a traditional store, not like a symbolic, story-driven brand.",
                                "Product pages looked premium but didn’t actively answer key trust questions.",
                                "Checkout experience created uncertainty around duties, shipping, and returns.",
                            ],
                        },
                        {
                            type: "metrics",
                            items: [
                                {value: 27, prefix: "+", suffix: "%", label: "Increase in mobile conversion rate"},
                                {value: 19, prefix: "+", suffix: "%", label: "Lift in average order value"},
                                {value: -22, prefix: "", suffix: "%", label: "Drop in checkout abandonment"},
                                {
                                    value: 31,
                                    prefix: "+",
                                    suffix: "%",
                                    label: "Growth in repeat purchase rate from existing customers"
                                },
                            ],
                        },
                    ]}
                    lineRows={[1]}
                    textColorClass="text-text-300"
                    threshold={0.5}
                />

                <OverviewCaseImageSection
                    imageSrc={FoundraeBigImg2}
                    imageAlt="Nespresso case study"
                    videoSrc=""
                    imageSrc2={FoundraeBigImg1}
                    iSsmallColumn={false}
                    imageClassName=""

                />
                <CaseTextBox
                    className="pb-0"
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "A confidence-first luxury journey",
                            body: [
                                "Foundrae was already priced and crafted as luxury, but the UX didn’t give customers the same confidence as the pieces themselves. We softened the experience into a calm, deliberate journey: fewer steps, clearer hierarchy, and space for the price to feel justified. Craftsmanship, materials, and guarantees now frame every key decision, so the interface quietly supports commitment instead of hesitation.",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Navigation that welcomes, not overwhelms",
                            body: [
                                "For first-time visitors, the old navigation felt like walking into a maze.",
                                "",
                                "Plain-language labels and guided “start here” paths turn discovery into a guided tour of the brand, not a test of patience.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection imageSrc={FoundraeBigVideoImage}/>
                <OverviewCaseVideoTextSection
                    imageSrc={BigHeightImage}
                    firstText="We stripped the flow down to the bone. Every element that didn't drive the sale was cut. "
                    secondText="The result is a lean, high-velocity checkout experience that gets the user from 'cart' to 'paid' with zero friction."
                    textMaxWidth={"col-lg-6"}
                />
                <TextSection
                    className="mt-[200px]"
                    text={[
                        "I’m consistently amazed at the ",
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
                />
                <OverviewCaseVideoSection
                    className=""
                    imageSrc={FoundraeBigVideoImage2}

                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "A catalog built around meaning, not just merchandise",
                            body: [
                                "The catalog once behaved like a conventional store, even though the brand is anything but.",
                                "",
                                "We elevated symbolism to the front door: customers can now start with meaning -protection, love, identity - and only then refine by metal, type, or price. Each collection opens with a short narrative that frames the pieces as chapters in a story, not just items on a grid."
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    imageSrc={FoundraeBigLeftImage}
                    firstText="We aimed to develop a design system for Nespresso to guarantee consistency and optimal performance at scale. The navigation emerged as our primary focus, utilizing a blend of functional and expressive motion to create an innovative wayfinding solution that directs and engages users effectively."
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Product pages that answer the questions no one asks out loud",
                            body: [
                                "The old pages looked premium but stayed quiet on the details that actually close a high-value sale.",
                                "",
                                " We rebuilt them as composed, scannable narratives: symbolism, materials, craftsmanship, personalization, sizing, delivery, and returns each have a defined place. Subtle social proof and inline FAQs handle objections next to the CTA, so users feel informed without being pushed."
                            ],
                        },
                    ]}
                />
                <CaseSection3_9
                    leftImageSrc={FoundraeLeftImage}
                    leftImageAlt="Concept sketch"
                    leftTitle=""
                    leftBody={[
                        ""
                    ]}
                    videoImageSrc={FoundraeRightBigImage}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "Checkout that removes doubt from the final step",
                            body: [
                                "At checkout, uncertainty around duties, shipping, and returns was doing more talking than the brand. We redesigned the flow as a single, focused column with everything important stated upfront: delivery expectations, taxes, duties, and return rules. A persistent order summary, gentle error states, and visible access to support turn the last mile from a moment of doubt into a quiet confirmation."
                            ],
                        },
                    ]}
                />
                <OverviewCaseVideoSection
                    className="md:pb-8 not-md:mt-[24px]"
                    imageSrc={BigVideoImage}
                    aspectRatio="1"
                />

                <ScrollingTextCaseSection
                    videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
                    imageSrc={OptionImage}
                    imageAlt="Case study description"
                    videoTitle="Video title for cursor"
                    logo={<EmmaLogoScrollingText/>}
                    link="/mucduggal"
                />
            </div>
        </div>
    );
}
