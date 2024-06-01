import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'
import { BiEdit } from 'react-icons/bi'

export default function EditStudent() {
  const t = useTranslations('EditStudent')
  return (
    <Link href='' title={t('title')}>
      <BiEdit size={30}/>
    </Link>
  )
}
