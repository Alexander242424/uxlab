import NespressoLogoMobile from "@/assets/Nespresso Logo mobile.svg";
import NespressoLogo from "@/assets/Nespresso Logo.svg";
import NespressoCase3 from "@/assets/Nespresso/60GnuqXyzpsH5lC1nnnABRg5Yz8.avif";
import HeroImage from "@/assets/Nespresso/Nespresso.jpg";
import NespressoCase1 from "@/assets/Nespresso/nR82XOWawuWAy8GHMZeeFWJ3k0.avif";
import NespressoCase2 from "@/assets/Nespresso/uF1xvIpJ073LZGEw4CqEsTGFg.avif";
import OptionImage from "@/assets/image/OurCases/Option 22.jpg";
import EmmaLogoScrollingText from "@/assets/image/OurCases/logo/emma-logo.svg";
import CasesHeroSections from "@/components/CasesHeroSections";
import InfoBlock from "@/components/InfoBlock";
import OverviewCaseImageSection from "@/components/OverviewCaseImageSection";
import OverviewCaseTestimonialSection from "@/components/OverviewCaseTestimonialSection";
import OverviewCaseVideoSection from "@/components/OverviewCaseVideoSection";
import OverviewCaseVideoTextSection from "@/components/OverviewCaseVideoTextSection";
import ScrollingTextCaseSection from "@/components/ScrollingTextCaseSection";
import { Metadata } from "next";

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
        url: "https://uxlab.digital/meta/thumbnail.jpg?v=2",
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
    images: ["https://uxlab.digital/meta/thumbnail.jpg?v=2"],
  },
};

