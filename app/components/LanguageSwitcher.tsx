'use client';

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface LProps {
  section: string
}

const LanguageSwitcher = ({ section }: LProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const toggleLanguage = useCallback(() => {
    const currentLangPath = pathname.split('/')[1]
    const newLang = currentLangPath === 'en' ? 'ar' : 'en'
    const newPathname = pathname.replace(`/${currentLangPath}`, `/${newLang}`);
    router.push(newPathname);
  }, [pathname, router]);



  const flag = pathname.startsWith('/en') ? 'ar' : 'en';

  return (
    <button className={`flex items-center flex-row-reverse gap-[7px] ${section==='navSmall' ? " text-[20px]" : "" }`} onClick={toggleLanguage}>
      <img className={` ${section==='navSmall' ? " w-[30px]" : "" }`} src={`/${flag}.svg`}/>
      {pathname.startsWith('/en') ? 'العربية' : 'English'}
    </button>
  )
}

export default LanguageSwitcher