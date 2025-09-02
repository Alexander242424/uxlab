import CasesHeroSections from "@/components/CasesHeroSections";
import CasesOutcome from "@/components/CasesOutcome";
import ShowreelSection from "@/components/ShowreelSection";
import TextSection from "@/components/TextSection";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import EmmaCase1 from "@/assets/Emma/XkNQu7DYidbcrVSHQNflhh0MA.avif";
import InfoBlock from "@/components/InfoBlock";
import ScrollingTextVideoSection from "@/components/ScrollingTextVideoSection";

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      <div className="2xl:max-w-[2560px] 2xl:mx-auto w-full">
        <CasesHeroSections />
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
        <div className="w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10 flex flex-col lg:flex-row gap-4 lg:gap-8">
          <Image
            className="w-full lg:max-w-1/2 h-auto not-lg:min-h-[700px] object-cover"
            src={EmmaCase1}
            alt="case-1"
            width={500}
            height={500}
          />
          <VideoPlayer
            className="lg:min-w-1/2 lg:max-w-1/2 lg:min-h-[700px] lg:pl-[1px]"
            src={"/video/R6RPJ7bXs6KqQaw37Rmo5ObbK8g.mp4"}
          />
        </div>
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
        <div className="w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10">
          <VideoPlayer src={"/video/qAqiq3kj5RDlGq0v3MWZfWRsTzM.mp4"} />
        </div>
        <div className="w-full px-4 pb-4 lg:px-10 lg:pb-10 flex flex-col lg:flex-row gap-6 lg:gap-0">
          <VideoPlayer
            className="lg:min-w-1/2 lg:max-w-1/2 lg:pr-8"
            src={"/video/H6iWyylK8inEPxBJ6F1FDM8eqs.mp4"}
          />
          <div className="flex flex-col gap-4 max-w-[456px]">
            <p className="text-text-500 hoves-p1-reg">
            We used playful colours, engaging illustrations, and micro-interactions to weave the brand through the experience and draw visitors in.
            </p>
            <p className="text-text-500 hoves-p1-reg">
            The new site feels multi-dimensional — much like the mind.
            </p>
          </div>
        </div>
        <div className="px-4 pb-4 lg:px-10 lg:pb-10 gap-4 flex flex-col">
          <TextSection
            firstText="I’m consistently amazed at the quality of"
            secondText="work Alex produces. From day one Alex just got our brand, created some stunning designs, and ensured the whole process ran smoothly."
          />
          <p className="text-text-500 hoves-p1-reg">
            Felix Focken, CEO (Emma Sleep)
          </p>
        </div>
        <InfoBlock
          className="lg:pt-20! lg:pb-[120px]!"
          title="To increase daily engagement and provide meaningful value, Emma Sleep adopted a product-focused approach, redesigning the app to offer a comprehensive educational hub. "
          description="Solution: Transforming the app into a personalized educational hub"
        />
        <div className="w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10">
          <VideoPlayer src={"/video/kX7KGpaqnCXw1cVoWgL7iiBKs.mp4"} />
        </div>
        <InfoBlock
          className="lg:py-20!"
          title="By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines."
          description="A Call to Habits"
        />

        <div className="w-full px-4 pb-4 lg:px-10 lg:pb-10 flex flex-col lg:flex-row gap-6 lg:gap-0">
          <VideoPlayer
            className="lg:min-w-2/3 lg:max-w-2/3 lg:pr-8"
            src={"/video/oL41OoO8XddHIxMfWdQaPy1yITI.mp4"}
          />
          <div className="flex flex-col gap-4 max-w-[456px]">
            <p className="text-text-500 hoves-p1-reg">
              People typically visit Emma Sleep with strong questions about
              sleep quality. Why can’t I sleep? How do I find more energy after
              sleep?
            </p>
            <p className="text-text-500 hoves-p1-reg">
              Bringing the Sleep Challenges, Sleep Scan, and Daily Routine
              categories to the forefront invites users to dive further into
              mindful living and creates opportunities to discover everything
              Emma Sleep has to offer.
            </p>
          </div>
        </div>
        <InfoBlock
          className="lg:py-20!"
          title="By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines."
          description="A Call to Habits"
        />
        <div className="w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10">
          <VideoPlayer src={"/video/xJynanDYFmryappCCsF92K6Zp4.mp4"} />
        </div>
        <InfoBlock
          className="lg:py-20!"
          title="By fostering healthy sleep habits, Emma Sleep builds trust with users, encouraging them to download the app and integrate it into their daily routines."
          description="A Call to Habits"
        />
        <div className="w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10">
          <VideoPlayer src={"/video/EdiJoO5jSxPlVzZJJJcbCDtezic.mp4"} />
        </div>
        <ScrollingTextVideoSection />
      </div>
    </div>
  );
}
