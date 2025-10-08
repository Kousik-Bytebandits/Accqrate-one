"use client";

import React, { useState, useRef } from "react";

export default function Section3({ items }) {
  const [centerIndex, setCenterIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const containerRef = useRef(null);

  const baseItems =
    items && items.length
      ? items
      : [
          {
            id: 1,
            quote:
              "Accqrate ONE streamlined our processes and improved our bottom line within the first quarter.",
            name: "HR Director",
            role: "Global Retail Chain",
            avatar: "images/hr.png",
          },
          {
            id: 2,
            quote:
              "Accqrate ONE streamlined our processes and improved our bottom line within the first quarter.",
            name: "HR Director",
            role: "Global Retail Chain",
            avatar: "images/hr.png",
          },
          {
            id: 3,
            quote:
              "Accqrate ONE streamlined our processes and improved our bottom line within the first quarter.",
            name: "HR Director",
            role: "Global Retail Chain",
            avatar: "images/hr.png",
          },
        ];

  // --- Mobile touch swipe ---
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartX - touchEndX;
    if (diff > 50) setCenterIndex((prev) => (prev + 1) % 3);
    else if (diff < -50) setCenterIndex((prev) => (prev - 1 + 3) % 3);
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // --- Desktop scroll/flick support ---
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 20) setCenterIndex((prev) => (prev + 1) % 3);
      else if (e.deltaX < -20) setCenterIndex((prev) => (prev - 1 + 3) % 3);
    } else if (Math.abs(e.deltaY) > 40) {
      if (e.deltaY > 0) setCenterIndex((prev) => (prev + 1) % 3);
      else setCenterIndex((prev) => (prev - 1 + 3) % 3);
    }
  };

  const getCardStyle = (index) => {
    if (index === centerIndex) {
      return {
        transform: `scale(1.05) translateX(0)`,
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 3,
      };
    }
    const isLeft = (index + 1) % 3 === centerIndex;
    const isRight = (index + 2) % 3 === centerIndex;
    if (isLeft) return { transform: `scale(0.9) translateX(-70%)`, filter: "blur(4px)", opacity: 0.6, zIndex: 2 };
    if (isRight) return { transform: `scale(0.9) translateX(70%)`, filter: "blur(4px)", opacity: 0.6, zIndex: 2 };
    return { opacity: 0, pointerEvents: "none" };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center overflow-hidden select-none md:px-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <div className="relative w-full max-w-[900px] bg-black sm:bg-white h-[320px] flex items-center justify-center transition-all duration-500 ease-out">
        {baseItems.map((item, index) => (
          <div
            key={item.id}
            className="absolute bg-[#EDEDED] border border-gray-300 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-500 ease-in-out
            w-[340px] sm:w-[320px] md:w-[600px] h-[180px] md:h-[280px]"
            style={getCardStyle(index)}
          >
            <p className="text-[#333333] text-[14px]  md:text-[18px] lg:text-[24px] mb-6 flex-1">
              "{item.quote}"
            </p>
            <div className="flex items-center md:mt-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-black font-medium text-[10px] md:text-[14px] lg:text-[16px]">{item.name}</h4>
                <p className="text-black font-medium  text-[10px] md:text-[14px] lg:text-[16px]">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
