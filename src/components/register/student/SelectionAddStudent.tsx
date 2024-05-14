'use client'
import { Link } from '@/navigation'
import React from 'react'
import { pathnames } from '../../../navigation'
import { useLocale, useTranslations } from 'next-intl'

export default function SelectionAddStudent() {
  const t = useTranslations('SelectionAddStudent')
  const locale = useLocale()
  return (
    <div className='flex items-center justify-center flex-col gap-4 p-2'>
      <Link href={pathnames['/dashboard/register/student/add/by-link'][locale]} className='md:w-[600px] text-center bg-app-color-green p-20 text-white rounded-lg text-xl'>
        {t('titleLink')}
      </Link>
      <Link href={pathnames['/dashboard/register/student/add/by-file'][locale]} className='md:w-[600px] text-center bg-app-color-green p-20 text-white rounded-lg text-xl'>
        {t('titleExcel')}
      </Link>
    </div>
  )
}
