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
  '/dashboard/users': {
    fr: '/tableau-de-bord/utilisateurs',
    en: '/dashboard/users'
  },
  '/dashboard/users/student/add': {
    fr: '/tableau-de-bord/inscription/lecteur/ajouter',
    en: '/dashboard/users/student/add'
  },
  '/dashboard/users/professor/add': {
    fr: '/tableau-de-bord/utilisateurs/expert/ajouter',
    en: '/dashboard/users/professor/add'
  },
  '/dashboard/users/lector/[id]': {
    fr: '/tableau-de-bord/utilisateurs/lecteur/[id]',
    en: '/dashboard/users/lector/[id]'
  },
  '/dashboard/users/expert/[id]': {
    fr: '/tableau-de-bord/utilisateurs/expert/[id]',
    en: '/dashboard/users/expert/[id]'
  }
}
export const accessible_routes = [''];

export const protected_routes = [
  'dashboard',
]
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })