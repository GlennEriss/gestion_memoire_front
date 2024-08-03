import React from 'react'
import Image from 'next/image'
import EditStudent from './EditLector'
import DetailsStudent from './DetailsLector'
import DeleteStudent from './DeleteLector'
import { Lector } from '@/types'

type StudentItemProps = {
  lector: Partial<Lector>
}
export default function StudentItem({lector}: StudentItemProps) {
  return (
    <tr className='border'>
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
      <td className='p-3'> {lector.firstname} </td>
      <td className='p-3'> {lector.lastname} </td>
      <td className='p-3'> {lector.email}</td>
      <td className='p-3'> {lector.phoneNumber}</td>
      <td className='p-3'> {lector.adress}</td>
      <td className="p-3 flex items-center justify-center mt-5">
        <EditStudent lector={lector}/>
        <DetailsStudent id={lector.id!}/>
        <DeleteStudent lector={lector}/>
      </td>
    </tr>
  )
}
