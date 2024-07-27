import React from 'react'

import ListExpertFooter from './ListExpertFooter'
import ListExpertBody from './body/ListExpertBody'
import ListExpertHeader from './header/ListExpertHeader'

export default function ListExpertSection() {
  return (
    <div className='space-y-5'>
      <ListExpertHeader/>
      <ListExpertBody/>
      <ListExpertFooter/>
    </div>
  )
}
