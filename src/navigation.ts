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
  '/dashboard/register/student/add/by-link': {
    fr: '/tableau-de-bord/inscription/etudiant/ajouter-par-lien',
    en: '/dashboard/register/student/add/by-link'
  },
  '/dashboard/register/student/add/by-file':{
    fr: '/tableau-de-bord/inscription/etudiant/ajouter-par-fichier',
    en: '/dashboard/register/student/add/by-file'
  }
}

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })