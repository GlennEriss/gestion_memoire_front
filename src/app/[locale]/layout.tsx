import { NextIntlClientProvider, useMessages } from 'next-intl'
import React from 'react'

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
      <body>
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