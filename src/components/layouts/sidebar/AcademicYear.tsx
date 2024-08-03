'use client'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { Button } from '@/components/ui/button';
import { PopoverContent } from '@radix-ui/react-popover';
import AcademicYearForm from './AcademicYearForm';
import AcademicYearList from './AcademicYearList';
import { useYearContext } from '@/providers/YearProvider';

export default function AcademicYear() {
  const {year} = useYearContext()
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant='outline'>
                {year}
            </Button>
        </PopoverTrigger>
        <PopoverContent className='bg-white border rounded-md z-20 shadow pb-5'>
            <AcademicYearForm/>
            <AcademicYearList/>
        </PopoverContent>
    </Popover>
  )
}
