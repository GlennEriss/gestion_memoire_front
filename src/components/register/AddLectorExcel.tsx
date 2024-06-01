'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

type AddLectorExcelProps = {
  pathname: string
}
export default function AddLectorExcel({pathname}: AddLectorExcelProps) {
  const t = useTranslations('AddStudentExcel')
  return (
    <Link href={pathname} className='bg-app-color-green focus:ring-2 focus:ring-green-300 rounded-lg text-white text-center flex items-center justify-center md:p-2'>
      {t('title')}
    </Link>
  )
}
