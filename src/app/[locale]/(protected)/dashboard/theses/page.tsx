import AddLink from '@/components/shared/AddLink'
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import FiltersTheses from '@/components/theses/FiltersTheses'
import TheseList from '@/components/theses/TheseList'
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
      <div className="flex flex-col gap-3">
        <BreadCrumbDashboard title='theses' subtitle='list' breadCrumpList={breadCrumpList}/>
        <AddLink title='addTheses' link=''/>
      </div>
      <FiltersTheses/>
      <TheseList/>
    </div>
  )
}
