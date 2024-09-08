"use client";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useTranslations } from "@/utils/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import CustomLink from "./CustomLink";

function Nav() {
  const { isMenuOpen, toggleMenu } = useGlobalContext();
  const t = useTranslations();
  return (
    <div>
      <div className="min-h-[100px] w-full lg:flex items-center justify-center absolute top-0 hidden z-[20]">
        <div>
          <CustomLink section={"nav"} href="/">
            <Image src="/Logo.svg" width={120} height={0} alt="Iblockpad" />
          </CustomLink>
        </div>
        <div className="w-[719px] xl:w-[900px] 2xl:w-[1121px] flex items-center justify-center gap-x-[40px] text-[16px] font-medium">
          {/* <CustomLink section={"nav"} href="/#about-section">
            {t.link.about}
          </CustomLink>
          <CustomLink section={"nav"} href="/#services-section">
            {t.link.services}
          </CustomLink>
          <CustomLink section={"nav"} href="/#technologies-section">
            {t.link.technologies}
          </CustomLink> */}
          <CustomLink section={"nav"} href="/#category-section">
            {t.link.cat}
          </CustomLink>
          <CustomLink section={"nav"} href="/important">
            {t.link.important}
          </CustomLink>
        </div>
        <div className="font-medium text-[14px] w-[176px] flex justify-end">
          {/* English */}
          <LanguageSwitcher section={""}/>
        </div>
      </div>

      <div className="min-h-[100px] w-full flex justify-center absolute top-0 lg:hidden z-[20]">
        <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] flex items-center justify-between">
          <div>
            <CustomLink section={"nav"} href="/">
              <Image
                src="/Logo.svg"
                className="w-[100px] md:w-[126px]"
                width={120}
                height={0}
                alt="Iblockpad"
              />
            </CustomLink>
          </div>
          <div
            onClick={() => toggleMenu(!isMenuOpen)}
            className="font-medium text-[14px] flex justify-end cursor-pointer"
          >
            <Image src={`/open.svg`} width={18} height={0} alt="menu" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full h-screen bg-black  text-[16px] top-0 right-0 font-medium absolute z-[30]">
          <div className="w-full h-full relative flex flex-col items-center justify-center gap-y-[40px] overflow-hidden">
            <img
              className="absolute top-0 left-0 opacdity-60"
              src="/gradien.svg"
              alt=""
            />
            <img
              className="absolute bottom-[-300px] right-0"
              src="/gradien-2.svg"
              alt=""
            />
            <div className="min-h-[100px] w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] flex items-center justify-between">
                <CustomLink section={"nav"} href="/">
                  <Image src="/Logo.svg" className="w-[100px] md:w-[126px]" width={120} height={0} alt="Iblockpad"/>
                </CustomLink>

              <div onClick={() => toggleMenu(!isMenuOpen)} className="font-medium text-[14px] flex justify-end cursor-pointer">
                <Image src={`/close.svg`} width={18} height={0} alt="menu" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-s gap-y-[40px] h-screen w-full  pt-[20%]">
              <div onClick={() => toggleMenu(!isMenuOpen)} className="">
                <CustomLink section={"navSmall"} href="/#about-section">
                  {t.link.about}
                </CustomLink>
              </div>
              <div onClick={() => toggleMenu(!isMenuOpen)}>
                <CustomLink section={"navSmall"} href="/#services-section">
                  {t.link.services}
                </CustomLink>
              </div>
              <div onClick={() => toggleMenu(!isMenuOpen)}>
                <CustomLink section={"navSmall"} href="/#technologies-section">
                  {t.link.technologies}
                </CustomLink>
              </div>
              <div onClick={() => toggleMenu(!isMenuOpen)}>
                <CustomLink section={"navSmall"} href="/#contact-section">
                  {t.link.contact}
                </CustomLink>
              </div>
              <LanguageSwitcher section={"navSmall"}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
