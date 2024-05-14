import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import TheseAddForm from '@/components/theses/TheseAddForm'
import { pathnames } from '@/navigation'
import React from 'react'

export default function page() {
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
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='theses' subtitle='add' breadCrumpList={breadCrumpList} />
      </div>
      <TheseAddForm/>
    </div>
  )
}
