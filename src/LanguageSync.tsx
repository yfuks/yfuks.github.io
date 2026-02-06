import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import i18n from './i18n'
import type { SupportedLang } from './i18n'

export function LanguageSync() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lang: SupportedLang = pathname.startsWith('/fr') ? 'fr' : 'en'
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
    document.documentElement.lang = lang
  }, [pathname])

  return null
}
