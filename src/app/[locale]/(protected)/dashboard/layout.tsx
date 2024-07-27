import Navbar from '@/components/layouts/navbar/Navbar'
import SidebarLeft from '@/components/layouts/sidebar/SidebarLeft'
import { ReactNode } from 'react'

export default function layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='min-h-screen lg:grid lg:grid-cols-5'>
      <div className='hidden lg:block lg:col-span-1'>
        <SidebarLeft />
      </div>
      <div className='lg:col-span-4'>
        <Navbar />
        <div className='p-5 bg-app-color-gray dark:bg-gray-500'>
          {children}
        </div>
      </div>
    </div>
  )
}
