import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

type UserMenuItemProps = {
    item: any
}
export default function UserMenuItem({item}: UserMenuItemProps) {
  const t = useTranslations('UserMenuItem')
  return (
    <Link href={item.link} className='flex items-center space-x-2 py-2'>
      <span> {item.icon} </span>
      <span> {t(item.title)} </span>
    </Link>
  )
}
