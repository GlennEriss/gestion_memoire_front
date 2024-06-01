import React from 'react'
import ListProfessorHeader from './header/ListProfessorHeader'
import ListProfessorBody from './body/ListProfessorBody'
import ListProfessorFooter from './ListProfessorFooter'

export default function ListProfessorSection() {
  return (
    <div className='space-y-5'>
      <ListProfessorHeader/>
      <ListProfessorBody/>
      <ListProfessorFooter/>
    </div>
  )
}
