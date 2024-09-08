import React from "react";
import CustomLink from "./CustomLink";
import { useTranslations } from "@/utils/translations";

function Footer() {
  const t = useTranslations();
  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] flex flex-col z-[3] sm:gap-[20px]">
      <div className="flex justify-center py-[20px]">
        <img className="w-full" src="/iblockpadGlass.svg" alt="" />
      </div>

      <div className="py-[20px] w-full flex sm:flex-col  justify-between items-start sm:items-center gap-[20px]">
        <div className="flex flex-col sm:flex-row gap-[10px] md:gap-[20px] text-[14px] md:text-[14px]">
          {/* <CustomLink section={"footer"} href="/#contact-section">
            {t.link.contact}
          </CustomLink>
          <CustomLink section={"footer"} href="/">
            {t.link.services}
          </CustomLink>
          <CustomLink section={"footer"} href="/">
            {t.link.technologies}
          </CustomLink>
          <CustomLink section={"footer"} href="/">
            {t.link.privacy}
          </CustomLink>
          <CustomLink section={"footer"} href="/">
            {t.link.solutions}
          </CustomLink> */}
          {/* <CustomLink section={"footer"} href="/important">
            {t.link.important}
          </CustomLink> */}
        </div>
        <div className="flex gap-[20px] flex-col sm:flex-row">
          <a href="https://www.linkedin.com/company/blockpadin">
            <img className="w-[16px]" src="/linkedin.svg" alt="" />
          </a>
          <a href="https://x.com/iBlockpad">
            <img className="w-[16px]" src="/twitter.svg" alt="" />
          </a>
          {/* <a href="">
            <img className="w-[16px]" src="/github.svg" alt="" />
          </a>
          <a href="">
            <img className="w-[16px]" src="/discord.svg" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
