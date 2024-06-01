'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBarProfessor() {
  const t = useTranslations('SearchBarProfessor')
  return (
    <div className="items-center grid grid-cols-2">
      <input
        type="search"
        name="q"
        placeholder={t('placeholder')}
        className="flex-1 py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-app-color-blue h-full min-h-full"
      />
      <button
        type="submit"
        className="w-10 py-3 px-3 rounded-r-md bg-app-color-blue text-white hover:bg-blue-600 text-center"
      >
        <FaSearch size={16} />
      </button>
    </div>
  )
}
