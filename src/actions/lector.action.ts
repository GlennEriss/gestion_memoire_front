'use server'

import { apiRoutes } from "@/constantes"
import { formStudentSchema, FormStudentSchema } from "@/schemas"


export const addLectorAction = async (values: FormStudentSchema) => {
    const validatedFields = formStudentSchema.safeParse(values)
    if (!validatedFields.success) {
        return { success: false, error: true, message: 'invalidFields' }
    }
    const lector = {
        nom: validatedFields.data.firstname,
        prenom: validatedFields.data.lastname,
        email: validatedFields.data.email,
        adresse: validatedFields.data.adresse,
        password: 'passer123',
        telephone: validatedFields.data.phone,
        commentaires: [],
        dateNaissance: validatedFields.data.birthday,
        favoris: [],
        likes: [],
        sexe: validatedFields.data.sexe,
        vus: []
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.lector.add}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(lector)
    })
    //redirect(pathnames['/dashboard/theses'].fr)
}