import CasesHeroSections from "@/components/CasesHeroSections";
import CasesOutcome from "@/components/CasesOutcome";
import ShowreelSection from "@/components/ShowreelSection";
import TextSection from "@/components/TextSection";

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      <div className="2xl:max-w-[1512px] 2xl:mx-auto w-full">
        <CasesHeroSections />
      <div className="w-full">
          <ShowreelSection mobileSrc="/video/reel-short-mobile.mp4" desktopSrc="/video/reel-short.mp4" />
        </div>
      <TextSection
            className="px-4 pt-8 pb-12 lg:px-10 lg:pt-12 lg:pb-20"
            firstText="By fostering healthy sleep habits,"
            secondText="Emma Sleep builds trust, encouraging them to download the app and integrate it into their daily routines."
          />
      <CasesOutcome/>
      </div>
    </div>
  );
}
