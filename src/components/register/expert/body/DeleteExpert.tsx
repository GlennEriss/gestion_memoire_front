import { Button } from '@/components/ui/button'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

export default function DeleteExpert() {
  return (
    <Button variant='nothing'>
      <AiOutlineDelete size={30}/>
    </Button>
  )
}
