import React, { useRef } from "react";
import LinkedInIcon from "../../../assets/Glance/LinkedIn.svg";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface VideoCardProps {
  badgetText: string;
  videoSrc?: string;
  imageSrc: string | StaticImageData;
  descriptionText: string;
  withAuthor?: boolean;
  companyText?: string;
  authorText?: string;
  isForbes?: boolean;
  logo: React.ReactNode;
  avatar?: React.ReactNode;
  classNames?: string;
  url?: string;
  containerClassName?: string;
  persentage?: any[],
}

export default function VideoCard({
  withAuthor = true,
  videoSrc,
  imageSrc,
  badgetText,
  descriptionText,
  authorText,
  isForbes = false,
  companyText,
  logo,
  avatar,
  url,
  classNames,
  containerClassName,
  persentage,

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
      className={`relative w-full h-full slide_item overflow-hidden bg-black group ${classNames}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Image Background */}
      <Image
        src={imageSrc}
        alt=""
        fill
        loading={"lazy"}
        className={`object-cover w-full h-full transition-opacity duration-300 pointer-events-none ${
          videoSrc ? "opacity-100 group-hover:opacity-0" : "opacity-100"
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
      <div
        className={`relative z-10 p-8 flex flex-1 flex-col gap-5 justify-content-between ${containerClassName}`}
      >

        <div className="flex flex-col gap-2">
          <h6 className="hoves-p1 w-[75%]">{descriptionText}</h6>
        </div>
        {withAuthor &&
          (isForbes ? (
            <div className="flex gap-3">
              <p className="t-p1">
                Todd Arnold, Board Member <br /> @ Forbes Travel Guide
              </p>
            </div>
          ) : (
            <div className="flex gap-3">
              <div className="min-w-fit">{avatar}</div>
              <div className="flex flex-col gap-[2px] justify-center">
                <div className="flex items-center gap-2">
                  <p className="t-p1">{authorText}</p>
                  <a
                    className="cursor-pointer"
                    href={url || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <p className="t-p1 text-text-500">{companyText}</p>
              </div>
            </div>
          ))}
        <div className="row mx-0">
          <div className="col-8 px-0 flex justify-content-between posts_quants_box">
          {persentage?.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="quant_percentage">{item.quant}</span>
                <span className="quant_text">{item.text}</span>
              </div>
          ))}
          </div>
          <div className="flex post_logo items-end justify-end mt-auto col-3 ml-auto px-0">{logo}</div>
        </div>
      </div>
    </div>
  );
}
