"use client";
import { cn } from "@/lib/utils";
import React from "react";
import SplitText from "./SplitText";

interface InfoBlockProps {
  title: string;
  description: string;
  className?: string;
}

export default function InfoBlock({ title, description, className }: InfoBlockProps) {
  return (
    <div className={cn("flex flex-col gap-4 px-4 py-16 lg:pl-[406px] lg:pr-[284px] lg:py-20", className)}>
      <SplitText
        text={title}
        className="text-text-700 hoves-h4-med"
        splitType="lines"
        delay={100}
        duration={0.8}
        ease="power3.out"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="100px"
        textAlign="left"
      />
      <SplitText
        text={description}
        className="text-text-500 hoves-p1-reg"
        splitType="lines"
        delay={200}
        duration={0.8}
        ease="power3.out"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="100px"
        textAlign="left"
      />
    </div>
  );
}
