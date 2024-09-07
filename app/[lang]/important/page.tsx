"use client"
import React from 'react'
import HeroSub from '../../components/HeroSub'
import Footer from '../../components/Footer';
import { useGlobalContext } from '../../context/GlobalContext';
import { useTranslations } from '@/utils/translations';
function page() {
  const { isMenuOpen } = useGlobalContext();
  const t = useTranslations();
  const impor = t.importance || []
  return (
    !isMenuOpen &&
    <main className={`flex flex-col items-center  max-h-screen relative `}>
      {/* <ScrollBySteps /> */}
      <section id="hero-section" className="min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center w-full relative overflow-hidden">
        <HeroSub title={'important'} parph={'importantparagh'} parphcenter={'importantaragraphcenter'}/>
      </section>
      {
        impor.map((item:any, index:number) => ( 
          <section
          key={index} id={`section-${index}`}
          className="flex flex-col justify-center items-center gap-[60px] h-auto w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] z-[1] mb-[50px]">
          <div className="w-full flex flex-col gap-y-[20px]">
            <h1 className='text-[30px] underline'>{item.title}</h1>
            <ul className='flex flex-col gap-y-[10px] font-light list-disc'>
              {
                item.Content.map((c:string, index:number)=>(
                  <li>{c}</li>
                ))
              }
            </ul>
          </div>
          </section>
        ))
      }

      <section id="footer-section" className="h-auto flex items-start justify-center w-full relative bg-primary">
        <Footer/>
      </section>
    
    </main>
  )
}

export default page