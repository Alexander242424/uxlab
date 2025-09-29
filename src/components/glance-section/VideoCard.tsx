import React, { useRef } from "react";
import LinkedInIcon from "../../assets/Glance/LinkedIn.svg";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface VideoCardProps {
  badgetText: string;
  videoSrc?: string;
  imageSrc: string | StaticImageData;
  descriptionText: string;
  withAuthor?: boolean;
  authorText?: string;
  isForbes?: boolean;
  logo: React.ReactNode;
  avatar?: React.ReactNode;
  classNames?: string;
  url?: string;
  containerClassName?: string;
}

export default function VideoCard({
  withAuthor = true,
  videoSrc,
  imageSrc,
  badgetText,
  descriptionText,
  authorText,
  isForbes = false,
  logo,
  avatar,
  url,
  classNames,
  containerClassName,
}: VideoCardProps) {
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
      className={`relative w-full h-full rounded-lg overflow-hidden bg-black group ${classNames}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Image Background */}
      <Image
        src={imageSrc}
        alt=""
        fill
        className={`object-cover w-full h-full transition-opacity duration-300 pointer-events-none ${
          videoSrc ? 'opacity-100 group-hover:opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video Background - only show on hover if videoSrc is provided */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-300"
          muted
          loop
          playsInline
        />
      )}

      {/* Content */}
      <div className={`relative z-10 p-8 flex flex-1 flex-col gap-5 ${containerClassName}`}>
        <div className="flex items-center justify-center bg-[#0000002E] rounded-lg py-[4px] px-[8px] w-fit backdrop-blur-[4px]">
          <p className="font-tt-hoves font-medium text-[12px] uppercase">
            {badgetText}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className=" hoves-h6-med">{descriptionText}</h6>
        </div>
        {withAuthor && (
          isForbes ? (
            <div className="flex gap-3">
              <p className="hoves-p2-reg">Todd Arnold, Board Member <br /> @ Forbes Travel Guide</p>
            </div>
          ) : (
          <div className="flex gap-3">
            <div className="min-w-fit">
            {avatar}
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="hoves-p2-reg">{authorText}</p>
              <a className="cursor-pointer" href={url || ""} target="_blank" rel="noopener noreferrer">
               <LinkedInIcon />
              </a>
            </div>
          </div>
          )
        )}
        <div className="flex items-end justify-end mt-auto">{logo}</div>
      </div>
    </div>
  );
}
