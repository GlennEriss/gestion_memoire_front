'use client'

import { useState, useEffect, useCallback } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

export function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false)
  const useDarkMode = useCallback(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDarkMode()
    const theme = localStorage.getItem('theme')
    if(theme === 'dark') {setDarkMode(true)}
  }, [darkMode, useDarkMode])
  
  return (
    <div 
      className="bg-gray-500 relative w-16 h-8 flex items-center dark:bg-gray-900 bg-app-color-2 rounded-full p-1 cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className='text-white' size={18}/>
      <div 
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode?{left:'2px'}:{right:'2px'}}
      > </div>
      <BsSunFill className='ml-auto text-yellow-500' size={18}/>
    </div>
  )
}