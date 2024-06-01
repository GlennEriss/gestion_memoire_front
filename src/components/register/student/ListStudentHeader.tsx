import React from 'react'
import FiltersSection from './FiltersSection'
import ListStudentBody from './ListStudentBody'
import AddLector from '../AddLector'
import AddLectorExcel from '../AddLectorExcel'
import { useLocale, useTranslations } from 'next-intl'
import { pathnames } from '@/navigation'
import ListStudentPagination from './ListStudentPagination'

export default function ListStudentHeader() {
  const t = useTranslations('ListStudentHeader')
  const locale = useLocale()
  return (
    <div className='space-y-5'>
      <div className='grid grid-cols-2 gap-4 md:flex md:items-center'>
        <AddLector title={t('addStudent')} type='Student' />
        <AddLectorExcel pathname={pathnames['/dashboard/register/student/add'][locale]} />
      </div>
      <FiltersSection/>
      <ListStudentBody/>
      <ListStudentPagination/>
    </div>

  )
}
