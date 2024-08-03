'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { YearModel } from '@/models'
import { AcademicYear } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

type DeleteAcademicYearProps = {
    year: AcademicYear
}
export default function DeleteAcademicYear({
    year
}: DeleteAcademicYearProps) {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const mutation = useMutation({
        mutationKey: ['academic-years'],
        mutationFn: async (data: Partial<YearModel>) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/year/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    id: data.id
                })
            });

            if (!response.ok) {
                throw new Error('Failed to delete year');
            }

            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['academic-years'] })
            toast({
                title: "Suppression d'une année académique",
                description: "Année académique supprimée avec succès!",
                variant: "success"
            })
        }
    });
    const handleDeleteYear = () => {
        const yearAdd = {
            id: year.id,
            anneeDebut: year.yearStart,
            annneeFin: year.yearEnd
        }
        mutation.mutate(yearAdd)
    }
    return (
        <div className='flex flex-col gap-3'>
            <h1>Voulez-vous supprimer {year.yearStart} - {year.yearEnd}</h1>
            <div className="flex justify-end gap-2">
                <Button variant='outline' className='text-gray-700 bg-gray-100'>
                    Annuler
                </Button>
                <Button
                    variant='outline'
                    onClick={handleDeleteYear}
                    className='border-red-500 text-red-500 bg-red-100'>
                    Supprimer
                </Button>
            </div>
        </div>
    )
}
