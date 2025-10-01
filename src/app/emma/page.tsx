import HeroImage from "@/assets/Emma/Emma.jpg";
import EmmaCase1 from "@/assets/Emma/XkNQu7DYidbcrVSHQNflhh0MA.avif";
import EmmaLogoMobile from "@/assets/emma-logo-mobile.svg";
import EmmaLogo from "@/assets/emma-logo.svg";
import BoostraSmallImage from "@/assets/image/OurCases/4.png";
import BoostraImage from "@/assets/image/OurCases/Option23.jpg";
import BoostraLogoScrollingText from "@/assets/image/OurCases/logo/logo-main.svg";
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
  title: "AI Mobile App Assistant Design by UXLAB",
  description: "Discover how UXLAB revamped Emma Sleep's mobile app with AI assistance and personalized learning and reached Today's Picks in the App Store.",
  openGraph: {
    title: "AI Mobile App Assistant Design by UXLAB",
    description: "Discover how UXLAB revamped Emma Sleep's mobile app with AI assistance and personalized learning and reached Today's Picks in the App Store.",
    url: "https://uxlab.digital/emma",
    siteName: "UXLAB",
    images: [
      {
        url: "https://uxlab.digital/meta/thumbnail.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Emma Sleep Case Study - UXLAB",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Mobile App Assistant Design by UXLAB",
    description: "Discover how UXLAB revamped Emma Sleep's mobile app with AI assistance and personalized learning and reached Today's Picks in the App Store.",
    images: ["https://uxlab.digital/meta/thumbnail.jpg?v=2"],
  },
};

export default function EmmaPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <CasesHeroSections
          logo={<EmmaLogo />}
          logoMobile={<EmmaLogoMobile />}
          text={["Innovating Personalized", "Sleep Experiences", "Worldwide"]}
          companyName="Emma Sleep"
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
          firstText="We have a rich history with Emma Sleep,"
          secondText={[
            "having collaborated closely over the years.",
            "As their team focused on growth in the",
            "early days, we helped them move beyond",
            "just the sleep experience and elevate",
            "how they engage with their users.",
          ]}
          mobileText={[
            "We have a rich history",
            "with Emma Sleep,",
            "having collaborated",
            "closely over the years.",
            "As their team focused",
            "on growth in the early",
            "days, we helped them",
            "move beyond just the",
            "sleep experience and",
            "elevate how they",
            "engage with their users.",
          ]}
        />
        <CasesOutcome />
        <OverviewCaseImageSection
          imageSrc={EmmaCase1}
          imageAlt="Emma Sleep case study"
          videoSrc="/video/R6RPJ7bXs6KqQaw37Rmo5ObbK8g.mp4"
          imageClassName="min-h-[700px]"
        />
        <InfoBlock
          className="md:pt-[120px]! md:pb-20!"
          title={["Challenge"]}
          description={[
            "Not enough value for users to use mobile",
            "app on a daily basis.",
          ]}
          mobileTitle={["Challenge"]}
          mobileDescription={[
            "Not enough value for users",
            "to use mobile app on a daily basis.",
          ]}
        />
        <InfoBlock
          className="md:pt-20! md:pb-[120px]!"
          title={["Solution"]}
          description={[
            "We introduced a product mindset",
            "to transform Emma Sleep from",
            "a simple mobile app to an",
            "educational hub with",
            "personalised tracking and",
            "recommendation experience."
          ]}
          mobileTitle={["Solution"]}
          mobileDescription={[
            "We introduced a product mindset to",
            "transform Emma Sleep from a simple",
            "mobile app to an educational hub",
            "with personalised tracking and",
            "recommendation experience."
          ]}
        />
        <OverviewCaseVideoSection src="/video/qAqiq3kj5RDlGq0v3MWZfWRsTzM.mp4" />
        <OverviewCaseVideoTextSection
          videoSrc="/video/H6iWyylK8inEPxBJ6F1FDM8eqs.mp4"
          firstText="People typically visit Emma Sleep with strong questions about sleep quality. Why can’t I sleep? How do I find more energy after sleep? etc."
          secondText="Bringing the Sleep Challenges, Sleep Scan, and Daily Routine categories to the forefront invites users to dive further into mindful living and creates opportunities to discover everything Emma Sleep has to offer."
        />
        <OverviewCaseTestimonialSection
          firstText=""
          secondText={[
            "I'm consistently amazed at the quality of",
            "work UXLAB produces. From day one, they",
            "just got our brand, created some stunning",
            "designs, and ensured the whole process",
            "ran smoothly.",
          ]}
          mobileText={[
            "I'm consistently amazed",
            "at the quality of work",
            "UXLAB produces. From",
            "day one, they just got",
            "our brand, created some",
            "stunning designs, and",
            "ensured the whole",
            "process ran smoothly.",
          ]}
          authorText="Felix Focken, CEO (Emma Sleep)"
        />
        <InfoBlock
          className="md:py-20!"
          title={["Bringing Sleep Challenges"]}
          description={[
            "Yeah, it was a game changer - bring",
            "Sleep Habits as a feature which is",
            "guiding user habits on a daily",
            "basis.",
          ]}
          mobileTitle={["Bringing Sleep Habits"]}
          mobileDescription={[
            "Yeah, it was a game",
            "changer - bring Sleep Habits",
            "as a feature which is training",
            "guiding user habits on a daily basis.",
          ]}
        />
        <OverviewCaseVideoSection src="/video/kX7KGpaqnCXw1cVoWgL7iiBKs.mp4" />
        <InfoBlock
          className="md:py-20!"
          title={["Sleep Reports Creating"]}
          description={[
            "Sleep Reports on a daily basis helping",
            "users to stay on track or fine-tune",
            "their daily routine when needed.",
          ]}
          mobileTitle={["Sleep Reports Creating"]}
          mobileDescription={[
            "Sleep Reports on a daily basis",
            "helping users to stay on track or",
            "fine-tune their daily routine when",
            "needed.",
          ]}
        />
        <OverviewCaseVideoTextSection
          videoSrc="/video/oL41OoO8XddHIxMfWdQaPy1yITI.mp4"
          firstText="Everything started with breathing analysis, as it was the quickest and most useful solution for users."
          secondText="Presenting the data in a playful UI helps users interpret it in an understandable way, and even when something isn't clear, the AI assistant is there to help."
          videoClassName="md:min-w-2/3 md:max-w-2/3 md:pr-8"
        />
        <InfoBlock
          className="md:py-20!"
          title={["AI Assistant"]}
          description={[
            "Yeah, an AI assistant—nothing special",
            "these days. However, this one uses a",
            "unique training model based on",
            "merging several other machine",
            "learning models.",
          ]}
          mobileTitle={["AI Assistant"]}
          mobileDescription={[
            "Yeah, an AI assistant—nothing",
            "special these days. However,",
            "this one uses a unique training",
            "model based on merging several",
            "other machine learning models.",
          ]}
        />
        <OverviewCaseVideoSection src="/video/xJynanDYFmryappCCsF92K6Zp4.mp4" />
        <InfoBlock
          className="md:py-20!"
          title={["A design system crafted for efficiency and scalability."]}
          description={[
            "A collection of top-tier systems and",
            "components designed to ensure",
            "long-term success and global",
            "scalability.",
          ]}
          mobileTitle={["A design system crafted", "for efficiency and scalability."]}
          mobileDescription={[
            "A collection of top-tier systems",
            "and components designed",
            "to ensure long-term success",
            "and global scalability.",
          ]}
        />
        <OverviewCaseVideoSection src="/video/EdiJoO5jSxPlVzZJJJcbCDtezic.mp4" />
        {/* <ScrollingTextVideoSection
          videoSrc="/video/qI5xtJcNFInMI16VcJte84bgto.mp4"
          poster="/E4qit3QgMPs7XD5VTnapxch4aQ.avif"
        /> */}
        <ScrollingTextCaseSection
          imageSrc={BoostraImage}
          smallImageSrc={BoostraSmallImage}
          imageAlt="Case study description"
          videoTitle="Video title for cursor"
          logo={<BoostraLogoScrollingText />}
          link="/boostra"
        />
      </div>
    </div>
  );
}
