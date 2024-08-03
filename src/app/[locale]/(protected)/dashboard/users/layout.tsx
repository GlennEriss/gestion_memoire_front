import ExpertProvider from '@/providers/ExpertProvider'
import LectorProvider from '@/providers/LectorProvider'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <LectorProvider>
      <ExpertProvider>
        {children}
      </ExpertProvider>
    </LectorProvider>
  )
}
