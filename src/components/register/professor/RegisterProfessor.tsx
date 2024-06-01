import { useTranslations } from 'next-intl'
import React from 'react'
import RegisterByExcel from '../RegisterByExcel'

export default function RegisterProfessor() {
  const t = useTranslations('RegisterProfessor')
  return (
    <RegisterByExcel required={t('required')} />
  )
}
