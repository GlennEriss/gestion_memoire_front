import React from 'react'
import SearchBarExpert from './SearchBarExpert'
import FilterExpert from './FilterExpert'

export default function FilterExpertSection() {
  return (
    <div className='flex items-center md:justify-between'>
      <SearchBarExpert/>
      <FilterExpert/>
    </div>
  )
}
