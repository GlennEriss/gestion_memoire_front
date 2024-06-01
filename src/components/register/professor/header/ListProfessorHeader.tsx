import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import AddLector from '../../AddLector'
import AddLectorExcel from '../../AddLectorExcel'
import { pathnames } from '@/navigation'
import FilterProfessorSection from './FilterProfessorSection'

export default function ListProfessorHeader() {
  const t = useTranslations('ListProfessorHeader')
  const locale = useLocale()
  return (
    <div className="space-y-5">
      <div className='grid grid-cols-2 gap-4 md:flex md:items-center'>
        <AddLector title={t('addProfessor')} />
        <AddLectorExcel pathname={pathnames['/dashboard/register/professor/add'][locale]} />
      </div>
      <FilterProfessorSection/>
    </div>

  )
}
