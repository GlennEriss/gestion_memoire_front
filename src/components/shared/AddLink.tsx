import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

type AddLinkProps = {
    title: string;
    link: string;
}
export default function AddLink({title, link}: AddLinkProps) {
  const t = useTranslations('AddLink')
  return (
    <Link href={link} className='bg-app-color-blue p-3 text-white rounded-lg'>
      {t(title)}
    </Link>
  )
}