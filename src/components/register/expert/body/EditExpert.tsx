import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { useTranslations } from 'next-intl'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import ExpertForm from '../ExpertForm'
import { Button } from '@/components/ui/button'
import { Expert } from '@/types'

type EditExpertProps = {
  expert: Partial<Expert>
}
export default function EditExpert({expert}: EditExpertProps) {
  const t = useTranslations('EditExpert')
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
            Modification d'un expert
          </DialogTitle>
        </DialogHeader>
        <ExpertForm expert={expert} />
      </DialogContent>
    </Dialog>
  )
}
