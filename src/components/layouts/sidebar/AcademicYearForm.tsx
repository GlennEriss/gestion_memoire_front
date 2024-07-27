'use client'
import { useTranslations } from 'next-intl'
import React, { useTransition } from 'react'
import { formAcademicYearSchema, FormAcademicYearSchema } from '../../../schemas/index';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { yearRegex } from '@/regex';
import { Button } from '@/components/ui/button';
import { GrAdd } from 'react-icons/gr'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { YearModel } from '@/models';
import { useToast } from '@/components/ui/use-toast';

export default function AcademicYearForm() {
    const t = useTranslations('AcademicYearForm')
    const {toast} = useToast()
    const queryClient = useQueryClient()
    const form = useForm<FormAcademicYearSchema>({
        resolver: zodResolver(formAcademicYearSchema),
        defaultValues: {
            year: ''
        }
    })
    const { isSubmitting } = form.formState
    const mutation = useMutation({
        mutationKey: ['academic-years'],
        mutationFn: async (data: Partial<YearModel>) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/year`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to add year');
            }

            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['academic-years']})
            toast({
                title: "Ajout d'une année académique",
                description: "Année académique ajoutée avec succès!",
                variant: "success"
            })
        }
    });
    async function onSubmit(data: FormAcademicYearSchema) {
        const validatedFields = formAcademicYearSchema.safeParse(data)
        if (!validatedFields.success) {
            return { success: false, error: true, message: 'invalidFields' }
        }
        const year = validatedFields.data.year
        const yearSplit = year.split('-')
        const yearAdd = {
            anneeDebut: yearSplit[0],
            annneeFin: yearSplit[1]
        }
        mutation.mutate(yearAdd)
    }
    return (
        <div className='p-5'>
            <Form {...form}>
                <form method='post'
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex gap-2'
                >
                    <FormField
                        control={form.control}
                        name='year'
                        render={({ field, fieldState: { error } }) => (
                            <FormItem>
                                <FormLabel htmlFor='year' className='font-bold text-md'>{t('labelYear')}</FormLabel>
                                <FormControl>
                                    <Input
                                        className='focus:border-none focus:placeholder:pl-1 focus-visible:ring-2'
                                        disabled={isSubmitting}
                                        type='text'
                                        pattern={yearRegex.source}
                                        id='year'
                                        placeholder={t('placeholder')} {...field} />
                                </FormControl>
                                {error && <span className='font-semibold text-[0.8rem] text-red-500'>{t(error.message)}</span>}
                            </FormItem>
                        )}
                    />
                    <div>
                        <Button type='submit' className='mt-8' disabled={isSubmitting}>
                            {
                                isSubmitting ? (
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <>
                                        <span className='hidden md:block'>{t('buttonAddYear')}</span>
                                        <span className='md:hidden'><GrAdd /></span>
                                    </>
                                )
                            }
                        </Button>
                    </div>

                </form>
            </Form>
        </div>
    )
}
