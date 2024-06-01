import React from 'react'
import StudentItem from './StudentItem'
import { ScrollArea, ScrollBar } from '../../ui/scroll-area'
import { useTranslations } from 'next-intl'

export default function ListStudentBody() {
  const t = useTranslations('ListStudentBody')
  const headers = [
    'picture',
    'firstname',
    'lastname',
    'email',
    'birthday',
    'matricule',
    'class',
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
          <StudentItem />
        </tbody>
      </table>
      
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

        
