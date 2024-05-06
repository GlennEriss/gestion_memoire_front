import { NextIntlClientProvider, useMessages } from 'next-intl'
import React from 'react'
import { Lexend } from 'next/font/google'

const font = Lexend({
  subsets: ['latin'],
  weight: ['400']
})
export default function LocaleLayout({
  children,
  params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={font.className}>
        <NextIntlClientProvider
          locale={locale}
          timeZone="Europe/Vienna"
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}