'use client'

import React, { useEffect, useState } from 'react'
import MenuNavigation from './MenuNavigation'
import UserProfilMenu from './UserProfilMenu'
import Search from './Search'
import Notifications from './Notification'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isScrolling = scrollPosition > 0

  return (
    <nav className={`sticky top-0 z-20 flex py-5 border border-transparent ${isScrolling ? 'bg-white shadow border-b-gray-300' : 'bg-white'}`}>
      <div className='flex items-center'>
        <div className='lg:hidden '>
          <MenuNavigation />
        </div>
        <Search />
      </div>
      <div className="ml-auto flex items-center">
        <ThemeSwitcher />
        <Notifications />
        <UserProfilMenu />
      </div>
    </nav>
  )
}