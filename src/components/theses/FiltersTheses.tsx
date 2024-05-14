import React from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'

export default function FiltersTheses() {
  return (
    <div className='flex items-center md:justify-between'>
      <SearchBar/>
      <Filters/>
    </div>
  )
}
