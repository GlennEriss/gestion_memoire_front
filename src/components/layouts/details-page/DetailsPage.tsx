'use client'
import React from 'react'
import { formatUrl } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const pageNames: { [key: string]: string } = {
  '/dashboard/simulators': 'simulators',
  '/dashboard/simulators/add': 'simulators-add',
  '/dashboard/simulators/add/client': 'simulators-add-client',
}
export default function DetailsPage() {
  const t = useTranslations('DetailsPage')
  const pathname = formatUrl(usePathname())
  const segments = pathname.split('/').filter(Boolean)
  return (
    <div className='p-4'>
      <h1 className='font-bold text-xl'>{t(pageNames[pathname])}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          {segments.length === 0 && (
            <BreadcrumbItem>
              <BreadcrumbLink href="/">KARA</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {segments.map((segment, index) => (
            <React.Fragment key={segment}>
              {index === 0 && (
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">KARA</BreadcrumbLink>
                </BreadcrumbItem>
              )}
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${segments.slice(0, index + 1).join('/')}`}>
                  {segment}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
