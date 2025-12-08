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
import OverviewCaseVideoSection from "@/components/home_page/OverviewCaseVideoSection";
import OverviewCaseVideoTextSection from "@/components/OverviewCaseVideoTextSection";
import ScrollingTextCaseSection from "@/components/ScrollingTextCaseSection";
import TextSection from "@/components/home_page/TextSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "From zero-to-one:  AI SaaS Tool for better conversions",
  description:
    "Learn how UXLAB's own SaaS product delivered +25% CR improvement in just 5 minutes of AI analysis for our clients. Explore our design process and outcomes.",
  openGraph: {
    title: "From zero-to-one:  AI SaaS Tool for better conversions",
    description:
      "Learn how UXLAB's own SaaS product delivered +25% CR improvement in just 5 minutes of AI analysis for our clients. Explore our design process and outcomes.",
    url: "https://uxlab.digital/boostra",
    siteName: "UXLAB",
    images: [
      {
        url: "https://uxlabdev.netlify.app/placeholder.jpg",
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
    title: "From zero-to-one:  AI SaaS Tool for better conversions",
    description:
      "Learn how UXLAB's own SaaS product delivered +25% CR improvement in just 5 minutes of AI analysis for our clients. Explore our design process and outcomes.",
    images: ["https://uxlabdev.netlify.app/placeholder.jpg"],
  },
};

export default function BoostraPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <CasesHeroSections
          logo={<BoostraLogo />}
          logoMobile={<BoostraLogoMobile />}
          text={[
            "From MVP to",
            "Growth Platform → +47%",
            "Conversion Uplift",
            "& powerful referral",
            "growth."
          ]}
          companyName="Boostra"
          year="2022 - 2024"
          deliverables="UX Strategy · Wireframes · Data-Driven Design"
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
          imageAlt="Boostra Case Study"
          isAnimated={false}
        />
        <TextSection
          text=""
          className="px-4 pb-12 md:px-10 md:py-20"
          firstText="Starting from our MVP launch and initial"
          secondText={[
            "user base, we partnered with GetBoostra to",
            "scale their SaaS platform beyond MVP,",
            "driving conversion growth at key touchpoints",
            "and crafting a modular growth system.",
          ]}
          mobileText={[
            "Starting from our MVP",
            "launch and initial",
            "user base, we partnered",
            "with GetBoostra to scale",
            "their SaaS platform",
            "beyond MVP,",
            "driving conversion",
            "growth at key",
            "touchpoints and crafting",
            "a modular growth",
            "growth system.",
          ]}
        />
        <CasesOutcome />
        <OverviewCaseImageSection
          imageSrc={FirstBlockImage1}
          imageAlt="Boostra Case Study"
          imageSrc2={FirstBlockImage2}
          imageAlt2="Boostra Case Study"
          imageClassName="min-h-[700px]"
          imageClassName2="max-h-[400px]"
        />
        <InfoBlock
          className="md:pt-[120px]! md:pb-20!"
          title={["Challenge: Early traction, but friction blocked growth"]}
          description={[
            "Boostra's MVP attracted interest, but raw",
            "UX limited its potential. Users were",
            "dropping off after registration, payments",
            "stalled at checkout, and there was no",
            "referral loop or systematic experimentation",
            "to drive engagement.",
          ]}
          mobileTitle={[
            "Challenge: Early traction,",
            "but friction blocked growth",
          ]}
          mobileDescription={[
            "Boostra's MVP attracted interest,",
            "but raw UX limited its potential.",
            "Users were dropping off after",
            "registration, payments stalled",
            "at checkout, and there was",
            "no referral loop or systematic",
            "experimentation to",
            "drive engagement.",
          ]}
        />
        <InfoBlock
          className="md:pt-20! md:pb-[120px]!"
          title={["Solution"]}
          description={[
            "By redesigning onboarding, we reduced",
            "drop-offs by 20% and boosted payment",
            "completion by 15% through checkout",
            "optimization. A referral program drove",
            "25% of new users organically, while",
            "ongoing A/B testing of CTAs, copy,",
            "and UI lifted conversions by 10%.",
          ]}
          mobileTitle={[
            "Solution",
          ]}
          mobileDescription={[
            "By redesigning onboarding,",
            "we reduced drop-offs by 20%",
            "and boosted payment completion",
            "by 15% through checkout",
            "optimization. A referral program",
            "drove 25% of new users organically,",
            "while ongoing A/B testing of CTAs,",
            "copy, and UI lifted conversions",
            "by 10%.",
          ]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage1}
          imageAlt="Boostra Case Study"
        />
        <OverviewCaseVideoTextSection
          imageSrc={SmallImage1}
          imageAlt="Boostra Case Study"
          firstText="Most founders don't realize how much revenue slips through the cracks until Boostra shows them."
          secondText="Imagine having a CRO expert inside your product 24/7, spotting drop-offs, learning from real user behavior, and fixing friction before it costs you. Boostra doesn't wait weeks for results; it highlights instant solutions that lift conversions by 35-47%."
        />
        {/* <OverviewCaseTestimonialSection
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
        /> */}
        <InfoBlock
          className="md:py-20!"
          title={["Solution"]}
          description={[
            "Boostra introduced a simple “invite and earn”",
            "feature that encouraged users to share the",
            "product with friends. What started as a",
            "small reward mechanic quickly grew into",
            "a steady stream of new users — all without",
            "extra ad spend.",
          ]}
          mobileTitle={["Solution"]}
          mobileDescription={[
            "Boostra introduced a simple",
            "“invite and earn” feature that",
            "encouraged users to share the",
            "product with friends.",
            "What started as a small reward",
            "mechanic quickly grew into",
            "a steady stream of new users — all",
            "without extra ad spend.",
          ]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage2}
          imageAlt="Boostra Case Study"
        />
        <InfoBlock
          className="md:py-20!"
          title={["Solution"]}
          description={[
            "Through UX refinements in the checkout",
            "process, Boostra unlocked higher payment",
            "completions, proving that smoother flows",
            "directly drive bottom-line growth.",
          ]}
          mobileTitle={["Solution"]}
          mobileDescription={[
            "Through UX refinements in",
            "the checkout process, Boostra",
            "unlocked higher payment",
            "completions, proving that",
            "smoother flows directly drive",
            "bottom-line growth.",
          ]}
        />
        <OverviewCaseVideoTextSection
          imageSrc={SmallImage2}
          imageAlt="Boostra Case Study"
          firstText="A $1 trial was launched to lower the entry barrier, with the next package priced at $59 for five page conversion reviews. This allowed users to see value immediately. Proving the ROI from day one."
          secondText=""
          videoClassName="md:min-w-2/3 md:max-w-2/3 md:pr-8"
        />
        <InfoBlock
          className="md:py-20!"
          title={["A/B testing implementation"]}
          description={[
            "As part of this product strategy,",
            "the team established a continuous",
            "A/B testing cycle, cutting the",
            "time-to-learn in half.",
          ]}
          mobileTitle={["A/B testing implementation"]}
          mobileDescription={[
            "As part of this product strategy,",
            "the team established a continuous",
            "A/B testing cycle, cutting the",
            "time-to-learn in half.",
          ]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage3}
          imageAlt="Boostra Case Study"
        />
        <InfoBlock
          className="md:py-20!"
          title={["Quick Wins Feature"]}
          description={[
            "Through multiple iterations of our",
            "AI CRO SaaS, we discovered that",
            "customers respond best when they",
            "see results immediately. That's",
            "why we placed Quick Wins at the",
            "top - a prioritized list of high-impact",
            "fixes that deliver measurable improvements",
            "from day one. By surfacing clear,",
            "actionable changes first, users build",
            "trust in the product, unlock fast ROI,",
            "and stay engaged for the long run.",
          ]}
          mobileTitle={["Quick Wins Feature"]}
          mobileDescription={[
            "Through multiple iterations",
            "of our AI CRO SaaS, we discovered",
            "that customers respond best",
            "when they see results immediately.",
            "That's why we placed Quick Wins",
            "at the top - a prioritized list",
            "of high-impact fixes that deliver",
            "measurable improvements from",
            "day one. By surfacing clear,",
            "actionable changes first, users",
            "build trust in the product, unlock",
            "fast ROI, and stay engaged for the",
            "long run.",
          ]}
        />
        <OverviewCaseVideoTextSection
          imageSrc={SmallImage2}
          imageAlt="Boostra Case Study"
          firstText="Boostra goes beyond CRO by analyzing accessibility at levels A, AA, and AAA. The result: a product that removes friction, expands your market, and builds trust with every user."
          secondText=""
          videoClassName="md:min-w-2/3 md:max-w-2/3 md:pr-8"
        />
        <InfoBlock
          className="md:py-20!"
          title={[
            "",
          ]}
          description={["Want similar results?", "Book a Free Product Audit"]}
          mobileTitle={[
            "",
          ]}
          mobileDescription={["Want similar results?", "Book a Free Product Audit"]}
        />
        <OverviewCaseVideoSection
          imageSrc={BigImage4}
          imageAlt="Boostra Case Study"
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
