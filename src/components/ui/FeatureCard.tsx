// src/components/ui/FeatureCard.tsx
"use client";
import FadeUp from "../ui/FadeUp";

import React from "react";

interface FeatureCardProps {
  videoSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ videoSrc, title, description }) => {
  return (
    <FadeUp className="bg-white text-center h-[347px] w-full lg:h-[360px] rounded-[20px] shadow-xl p-4 flex flex-col justify-center items-center">
      <div className="h-[227px] w-full bg-[#EDEEEF] flex items-center justify-center rounded-lg">
        <video
          className="rounded-lg md:h-[190px] h-[150px] w-[174px] object-cover mb-2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="p-2">
        <h3 className="text-[20px] md:text-[16px] lg:text-[20px] lg:mb-4 font-medium">{title}</h3>
        <p className="text-fluid-small lg:text-[16px] text-[#808080] max-w-xl">{description}</p>
      </div>
    </FadeUp>
  );
};

export default FeatureCard;
