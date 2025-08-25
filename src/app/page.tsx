import VideoPlayer from "@/components/VideoPlayer";
import ServiceItems from "@/components/ServiceItems";


export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex items-end w-full my-[160px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col ml-auto max-w-[456px] mr-0 lg:mr-[284px] text-lg">
          <p className="text-text-700 text-right">We unite User Experience</p>
          <p className="text-text-700" style={{ letterSpacing: "-0.03em" }}>CRO and data-driven design to help digital products convert, scale, and win in competitive markets.</p>
        </div>
      </div>
      <h1 className="w-full text-center" style={{ 
        fontSize: 'clamp(3rem, 12vw, 11rem)', 
        letterSpacing: "-0.04em" 
      }}>We Make Interfaces</h1>
      <div className="w-full">
        <VideoPlayer src="/video/createsite.mp4" />
      </div>
        <div className="flex flex-col w-full text-7xl px-4 sm:px-6 lg:px-10 pt-12 pb-20" style={{ letterSpacing: "-0.03em" }}>
          <p className="text-text-700 text-right">The design dream team for founders</p>
          <p className="text-text-700">obsessed with speed and efficiency, clients raised over $600M+ in 2024 alone.</p>
        </div>
      <ServiceItems />
    </div>
  );
}
