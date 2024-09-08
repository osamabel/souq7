import React from 'react'
import { useInView } from '../Hooks/useInView';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/utils/translations';

function Categories() {
    const t = useTranslations();
    const cats = t.categories.cats

    const pathname = usePathname();
    const currentLangPath = pathname.split("/")[1];
    const imgtitle =
    currentLangPath === "en"
      ? "left-[15px] md:left-[36px]"
      : "right-[15px] md:right-[36px]";
    const isInView = useInView("category-section");
  return (
    <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] h-full flex pt-[100px] sm:pt-[150px] lg:pt-[210px] py-[20px] relative z-[1]">
        <div className={`absolute top-0 flex ${imgtitle} items-end text-primary ${isInView && "slideUpTitle"}`}>
            <img
                className={`w-[30px] sm:w-[40px] lg:w-[70px] 
                ${currentLangPath === "en" && "flip"} `}
                src="/title.svg"
                alt=""
            />
            <h1 className="text-[16px] leading-[21px] font-[300] md:font-medium md:text-[20px] sm:leading-[30px] lg:leading-[40px]">
                {t.categories.title}
            </h1>
        </div>
        <div className="flex flex-col relative w-full gap-[20px]">
          
            <div className="flex flex-col lg:flex-row min-h-[800px] relative w-full gap-[20px] h-auto justify-center ">
               <div className='min-h-[700px]'></div>
               <div className='min-h-[700px]'></div>
                <div className='w-full top-0 lg:w-[70%] h-auto flex flex-col gap-y-[10px] absolute lg:right-[50%] lg:mr-[10px]'>
                {
                    cats.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[150px] rounded-[40px] overflow-hidden group cursor-pointer flex justify-center items-start t-400 group-hover:h-[100px] hover:h-[300px]"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 backdrop-blur-lg group-hover:backdrop-blur-none t-400"></div>

                        <div className="absolute text-[30px] bg-transparent w-full h-full p-[20px] sm:text-[50px] group-hover:sm:text-[30px] text-white t-400">
                            {item.title}
                        </div>

                        <img className="h-full object-cover w-full t-400" src={`/cats/${item.image}.png`} alt='' />
                    </div>
                    ))
                }
                </div>


                <div className='w-full bottom-0 lg:w-[70%] h-auto flex flex-col gap-y-[10px] absolute lg:left-[50%] lg:ml-[10px]'>
                {
                    cats.slice(-4).map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[150px] rounded-[40px] overflow-hidden group cursor-pointer flex justify-center items-start t-400 group-hover:h-[100px] hover:h-[300px]"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 backdrop-blur-lg group-hover:backdrop-blur-none t-400"></div>

                        <div className="absolute text-[30px] bg-transparent w-full h-full p-[20px] sm:text-[50px] group-hover:sm:text-[30px] text-white t-400">
                            {item.title}
                        </div>

                        <img className="h-full object-cover w-full t-400" src={`/cats/${item.image}.png`} alt='' />
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories