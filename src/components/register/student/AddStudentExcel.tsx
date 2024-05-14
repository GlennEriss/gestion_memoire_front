'use client'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, pathnames } from '@/navigation'


export default function AddStudentExcel() {
  const t = useTranslations('AddStudentExcel')
  const locale = useLocale()
  return (
    <Link href={pathnames['/dashboard/register/student/add'][locale]} className='bg-app-color-green focus:ring-2 focus:ring-green-300 rounded-lg text-white text-center flex items-center justify-center md:p-2'>
      {t('title')}
    </Link>
  )
}
