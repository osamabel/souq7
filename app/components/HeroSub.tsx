import { usePathname } from "next/navigation";
import React from "react";

interface HeroSubProps {
  title: string;
  parph: string;
  parphcenter: string;
}

function HeroSub({ title, parph, parphcenter }: HeroSubProps) {
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  return (
    <div
      className=" w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] h-full flex flex-col justify-center gap-y-[20px] md:gap-y-[40px] z-[1]"
    >
      <div className="w-full flex justify-end">
        {
          title !== "" &&
            <img
            src={`/${currentLangPath}/${title}.svg`}
            alt=""
            className={`w-full md:w-[80%] slideright delay-1`}
            />
          }
      </div>
      <div className="w-full flex ">
        {
          parph !== "" &&
          <img
            src={`/${currentLangPath}/${parph}.svg`}
            alt=""
            className={`w-[120px] md:w-[70%] slideleft delay-3 hidden md:flex`}
          />

        }
        {
          parphcenter !== "" &&
          <img
            src={`/${currentLangPath}/${parphcenter}.svg`}
            alt=""
            className={`w-full md:w-[70%] slideleft delay-3 flex md:hidden`}
          />

        }
      </div>
    </div>
  );
}

export default HeroSub;
