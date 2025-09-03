import VideoPlayer from "@/components/VideoPlayer";

interface OverviewCaseVideoTextSectionProps {
  videoSrc: string;
  firstText: string;
  secondText: string;
  videoClassName?: string;
  textMaxWidth?: string;
}

export default function OverviewCaseVideoTextSection({ 
  videoSrc, 
  firstText, 
  secondText, 
  videoClassName = "lg:min-w-1/2 lg:max-w-1/2 lg:pr-8",
  textMaxWidth = "max-w-[456px]"
}: OverviewCaseVideoTextSectionProps) {
  return (
    <div className="w-full px-4 pb-4 lg:px-10 lg:pb-10 flex flex-col lg:flex-row gap-6 lg:gap-0">
      <VideoPlayer
        className={videoClassName}
        src={videoSrc}
      />
      <div className={`flex flex-col gap-4 ${textMaxWidth}`}>
        <p className="text-text-500 hoves-p1-reg">
          {firstText}
        </p>
        <p className="text-text-500 hoves-p1-reg">
          {secondText}
        </p>
      </div>
    </div>
  );
}
