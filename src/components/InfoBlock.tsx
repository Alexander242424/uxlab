"use client";
import { cn } from "@/lib/utils";
import React from "react";
import SplitText from "./SplitText";
import { useIsMobile } from "@/hooks/useIsMobile";

interface InfoBlockProps {
  title: string | string[];
  description: string | string[];
  mobileTitle?: string | string[];
  mobileDescription?: string | string[];
  className?: string;
  rootMargin?: string;
  threshold?: number;
}

export default function InfoBlock({
  title,
  description,
  mobileTitle,
  mobileDescription,
  className,
  rootMargin = "100px",
  threshold = 0.1,
}: InfoBlockProps) {
  const isMobile = useIsMobile();

  // Convert title and description to arrays if they are strings
  const titleArray = Array.isArray(title) ? title : [title];
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  // Create combined arrays for mobile
  const mobileTitleArray = Array.isArray(mobileTitle)
    ? mobileTitle
    : [mobileTitle];
  const mobileDescriptionArray = Array.isArray(mobileDescription)
    ? mobileDescription
    : [mobileDescription];

  return (
    <div
      className={cn(
        "flex flex-col px-4 py-16 max-w-[400px] not-md:mx-auto md:max-w-none md:pl-[406px] md:pr-[284px] md:py-20",
        className
      )}
    >
      {isMobile ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {/* Mobile title */}
            {mobileTitleArray.map((text, index) => (
              <SplitText
                key={`mobile-title-${index}`}
                text={text || ""}
                className="text-text-500 hoves-p1-reg !text-nowrap"
                globalIndex={index}
                splitType="lines"
                delay={100}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={threshold}
                rootMargin={rootMargin}
                textAlign="left"
              />
            ))}
          </div>
          <div className="flex flex-col">
            {/* Mobile description */}
            {mobileDescriptionArray.map((text, index) => (
              <SplitText
                key={`mobile-description-${index}`}
                text={text || ""}
                className="text-text-700 hoves-h4-med !text-nowrap"
                globalIndex={mobileTitleArray.length + index}
                splitType="lines"
                delay={200}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={threshold}
                rootMargin={rootMargin}
                textAlign="left"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {/* Desktop title */}
            {titleArray.map((text, index) => (
              <SplitText
                key={`desktop-title-${index}`}
                text={text}
                className="text-text-500 hoves-p1-reg !text-nowrap"
                globalIndex={index}
                splitType="lines"
                delay={100}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={threshold}
                rootMargin={rootMargin}
                textAlign="left"
              />
            ))}
          </div>
          <div className="flex flex-col">
            {/* Desktop description */}
            {descriptionArray.map((text, index) => (
              <SplitText
                key={`desktop-description-${index}`}
                text={text}
                className="text-text-700 hoves-h4-med !text-nowrap"
                globalIndex={titleArray.length + index}
                splitType="lines"
                delay={200}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={threshold}
                rootMargin={rootMargin}
                textAlign="left"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
