"use client";
import { useInView } from "@/app/Hooks/useInView";
import React, { useEffect, useState } from "react";
import TechIcon from "./TechIcon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "@/utils/translations";
import { usePathname } from "next/navigation";

export default function Technologie() {
  const t = useTranslations();

  const titles = [
    {
      name: t.tech.tech1,
      tech: ["reactJS", "next", "flutter", "swift", "kotlin"],
    },
    {
      name: t.tech.tech2,
      tech: [
        "postgreSQL",
        "mongoDB",
        "redis",
        "apache-cassandra",
        "firebase",
        "superbase",
      ],
    },
    {
      name: t.tech.tech3,
      tech: [
        "java",
        "spring-boot",
        "dotNET",
        "nodeJS",
        "python",
        "ruby",
        "laravel",
      ],
    },
    {
      name: t.tech.tech4,
      tech: [
        "cpp",
        "google-check",
        "openID-connect",
        "azureAI",
        "oauth-2.0",
        "bytecode",
      ],
    },
    {
      name: t.tech.tech5,
      tech: ["chatGPT", "gemini", "llama-meta", "cloudeAI"],
    },
    {
      name: t.tech.tech6,
      tech: ["aws", "ibm", "oracle", "azure", "cloud-run"],
    },
    {
      name: t.tech.tech7,
      tech: [
        "github-actions",
        "firebase-crashlytics",
        "sentry",
        "testflight",
        "firebase-app-distribution",
      ],
    },
    {
      name: t.tech.tech8,
      tech: ["ethersJS", "solidity", "evm", "chainlink", "ipfs"],
    },
  ];
  const isInView = useInView("technologies-section");
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    const selected = localStorage.getItem("selectedValue");
    if (selected !== null) {
      setSelected(parseInt(selected, 0));
    }
  }, []);

  const __next = () => {
    console.log("NEXT : ", selected);
    const currentSelected = selected ?? 0;
    if (currentSelected < titles.length - 1) setSelected(currentSelected + 1);
    else setSelected(0);
  };
  const __prev = () => {
    console.log("PREV : ", selected);
    const currentSelected = selected ?? 0;
    if (currentSelected > 0) setSelected(currentSelected - 1);
    else setSelected(titles.length - 1);
  };
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];

  return (
    <div className={`${isInView && "slideleft"} relative`}>
      <div
        className={`ShadowCard w-full h-full ${isInView && "slideleft"}`}
      ></div>
      <div
        className={`card overflow-hidden flex flex-col-reverse lg:flex-row gap-y-[20px] lg:h-[400px] 
        ${isInView && "slideleft"}`}
      >
        <div className="hidden flex-col flex-1 lg:flex">
          <div className="h-full flex items-center">
            <div className="text-[16px] font-light flex flex-col gap-y-[10px]">
              {titles.map((item, index) => (
                <div
                  onClick={() => {
                    setSelected(index);
                    localStorage.setItem("selectedValue", index.toString());
                  }}
                  key={index}
                  style={{ animationDelay: `${index / 10 + 0.9}s !important` }}
                  className={`flex gap-x-[10px] group cursor-pointer ${
                    isInView && "slideleft"
                  }`}
                >
                  <img
                    className={`
                    ${currentLangPath === "en" && "flip"}
                    ${index === selected ? "w-[80px]" : "w-[50px]"} t-400`}
                    src="/section.svg"
                    alt=""
                  />
                  <p
                    className={`${index === selected ? "text-primary font-bold text-[20px]" : "group-hover:translate-x-[10px]"} 
                     t-400`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 lg:hidden">
          <div className="h-full flex items-center">
            <div className="text-[12px] h-[80px] font-light flex items-center justify-between w-full">
              <div
                onClick={__next}
                className="w-[30px] sm:w-[72px] flex items-center"
              >
                <div
                  className={`h-[1px] w-full bg-gradient-to-r from-white to-transparent  ${
                    currentLangPath === "en" && "flip"
                  }`}
                ></div>
                <div className="w-[15px] h-[15px] sm:min-w-[30px] sm:min-h-[30px] bg-transparent border-[1px] border-white  rounded-full flex items-center justify-center">
                  {currentLangPath === "en" ? (
                    <ChevronLeft strokeWidth={1.2} />
                  ) : (
                    <ChevronRight strokeWidth={1.2} />
                  )}
                </div>
              </div>
              <div className="text-center">{titles[selected || 0].name}</div>
              <div
                onClick={__prev}
                className="w-[30px] sm:w-[72px] flex items-center"
              >
                <div className="w-[15px] h-[15px] sm:min-w-[30px] sm:min-h-[30px] bg-transparent border-[1px] border-white rounded-full flex items-center justify-center">
                  {currentLangPath !== "en" ? (
                    <ChevronLeft strokeWidth={1.2} />
                  ) : (
                    <ChevronRight strokeWidth={1.2} />
                  )}
                </div>
                <div
                  className={`h-[1px] w-full bg-gradient-to-l from-white to-transparent  ${
                    currentLangPath === "en" && "flip"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <TechIcon
          titles={titles}
          selected={selected || 0}
          isInView={isInView}
        />
      </div>
    </div>
  );
}
