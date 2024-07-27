'use server'

import { apiRoutes } from '@/constantes'
import { formAcademicYearSchema, FormAcademicYearSchema, FormLoginSchema } from '@/schemas'

export const addYearAction = async (values: FormAcademicYearSchema) => {
    const validatedFields = formAcademicYearSchema.safeParse(values)
    if (!validatedFields.success) {
        return { success: false, error: true, message: 'invalidFields' }
    }
    const year = validatedFields.data.year
    const yearSplit = year.split('-')
    const yearAdd = {
        anneeDebut: yearSplit[0],
        annneeFin: yearSplit[1]
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.annee.add}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(yearAdd)
        })
    } catch (error) {
        console.error(error)
        return { success: false, error: true, message: 'errorToAddYear' }
    }
    //redirect(pathnames['/dashboard/theses'].fr)
}
