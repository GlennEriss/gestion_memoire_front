/**
 * @module schemas
 */

import { z } from 'zod'

export const formLoginSchema = z.object({
  email: z.string().email('formLoginSchema.invalidEmail').min(1, 'formLoginSchema.requiredEmail'),
  password: z.string()
})

/* export const formRegisterSchema = z.object({
  firstname: z.string().min(1, 'formRegisterSchema.requiredFirstname'),
  lastname: z.string().min(1, 'formRegisterSchema.requiredLastname'),
  email: z.string().email('formRegisterSchema.invalidEmail').min(1, 'formRegisterSchema.requiredEmail'),
  password: z.string().min(8, 'formRegisterSchema.invalidPassword')
    .regex(/[A-Z]/, 'formRegisterSchema.missingUppercaseLetter')
    .regex(/[0-9]/, 'formRegisterSchema.missingDigit'),
  passwordConfirm: z.string(),
}).refine(data => data.password === data.passwordConfirm, {
  message: 'formRegisterSchema.passwordsDoNotMatch',
  path: ['passwordConfirm'], // This will cause the error to be shown under the passwordConfirm field.
}) */

export type FormLoginSchema = z.infer<typeof formLoginSchema>
//export type FormRegisterSchema = z.infer<typeof formRegisterSchema>