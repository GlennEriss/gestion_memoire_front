import { Lexend } from 'next/font/google'
import '../globals.css'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import clsx from 'clsx'
import Head from 'next/head'

const font = Lexend({ subsets: ['latin'] })

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: ReactNode;
  params: { locale: string }
}>) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale}>
      <Head>
        <meta charSet="UTF-8" /> 
      </Head>
      <body className={clsx('overscroll-none',font.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

