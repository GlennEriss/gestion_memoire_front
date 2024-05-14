'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs'
import { useTranslations } from 'next-intl'
import { TabsContent } from '@radix-ui/react-tabs'
import ListStudentHeader from './ListStudentHeader'

export default function RegisterBody() {
  const t = useTranslations('RegisterBody')
  return (
    <Tabs defaultValue='student'>
      <TabsList>
        <TabsTrigger value='student'>
          {t('student')}
        </TabsTrigger>
        <TabsTrigger value='administrator'>
          {t('administrator')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value='student' className='py-4'>
        <ListStudentHeader/>
      </TabsContent>
    </Tabs>
  )
}
