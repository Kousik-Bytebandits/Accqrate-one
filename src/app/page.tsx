import React from "react";
import Hero from "../components/Hero";
import Section1 from "../components/section1";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section2 from "../components/section2";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
       <Section1 />
      <Section2 />
      <Section3 items={[]} />
      <Section4 />
    </main>
  );
}
