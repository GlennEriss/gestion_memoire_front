import React from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'

export default function FiltersTheses() {
  return (
    <div className='flex'>
      <SearchBar/>
      <Filters/>
    </div>
  )
}
