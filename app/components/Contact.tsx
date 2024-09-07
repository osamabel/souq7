"use client";
import React, { useEffect } from "react";
import { useInView } from "../Hooks/useInView";
import MailtoBtn from "./MailtoBtn";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/utils/translations";

declare global {
  interface Window {
    calendar: any;
  }
}

function Contact() {
  const pathname = usePathname();
  const currentLangPath = pathname.split("/")[1];
  const t = useTranslations();
  useEffect(() => {
    const loadScript = (src: string, callback: () => void) => {
      const existingScript = document.getElementById("calendar-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = src;
        script.id = "calendar-script";
        script.async = true;
        script.onload = () => {
          callback();
        };
        document.body.appendChild(script);
      } else {
        callback();
      }
    };

    const initializeCalendar = () => {
      const target = document.getElementById("calendar-button-target");
      if (target && window.calendar) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ37KgmibhQn1dYvGat46K9pxTm7ZfAoCUl4iK9hiK-CECdLaK8fKvwE83K333E1wTHxwxl1tIfO?gv=true",
          color: "#ffffff",
          label: t.contact.bookingBtn,
          target,
        });
      }
    };

    loadScript(
      "https://calendar.google.com/calendar/scheduling-button-script.js",
      initializeCalendar
    );
  }, []);
  const isInView = useInView("contact-section");
  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px]  pt-[100px] md:pt[150px] lg:pt-[210px] relative z-[1] pb-[50px]">
      <div
        className={`w-full flex h-[700px] lg:h-auto flex-col items-center relative `}
      >
        <div className="h-full w-full relative overflow-hidjden flex flex-col gap-y-[90px] items-center">
          <div className="min-h-[40%] w-full lg:flex  items-center hidden relative h-[400px] ">
            <img
              style={{ animationDelay: ".7s" }}
              className={`w-[80%] max-w-[600px] absolute   ${
                isInView && "slideleft"
              }`}
              src={`/${currentLangPath}/collaborate.svg`}
              alt=""
            />
            <img
              style={{ animationDelay: ".7s" }}
              className={`w-[60%] max-w-[500px] absolute ${currentLangPath === 'en' ? "right-0" : "left-0"} ${
                isInView && "slideright"
              }`}
              src="/message.svg"
              alt=""
            />
          </div>
          <div className="min-h-[50%] w-full flex lg:hidden justify-center items-center relative ">
            <img
              style={{ animationDelay: ".7s" }}
              className={`absolute w-[80%] md:w-[60%]  ${isInView && "slideleft"}`}
              src={`/${currentLangPath}/collaborate.svg`}
              alt=""
            />
            <img
              style={{ animationDelay: ".7s" }}
              className={`absolute w-[70%] !opacity-90 ${
                isInView && "slideright"
              }`}
              src="/message.svg"
              alt=""
            />
          </div>
          <div className=" w-full flex flex-col lg:flex-row gap-y-[20px] gap-x-[20px]">
            {/* <div className="w-full relative flex flex-col">
              <div
                className={`flex w-full ${
                  currentLangPath === "en" ? "pl-[30px]" : "pr-[30px]"
                } gap-[10px] items-start justify-start`}
              >
                <img
                  className={`w-[40px] translate-y-[6px] ${
                    currentLangPath === "en" && "flip"
                  }`}
                  src="/subTitle.svg"
                  alt=""
                />
                <p className="text-[12px] sm:text-[14px]">
                  {t.contact.bookingParagh}
                </p>
              </div>
              <div id="calendar-button-target"></div>
            </div> */}

            <div className="w-full relative flex flex-col">
              <div
                className={`flex w-full ${
                  currentLangPath === "en" ? "pl-[30px]" : "pr-[30px]"
                } gap-[10px] items-start justify-start`}
              >
                <img
                  className={`w-[40px] translate-y-[6px] ${
                    currentLangPath === "en" && "flip"
                  }`}
                  src="/subTitle.svg"
                  alt=""
                />
                <p className="text-[12px] sm:text-[14px]">
                  {t.contact.mailParagh}
                </p>
              </div>
              <a
                href="mailto:info@iblockpad.com?subject=Inquiry&body=Hello, I would like to inquire about..."
                className="qxCTlb"
              >
                info@iblockpad.net
              </a>
            </div>
            <div className="w-full relative flex flex-col">
              <div
                className={`flex w-full ${
                  currentLangPath === "en" ? "pl-[30px]" : "pr-[30px]"
                } gap-[10px] items-start justify-start`}
              >
                <img
                  className={`w-[40px] translate-y-[6px] ${
                    currentLangPath === "en" && "flip"
                  }`}
                  src="/subTitle.svg"
                  alt=""
                />
                <p className="text-[12px] sm:text-[14px]">
                  {t.contact.mailParagh}
                </p>
              </div>
              <a
                href="mailto:isaeed@iblockpad.com?subject=Inquiry&body=Hello, I would like to inquire about..."
                className="qxCTlb"
              >
                saeed@iblockpad.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
