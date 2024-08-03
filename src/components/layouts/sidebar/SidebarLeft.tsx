'use client'
import React from 'react'
import { MENU } from '../navbar/menu'
import MenuItem from '../navbar/MenuItem'
import LogoImg from '../../logo/LogoImg'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import AcademicYear from './AcademicYear'

export default function SidebarLeft() {
  const t = useTranslations('SidebarLeft')
  return (
    <div className='h-full space-y-3 border-r-2 border-r-gray-200'>
      <Link className='flex items-center' href={'/dashboard/theses'}>
        <LogoImg />
        <span className='font-bold'> {t('library')} </span>
      </Link>
      <div className="flex justify-center">
        <AcademicYear />
      </div>
      <p className='pl-6 text-sm text-gray-500'> {t('overview')} </p>
      <div>
        {
          MENU.map((item, key) =>
            <MenuItem item={item} key={key} />
          )
        }
      </div>
    </div>
  )
}
