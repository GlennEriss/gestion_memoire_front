import { logout } from '@/actions/logout.action'
import { useTranslations } from 'next-intl'
import React from 'react'
type LogoutProps = {
    item: any
}
export default function Logout({item}: LogoutProps) {
  const t = useTranslations('Logout')
  return (
    <div 
      onClick={() => logout()}
      className='flex space-x-2 items-center py-2 cursor-pointer hover:text-red-500'>
      <span> {item.icon} </span>
      <span> {t(item.title)} </span>
    </div>
  )
}
