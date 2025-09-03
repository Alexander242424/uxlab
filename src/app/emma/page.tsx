import CasesHeroSections from "@/components/CasesHeroSections";
import CasesOutcome from "@/components/CasesOutcome";
import ShowreelSection from "@/components/ShowreelSection";
import TextSection from "@/components/TextSection";
import InfoBlock from "@/components/InfoBlock";
import ScrollingTextVideoSection from "@/components/ScrollingTextVideoSection";
import OverviewCaseImageSection from "@/components/OverviewCaseImageSection";
import OverviewCaseVideoSection from "@/components/OverviewCaseVideoSection";
import OverviewCaseVideoTextSection from "@/components/OverviewCaseVideoTextSection";
import OverviewCaseTestimonialSection from "@/components/OverviewCaseTestimonialSection";
import EmmaLogo from "@/assets/emma-logo.svg";
import EmmaLogoMobile from "@/assets/emma-logo-mobile.svg";
import EmmaCase1 from "@/assets/Emma/XkNQu7DYidbcrVSHQNflhh0MA.avif";

export default function EmmaPage() {
  return (
    <div className="flex flex-col">
      <div className="2xl:max-w-[2560px] 2xl:mx-auto w-full">
        <CasesHeroSections
          logo={<EmmaLogo />}
          logoMobile={<EmmaLogoMobile />}
          text="Innovating Personalized Sleep Worldwide"
          companyName="Emma Sleep"
          year="2022 - 2024"
          deliverables="Guidelines and Portals · Digital Asset Management · Templates"
        />
        <div className="w-full">
          <ShowreelSection
            isDefault={true}
            mobileSrc="/video/reel-short-mobile.mp4"
            desktopSrc="/video/reel-short.mp4"
          />
        </div>
        <TextSection
          className="px-4 pt-8 pb-12 lg:px-10 lg:pt-12 lg:pb-20"
          firstText="By fostering healthy sleep habits,"
          secondText="Emma Sleep builds trust, encouraging them to download the app and integrate it into their daily routines."
        />
        <CasesOutcome />
        <OverviewCaseImageSection
          imageSrc={EmmaCase1}
          imageAlt="Emma Sleep case study"
          videoSrc="/video/R6RPJ7bXs6KqQaw37Rmo5ObbK8g.mp4"
          imageClassName="min-h-[700px]"
        />
        <InfoBlock
          className="lg:pt-[120px]! lg:pb-20!"
          title="Challenge: Low daily engagement and limited value for app users"
          description="Emma Sleep wanted users to engage with its mobile app on a daily basis, but the existing experience offered limited value beyond basic sleep tracking."
        />
        <InfoBlock
          className="lg:pt-20! lg:pb-[120px]!"
          title="Solution: Transforming the app into a personalized educational hub"
          description="To increase daily engagement and provide meaningful value, Emma Sleep adopted a product-focused approach, redesigning the app to offer a comprehensive educational hub. "
        />
        <OverviewCaseVideoSection src="/video/qAqiq3kj5RDlGq0v3MWZfWRsTzM.mp4" />
        <OverviewCaseVideoTextSection
          videoSrc="/video/H6iWyylK8inEPxBJ6F1FDM8eqs.mp4"
          firstText="We used playful colours, engaging illustrations, and micro-interactions to weave the brand through the experience and draw visitors in."
          secondText="The new site feels multi-dimensional — much like the mind."
        />
        <OverviewCaseTestimonialSection
          firstText="I'm consistently amazed at the quality of"
          secondText="work Alex produces. From day one Alex just got our brand, created some stunning designs, and ensured the whole process ran smoothly."
          authorText="Felix Focken, CEO (Emma Sleep)"
        />
        <InfoBlock
          className="lg:pt-20! lg:pb-[120px]!"
          title="To increase daily engagement and provide meaningful value, Emma Sleep adopted a product-focused approach, redesigning the app to offer a comprehensive educational hub. "
          description="Solution: Transforming the app into a personalized educational hub"
        />
        <OverviewCaseVideoSection src="/video/kX7KGpaqnCXw1cVoWgL7iiBKs.mp4" />
        <InfoBlock
          className="lg:py-20!"
          title="By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines."
          description="A Call to Habits"
        />
        <OverviewCaseVideoTextSection
          videoSrc="/video/oL41OoO8XddHIxMfWdQaPy1yITI.mp4"
          firstText="People typically visit Emma Sleep with strong questions about sleep quality. Why can't I sleep? How do I find more energy after sleep?"
          secondText="Bringing the Sleep Challenges, Sleep Scan, and Daily Routine categories to the forefront invites users to dive further into mindful living and creates opportunities to discover everything Emma Sleep has to offer."
          videoClassName="lg:min-w-2/3 lg:max-w-2/3 lg:pr-8"
        />
        <InfoBlock
          className="lg:py-20!"
          title="By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines."
          description="A Call to Habits"
        />
        <OverviewCaseVideoSection src="/video/xJynanDYFmryappCCsF92K6Zp4.mp4" />
        <OverviewCaseVideoSection src="/video/EdiJoO5jSxPlVzZJJJcbCDtezic.mp4" />
        <ScrollingTextVideoSection
          videoSrc="/video/qI5xtJcNFInMI16VcJte84bgto.mp4"
          poster="/E4qit3QgMPs7XD5VTnapxch4aQ.avif"
        />
      </div>
    </div>
  );
}
