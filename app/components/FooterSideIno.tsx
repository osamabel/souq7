"use client";
import React from "react";
import ScrollProgressFooter from "./ScrollProgressFooter";
import { useInView } from "@/app/Hooks/useInView";

function FooterSideIno({ expandedSections, setExpandedSections }: any) {
  const isInView = useInView("contact-section");

  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end z-[3]">
      <div className="w-[30px] sm:w-[72px] fade flex flex-col h-full items-center">
        <ScrollProgressFooter
          sectionId="contact-section"
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        />
        <img
          style={{ animationDelay: ".6s" }}
          className="w-[8px] fade"
          src="/circlePrimary.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default FooterSideIno;
