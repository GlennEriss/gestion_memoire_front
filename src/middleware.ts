/* import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix, defaultLocale, pathnames } from './navigation'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  pathnames
}) */

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { accessible_routes, defaultLocale, localePrefix, locales, pathnames, protected_routes } from './navigation';

const matchPath = (path: string, patterns: string[]) => {
  return patterns.some((pattern) => {
    const regex = new RegExp(`^${pattern.replace(/:\w+/g, '\\w+')}$`);
    return regex.test(path);
  });
};

export async function middleware(req: NextRequest) {
  const intlMiddlewareResponse = createMiddleware({
    locales,
    localePrefix,
    defaultLocale
  })(req);

  //ACCESSIBLE ROUTES
  const url = req.nextUrl.clone();
  //let normalizedPath = url.pathname.startsWith(`/${url.locale}`) ? url.pathname.substring(`/${url.locale}`.length) : url.pathname;
  const normalizedPath = url.pathname.replace(/^\/[a-z]{2}\//, '').replace(/^\//, '');
  //console.log('password-reset', normalizedPath);
  const pathWithoutToken = accessible_routes.includes(normalizedPath);
  //console.log('test:', pathWithoutToken)
  if (pathWithoutToken) {
    //console.log('Je suis ici')
    return intlMiddlewareResponse;
  }

  //ACCESSIBLE ROUTES BY AUTH
  const token = req.cookies.get('token');
  const isValidToken = await verifyToken(token?.value);
  const pathWithToken = url.pathname.includes('dashboard')
  if (pathWithToken) {
    //UNACCESSIBLE ROUTES IF NOT AUTHENTICATE
    if (!token || !isValidToken) {
      url.pathname = '/login'
      return NextResponse.redirect(url);
    }
  } else {
    //UNACCESSIBLE ROUTES IF AUTHENTICATE
    if (isValidToken) {
      url.pathname = '/dashboard/theses';
      return NextResponse.redirect(url);
    }
  }
  return intlMiddlewareResponse;
}

const verifyToken = async (token?: string) => {
  /* console.log('token', { token })
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token`)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  //const data = await response.json()
  //console.log('data', data)
  return response.ok */
  return token ? true : false
};
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}