import {createSharedPathnamesNavigation} from 'next-intl/navigation'
 
export const locales = ['fr'] as const
export const localePrefix = 'never' // Default
export const defaultLocale = 'fr'
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix})