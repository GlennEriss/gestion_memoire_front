import RegisterBody from '@/components/register/RegisterBody'
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import React from 'react'

export default function page() {
  const breadCrumpList = [
    {
      title: 'dashboard',
      link: '/dashboard/theses'
    }, 
    {
      title: 'users',
      link: '/dashboard/users'
    }
  ]
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='users' subtitle='list' breadCrumpList={breadCrumpList} />
      </div>
      <RegisterBody/>
    </div>
  )
}
