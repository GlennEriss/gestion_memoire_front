'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import StudentForm from './student/StudentForm'
import ProfessorForm from './professor/ProfessorForm'
import { useTranslations } from 'next-intl'

type AddLectorProps = {
  title: string
  type: 'Student' | 'Professor'
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
            {t(type==='Student'? 'titleAddStudent': 'titleAddProfessor')}
          </DialogTitle>
          <DialogDescription>
            {t(type==='Student'? 'descriptionAddStudent': 'descriptionAddProfessor')}
          </DialogDescription>
        </DialogHeader>
        {
          type === 'Student'?(
            <StudentForm />
          ): (
            <ProfessorForm />
          )
        }
      </DialogContent>
    </Dialog>
  )
}
