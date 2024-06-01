'use client'
import { useLocale } from 'next-intl'
import React from 'react'
import AddLink from '../shared/AddLink'
import { pathnames } from '@/navigation'

export default function TheseAdd() {
  const locale = useLocale()
  return (
    <AddLink title='addTheses' link={pathnames['/dashboard/theses/add'][locale]}/>
  )
}
