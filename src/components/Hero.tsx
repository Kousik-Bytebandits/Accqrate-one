"use client";

import React, { JSX, useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import ButtonGroup from "./ui/ButtonGroup";
import FadeUp from "./ui/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionCard
} from "./ui/accordion";

interface Logo {
  src: string;
  name: string;
}

export default function Hero(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useInView(heroRef);


  if (loading || !isVisible) {
    return (
      <section
        id="heroSection"
        ref={heroRef}
        className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton style={{ height: "40px", width: "60%" }} className="mb-6 mx-auto" />
        <Skeleton style={{ height: "28px", width: "70%" }} className="mb-4 mx-auto" />
        <Skeleton style={{ height: "20px", width: "80%" }} className="mb-4 mx-auto" />

        <Skeleton style={{ height: "22px", width: "50%" }} className="mb-4 mt-4 mx-auto" />
        <Skeleton style={{ height: "22px", width: "60%" }} className="mb-4 mx-auto" />

        {/* Buttons skeleton */}
        <div className="flex gap-4 mt-8">
          <Skeleton style={{ height: "50px", width: "160px" }} className="rounded-full" />
          <Skeleton style={{ height: "50px", width: "160px" }} className="rounded-full" />
        </div>

        {/* Video skeleton */}
        <Skeleton
          style={{ height: "400px", width: "100%" }}
          className="mt-12 max-w-[1128px] rounded-xl"
        />

       

        
      </section>
    );
  }

  return (
    <section
      id="heroSection"
      ref={heroRef}
      className="w-full font-inter flex flex-col items-center justify-center text-center px-6 md:px-[32px]"
    >
      <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px]">
        {/* Headings */}
        <h1 className="text-fluid-h1 tracking-heading font-semibold text-[#333333] mb-[24px]">
          Accqrate <span className="font-bold">ONE</span>
        </h1>
        <div className="max-w-[360px] sm:max-w-[1000px] mx-auto">
          <h2 className="text-fluid-body font-medium leading-tight text-[#333333] tracking-para mb-[24px]">
          The  <span className="text-black font-semibold">All-in-one ERP</span>{" "}
            solution designed for modern enterprises.
          </h2>
          <p className="text-[14px] md:text-[18px] leading-tight lg:text-[20px] md:hidden tracking-para font-medium md:font-semibold  mb-[16px] md:mb-[24px] text-[#333333]">
           Effortlessly Manage Your Workforce,<br/> Payroll, and Compliance
          </p>
           <p className="text-[14px] hidden md:block md:text-[18px] leading-tight lg:text-[20px] tracking-para font-medium md:font-semibold  mb-[16px] md:mb-[24px] text-[#333333]">
           Effortlessly Manage Your Workforce, Payroll, and Compliance
          </p>

          {/* Supporting text */}
          <p className="text-[#737373] text-fluid-small md:max-w-[830px] mx-auto">
           Whether you're scaling, managing a growing team, or optimizing HR operations, Accqrate People is built to simplify every aspect of HR from recruitment to retirement on a single, secure platform.
          </p>
         
        </div>

        {/* buttonGroup */}
        <div className="flex justify-center">
          <ButtonGroup
            buttons={[
              {
                text: "REQUEST A DEMO",
                href: "/demo",
                variant: "filled",
                bgColor: "bg-black",
                textColor: "text-white",
              },
              {
                text: "CONTACT SALES",
                href: "/contact",
                variant: "outline",
                borderColor: "border-black",
                textColor:"text-black"
              },
            ]}
          />
        </div>
      </div>

      {/* Dashboard Video */}
      <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video autoPlay loop muted playsInline poster="/images/video-poster.jpg" className="w-full h-auto">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>


    
    

     
    </section>
  );
}
