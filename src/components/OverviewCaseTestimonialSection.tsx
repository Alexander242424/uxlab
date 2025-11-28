import TextSection from "@/components/home_page/TextSection";

interface OverviewCaseTestimonialSectionProps {
  firstText: string;
  secondText: string | string[];
  mobileText: string | string[];
  authorText: string;
}

export default function OverviewCaseTestimonialSection({
  firstText,
  secondText,
  mobileText,
  authorText,
}: OverviewCaseTestimonialSectionProps) {
  return (
    <div className="px-4 py-[64px] md:px-10 md:pb-20 md:pt-[160px] gap-4 flex flex-col">
      <p className="text-text-500 hoves-p1-reg">{authorText}</p>
      <TextSection
        firstText={firstText}
        secondText={secondText}
        mobileText={mobileText}
        className="!p-0"
      />
    </div>
  );
}
