"use client";
import React from "react";
import { useInView } from "@/app/Hooks/useInView";
import { useTranslations } from "@/utils/translations";
import { usePathname } from "next/navigation";
import ScrollProgress from "../ScrollProgress";

function ContactSideIno({ expandedSections, setExpandedSections, id }: any) {
  const isInView = useInView("map-section");
  const t = useTranslations();
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const imgtitle =
    currentLangPath === "en"
      ? "left-[15px] md:left-[36px]"
      : "right-[15px] md:right-[36px]";

  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end z-[-1]">
      <div className={`absolute top-0 flex ${imgtitle} items-end text-primary ${isInView && "slideUpTitle"}`}>
        <img
            className={`w-[30px] sm:w-[40px] lg:w-[70px] 
            ${currentLangPath === "en" && "flip"} `}
            src="/title.svg"
            alt=""
        />
        <h1 className="text-[16px] leading-[21px] font-[300] md:font-medium md:text-[20px] sm:leading-[30px] lg:leading-[40px]">
            {t.link.map}
        </h1>
        </div>
      <div className="w-[30px] sm:w-[72px] fade flex flex-col h-full items-center">
        <ScrollProgress
          sectionId={id}
          expandedSections={expandedSections}
          setExpandedSections={setExpandedSections}
        />
        {/* <img style={{animationDelay: ".6s"}} className="w-[18px] fade" src="/circle.svg" alt="" /> */}
      </div>
    </div>
  );
}

export default ContactSideIno;
