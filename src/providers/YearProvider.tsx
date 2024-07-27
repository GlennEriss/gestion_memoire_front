'use client'
import { createContext, useContext, useState } from 'react'
import { Dispatch, SetStateAction } from 'react'

export type YearProps = {
    year: string|undefined,
    setYear: Dispatch<SetStateAction<string|undefined>>
}
export const YearContext = createContext<YearProps>({
  year: undefined,
  setYear: () => {}
})

export const useYearContext = () => {
  return useContext(YearContext)
}

export default function YearProvider({children}: {children: React.ReactNode}) {
    const [year, setYear] = useState<string | undefined>(undefined)
    return (
      <YearContext.Provider value={{ year, setYear }}>
        {children}
      </YearContext.Provider>
    )
  }