import React from 'react'
import FiltersSection from './FiltersSection'
import ListStudentBody from './ListLectorBody'
import AddLector from '../AddLector'
import AddLectorExcel from '../AddLectorExcel'
import { useLocale, useTranslations } from 'next-intl'
import ListStudentPagination from './ListLectorPagination'

export default function ListStudentHeader() {
  const t = useTranslations('ListStudentHeader')
  const locale = useLocale()
  return (
    <div className='space-y-5'>
      <div className='grid grid-cols-2 gap-4 md:flex md:items-center'>
        <AddLector title={t('addStudent')} type='Student' />
        <AddLectorExcel pathname={'/dashboard/users/student/add'} />
      </div>
      <FiltersSection/>
      <ListStudentBody/>
      <ListStudentPagination/>
    </div>

  )
}
