"use client";
import React from "react";
import { useInView } from "../Hooks/useInView";
import Technologie from "./technoligy/Technologie";
import { useTranslations } from "@/utils/translations";
import { usePathname } from "next/navigation";

function Services() {
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const t = useTranslations();
  const isInView = useInView("services-section");
  const imgtitle =
    currentLangPath === "en"
      ? "left-[15px] md:left-[36px]"
      : "right-[15px] md:right-[36px]";
  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] flex pt-[100px] sm:pt-[150px] lg:pt-[210px] relative z-[7] overflow-hidden">
      <div
        className={`absolute ${imgtitle} top-0 flex items-end text-primary z-[2] ${
          isInView && "slideUpTitle"
        }`}
      >
        <img
          className={`w-[30px] sm:w-[40px] lg:w-[70px] ${
            currentLangPath === "en" && "flip"
          } `}
          src="/title.svg"
          alt=""
        />
        <h1 className="text-[16px] leading-[21px] font-[300] md:font-medium md:text-[20px] sm:leading-[30px] lg:leading-[40px]">
          {t.services.title}
        </h1>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-[20px] relative items-center">
        <div
          className={`ShadowCard w-full h-full ${isInView && "slideleft"}`}
        ></div>
        <div className="flex-col gap-y-[20px] flex md:flex-1 w-full">
          {t.services.serv.slice(0, 3).map((item: any, index: number) => (
            <div
              key={index}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              className={`!w-full h-full card sm:w-[348px] min-h-[120px] max-h-[190px] 
            ${
              index === 1 && isInView
                ? `${
                    currentLangPath === "ar"
                      ? "md:slideleftPlus slideleft"
                      : "md:sliderightPlus slideright"
                  }`
                : `${currentLangPath === "ar" ? "slideleft" : "slideright"}`
            }
            `}
            >
              <div className="h-[50px] w-full flex justify-between items-center px-[20px]">
                <p className="text-[16px]">{item.title}</p>
                <img
                  className="w-[20px]"
                  src={`/services/${item.icon}.svg`}
                  alt=""
                />
              </div>
              <div className="p-[20px] w-full text-[14px] font-light">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ animationDelay: `.1s !important` }}
          className={`${isInView && "fade"} hidden 2xl:flex`}
        >
          <img src="/services/branches.svg" alt="" />
        </div>
        <div className="flex flex-col gap-y-[20px] md:flex-1 w-full items-end">
          {t.services.serv.slice(3).map((item: any, index: number) => (
            <div
              key={index}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              className={`!w-full h-full card sm:w-[348px] min-h-[120px] max-h-[180px]
            ${
              index === 1
                ? `${
                    currentLangPath === "ar"
                      ? "md:sliderightPlus slideright"
                      : "md:slideleftPlus slideleft"
                  }`
                : isInView &&
                  `${currentLangPath === "ar" ? "slideright" : "slideleft"}`
            }
            `}
            >
              <div className="h-[50px] w-full flex justify-between items-center px-[20px]">
                <p className="text-[16px] max-w-[80%]">{item.title}</p>
                <img
                  className="w-[20px]"
                  src={`/services/${item.icon}.svg`}
                  alt=""
                />
              </div>
              <div className="p-[20px] w-full text-[12px] font-light">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
