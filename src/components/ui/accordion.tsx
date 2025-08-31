"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import PlusIcon from "@/assets/plus-icon.svg";
import MinusIcon from "@/assets/minus-icon.svg";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-border-100", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md lg:py-8 py-5 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          "[&[data-state=open]>.plus]:hidden",
          "[&[data-state=open]>.minus]:block",
          "[&[data-state=open]]:pb-3",
          className
        )}
        {...props}
      >
        {children}

        <div className="block plus hover:bg-bg-gray rounded-full">
          <PlusIcon />
        </div>
        <div className="hidden minus hover:bg-bg-gray rounded-full">
          <MinusIcon />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm transition-all duration-700 ease-in-out"
      {...props}
    >
      <div 
        className={cn(
          "pt-0 pb-8 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "data-[state=closed]:opacity-0 data-[state=closed]:translate-y-[-4px]",
          "data-[state=open]:opacity-100 data-[state=open]:translate-y-0",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
