import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useTranslations } from 'next-intl'
import React from 'react'
import ProfessorItem from './ProfessorItem'

export default function ListProfessorBody() {
  const t = useTranslations('ListProfessorBody')
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
          <ProfessorItem />
        </tbody>
      </table>
        
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
