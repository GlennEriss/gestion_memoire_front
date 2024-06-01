'use client'
import React from 'react'
import { Popover } from '../ui/popover'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { AiFillFilter } from 'react-icons/ai'

export default function Filters() {
  const t = useTranslations('Filters')
  return (
    <div>
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
