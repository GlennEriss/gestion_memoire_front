import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'

export default function DetailsStudent({id}:{id: number}) {
  const locale = useLocale()
  return (
    <Link href={`/dashboard/users/lector/${id}`}
       className='ml-5'>
      <AiOutlineEye size={30}/>
    </Link>
  )
}
