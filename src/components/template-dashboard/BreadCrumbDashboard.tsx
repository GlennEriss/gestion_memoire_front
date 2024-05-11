'use client'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'
import { useLocale, useTranslations } from 'next-intl'

type BreadCrumpProps = {
    title: string;
    breadCrumpList: { [key: string]: string }[];
    subtitle: string;
}
export default function BreadCrumbDashboard({ title, breadCrumpList, subtitle }: BreadCrumpProps) {
  const locale = useLocale()
  const t = useTranslations('BreadCrumbDashboard')
  return (
    <div>
      <h1 className='text-2xl font-bold'>{t(title)}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          {
            breadCrumpList.map((item, key) =>
              <>
                <BreadcrumbItem key={key}>
                  <BreadcrumbLink href={item.link[locale as any]}> {t(item.title)} </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )
          }
          <BreadcrumbItem>
            <BreadcrumbPage> {subtitle} </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
