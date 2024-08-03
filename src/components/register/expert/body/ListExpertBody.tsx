import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import ExpertItem from './ExpertItem'
import { useQuery } from '@tanstack/react-query'
import { Expert } from '@/types'
import { useExpertContext } from '@/providers/ExpertProvider'
const headers = [
  'picture',
  'firstname',
  'lastname',
  'email',
  'birthday',
  'fonction',
  'actions'
]
export default function ListExpertBody() {
  const t = useTranslations('ListExpertBody')
  const { searchExpert } = useExpertContext()
  const [expertsFiltered, setExpertFiltered] = useState<Partial<Expert>[]>([])
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['experts'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/expert`, {
        method: 'GET'
      })
      const users = await response.json()
      const experts: Partial<Expert>[] = users.map((user: any) => ({
        id: user.id,
        adress: user.adresse,
        email: user.email,
        firstname: user.nom,
        lastname: user.prenom,
        phoneNumber: user.telephone,
        sexe: user.sexe,
        birthday: user.dateNaissance,
        fonction: user.fonction,
        searchableName: user.nom + ' ' + user.prenom
      }))
      return experts
    }
  })
  useEffect(() => {
    console.log(searchExpert)
    if (data && searchExpert) {
      const filteredLectors: Partial<Expert>[] = data.filter((lector) =>
        lector.searchableName!.toLowerCase().includes(searchExpert.toLowerCase())
      );
      setExpertFiltered(filteredLectors)
    }
  }, [searchExpert])
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
            searchExpert ? (
              <>
                {
                  expertsFiltered.map((expert, index) =>
                    <ExpertItem expert={expert} key={index} />
                  )
                }
              </>
            ) : (
              <>
                {
                  data.map((expert, index) =>
                    <ExpertItem expert={expert} key={index} />
                  )
                }
              </>
            )
          }
        </tbody>
      </table>

      <ScrollBar orientation="horizontal" />
    </ScrollArea >
  )
}
