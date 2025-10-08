"use client";

import { useState, useContext, useRef, JSX } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import React from "react";
import FadeUp from "./ui/FadeUp"



interface DropdownItem {
  label: string;
  content: string;
}
  const buttons: string[] = ["REQUEST A DEMO", "CONTACT SALES", "LEARN MORE"];


export default function Section4(): JSX.Element {
  const dropdowns: DropdownItem[] = [
    {
      label: "AI Bank Reconciliation",
      content:
        "Imports, matches, and reconciles your statements—up to 10x faster.",
    },
    {
      label: "Auto-Invoice Conversion",
      content:
        "Turn POs into invoices or bills in a single click.",
    },
    {
      label: "Expense Classification",
      content:
        "AI suggests categories, flags anomalies for review.",
    },
  ];


  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { loading } = useContext(LoadingContext);
  const automationRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(automationRef, { threshold: 0 });

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (loading || !isVisible) {
    return (
      <div ref={automationRef} className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        {/* AI-Driven Automation Skeleton */}
        <section className="font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:items-center my-6">
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <Skeleton height="42px" width="60%" className="mb-4" />
            <Skeleton height="20px" width="90%" className="mb-6" />

            <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
              {[1, 2, 3].map((item) => (
                <div key={item} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                    <Skeleton height="16px" width="80%" />
                    <Skeleton height="16px" width="16px" className="rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-center">
            <Skeleton height="420px" className="rounded-lg w-full" />
          </div>
        </section>

        {/* Bottom Section Skeleton */}
        <div className="my-6 mx-auto px-2 font-inter md:max-w-5xl">
          <div className="text-center mb-10 md:mb-4 md:flex md:justify-center">
            <Skeleton height="38px" width="40%" className="mb-2 md:mr-2" />
            <Skeleton height="38px" width="30%" className="mb-6" />
          </div>

          <div>
            <Skeleton height="20px" width="80%" className="mb-8 mx-auto" />
          </div>

          {/* Unified Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative w-full max-w-[300px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
                <Skeleton height="100%" className="rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section Skeleton */}
        <div className="my-6 bg-[#F2F2F2] py-12">
          <div className="max-w-7xl mx-auto px-6 font-inter">
            <Skeleton height="38px" width="50%" className="mb-12 mx-auto" />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12">
              <div className="flex justify-center items-center">
                <Skeleton height="320px" width="100%" className="max-w-[480px]" />
              </div>

              <ul className="text-left space-y-4 md:space-y-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <li key={item}>
                    <Skeleton height="20px" width="100%" className="mb-1" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white px-6 md:px-[32px] max-w-[1280px] mx-auto mt-6 md:mt-8">
     


        {/* Bottom Section */}
        <div className="my-12 mx-auto font-inter md:max-w-6xl ">
          {/* Heading */}
          <FadeUp className="text-center mb-6 md:mb-4 md:flex md:justify-center">
            <h2 className="text-fluid-h2 font-normal text-[#808080] tracking-heading leading-tight">
              Support, Training, & <br className="md:hidden" />
              <span className="font-medium text-black"> Onboarding</span>
            </h2>
          </FadeUp>

          <FadeUp>
            <p className="text-fluid-small lg:text-[16px] mb-6 md:mb-[32px] text-center leading-relaxed">
              Expert onboarding for ZATCA compliance software— get your team ready for
              e-invoicing in KSA, fast.
            </p>
          </FadeUp>

          {/* Unified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {/* Box 1 - On Demand Training */}
            <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-black rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Mobile Video */}
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-black-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-8 object-cover rounded-t-lg"
                    >
                      <source src="/videos/on-demand-training.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Tablet & Desktop Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block w-full h-[170px] object-cover rounded-t-lg"
                  >
                    <source src="/videos/on-demand-training.mp4" type="video/mp4" />
                  </video>

                  {/* Content */}
                  <div className="p-4 md:mt-10 mt-4 space-y-[24px]">
                    <h3 className="font-semibold  md:font-medium text-[24px]  lg:text-[26px] leading-tight tracking-heading text-center">
                     24/7 Customer<br /> Support
                    </h3>
                   
                  </div>
                </div>
              </div>

              {/* Arrow Layer */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-black rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>


            {/* Box 2 - Local Support */}
            <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-black rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-black-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-6 md:h-[200px] object-cover rounded-t-lg"
                    >
                      <source src="/videos/local-support.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <video autoPlay loop muted playsInline className="hidden md:block w-full h-[170px] object-cover rounded-t-lg">
                    <source src="/videos/local-support.mp4" type="video/mp4" />
                  </video>

                  <div className="p-4 md:mt-10 mt-4">
                    <h3 className="font-semibold md:font-medium text-[24px] lg:text-[26px] leading-tight tracking-heading text-center">
                      Comprehensive <br />Knowledge Base
                    </h3>
                   
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-black rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>

            {/* Box 3 - Knowledge Center */}
            <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-black rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[200px] md:h-[170px] object-cover rounded-t-lg hidden md:block"
                  >
                    <source src="/videos/knowledge-center.mp4" type="video/mp4" />
                  </video>

                  {/* Mobile Video */}
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-black-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-8 object-cover rounded-t-lg"
                    >
                      <source src="/videos/on-demand-training.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Text content */}
                  <div className="p-4 md:mt-10 mt-4 relative">
                    <h3 className="font-semibold md:font-medium text-[24px] lg:text-[26px] leading-tight tracking-heading text-center">
                     Step-by-Step Guides <br /> and Tutorials
                    </h3>
                   
                  </div>
                </div>
              </div>

              {/* Overlay arrow */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-black rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>

             <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-black rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[200px] md:h-[170px] object-cover rounded-t-lg hidden md:block"
                  >
                    <source src="/videos/knowledge-center.mp4" type="video/mp4" />
                  </video>

                  {/* Mobile Video */}
                  <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-black-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-8 object-cover rounded-t-lg"
                    >
                      <source src="/videos/on-demand-training.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Text content */}
                  <div className="p-4 mt-4 md:mt-10  relative">
                    <h3 className="font-semibold md:font-medium text-[24px] lg:text-[26px] leading-tight tracking-heading text-center">
                    Dedicated Account <br /> Managers
                    </h3>
                   
                  </div>
                </div>
              </div>

              {/* Overlay arrow */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-black rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div >
      <section
        
        className="mt-48px px-24px text-center min-h-full md:mt-[64px] md:px-[32px] text-[#333333]"

      >
        <FadeUp>
          <h2 className="font-normal text-[#333333] text-fluid-h2  tracking-para leading-tight mb-10">
            Ready to modernize your <span className="text-black font-semibold">Enterprise?</span>
          </h2>
        </FadeUp>
        <FadeUp
          className="flex flex-col md:flex-row md:max-w-[700px] mx-auto justify-center gap-[20px] mt-24px md:mt-[32px] lg:mt-[40px]"

        >
          {buttons.map((label, idx) => (
            <button
              key={idx}
              className="bg-black text-fluid-small text-white font-medium rounded-[5px] md:rounded-lg px-6 py-4 w-[260px] md:w-[300px] mx-auto text-center "
            >
              {label}
            </button>
          ))}
        </FadeUp>
      </section>
    </>
  );
}