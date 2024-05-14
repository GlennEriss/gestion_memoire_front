import React from 'react'
import TheseItem from './TheseItem'


export default function TheseList() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      <TheseItem/>
    </div>
  )
}
