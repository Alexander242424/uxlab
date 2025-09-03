import VideoPlayer from "@/components/VideoPlayer";
import { cn } from "@/lib/utils";

export default function OverviewCaseVideoSection({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <div
      className={cn(
        "w-full px-4 pt-4 pb-4 lg:px-10 lg:pt-10 lg:pb-10",
        className
      )}
    >
      <VideoPlayer src={src} />
    </div>
  );
}
