import LogoImg from '@/components/logo/LogoImg'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

export default function page() {
  return (
    <div>
      <Card>
        <CardHeader>
          <LogoImg/>
        </CardHeader>
      </Card>
    </div>
  )
}
