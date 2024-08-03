import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useTranslations } from 'next-intl'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import StudentForm from './LectorForm'
import { Lector } from '@/types'

type EditStudentProps = {
  lector: Partial<Lector>
}
export default function EditStudent({lector}: EditStudentProps) {
  const t = useTranslations('EditStudent')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className='text-md hover:bg-transparent text-center text-white p-2 rounded-md'>
          <BiEdit size={30} color='black' />
        </Button>
      </DialogTrigger>
      <DialogContent className='overflow-auto'>
        <DialogHeader>
          <DialogTitle>
            Modification d'un lecteur
          </DialogTitle>
          <DialogDescription>
            Modification du lecteur
          </DialogDescription>
        </DialogHeader>
        <StudentForm lector={lector} />
      </DialogContent>
    </Dialog>

  )
}
