import React from 'react'
import SearchBarStudent from './SearchBarStudent'
import FiltersStudent from './FiltersStudent'

export default function FiltersSection() {
  return (
    <div className='flex items-center md:justify-between'>
      <SearchBarStudent/>
      <FiltersStudent/>
    </div>
  )
}
