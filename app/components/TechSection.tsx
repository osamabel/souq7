import React from "react";
import { useInView } from "../Hooks/useInView";
import { usePathname } from "next/navigation";

function TechSection({ item, index }: any) {
  const isInView = useInView(`section-${index}`);
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];

  return (
    <section
      id={`section-${index}`}
      className="flex flex-col min-h-auto py-[20px] justify-center mb-[100px] w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] "
    >
      <div className=" h-full flex flex-col justify-center w-full z-[1]">
        <div
          className={`flex w-full  ${
            currentLangPath == "en"
              ? "pl-[15px] md:pl-[30px]"
              : "pr-[15px] md:pr-[30px]"
          }  gap-[10px] items-start justify-start ${
            isInView ? "slideUpTitle" : "opacity-0"
          }`}
        >
          <img
            className={`w-[35px] translate-y-[6px] ${
              currentLangPath === "en" && "flip"
            }`}
            src="/subTitle.svg"
            alt=""
          />
          <p className="text-[14px] ">{item.title}</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[20px]">
          {item.subtechs.map((t: any, index: number) => (
            <div
              style={{ animationDelay: `.${index + 2}s` }}
              key={index}
              className={`w-full lg:max-w-[348px] h-full card sm:w-[348px] min-h-[180px] max-h-[200px] ${
                index % 2 !== 0 && "self-end"
              } relative ${isInView && "slidedownTitle"}`}
            >
              <img
                className={`absolute bottom-0  ${
                  currentLangPath == "en" ? "right-0 md:right-[-6%]" : "left-[-10%]"
                }  h-[100%] opacity-[.07]`}
                src={`/tech/${t.secondary ? t.secondary : t.name}.svg`}
                alt=""
              />
              <div className="h-[50px] w-full flex justify-between items-center px-[20px]">
                <p className="text-[16px]">{t.subtitle}</p>
                <img className="w-[20px]" src={`/tech/${t.name}.svg`} alt="" />
              </div>
              <div className="p-[20px] w-full text-[12px] font-light">
                {t.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSection;
