'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import StudentForm from './student/StudentForm'
import ExpertForm from './expert/ExpertForm'
import { useTranslations } from 'next-intl'

type AddLectorProps = {
  title: string
  type: 'Student' | 'Expert'
}
export default function AddLector({ title, type }: AddLectorProps) {
  const t = useTranslations('AddLector')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-md bg-app-color-blue text-center text-white p-2 rounded-md'>
          <span>
            {title}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className='overflow-auto'>
        <DialogHeader>
          <DialogTitle>
            {t(type==='Student'? 'titleAddStudent': 'titleAddExpert')}
          </DialogTitle>
          <DialogDescription>
            {t(type==='Student'? 'descriptionAddStudent': 'descriptionAddExpert')}
          </DialogDescription>
        </DialogHeader>
        {
          type === 'Student'?(
            <StudentForm />
          ): (
            <ExpertForm />
          )
        }
      </DialogContent>
    </Dialog>
  )
}
