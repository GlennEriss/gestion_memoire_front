import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import FiltersTheses from '@/components/theses/FiltersTheses'
import TheseAdd from '@/components/theses/TheseAdd'
import TheseList from '@/components/theses/TheseList'
import ThesePagination from '@/components/theses/ThesePagination'
import { pathnames } from '@/navigation'
import React from 'react'

const breadCrumpList = [
  {
    title: 'dashboard',
    link: pathnames['/dashboard/theses']
  }, 
  {
    title: 'theses',
    link: pathnames['/dashboard/theses']
  }
]
export default function page() {
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='theses' subtitle='list' breadCrumpList={breadCrumpList}/>
        <TheseAdd/>
      </div>
      <FiltersTheses/>
      <TheseList/>
      <ThesePagination/>
    </div>
  )
}
