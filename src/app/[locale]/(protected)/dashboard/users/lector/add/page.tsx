import RegisterLector from '@/components/register/lector/RegisterLector'
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard'
import React from 'react'
const breadCrumpList = [
  {
    title: 'dashboard',
    link: '/dashboard/theses'
  },
  {
    title: 'users',
    link: '/dashboard/users'
  },
  {
    title: 'add',
    link: '/dashboard/users/student/add'
  },
]
export default function page() {
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <BreadCrumbDashboard title='users' subtitle='addStudent' breadCrumpList={breadCrumpList} />
      </div>
      <RegisterLector/>
    </div>
  )
}
