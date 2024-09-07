"use client";
import React from "react";
import { useInView } from "../Hooks/useInView";
import Technologie from "./technoligy/Technologie";
import { useTranslations } from "@/utils/translations";
import { usePathname } from "next/navigation";

function Technologies() {
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const imgtitle =
    currentLangPath === "en"
      ? "left-[15px] md:left-[36px]"
      : "right-[15px] md:right-[36px]";
  const t = useTranslations();
  const isInView = useInView("services-section");
  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] flex pt-[100px] sm:pt-[150px] lg:pt-[210px] relative z-[7]">
      <div
        className={`absolute ${imgtitle} top-0 flex items-end text-primary z-[2] ${
          isInView && "slideUpTitle"
        }`}
      >
        <img
          className={`w-[30px] sm:w-[40px] lg:w-[70px] ${currentLangPath === "en" && "flip"} `}
          src="/title.svg"
          alt=""
        />
        <h1 className="text-[16px] leading-[21px] font-[300] md:font-medium md:text-[20px] sm:leading-[30px] lg:leading-[40px]">
          {t.tech.title}
        </h1>
      </div>
      <div className="w-full flex flex-col relative ">
        <div className="relarive">
          <Technologie />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
