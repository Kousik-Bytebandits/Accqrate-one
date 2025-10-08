"use client";

import React, { JSX, useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import { Accordion, AccordionCard } from "./ui/accordion";
import FadeUp from "./ui/FadeUp";

export default function Section2(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const onboardRef = useRef<HTMLElement>(null);


  interface FeatureCardProps {
  videoSrc: string;
  title: string;
  
}

const FeatureCard: React.FC<FeatureCardProps> = ({ videoSrc, title,}) => {
  return (
    <FadeUp className="bg-white text-center h-[300px] w-full lg:h-[340px] rounded-[20px] shadow-xl p-4 flex flex-col justify-center items-center">
      <div className="h-[227px] w-full bg-[#EDEEEF] flex items-center justify-center rounded-lg">
        <video
          className="rounded-lg lg:h-[190px]   h-[150px] w-[174px] object-cover mb-4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="px-4 mt-2 ">
        <h3 className="text-[20px] md:text-[14px] lg:text-[18px] leading-tight tracking-para  font-medium">{title}</h3>

      </div>
    </FadeUp>
  );
}
  // Trigger as soon as any part of the section enters viewport
  const isVisible = useInView(onboardRef, { threshold: 0 });

  // --- SKELETON SECTION ---
  if (loading || !isVisible) {
    return (
      <section
        id="OnboardSection"
        ref={onboardRef}
        className="w-full max-w-[1280px] mx-auto font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Main Heading Skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <Skeleton className="h-8 md:h-9 lg:h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        {/* Feature Cards Skeleton */}
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mb-12 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full max-w-[320px] md:w-[340px] h-[270px] md:h-[400px] rounded-xl p-4 bg-[#F2F2F2] shadow mx-auto md:mx-0"
            >
              <Skeleton className="w-full h-32 md:h-48 rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>

        {/* Zero-Friction Setup Skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-5 w-4/5 mx-auto mb-2" />
          <Skeleton className="h-5 w-3/4 mx-auto" />
        </div>

        {/* Accordion Section Skeleton */}
        <div className="w-full max-w-5xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#F2F2F2] rounded-lg p-6 h-[120px] flex flex-col justify-center"
            >
              <Skeleton className="w-8 h-8 rounded-full mb-3" />
              <Skeleton className="h-6 flex-1" />
              <Skeleton className="h-4 w-full mt-2" />
            </div>
          ))}
        </div>

        {/* Testimonial Skeleton */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg p-6 h-[129px]" />
        </div>

        {/* ZATCA Compliance Skeleton */}
        <div className="w-full max-w-6xl mx-auto">
          <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-5 w-2/3 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] rounded-xl p-6 h-[190px] md:h-[251px] lg:h-[292px] flex flex-col items-center justify-center"
              >
                <Skeleton className="h-6 w-2/3 mb-4" />
                <Skeleton className="w-full h-32 md:h-36 rounded-lg" />
              </div>
            ))}
          </div>
          <Skeleton className="w-full h-[201px] md:h-[400px] rounded-lg" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="OnboardSection" className="w-full py-10 mt-10">
        <div className="px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
          {/* Heading */}
          <FadeUp>
            <h2 className="text-fluid-h2 font-inter text-[#808080] leading-tight tracking-heading text-center mb-6">
               <span className="text-black font-semibold">Intuitive Design</span> for Seamless Adoption
            </h2>

            {/* Shared description */}
            <p className="text-fluid-small leading-tight tracking-para md:max-w-[600px] lg:max-w-[700px] mx-auto mb-6 md:mb-[32px] text-[#000000B2] text-center">
              Designed with the user in mind, Accqrate ONE boasts an intuitive interface that requires minimal training, ensuring quick adoption across your organization. </p>
          </FadeUp>
           
            <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video autoPlay loop muted playsInline poster="/images/video-poster.jpg" className="w-full h-auto">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
      </div>
           <FadeUp className="flex justify-center mb-10 max-w-[300px] md:max-w-[800px] mx-auto">
            <button className="bg-black text-white w-full md:w-[400px] py-3 rounded-full text-fluid-h3 font-medium ">
            Start Free Trial
          </button>
           </FadeUp>
           
            
          <FadeUp>
            <h2 className="text-fluid-h2 font-inter leading-tight tracking-heading text-[#808080] text-center mb-6">
              Your <span className="text-black font-semibold">Data,</span> Our <span className="text-black font-semibold">Priority</span>
             
            </h2>

            {/* Shared description */}
            <p className="text-fluid-small leading-tight tracking-para md:max-w-[600px] lg:max-w-[700px] mx-auto  mb-6 md:mb-[32px] text-[#000000B2] text-center">
              Accqrate ONE adheres to the highest standards of security and compliance, ensuring your data is protected and regulatory requirements are met.   </p>
          </FadeUp>
          <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 items-center  mb-[48px] md:mb-[56px]">
            {/* Card 1 */}
            <FeatureCard
              videoSrc="videos/cloud-first.mp4"
              title="Data Encryption"
              
            />

            {/* Card 2 */}
            <FeatureCard 
              videoSrc="videos/all-devices.mp4"
              title="Role-Based Access Control"
              
            />

            {/* Card 3 */}
            <FeatureCard
              videoSrc="videos/no-special-hardware.mp4"
              title="Regular Security Audits"
              
            />
            
             <FeatureCard
              videoSrc="videos/no-special-hardware.mp4"
              title="Compliance with Industary Standards"
              
            />
          </div>

           <FadeUp className="flex justify-center mb-10  md:max-w-[800px] mx-auto">
            <button className="bg-black text-white w-full md:px-40 py-3 rounded-full text-fluid-h3 font-medium ">
            Learn About Our Security Features
          </button>
           </FadeUp>
         
        </div>

      
      </section>
    </>
  );
}
