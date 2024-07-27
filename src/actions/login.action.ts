'use server'

import { pathnames } from '@/navigation'
/* import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes/routes'
import { AuthError } from 'next-auth' */
import { formLoginSchema, FormLoginSchema } from '@/schemas'
import { redirect } from 'next/navigation'

export const login = async (values: FormLoginSchema) => {
  const validatedFields = formLoginSchema.safeParse(values)
  if(!validatedFields.success){
    return {success:false, error:true, message:'invalidFields'}
  }
  redirect(pathnames['/dashboard/theses'].fr)
  /* const {email, password } = validatedFields.data
  try {
    await signIn('credentials', {email, password, redirectTo: DEFAULT_LOGIN_REDIRECT})
  } catch (error) {
    if(error instanceof AuthError){
      switch (error.type) {
      case 'CredentialsSignin':
        return {error:true, success:false, message:'invalidCredential'}
      default:
        return {error:true, success:false, message:'internalError'}
      }
    }
    throw error
  }  */
}