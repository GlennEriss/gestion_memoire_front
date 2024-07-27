import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useTranslations } from 'next-intl'
import React from 'react'
import ExpertItem from './ExpertItem'

export default function ListExpertBody() {
  const t = useTranslations('ListExpertBody')
  const headers = [
    'picture',
    'firstname',
    'lastname',
    'email',
    'birthday',
    'fonction',
    'actions'
  ]
  return (
    <ScrollArea className="border whitespace-nowrap grid grid-cols-1 rounded-xl">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {
              headers.map((item, key) =>
                <th key={key} className='p-3'>
                  {t(item)}
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          <ExpertItem />
        </tbody>
      </table>
        
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
