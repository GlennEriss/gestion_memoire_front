'use client'
import React from 'react'
import { MENU } from './navbar/menu'
import MenuItem from './navbar/MenuItem'
import LogoImg from '../logo/LogoImg'
import { useLocale, useTranslations } from 'next-intl'
import { Link, pathnames } from '@/navigation'

export default function SidebarLeft() {
  const t = useTranslations('SidebarLeft')
  const local:string = useLocale()
  return (
    <div className='h-full space-y-3 border-r-2 border-r-gray-200'>
      <Link className='flex items-center' href={pathnames['/dashboard/theses'][local]}>
        <LogoImg/>
        <span className='font-bold'> {t('library')} </span>
      </Link>
      <p className='pl-6 text-sm text-gray-500'> {t('overview')} </p>
      <div>
        {
          MENU.map((item, key) => 
            <MenuItem item={item} key={key}/>
          )
        }
      </div>
    </div>
  )
}
