'use client'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Popover } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useYearContext } from '@/providers/YearProvider'
import { AcademicYear } from '@/types'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { GrTrash } from 'react-icons/gr'
import DeleteAcademicYear from './DeleteAcademicYear'

export default function AcademicYearList() {
    const t = useTranslations('AcademicYearList')
    const { setYear } = useYearContext()
    const [academicYears, setAcademicYears] = useState<AcademicYear[]>([]);
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['academic-years'],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/year`, {
                method: 'GET'
            })
            const years = await response.json()
            const academicYears: AcademicYear[] = years.map((item: { id: number, anneeDebut: string, annneeFin: string }) => ({
                id: item.id,
                yearStart: item.anneeDebut,
                yearEnd: item.annneeFin,
                isActived: false
            })).sort((a: AcademicYear, b: AcademicYear) => parseInt(b.yearStart) - parseInt(a.yearStart));
            setAcademicYears(academicYears)
            const year = academicYears[0]
            setYear(`${year.yearStart}-${year.yearEnd}`)
            return academicYears
        }
    })
    const handleYearActive = (value: string) => {
        const updatedYears = academicYears.map((year, index) => ({
            ...year,
            isActived: index === Number(value)
        }));
        setAcademicYears(updatedYears);
    }
    useEffect(() => {
        if (data) {
            setAcademicYears(data);
        }
    }, [data]);
    if (isError) {
        return <div>Error: {error.message}</div>
    }
    if (isPending) {
        return <div>Loading...</div>
    }
    return (
        <div className='px-5'>
            <h1 className='font-bold'>{t('title')}</h1>
            <RadioGroup defaultValue="comfortable" onValueChange={handleYearActive}>
                {
                    academicYears.map((year: AcademicYear, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem onClick={() => setYear(`${year.yearStart}-${year.yearEnd}`)} value={index.toString()} id="r1" />
                            <Label htmlFor="r1">{year.yearStart}-{year.yearEnd}</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant='ghost'>
                                        <GrTrash color='red' />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='bg-white border rounded-md px-5 py-2'>
                                    <DeleteAcademicYear year={year}/>
                                </PopoverContent>
                            </Popover>
                        </div>

                    ))
                }
            </RadioGroup>
        </div>
    )
}
