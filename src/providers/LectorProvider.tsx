'use client'
import { createContext, useContext, useState } from 'react'
import { Dispatch, SetStateAction } from 'react'

export type LectorProps = {
    searchLector: string|undefined,
    setSearchLector: Dispatch<SetStateAction<string|undefined>>,
}
export const LectorContext = createContext<LectorProps>({
    searchLector: '',
    setSearchLector: () => {},
})

export const useLectorContext = () => {
  return useContext(LectorContext)
}

export default function LectorProvider({ children }: { children: React.ReactNode }) {
    const [searchLector, setSearchLector] = useState<string|undefined>('')
  return (
    <LectorContext.Provider value={{
        searchLector,
        setSearchLector,
    }}>
      {children}
    </LectorContext.Provider>
  )
}