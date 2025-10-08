"use client";

import React, { useContext, useRef, useMemo } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import FadeUp from "./ui/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  
} from "./ui/accordion";

interface DropdownItem {
  title: string;
  content: string;
}

export default function Section1(): React.JSX.Element {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(receivableRef, { threshold: 0 });

  // Memoized dropdowns so they don’t re-create on every render
  const receivableDropdowns = useMemo<DropdownItem[]>(
    () => [
      { title: "Customization", content: "Tailor workflows and reports to your specific requirements. " },
      { title: "Automation", content: "Streamline processes to reduce manual effort and errors. " },
      { title: "Scalability", content: "Grow your operations without outgrowing your software" },
      { title: "Analytics", content: "Gain actionable insights with real-time data and reporting. " },
    ],
    []
  );



  if (loading || !isVisible) {
    return (
      <section
        ref={receivableRef}
        className="space-y-6 px-6 md:px-8 my-6 max-w-[1280px] mx-auto"
      >
        {/* Receivables Section Skeleton */}
        <SectionSkeleton hasSubtitle />

      </section>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[40px]">
       
          

        {/* Receivables */}
        <SectionWithAccordion
          title="Built for Flexibility, Powered by "
          subtitle="Innovation"
          description="Accqrate ONE offers a range of features tailored to meet the unique needs of your business"
          items={receivableDropdowns}
          video="videos/account-receivables.mp4"
        />

       
      </div>
    </div>
  );
}

interface SectionSkeletonProps {
  hasSubtitle?: boolean;
  bgWhite?: boolean;
}

/* Skeleton Subcomponent */
function SectionSkeleton({
  hasSubtitle = false,
  bgWhite = false,
}: SectionSkeletonProps): React.JSX.Element {
  return (
    <div className="my-6 md:my-[32px]">
      <section
        className={`${bgWhite ? "bg-white" : "bg-[#F2F2F2]"} border border-[#CECECE] py-6 px-6 md:py-0 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-[32px] lg:px-10`}
      >
        {/* Left Content Column */}
        <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
          {/* Title Skeleton */}
          <div className="pb-6 md:pb-[32px]">
            <Skeleton className="h-6 md:h-8 lg:h-10 w-3/4 mb-2" />
            {hasSubtitle && (
              <Skeleton className="h-5 md:h-7 lg:h-8 w-2/3" />
            )}
          </div>

          {/* Description Skeleton */}
          <div className="pb-6 md:pb-[32px] space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
            {!hasSubtitle && (
              <>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </>
            )}
          </div>

          {/* Accordion Items Skeleton */}
          <div className="w-full max-w-[400px] space-y-3">
            {[1].map((item) => (
              <div key={item} className="border-b border-[#E2E8F0] pb-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-4 rounded" />
                </div>
                <div className="mt-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Video Column */}
        <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
          <Skeleton className="rounded-lg w-full max-w-[500px] h-[250px] md:h-[300px] lg:h-[350px] xl:h-[420px]" />
        </div>
      </section>
    </div>
  );
}

interface SectionWithAccordionProps {
  title: string;
  subtitle?: string;
  description: string;
  items: DropdownItem[];
  video: string;
  className?: string;
}

/* Section With Accordion Subcomponent */
function SectionWithAccordion({
  title,
  subtitle,
  description,
  items,
  video,
  className,
}: SectionWithAccordionProps): React.JSX.Element {
  return (
    <FadeUp className="my-6 md:my-[32px] font-inter">
      <section
        className={`${className ?? "bg-[#F2F2F2]"} border border-[#CECECE] py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex md:px-[32px] lg:px-10`}
      >
        <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
          <h2 className="text-black text-fluid-body tracking-para font-medium pb-6 leading-tight">
            {title} {subtitle}
          
          </h2>

          <p className="pb-6 md:pb-[32px] text-[14px] tracking-para md:text-[16px] lg:text-[18px] max-w-[480px] leading-tight text-[#333333]  ">
            {description}
          </p>

          <Accordion type="single" collapsible className="w-full max-w-[400px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`${title.replace(/\s/g, "-")}-${index}`}
              >
                <AccordionTrigger className="text-fluid-small md:text-[16px] font-normal">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-fluid-small md:text-[16px] font-normal">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
          <video
            className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
            autoPlay
            muted
            loop
            aria-label={`${title} demo video`}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    </FadeUp>
  );
}
