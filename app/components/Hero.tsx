import React from "react";
import { usePathname } from "next/navigation";

function Hero() {
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const animation = currentLangPath === "en" ? "slideright" : "slideleft";

  return (
    <div className=" w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] h-full flex flex-col justify-center gap-y-[20px] md:gap-y-[70px] z-[1]">
      <div className="w-full flex justify-start ">
        <img
          src={`/${currentLangPath}/rHero.svg`}
          alt=""
          className={`w-[80%] sm:w-[80%] md:w-[100%] ${animation} delay-1`}
        />
      </div>
      <div
        className={`w-full flex 
        ${currentLangPath === "en" ? "pl-[92px]" : "pr-[92px]"} `}>
        <img
          src={`/${currentLangPath}/pargph.svg`}
          alt=""
          className={`w-[160px] sm:w-[70%] md:min-w-[60%] ${animation} delay-3`}
        />
      </div>
    </div>
  );
}

export default Hero;
