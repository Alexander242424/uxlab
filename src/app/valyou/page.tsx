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
import Valyou_11 from "@/assets/Nespresso/nespresso-last.jpg";

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
                        "Innovating Personalized Sleep ",
                        "Worldwide",
                    ]}
                    mobileText={[
                        "Innovating Personalized Sleep ",
                        "Worldwide",
                    ]}
                    companyName="Wellow Socks"
                    year="2022 - 2024"
                    deliverables="Guidelines and Portals  ·  Digital Asset Management  ·  Templates"
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
                        "By fostering healthy sleep ",
                        "habits, Emma Sleep builds trust, encouraging them to download the app and integrate it into their daily routines. ",
                    ]}
                    mobileText={[
                        "By fostering healthy sleep ",
                        "habits, Emma Sleep builds trust, encouraging them to download the app and integrate it into their daily routines. ",
                    ]}
                    showLine={true}
                />
                <OverviewCaseTestimonialSection
                    leftColumn={["Outcomes"]}
                    rightColumn={[
                        {
                            type: "metrics",
                            items: [
                                {value: 12, prefix: "", suffix: "K", label: "Turn Visitors into Loyal Customers with Strategic, Goal-Oriented Interfaces."},
                                {value: 10, prefix: "+", suffix: "K", label: "Turn Visitors into Loyal Customers with Strategic, Goal-Oriented Interfaces."},
                                {value: 500, prefix: "+", suffix: "", label: "Turn Visitors into Loyal Customers with Strategic, Goal-Oriented Interfaces."},
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
                            title: "Challenge: Low daily engagement and limited value for app users",
                            body: [
                                "Emma Sleep wanted users to engage with its mobile app on a daily basis, but the existing experience offered limited value beyond basic sleep tracking.",
                            ],
                        },
                    ]}
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "Solution: Transforming the app into a personalized educational hub",
                            body: [
                                "To increase daily engagement and provide meaningful value, Emma Sleep adopted a product-focused approach, redesigning the app to offer a comprehensive educational hub.",
                            ],
                        },
                    ]}
                />

                <OverviewCaseVideoSection imageSrc={Valyou_4}/>
                <OverviewCaseVideoTextSection
                    imageSrc={Valyou_5}
                    firstText="People typically visit Emma Sleep with strong questions about sleep quality. Why can’t I sleep? How do I find more energy after sleep?"
                    secondText="Bringing the Sleep Challenges, Sleep Scan, and Daily Routine categories to the forefront invites users to dive further into mindful living and creates opportunities to discover everything Emma Sleep has to offer."
                    textMaxWidth={"col-lg-6"}
                />
                <TextSection
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
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto"
                    blocks={[
                        {
                            title: "To increase daily engagement and provide meaningful value, Emma Sleep adopted a product-focused approach, redesigning the app to offer a comprehensive educational hub. ",
                            body: [
                                "Solution: Transforming the app into a personalized educational hub",
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
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines. ",
                            body: [
                                "A Call to Habits"
                            ],
                        },
                    ]}
                />
                {/*<OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4"/>*/}
                <OverviewCaseVideoTextSection
                    imageSrc={Valyou_7}
                    firstText="We used playful colours, engaging illustrations, and micro-interactions to weave the brand through the experience and draw visitors in."
                    secondText="The new site feels multi-dimensional — much like the mind."
                    videoColClass="col-lg-9"
                    textColClass="col-lg-3"
                />
                <CaseTextBox
                    className=""
                    colClass="col-lg-6 mx-auto" // тут задаёшь нужные колонки
                    blocks={[
                        {
                            title: "By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines. ",
                            body: [
                                "A Call to Habits"
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
                            title: "By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines. ",
                            body: [
                                "A Call to Habits"
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
                    link="/emma"
                />
            </div>
        </div>
    );
}
