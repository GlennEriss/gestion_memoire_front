import React from 'react'
import Image from 'next/image'
import EditProfessor from './EditProfessor'
import DetailsProfessor from './DetailsProfessor'
import DeleteProfessor from './DeleteProfessor'

export default function ProfessorItem() {
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
      <td className='p-3'> Professeur de Java</td>
      <td className="p-3 flex items-center justify-center mt-5">
        <EditProfessor/>
        <DetailsProfessor/>
        <DeleteProfessor/> 
      </td>
    </tr>
  )
}
