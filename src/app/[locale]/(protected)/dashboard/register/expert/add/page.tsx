import RegisterExpert from '@/components/register/expert/RegisterExpert'
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import { pathnames } from '@/navigation'
import React from 'react'

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
    link: pathnames['/dashboard/register/professor/add']
  },
]
export default function page() {
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='register' subtitle='addStudent' breadCrumpList={breadCrumpList} />
      </div>
      <RegisterExpert/>
    </div>
  )
}