export default function NespressoPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <CasesHeroSections
          logo={<NespressoLogo />}
          logoMobile={<NespressoLogoMobile />}
          text={["Seamless Coffee", "E-Commerce Coffee Experience"]}
          companyName="Nespresso"
          year="2022 - 2023"
          deliverables="Design Strategy · UX · Design System · Branding"
        />
        {/* <div className="w-full">
          <ShowreelSection
            isDefault={true}
            mobileSrc="/video/reel-short-mobile.mp4"
            desktopSrc="/video/reel-short.mp4"
          />
        </div> */}
        <OverviewCaseVideoSection
          className="!p-0"
          imageSrc={HeroImage}
          imageAlt="Emma Sleep case study"
          isAnimated={false}
        />
        <OverviewCaseTestimonialSection
          firstText=""
          secondText={[
            "Creating a standout digital experience",
            "for one of the world`s most renowned brands,",
            "we teamed up with Nespresso to redefine",
            "their online presence, enhancing brand",
            "engagement through a product-driven",
            "approach.",
          ]}
          mobileText={[
            "Creating a standout",
            "digital experience for",
            "for one of the world`s",
            "most renowned brands,",
            "we teamed up with",
            "Nespresso to redefine",
            "their online presence,",
            "enhancing brand",
            "engagement through",
            "a product-driven",
            "approach.",
          ]}
          authorText="Introduction"
        />
        <OverviewCaseVideoSection src="/video/nespressso/Q6DtR9oTjf95E7uLqWai4ngPUA.mp4" />
        <InfoBlock
          className="md:pt-[120px]! md:pb-20!"
          title="Challenge"
          description={[
            "Not enough enhances brand",
            "engagement, poor user experience,",
            "and just another website that",
            "sells coffee products",
          ]}
          mobileTitle="Challenge"
          mobileDescription={[
            "Not enough enhances brand",
            "engagement, poor user experience,",
            "and just another website that",
            "sells coffee products",
          ]}
        />
        <InfoBlock
          className="md:pt-20! md:pb-[120px]!"
          title="Solution"
          description={[
            "Designing an innovative digital",
            "platform for a globally recognized",
            "brand, we partnered with Nespresso",
            "to transform their online experience,",
            "creating a seamless, user-centered",
            "journey that strengthens brand",
            "connection and elevates product",
            "engagement with exceptional",
            "conversion rate.",
          ]}
          mobileTitle="Solution"
          mobileDescription={[
            "Designing an innovative digital",
            "platform for a globally recognized",
            "brand, we partnered with",
            "Nespresso to transform their",
            "online experience, creating a",
            "seamless, user-centered journey",
            "that strengthens brand",
            "connection and elevates product",
            "engagement with exceptional",
            "conversion rate.",
          ]}
        />
        <OverviewCaseImageSection
          imageSrc={NespressoCase1}
          imageAlt="Nespresso case study"
          videoSrc="/video/nespressso/K4xdYvP5VrJ66kjBBQZ0fSXonFw.mp4"
          iSvideoPositionLeft={true}
          imageClassName="md:max-h-[450px]"
        />
        <InfoBlock
          className="md:py-20!"
          title="The vision"
          description={[
            "Create a responsive platform that",
            "effortlessly integrates brand storytelling with a",
            "seamless shopping experience.",
          ]}
          mobileTitle="The vision"
          mobileDescription={[
            "Create a responsive platform that",
            "effortlessly integrates brand storytelling with a",
            "seamless shopping experience.",
          ]}
        />
        <OverviewCaseVideoSection src="/video/nespressso/KAd7i5wQV7Vl9SQimeRdzNcYFyo.mp4" />
        <OverviewCaseVideoTextSection
          videoSrc="/video/nespressso/eCJwaoTQaLP2oGuCsWxqErqWUw.mp4"
          firstText="This vibrant, brand-focused destination showcases personality while providing a smooth, effortless shopping experience."
          secondText="Close-up of the mobile Nespresso shopping website. As part of a broader initiative to elevate and enhance Nespresso's digital experience, we redesigned each product detail page in both design and functionality. Our goal was to integrate more editorial elements while highlighting details and tools that drive conversion."
        />
        <InfoBlock
          title="Improvements focused on product features and functionalities"
          description={[
            "A streamlined interface lets the",
            "unique storytelling of each product",
            "take center stage while adhering to",
            "eCommerce best practices.",
          ]}
          mobileTitle={[
            "Improvements focused on product",
            "features and functionalities",
          ]}
          mobileDescription={[
            "A streamlined interface lets",
            "the unique storytelling of each",
            "product take center stage while",
            "adhering to eCommerce best",
            "practices.",
          ]}
        />
        <OverviewCaseImageSection
          className="md:pb-0"
          imageSrc={NespressoCase2}
          imageAlt="Nespresso case study"
          videoSrc="/video/nespressso/1RrLHJkvBJzSxSMJgpCTlVSsrs.mp4"
          iSvideoPositionLeft={true}
          imageClassName="md:max-h-[600px]"
          videoClassName="md:max-h-[600px]"
        />
        <OverviewCaseVideoSection
          className="md:pt-8"
          src="/video/nespressso/JW9tBsFi0Xm6810KHjTgnbuBo.mp4"
        />
        <InfoBlock
          className="md:py-20!"
          title="In the specifics."
          description={[
            "Nespressos revamped design",
            "system, Holistic, enhances efficiency",
            "and delivers consistent experiences",
            "across all platforms at scale.",
          ]}
          mobileTitle="In the specifics."
          mobileDescription={[
            "Nespressos revamped",
            "design system, Holistic, enhances",
            "efficiency and delivers consistent",
            "experiences across all platforms at",
            "scale.",
          ]}
        />
        <OverviewCaseVideoSection src="/video/nespressso/0K4deDlD8wKDWus41S2tYo8Yw.mp4" />
        <OverviewCaseVideoTextSection
          videoSrc="/video/nespressso/4ALrxbTLDmy6Ghe3xMIIiXDLS8.mp4"
          firstText="We aimed to develop a design system for Nespresso to guarantee consistency and optimal performance at scale. The navigation emerged as our primary focus, utilizing a blend of functional and expressive motion to create an innovative wayfinding solution that directs and engages users effectively."
          secondText=""
        />
        <InfoBlock
          className="md:py-20!"
          title="Loyalty"
          description={[
            "What if loyalty involved presenting",
            "brand enthusiasts with a refined and",
            "exclusive assortment of member",
            "benefits and branded identity",
            "merchandise?",
          ]}
          mobileTitle="Loyalty"
          mobileDescription={[
            "What if loyalty involved presenting",
            "brand enthusiasts with a refined",
            "and exclusive assortment of",
            "member benefits and branded",
            "identity merchandise?",
          ]}
        />
        <OverviewCaseVideoSection src="/video/nespressso/ozQmpxgVh0h8ImZ4FFkvEIsYTXs.mp4" />
        <OverviewCaseVideoTextSection
          videoSrc="/video/nespressso/yVkkXjiOC41qMKPX0rQeZ50wqh0.mp4"
          firstText={`To enhance the newly elevated digital experience, our team imagined the future of loyalty with Nespresso, drawing inspiration from the intimacy of close relationships and branding it as "The Fold."`}
          secondText=""
        />
        <InfoBlock
          className="md:py-20!"
          title="Branding"
          description={[
            "The intersection of user experience",
            "(UX) and branding is essential in",
            "today's digital landscape, where a",
            "cohesive brand identity extends",
            "beyond logos and visuals to",
            "encompass the entire user journey.",
            "Consistency across touchpoints",
            "fosters trust and recognition, while",
            "emotional connections built through",
            "personalized experiences enhance",
            "brand loyalty.",
          ]}
          mobileTitle="Branding"
          mobileDescription={[
            "The intersection of user",
            "experience (UX) and branding",
            "is essential in today's digital",
            "landscape, where a cohesive",
            "brand identity extends beyond",
            "logos and visuals to encompass",
            "the entire user journey.",
            "Consistency across touchpoints",
            "fosters trust and recognition, while",
            "emotional connections built through",
            "personalized experiences enhance",
            "brand loyalty.",
          ]}
        />
        <OverviewCaseVideoSection
          className="md:pb-8"
          src="/video/nespressso/iBewqx3CIxQdNYTE587gLEtR7c.mp4"
        />
        <OverviewCaseImageSection
          className="md:pt-0"
          imageSrc={NespressoCase3}
          imageAlt="Nespresso case study"
          videoSrc="/video/nespressso/mCdY9OzHmaET5UX1WFZ1LaFww.mp4"
          iSvideoPositionLeft={true}
          imageClassName="md:max-h-[651px]"
        />
        {/* <ScrollingTextVideoSection
          videoSrc="/video/qI5xtJcNFInMI16VcJte84bgto.mp4"
          poster="/E4qit3QgMPs7XD5VTnapxch4aQ.avif"
        /> */}
        <ScrollingTextCaseSection
          videoSrc="/video/47QASZS6PBeoeu2yw7S4PnnZjY.mp4"
          imageSrc={OptionImage}
          imageAlt="Case study description"
          videoTitle="Video title for cursor"
          logo={<EmmaLogoScrollingText />}
          link="/emma"
        />
      </div>
    </div>
  );
}
