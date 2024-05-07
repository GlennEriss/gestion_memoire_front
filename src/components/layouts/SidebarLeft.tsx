'use client'
import React from 'react'
import Logo from '../logo/Logo'
import { MENU } from './navbar/menu'
import MenuItem from './navbar/MenuItem'

export default function SidebarLeft() {
  return (
    <div className='bg-[#1B2430] h-full'>
      <div className='flex items-center justify-center p-4 border border-transparent border-b-app-color-gray'>
        <Logo css='text-[2em] text-blue-500'/>
      </div>
      <div className='my-5 px-2'>
        {
          MENU.map((item, key) => 
            <MenuItem item={item} key={key}/>
          )
        }
      </div>
    </div>
  )
}
