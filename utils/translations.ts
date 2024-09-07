"use client";

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

export const useTranslations = () => {
  const pathname = usePathname()
  const [translations, setTranslations] = useState(pathname.startsWith('/en') ? en : ar)

  useEffect(() => {
    setTranslations(pathname.startsWith('/en') ? en : ar)
  }, [pathname])

  return translations
}