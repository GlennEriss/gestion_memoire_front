'use server'

import { pathnames, redirect } from '@/navigation'

//import { signOut } from '@/auth'

export const logout = async () => {
  //await signOut()
  redirect(pathnames['/login'].fr)
}
