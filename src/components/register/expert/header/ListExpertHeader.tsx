import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import AddLector from '../../AddLector'
import AddLectorExcel from '../../AddLectorExcel'
import { pathnames } from '@/navigation'
import FilterExpertSection from './FilterExpertSection'

export default function ListExpertHeader() {
  const t = useTranslations('ListExpertHeader')
  const locale = useLocale()
  return (
    <div className="space-y-5">
      <div className='grid grid-cols-2 gap-4 md:flex md:items-center'>
        <AddLector title={t('addExpert')} type='Expert' />
        <AddLectorExcel pathname={pathnames['/dashboard/register/professor/add'][locale]} />
      </div>
      <FilterExpertSection/>
    </div>

  )
}
