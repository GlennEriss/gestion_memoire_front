import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function AddStudent() {
  const t = useTranslations('AddStudent')
  return (
    <Link href='' className='bg-app-color-blue text-center text-white p-2 rounded-md'>
      <span>
        {t('title')}
      </span>
    </Link>
  )
}
