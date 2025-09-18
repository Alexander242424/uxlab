import TextSection from "@/components/TextSection";

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
  authorText 
}: OverviewCaseTestimonialSectionProps) {
  return (
    <div className="px-4 pb-4 md:px-10 md:pb-10 gap-4 flex flex-col">
      <TextSection
        firstText={firstText}
        secondText={secondText}
        mobileText={mobileText}
      />
      <p className="text-text-500 hoves-p1-reg">
        {authorText}
      </p>
    </div>
  );
}
