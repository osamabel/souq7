import { usePathname } from 'next/navigation';
import React from 'react'
import { useInView } from '../Hooks/useInView';
import { useTranslations } from '@/utils/translations';

function Map() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLangPath = pathname.split("/")[1];
    const imgtitle =
    currentLangPath === "en"
      ? "left-[15px] md:left-[36px]"
      : "right-[15px] md:right-[36px]";
    const isInView = useInView("map-section");
  return (
    <div className="w-full h-full flex pt-[100px] sm:pt-[150px] lg:pt-[210px] py-[20px] relative z-[1]">
        <iframe className="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24078.61527131517!2d39.19626932889613!3d21.675162255847688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQwJzUwLjMiTiAzOcKwMTInMTkuNCJF!5e0!3m2!1sen!2sma!4v1725733082990!5m2!1sen!2sma"  loading="lazy"></iframe>
    </div>
  )
}

export default Map