import { formatUrl } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MenuItemProps = {
    item: any
}
export default function MenuItem({item}: MenuItemProps) {
  const t = useTranslations('MenuItem')
  const local = useLocale()
  return (
    <Link className='flex items-center space-x-3 px-4  text-black' href={item.link}>
      <span className={`${formatUrl(usePathname()) === item.link[local]? 'text-app-color-blue p-2 rounded-xl' : ''}`}> {item.icon} </span>
      <span className={`${formatUrl(usePathname()) === item.link[local]? 'text-app-color-blue' : ''}`}> {t(item.title)} </span>
    </Link>
  )
}
