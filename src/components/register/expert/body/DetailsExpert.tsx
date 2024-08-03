import { Link } from '@/navigation'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'

export default function DetailsExpert({id}:{id: number}) {
  return (
    <Link href={`/dashboard/users/expert/${id}`} className='ml-5'>
      <AiOutlineEye size={30}/>
    </Link>
  )
}
