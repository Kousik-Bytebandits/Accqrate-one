"use client";

import * as React from "react";
import FadeUp from "../ui/FadeUp"
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// ✅ Define props for AccordionCard
interface AccordionCardProps {
  value: string;
  icon: string;
  title: string;
  children: React.ReactNode;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ value, icon, title, children }) => {
  return (
    <AccordionItem
      value={value}
      className="flex flex-col justify-center bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] w-full h-auto rounded-lg px-[24px]"
    >
      <AccordionTrigger className="flex justify-between items-start w-full hover:no-underline">
        <div className="flex flex-col items-start gap-[16px]">
          <img
            src={icon}
            alt={title}
            className="w-[45px] h-[45px] md:h-[34.56px] md:w-[31.75px]"
          />
          <span className="text-[20px] md:text-[18px] lg:text-[20px] text-left font-normal">{title}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-1 pb-2 text-gray-700 text-sm">{children}</AccordionContent>
    </AccordionItem>
  );
};

export default AccordionCard;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionCard,
};
