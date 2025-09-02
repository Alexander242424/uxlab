import { cn } from "@/lib/utils";
import React from "react";

interface InfoBlockProps {
  title: string;
  description: string;
  className?: string;
}
export default function InfoBlock({ title, description, className }: InfoBlockProps) {
  return (
    <div className={cn("flex flex-col gap-4 px-4 py-16 lg:pl-[406px] lg:pr-[284px] lg:py-20", className)}>
        <h3 className="text-text-700 hoves-h4-med">{title}</h3>
        <p className="text-text-500 hoves-p1-reg">{description}</p>
    </div>
  );
}
