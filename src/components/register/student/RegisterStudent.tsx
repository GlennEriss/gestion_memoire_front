'use client'

import { useTranslations } from 'next-intl'
import RegisterByExcel from '../RegisterByExcel'

const RegisterStudent = () => {
  const t = useTranslations('RegisterStudent')
  return (
    <RegisterByExcel required={t('required')}/>
  )
}

export default RegisterStudent
