import React from 'react'
import SearchBarProfessor from './SearchBarProfessor'
import FilterProfessor from './FilterProfessor'

export default function FilterProfessorSection() {
  return (
    <div className='flex items-center md:justify-between'>
      <SearchBarProfessor/>
      <FilterProfessor/>
    </div>
  )
}
