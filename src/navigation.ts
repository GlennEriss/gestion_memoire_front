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
  },
  '/dashboard/theses/add': {
    fr: '/tableau-de-bord/liste-des-memoires/ajouter',
    en: '/dashboard/theses/add'
  },
  '/dashboard/register': {
    fr: '/tableau-de-bord/inscription',
    en: '/dashboard/register'
  },
  '/dashboard/register/student/add': {
    fr: '/tableau-de-bord/inscription/etudiant/ajouter',
    en: '/dashboard/register/student/add'
  },
  '/dashboard/register/professor/add': {
    fr: '/tableau-de-bord/inscription/professeur/ajouter',
    en: '/dashboard/register/professor/add'
  }
}

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })