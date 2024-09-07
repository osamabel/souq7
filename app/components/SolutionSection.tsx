import React, { useState } from "react";
import { useInView } from "../Hooks/useInView";
import { usePathname } from "next/navigation";

function SolutionSection({ item, index }: any) {
  const isInView = useInView(`section-${index}`);
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    setExpand(!expand);
  };
  return (
    <section
      id={`section-${index}`}
      className="flex flex-col justify-center items-center gap-[60px] w-full h-auto mb-[100px] lg:mb-[250px]"
    >
      <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] flex flex-col justify-center z-[1]">
        <div
          className={`flex w-full ${
            currentLangPath === "en"
              ? "pl-[15px] md:pl-[30px]"
              : "pr-[15px] md:pr-[30px]"
          }  gap-[10px] items-start justify-start ${
            isInView ? "slideUpTitle" : "opacity-0"
          }`}
        >
          <img
            className={`w-[35px] translate-y-[6px] ${currentLangPath === "en" && "flip"}`}
            src="/subTitle.svg"
            alt=""
          />
          <h1 className="text-[16px] lg:text-[20px] leading-[17px]">
            {item.title}
          </h1>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div
            className={`card flex flex-col-reverse md:flex-row ${
              isInView && "slidedownTitle"
            } overflow-hidden`}
          >
            <div className="flex flex-col lg:p-[30px] flex-1 gap-y-[20px]">
              <div className="w-full flex flex-col-reverse ">
                <img
                  className="object-cover h-full max-h-[300px] md:hidden"
                  src={`/solutions/${item.img}.svg`}
                  alt=""
                />
                <p className="text-[16px] font-semibol lg:w-[80%] p-[15px] lg:p-0 w-full">
                  {item.description}
                </p>
              </div>
              <ul
                className={`flex flex-col gap-y-[10px] h-full justify-center p-[30px]`}
              >
                {item.solu.map((item: any, index: number) => (
                  <li
                    key={index}
                    style={{ animationDelay: `${index * 0.1}s !important` }}
                    className={`w-full flex items-center gap-[10px] ${
                      currentLangPath === "ar"
                        ? isInView && "slideleft"
                        : isInView && "slideright"
                    } `}
                  >
                    <div className="w-[20px] h-[20px] flex items-center justify-center">
                      <img
                        className="min-w-[20px]"
                        src={`/solutions/${item.icon}.svg`}
                        alt=""
                      />
                    </div>
                    <div className="text-[12px] lg:text-[14px] font-semibold">
                      {item.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 md:flex items-center justify-center hidden">
              <img
                className="object-cover h-full"
                src={`/solutions/${item.img}.svg`}
                alt=""
              />
            </div>
          </div>
          {item.note && (
            <div
              className={`card flex px-[20px] py-[30px] text-[14px] font-light items-start gap-[20px] ${
                isInView && currentLangPath === "en"
                  ? "slideright"
                  : "slideleft"
              }`}
            >
              <div
                className={`h-[50px] w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent absolute top-0 translate-y-[-100%] ${
                  currentLangPath === "en"
                    ? "left-[15px] lg:left-[30px]"
                    : "right-[15px] lg:right-[30px]"
                }`}
              ></div>
              <img
                className="w-[20px]"
                src="/solutions/noting.svg"
                alt=""
              ></img>
              <p className="">{item.note}</p>
            </div>
          )}
          {item.additionalInfo && (
            <div
              className={`card flex flex-col px-[20px] py-[30px] text-[14px] font-light gap-[20px] ${
                isInView && currentLangPath === "en"
                  ? "slideright"
                  : "slideleft"
              }`}
            >
              <div
                className={`h-[50px] w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent absolute top-0 translate-y-[-100%] ${
                  currentLangPath === "en"
                    ? "left-[15px] lg:left-[30px]"
                    : "right-[15px] lg:right-[30px]"
                }`}
              ></div>
              <div className="flex flex-wrap">
                {item.additionalInfo.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="w-full flex flex-col gap-y-[20px] px-[10px] py-[20px]"
                  >
                    <div className="flex items-start gap-[10px]">
                      <img
                        className="w-[20px]"
                        src="/solutions/idea.svg"
                        alt=""
                      ></img>
                      <h1 className="text-[14px] md:text-[20px] font-semibold">
                        {item.title}
                      </h1>
                    </div>
                    <ul
                      className={`list-disc flex flex-col gap-[25px] md:gap-[10px] ${
                        currentLangPath === "en"
                          ? "pl-[10px] md:pl-[50px]"
                          : "pr-[10px] md:pr-[50px]"
                      }`}
                    >
                      {item.info.map((i: any, index: number) => (
                        <li
                          key={index}
                          style={{
                            animationDelay: `${index * 0.1}s !important`,
                          }}
                          className={`text-[12px] md:text-[16px] w-full ${
                            currentLangPath === "ar"
                              ? isInView && "slideleft"
                              : isInView && "slideright"
                          } `}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          onClick={toggleExpand}
          className={`w-full ${
            currentLangPath === "en"
              ? "pl-[15px] md:pl-[30px]"
              : "pr-[15px] md:pr-[30px]"
          } ${isInView ? "slidedownTitle" : "opacity-0"}`}
        >
          <div
            className={`flex gap-[10px] items-end justify-start min-h-[50px] w-[100px] relative overflow-hidden cursor-pointer`}
          >
            <img
              className={`absolute w-[35px] transition-transform duration-500 ease-in-out 
              ${
                expand
                  ? "rotate-0"
                  : currentLangPath === "en"
                  ? "rotate-[-90deg] translate-y-[-50px]"
                  : "rotate-90 translate-y-[-50px]"
              } 

              `}
              style={{ transformOrigin: "top right" }}
              src={`/solutions/less.svg`}
              alt="Less"
            />
            <img
              className={`absolute w-[35px] transition-transform duration-500 ease-in-out 
              ${
                expand
                  ? currentLangPath === "en"
                    ? "rotate-[-90deg] translate-y-[-50px]"
                    : "rotate-90 translate-y-[-50px]"
                  : "rotate-0"
              } 

              `}
              style={{ transformOrigin: "top right" }}
              src={`/solutions/more.svg`}
              alt="More"
            />
            <h1
              className={`text-[16px] 
              ${currentLangPath === "en" ? "pl-[45px]" : "pr-[45px]"}
              `}
            >
              {expand ? item.less : item.more}
            </h1>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row lg:flex-wrap w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px]
      gap-[20px] justify-start overflow-hidden transition-[max-height] duration-500 ease-in-out content-start
            ${expand ? "max-h-auto" : "max-h-0 opacity-0"} `}
      >
        {item.solu.map((item: any, index: number) => (
          <div
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            key={index}
            className={`w-full lg:max-w-[348px] h-full card sm:w-[348px] min-h-[180px] max-h-[200px] ${
              index % 2 !== 0 && "self-end"
            } relative ${isInView && expand && "slidedownTitle"}`}
          >
            <div className="h-[50px] w-full flex justify-between items-center px-[20px]">
              <p className="text-[16px]">{item.title}</p>
              <img
                className="w-[20px]"
                src={`/solutions/${item.icon}.svg`}
                alt=""
              />
            </div>
            <div className="p-[20px] w-full text-[12px] font-light">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionSection;
