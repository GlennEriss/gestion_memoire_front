'use server'

import { ExpertModel } from "@/models"
import { FormExpertSchema, formExpertSchema } from "@/schemas"


export const addExpertAction = async (values: FormExpertSchema) => {
    const validatedFields = formExpertSchema.safeParse(values)
    if (!validatedFields.success) {
        return { success: false, error: true, message: 'invalidFields' }
    }
    const expert: ExpertModel = {
        password: 'Passer123',
        email: validatedFields.data.email,
        nom: validatedFields.data.firstname, 
        prenom: validatedFields.data.lastname,
        fonction: validatedFields.data.fonction,
        adresse: validatedFields.data.address,
        telephone: validatedFields.data.phoneNumber,
        birthdate: new Date(validatedFields.data.birthday),
        sexe: validatedFields.data.sexe
    }
    const response = await fetch(`${process.env.HOST_URL}/api/academic-year`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
    //redirect(pathnames['/dashboard/theses'].fr)
}