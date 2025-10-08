"use client";

import React from "react";
import Link from "next/link";

// Define the Button type
interface Button {
  text: string;
  href?: string;
  variant?: "filled" | "outline";
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface ButtonGroupProps {
  buttons?: Button[];
  className?: string;
}

export default function ButtonGroup({
  buttons = [],
  className = "",
}: ButtonGroupProps) {
  return (
    <div
      className={`my-8 md:mt-[40px] flex flex-col md:flex-row gap-[12px] md:text-lg ${className}`}
    >
      {buttons.map((btn, index) => (
        <Link
          key={index}
          href={btn.href || "#"}
          className={`
            px-16 py-4 rounded-full font-semibold text-center
            ${
              btn.variant === "filled"
                ? `${btn.bgColor || "bg-[#1976D2]"} ${
                    btn.textColor || "text-white"
                  }`
                : `border ${btn.borderColor || "border-[#1976D2]"} ${
                    btn.textColor || "text-[#1976D2]"
                  }`
            }`}
        >
          {btn.text}
        </Link>
      ))}
    </div>
  );
}
