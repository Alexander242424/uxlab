import HeroImage from "@/assets/Boostra/Boostra.jpg";
import BigImage1 from "@/assets/Boostra/bigImage1.webp";
import BigImage2 from "@/assets/Boostra/bigImage2.webp";
import BigImage3 from "@/assets/Boostra/bigImage3.webp";
import BigImage4 from "@/assets/Boostra/bigImage4.webp";
import FirstBlockImage1 from "@/assets/Boostra/firstblockimage1.webp";
import FirstBlockImage2 from "@/assets/Boostra/firstblockimage2.webp";
import SmallImage1 from "@/assets/Boostra/smallImage1.webp";
import SmallImage2 from "@/assets/Boostra/smallImage2.webp";
import BoostraLogoMobile from "@/assets/boostra-logo-mobile.svg";
import BoostraLogo from "@/assets/boostra-logo.svg";
import GuideImage from "@/assets/image/OurCases/Option 28.png";
import NespressoLogoScrollingText from "@/assets/image/OurCases/logo/Vector.svg";
import CasesHeroSections from "@/components/CasesHeroSections";
import CasesOutcome from "@/components/CasesOutcome";
import InfoBlock from "@/components/InfoBlock";
import OverviewCaseImageSection from "@/components/OverviewCaseImageSection";
import OverviewCaseTestimonialSection from "@/components/OverviewCaseTestimonialSection";
import OverviewCaseVideoSection from "@/components/OverviewCaseVideoSection";
import OverviewCaseVideoTextSection from "@/components/OverviewCaseVideoTextSection";
import ScrollingTextCaseSection from "@/components/ScrollingTextCaseSection";
import TextSection from "@/components/TextSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boostra Case Study | UXLAB",
  description: "Discover how UXLAB helped Boostra innovate personalized sleep solutions worldwide. Explore our design process, deliverables, and outcomes from 2022-2024.",
  openGraph: {
    title: "Boostra Case Study | UXLAB",
    description: "Discover how UXLAB helped Boostra innovate personalized sleep solutions worldwide. Explore our design process, deliverables, and outcomes from 2022-2024.",
    url: "https://uxlab.digital/boostra",
    siteName: "UXLAB",
    images: [
      {
        url: "https://uxlab.digital/meta/thumbnail.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Boostra Case Study - UXLAB",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boostra Case Study | UXLAB",
    description: "Discover how UXLAB helped Boostra innovate personalized sleep solutions worldwide. Explore our design process, deliverables, and outcomes from 2022-2024.",
    images: ["https://uxlab.digital/meta/thumbnail.jpg?v=2"],
  },
};

export default function NextCasesPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <CasesHeroSections
          logo={<BoostraLogo />}
          logoMobile={<BoostraLogoMobile />}
          text={["Innovating Personalized", "Sleep Worldwide"]}
          companyName="Boostra"
          year="2022 - 2024"
          deliverables="Guidelines and Portals · Digital Asset Management · Templates"
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
        <TextSection
          className="px-4 pb-12 md:px-10 md:py-20"
          firstText="By fostering healthy sleep habits,"
          secondText={[
            "Emma Sleep builds trust, encouraging them",
            "to download the app and integrate it into",
            "their daily routines.",
          ]}
          mobileText={[
            "By fostering healthy",
            "sleep habits,",
            "Emma Sleep builds trust,",
            "encouraging them",
            "to download the app",
            "and integrate it into their",
            "daily routines.",
          ]}
        />
        <CasesOutcome />
        <OverviewCaseImageSection
          imageSrc={FirstBlockImage1}
          imageAlt="Emma Sleep case study"
          imageSrc2={FirstBlockImage2}
          imageAlt2="Emma Sleep case study"
          imageClassName="min-h-[700px]"
          imageClassName2="max-h-[400px]"
        />
        <InfoBlock
          className="md:pt-[120px]! md:pb-20!"
          title={[
            "Challenge: Low daily engagement and",
            "limited value for app users",
          ]}
          description={[
            "Emma Sleep wanted users to engage with its mobile app on a daily basis, but the existing",
            "experience offered limited value beyond basic sleep tracking.",
          ]}
          mobileTitle={[
            "Challenge: Low daily engagement and",
            "limited value for app users",
          ]}
          mobileDescription={[
            "Emma Sleep wanted users to engage with its",
            "mobile app on a daily basis, but the existing",
            "experience offered limited value",
            "beyond basic sleep tracking.",
          ]}
        />
        <InfoBlock
          className="md:pt-20! md:pb-[120px]!"
          title={[
            "Solution: Transforming the app",
            "into a personalized educational hub",
          ]}
          description={[
            "To increase daily engagement and provide meaningful value, Emma Sleep adopted a",
            "product-focused approach, redesigning the app to offer",
            "a comprehensive educational hub. ",
          ]}
          mobileTitle={[
            "Solution: Transforming the app",
            "into a personalized educational hub",
          ]}
          mobileDescription={[
            "To increase daily engagement and provide",
            "meaningful value, Emma Sleep adopted a",
            "product-focused approach, redesigning the",
            "app to offer a comprehensive educational hub. ",
          ]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage1}
          imageAlt="Emma Sleep case study"
        />
        <OverviewCaseVideoTextSection
          imageSrc={SmallImage1}
          imageAlt="Emma Sleep case study"
          firstText="We used playful colours, engaging illustrations, and micro-interactions to weave the brand through the experience and draw visitors in."
          secondText="The new site feels multi-dimensional — much like the mind."
        />
        <OverviewCaseTestimonialSection
          firstText="I'm consistently amazed at the quality of"
          secondText={[
            "work Alex produces. From day one Alex just,",
            "got our brand, created some stunning",
            "designs, and ensured the whole process",
            " ran smoothly.",
          ]}
          mobileText={[
            "I'm consistently amazed",
            " at the quality of work",
            "Alex produces. From day",
            "one Alex just got our",
            "brand, created some",
            "stunning designs, and",
            "ensured the whole",
            "process ran smoothly.",
          ]}
          authorText="Felix Focken, CEO (Emma Sleep)"
        />
        <InfoBlock
          className="md:py-20!"
          title={[
            "To increase daily engagement and provide ",
            "meaningful value, Emma Sleep adopted a",
            "product-focused approach, redesigning the",
            "app to offer a comprehensive",
            "educational hub.",
          ]}
          description={[
            "Solution: Transforming the app into a personalized educational hub",
          ]}
          mobileTitle={[
            "To increase daily engagement and",
            "provide meaningful value, Emma Sleep",
            "adopted a product-focused approach,",
            "redesigning the app to offer a",
            "comprehensive educational hub.",
          ]}
          mobileDescription={[
            "Solution: Transforming the app into a",
            "personalized educational hub",
          ]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage2}
          imageAlt="Emma Sleep case study"
        />
        <InfoBlock
          className="md:py-20!"
          title={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the app and",
            "integrate it into their daily routines.",
          ]}
          description={["A Call to Habits"]}
          mobileTitle={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the",
            "app and integrate it into their",
            "daily routines.",
          ]}
          mobileDescription={["A Call to Habits"]}
        />
        <OverviewCaseVideoTextSection
          imageSrc={SmallImage2}
          imageAlt="Emma Sleep case study"
          firstText="People typically visit Emma Sleep with strong questions about sleep quality. Why can't I sleep? How do I find more energy after sleep?"
          secondText="Bringing the Sleep Challenges, Sleep Scan, and Daily Routine categories to the forefront invites users to dive further into mindful living and creates opportunities to discover everything Emma Sleep has to offer."
          videoClassName="md:min-w-2/3 md:max-w-2/3 md:pr-8"
        />
        <InfoBlock
          className="md:py-20!"
          title={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the app and",
            "integrate it into their daily routines.",
          ]}
          description={["A Call to Habits"]}
          mobileTitle={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the",
            "app and integrate it into their",
            "daily routines.",
          ]}
          mobileDescription={["A Call to Habits"]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage3}
          imageAlt="Emma Sleep case study"
        />
        <InfoBlock
          className="md:py-20!"
          title={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the app and",
            "integrate it into their daily routines.",
          ]}
          description={["A Call to Habits"]}
          mobileTitle={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the",
            "app and integrate it into their",
            "daily routines.",
          ]}
          mobileDescription={["A Call to Habits"]}
        />
        <OverviewCaseVideoTextSection
          imageSrc={SmallImage2}
          imageAlt="Emma Sleep case study"
          firstText="We used playful colours, engaging illustrations, and micro-interactions to weave the brand through the experience and draw visitors in."
          secondText="The new site feels multi-dimensional — much like the mind."
          videoClassName="md:min-w-2/3 md:max-w-2/3 md:pr-8"
        />
        <InfoBlock
          className="md:py-20!"
          title={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the app and",
            "integrate it into their daily routines.",
          ]}
          description={["A Call to Habits"]}
          mobileTitle={[
            "By fostering healthy sleep habits, ",
            "Emma Sleep builds trust with users,",
            " encouraging them to download the",
            "app and integrate it into their",
            "daily routines.",
          ]}
          mobileDescription={["A Call to Habits"]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage4}
          imageAlt="Emma Sleep case study"
        />
        <ScrollingTextCaseSection
          videoSrc="/video/nespressso/1RrLHJkvBJzSxSMJgpCTlVSsrs.mp4"
          imageSrc={GuideImage}
          imageAlt="Case study description"
          videoTitle="Video title for cursor"
          logo={<NespressoLogoScrollingText />}
          link="/nespresso"
        />
      </div>
    </div>
  );
}
