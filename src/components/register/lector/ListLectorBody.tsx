import React, { useEffect, useState } from 'react'
import StudentItem from './LectorItem'
import { ScrollArea, ScrollBar } from '../../ui/scroll-area'
import { useTranslations } from 'next-intl'
import { useQuery } from '@tanstack/react-query'
import { Lector } from '@/types'
import { useLectorContext } from '@/providers/LectorProvider'

const headers = [
  'picture',
  'firstname',
  'lastname',
  'email',
  'phoneNumber',
  'adresse',
  'actions'
]
export default function ListStudentBody() {
  const t = useTranslations('ListStudentBody')
  const { searchLector } = useLectorContext()
  const [lectorsFiltered, setLectorFiltered] = useState<Partial<Lector>[]>([])
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['lectors'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/lector`, {
        method: 'GET'
      })
      const users = await response.json()
      const lectors: Partial<Lector>[] = users.map((user: any) => ({
        id: user.id,
        adress: user.adresse,
        email: user.email,
        firstname: user.nom,
        lastname: user.prenom,
        phoneNumber: user.telephone,
        sexe: user.sexe,
        searchableName: user.nom.toLowerCase() + ' ' + user.prenom.toLowerCase()
      }))
      return lectors
    }
  })
  useEffect(() => {
    if (data && searchLector) {
      const filteredLectors: Partial<Lector>[] = data.filter((lector) =>
        lector.searchableName!.toLowerCase().includes(searchLector.toLowerCase())
      );
      setLectorFiltered(filteredLectors)
    }

  }, [searchLector])
  if (isError) {
    return <div>{error.message}</div>
  }
  if (isPending) {
    return <div>Loading...</div>
  }
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
          {
            searchLector ? (
              <>
                {
                  lectorsFiltered.map((lector, index) =>
                    <StudentItem lector={lector} key={index} />
                  )
                }
              </>
            ) : (
              <>
                {
                  data.map((lector, index) =>
                    <StudentItem lector={lector} key={index} />
                  )
                }
              </>

            )
          }
        </tbody>
      </table>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}


