import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface OverviewCaseImageSectionProps {
  className?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  videoSrc: string;
  iSvideoPositionLeft?: boolean;
  imageClassName?: string;
  videoClassName?: string;
}

export default function OverviewCaseImageSection({
  className,
  imageSrc,
  imageAlt,
  videoSrc,
  iSvideoPositionLeft = false,
  imageClassName,
  videoClassName,
}: OverviewCaseImageSectionProps) {
  return (
    <div
      className={cn(
        "w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10 flex flex-col lg:flex-row gap-4 lg:gap-8 overflow-hidden",
        iSvideoPositionLeft && "lg:flex-row-reverse",
        className
      )}
    >
      <div
        className={cn(
          !iSvideoPositionLeft
            ? "lg:min-w-[calc(50% - 32px)]"
            : "lg:min-w-1/2 lg:max-w-1/2 lg:pl-[1px]"
        )}
      >
        <Image
          className={cn("w-full h-full object-cover", imageClassName)}
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div
        className={cn(
          !iSvideoPositionLeft
            ? "lg:min-w-1/2 lg:max-w-1/2 lg:pl-[1px]"
            : "lg:min-w-[calc(50% - 32px)]"
        )}
      >
        <VideoPlayer
          className={cn("w-full h-full object-cover", videoClassName)}
          src={videoSrc}
        />
      </div>
    </div>
  );
}
