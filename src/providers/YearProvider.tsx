'use client'
import { AcademicYear } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useState } from 'react'
import { Dispatch, SetStateAction } from 'react'

export type YearProps = {
  year: string | undefined,
  setYear: Dispatch<SetStateAction<string | undefined>>,
  academicYears: AcademicYear[],
  setAcademicYears: Dispatch<SetStateAction<AcademicYear[]>>
}
export const YearContext = createContext<YearProps>({
  year: undefined,
  setYear: () => { },
  academicYears: [],
  setAcademicYears: () => { }
})

export const useYearContext = () => {
  return useContext(YearContext)
}

export default function YearProvider({ children }: { children: React.ReactNode }) {
  const [year, setYear] = useState<string | undefined>(undefined)
  const [academicYears, setAcademicYears] = useState<AcademicYear[]>([]);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['academic-years'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/year`, {
        method: 'GET'
      })
      const years = await response.json()
      const academicYears: AcademicYear[] = years.map((item: { id: number, anneeDebut: string, annneeFin: string }) => ({
        id: item.id,
        yearStart: item.anneeDebut,
        yearEnd: item.annneeFin,
        isActived: false
      })).sort((a: AcademicYear, b: AcademicYear) => parseInt(b.yearStart) - parseInt(a.yearStart));
      setAcademicYears(academicYears)
      const year = academicYears[0]
      setYear(`${year.yearStart}-${year.yearEnd}`)
      return academicYears
    }
  })
  return (
    <YearContext.Provider value={{
      year,
      setYear,
      academicYears,
      setAcademicYears
    }}>
      {children}
    </YearContext.Provider>
  )
}