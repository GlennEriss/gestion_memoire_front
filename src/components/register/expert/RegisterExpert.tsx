import { useTranslations } from 'next-intl'
import React from 'react'
import RegisterByExcel from '../RegisterByExcel'

export default function RegisterExpert() {
  const t = useTranslations('RegisterExpert')
  return (
    <RegisterByExcel required={t('required')} />
  )
}
