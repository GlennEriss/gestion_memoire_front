import React from 'react'
import Image from 'next/image'
import EditExpert from './EditExpert'
import DetailsExpert from './DetailsExpert'
import DeleteExpert from './DeleteExpert'
import { Expert } from '@/types';

type ExpertItemProps = {
  expert: Partial<Expert>
}
export default function ExpertItem({expert}: ExpertItemProps) {
  return (
    <tr className='border w-full'>
      <td className='p-3'>
        <Image
          src={'/assets/noimageavailable.gif'}
          sizes="100vw"
          alt=""
          width={80}
          height={80}
          className="object-cover rounded-full"
          priority
          unoptimized
        />
      </td>
      <td className='p-3'> {expert.firstname} </td>
      <td className='p-3'> {expert.lastname} </td>
      <td className='p-3'> {expert.email}</td>
      <td className='p-3'> {expert.birthday as string}</td>
      <td className='p-3'> {expert.fonction}</td>
      <td className="p-3 flex items-center justify-center mt-5">
        <EditExpert expert={expert}/>
        <DetailsExpert id={expert.id!}/>
        <DeleteExpert expert={expert} /> 
      </td>
    </tr>
  )
}
