import React, { useRef } from "react";
import ForbesAvatar from "../../assets/Glance/Ellipse 3316.svg";
import LinkedInIcon from "../../assets/Glance/LinkedIn.svg";
import ForbesLogo from "../../assets/Glance/ftg-logo-white 1.svg";

interface VideoCardProps {
  videoSrc: string;
}

export default function VideoCard({ videoSrc }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="relative w-full h-full p-8 max-w-[456px] max-h-[330px] rounded-lg overflow-hidden bg-black group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-opacity duration-300"
        muted
        loop
        playsInline
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5 h-full">
        <div className="flex items-center justify-center bg-[#FFFFFF2E] rounded-lg py-[4px] px-[8px] w-fit">
          <p className="font-tt-hoves font-medium text-[12px] uppercase">
            travel
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-white hoves-h6-med">
            Boostra drove an 18% conversion lift and paid for itself in hours.
            Boostra drove an 18% conversion lift
          </h6>
        </div>
        <div className="flex gap-3">
          <ForbesAvatar />
          <div className="flex flex-col gap-[6px]">
            <p className="text-white hoves-p2-reg">Gerhard Marringer</p>
            <LinkedInIcon />
          </div>
        </div>
        <div className="flex items-end justify-end mt-auto">
          <ForbesLogo />
        </div>
      </div>
    </div>
  );
}
