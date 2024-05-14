import SelectionAddStudent from '@/components/register/student/SelectionAddStudent'
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import { pathnames } from '@/navigation'
import React from 'react'

export default function page() {
  const breadCrumpList = [
    {
      title: 'dashboard',
      link: pathnames['/dashboard/theses']
    }, 
    {
      title: 'register',
      link: pathnames['/dashboard/register']
    },
    {
      title: 'add',
      link: pathnames['/dashboard/register/student/add']
    },
  ]
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='register' subtitle='addStudent' breadCrumpList={breadCrumpList} />
      </div>
      <SelectionAddStudent/>
    </div>
  )
}
