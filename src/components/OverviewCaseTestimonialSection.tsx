import TextSection from "@/components/TextSection";

interface OverviewCaseTestimonialSectionProps {
  firstText: string;
  secondText: string | string[];
  authorText: string;
}

export default function OverviewCaseTestimonialSection({ 
  firstText, 
  secondText, 
  authorText 
}: OverviewCaseTestimonialSectionProps) {
  return (
    <div className="px-4 pb-4 lg:px-10 lg:pb-10 gap-4 flex flex-col">
      <TextSection
        firstText={firstText}
        secondText={secondText}
      />
      <p className="text-text-500 hoves-p1-reg">
        {authorText}
      </p>
    </div>
  );
}
