import React from 'react'
import { Button } from '../../ui/button'
import { AiOutlineDelete } from 'react-icons/ai'

export default function DeleteStudent() {
  return (
    <Button variant='nothing'>
      <AiOutlineDelete size={30}/>
    </Button>
  )
}
