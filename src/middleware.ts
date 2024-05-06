import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix, defaultLocale } from './navigation'
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  // Used when no locale matches
  defaultLocale
})
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/','/fr/:path*', '/:path*']
}