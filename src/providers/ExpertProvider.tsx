'use client'
import { createContext, useContext, useState } from 'react'
import { Dispatch, SetStateAction } from 'react'

export type ExpertProps = {
    searchExpert: string|undefined,
    setSearchExpert: Dispatch<SetStateAction<string|undefined>>,
}
export const ExpertContext = createContext<ExpertProps>({
    searchExpert: '',
    setSearchExpert: () => {},
})

export const useExpertContext = () => {
  return useContext(ExpertContext)
}

export default function ExpertProvider({ children }: { children: React.ReactNode }) {
    const [searchExpert, setSearchExpert] = useState<string|undefined>('')
  return (
    <ExpertContext.Provider value={{
        searchExpert,
        setSearchExpert,
    }}>
      {children}
    </ExpertContext.Provider>
  )
}