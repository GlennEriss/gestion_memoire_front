import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useTranslations } from 'next-intl'
import React from 'react'
import { AiFillFilter } from 'react-icons/ai'

export default function FilterProfessor() {
  const t = useTranslations('FilterProfessor')
  return (
    <div className=''>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>
            <AiFillFilter size={20} />
            <span> {t('filters')} </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='w-60 p-3 border rounded-xl border-gray-300'>
            <h1></h1>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
