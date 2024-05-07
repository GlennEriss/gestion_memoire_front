'use client'

import React from 'react'
import MenuNavigation from './MenuNavigation'
import UserProfilMenu from './UserProfilMenu'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Navbar() {
  return (
    <nav className='flex py-5 border border-transparent border-b-gray-300'>
      <div className='lg:hidden'>
        <MenuNavigation />
      </div>
      <div className="ml-auto flex items-center">
        <ThemeSwitcher />
        <UserProfilMenu />
      </div>
    </nav>
  )
}
