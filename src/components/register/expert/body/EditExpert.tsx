import React from 'react'
import { Link } from '@/navigation'
import { BiEdit } from 'react-icons/bi'
import { useTranslations } from 'next-intl'

export default function EditExpert() {
  const t = useTranslations('EditExpert')
  return (
    <Link href='' title={t('title')}>
      <BiEdit size={30} />
    </Link>
  )
}
