import RegisterBody from '@/components/register/RegisterBody'
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
    }
  ]
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='register' subtitle='list' breadCrumpList={breadCrumpList} />
      </div>
      <RegisterBody/>
    </div>
  )
}
