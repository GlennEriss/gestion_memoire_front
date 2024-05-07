import { formatUrl } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MenuItemProps = {
    item: any
}
export default function MenuItem({item}: MenuItemProps) {
  const t = useTranslations('MenuItem')
  return (
    <Link className='flex rounded-xl items-center space-x-3 px-4 py-3 text-white' href={item.link}>
      <span className={`${formatUrl(usePathname()) === item.link? 'bg-[#5C85F1] p-2 rounded-xl' : ''}`}> {item.icon} </span>
      <span className={`${formatUrl(usePathname()) === item.link? 'text-[#5C85F1]' : ''}`}> {t(item.title)} </span>
    </Link>
  )
}
