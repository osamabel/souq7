import React from "react";
import { useInView } from "../Hooks/useInView";
import { usePathname } from "next/navigation";

function ServiceSection({ item, index }: any) {
  const isInView = useInView(`section-${index}`);
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];

  return (
    <section
      id={`section-${index}`}
      className="flex flex-col min-h-auto py-[20px] justify-center items-center mb-[100px]"
    >
      <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] h-full flex flex-col justify-center z-[1]">
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
            className={`w-[35px] translate-y-[6px] ${
              currentLangPath === "en" && "flip"
            }`}
            src="/subTitle.svg"
            alt=""
          />
          <h1 className="text-[16px] lg:text-[20px] leading-[17px] ">
            {item.title}
          </h1>
        </div>

        <div
          className={`card flex flex-col gap-[30px] ${
            isInView && "slidedownTitle"
          } lg:gap-[70px]`}
        >
          <p className="text-[12px] md:text-[16px] md:font-semibold p-[15px]">{item.description}</p>
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between gap-[30px] lg:items-end ">
            <div className="relative h-[200px] sm:h-[300px] lg:w-[60%] 2xl:w-[40%] flex items-center justify-center">
              <img
                className="absolute max-w-[300px] lg:max-w-[500px] w-[100%] sm:min-w-[70%] object-contain"
                src={`/services/${item.img}.svg`}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-y-[10px] p-[20px]">
              {item.servs.map((item: any, index: number) => (
                <div
                  key={index}
                  className="w-full flex items-center gap-[10px]"
                >
                  <div className="border-[.5px] boder-white w-[30px] h-[30px] rounded-[5px] flex items-center justify-center">
                    <img src={`/services/${item.icon}.svg`} alt="" />
                  </div>
                  <div className="text-[12px] lg:text-[16px]">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* {item.subtechs.map((t: any, index: number) => (
            <div
              style={{ animationDelay: `.${index + 2}s` }}key={index}
              className={`w-full lg:max-w-[348px] h-full card sm:w-[348px] min-h-[150px] max-h-[160px] ${
                index % 2 !== 0 && "self-end"
              } relative ${isInView && "slidedownTitle"}`}
            >
              <img className={`absolute bottom-0 left-[-10%] h-[110%] opacity-[.07]`} src={`/tech/${t.secondary ? t.secondary : t.name}.svg`} alt=""/>
              <div className="h-[50px] w-full flex justify-between items-center px-[20px]">
                <p className="text-[16px]">{t.subtitle}</p>
                <img className="w-[20px]" src={`/tech/${t.name}.svg`} alt="" />
              </div>
              <div className="p-[20px] w-full text-[12px] font-light">
                {t.description}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
