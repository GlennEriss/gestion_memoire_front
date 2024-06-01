import React from 'react'
import Image from 'next/image'
import EditStudent from './EditStudent'
import DetailsStudent from './DetailsStudent'
import DeleteStudent from './DeleteStudent'

export default function StudentItem() {
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
      <td className='p-3'> John </td>
      <td className='p-3'> Doe </td>
      <td className='p-3'> johndoe@email.com</td>
      <td className='p-3'> 10/10/1999</td>
      <td className='p-3'> 2021johndoenjqn</td>
      <td className='p-3'> L1 GLRS A</td>
      <td className="p-3 flex items-center justify-center mt-5">
        <EditStudent/>
        <DetailsStudent/>
        <DeleteStudent/>
      </td>
    </tr>
  )
}
