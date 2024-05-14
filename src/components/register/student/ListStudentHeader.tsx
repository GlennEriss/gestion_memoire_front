import React from 'react'
import AddStudentExcel from './AddStudentExcel'
import AddStudent from './AddStudent'
import FiltersSection from './FiltersSection'
import ListStudentBody from './ListStudentBody'

export default function ListStudentHeader() {
  return (
    <div className='space-y-5'>
      <div className='grid grid-cols-2 gap-4 md:flex md:items-center'>
        <AddStudent />
        <AddStudentExcel />
      </div>
      <FiltersSection/>
      <ListStudentBody/>
    </div>

  )
}
