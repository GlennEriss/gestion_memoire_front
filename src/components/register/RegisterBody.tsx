'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { useTranslations } from 'next-intl'
import { TabsContent } from '@radix-ui/react-tabs'
import ListStudentHeader from './student/ListStudentHeader'
import ListExpertSection from './expert/ListExpertSection'

export default function RegisterBody() {
  const t = useTranslations('RegisterBody')
  return (
    <Tabs defaultValue='student'>
      <TabsList>
        <TabsTrigger value='student'>
          {t('students')}
        </TabsTrigger>
        <TabsTrigger value='professor'>
          {t('professors')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value='student' className='py-4'>
        <ListStudentHeader/>
      </TabsContent>
      <TabsContent value='professor' className='py-4'>
        <ListExpertSection/>
      </TabsContent>
    </Tabs>
  )
}
