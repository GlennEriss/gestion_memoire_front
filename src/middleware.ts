import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix, defaultLocale, pathnames } from './navigation'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  pathnames
})

export const config = {
  matcher: ['/', '/(fr)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}