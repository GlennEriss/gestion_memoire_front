import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['fr', 'en'] as const
export const localePrefix = 'never'
export const defaultLocale = 'fr'
export const pathnames: any = {
  '/': '/',
  '/login': {
    fr: '/connexion',
    en: '/login'
  },
  '/dashboard/theses': {
    fr: '/tableau-de-bord/liste-des-memoires',
    en: '/dashboard/theses'
  }
}

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })