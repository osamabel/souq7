"use client";
import React from "react";
import { useInView } from "../Hooks/useInView";
import { useTranslations } from "@/utils/translations";
import { usePathname } from "next/navigation";

export default function About() {
  const isInView = useInView("about-section");
  const t = useTranslations();

  const cards = [
    {
      delay: "0s",
      content: t.who.p1,
      class: "w-full absolute flex flex-col card delay_1s",
    },
    {
      delay: ".3s",
      content: t.who.p2,
      class: "w-full absolute flex flex-col card top-[-20px]",
    },
    {
      delay: ".4s",
      content: t.who.p3,
      class: "w-full absolute flex flex-col card top-[-40px]",
    },
  ];

  const cardSmall = [
    {
      delay: "0s",
      content: t.who.p1,
      class: "w-full flex flex-col card delay_1s",
    },
    {
      delay: ".3s",
      content: t.who.p2,
      class: "w-full flex flex-col card ",
    },
    {
      delay: ".4s",
      content: t.who.p3,
      class: "w-full flex flex-col card ",
    },
  ];
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const imgtitle =
    currentLangPath === "en"
      ? "left-[15px] md:left-[36px]"
      : "right-[15px] md:right-[36px]";
  return (
    <div className=" w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] h-full flex pt-[100px] sm:pt-[150px] lg:pt-[210px] relative z-[1]">
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
          {t.who.title}
        </h1>
      </div>

      <div className="lg:flex flex-col relative w-full hidden">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`w-full relative flex flip-container ${
              index % 2 == 0
                ? "justify-start z-[1]"
                : "justify-end 2xl:justify-center z-[4]"
            }`}
          >
            {index % 2 === 0 && (
              <div
                style={{ animationDelay: item.delay }}
                className={`right-0 max-w-[432px] ShadowCard ${
                  isInView && "slideUp"
                } ${index == 2 && "!top-[-40px]"}`}
              ></div>
            )}
            <div
              style={{ animationDelay: item.delay }}
              className={`max-w-[432px] ${item.class} ${
                isInView && "slideUp"
              } `}
            >
              <div className="h-[70px] w-full flex justify-start">
                <img
                  className={`${currentLangPath === "en" && "flip"} max-w-[80px]`}
                  src="/section.svg"
                  alt=""
                />
              </div>
              <p className="font-light opacity-80 text-[14px] px-[20px] pb-[20px]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col relative w-full gap-y-[20px] lg:hidden">
        {cardSmall.map((item, index) => (
          <div
            key={index}
            className={`w-full relative flex ${
              index === 0
                ? "justify-start"
                : index === 1
                ? "justify-center"
                : "justify-end"
            } `}
          >
            <div
              style={{ animationDelay: item.delay }}
              className={`z-0 md:max-w-[432px] ShadowCard
              ${index === 0 ? "right-0" : ""} 
              ${index === 1 ? "!left-[50%] !translate-x-[-50%]" : ""} 
              ${
                index === 2
                  ? currentLangPath === "en"
                    ? "!left-[100%] !translate-x-[-100%]"
                    : "!right-[100%] !translate-x-[100%]"
                  : ""
              } 
              ${isInView && "slideUp"}`}
            ></div>
            <div
              style={{ animationDelay: item.delay }}
              className={`z-[2] md:max-w-[432px] ${item.class} ${
                isInView && "slideUp"
              } `}
            >
              <div className="h-[50px] w-full flex justify-start">
                <img
                  className={`${currentLangPath === "en" && "flip"} max-w-[70px]  w-[70px]`}
                  src="/section.svg"
                  alt=""
                />
              </div>
              <p className="font-light opacity-80 text-[12px] md:text-[14px] px-[20px] pb-[20px]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
