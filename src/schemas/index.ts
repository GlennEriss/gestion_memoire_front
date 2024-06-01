/**
 * @module schemas
 */

import { z } from 'zod'

export const formLoginSchema = z.object({
  email: z.string().email('formLoginSchema.invalidEmail').min(1, 'formLoginSchema.requiredEmail'),
  password: z.string()
})
export const formStudentSchema = z.object({
  firstname: z.string().min(1, 'formStudentSchema.requiredFirstname'),
  lastname: z.string().min(1, 'formStudentSchema.requiredLastname'),
  email: z.string().email('formStudentSchema.invalidEmail').min(1, 'formStudentSchema.requiredEmail'),
  birthday: z.string().refine(dateStr => !isNaN(Date.parse(dateStr)), 'formStudentSchema.invalidBirthday'),
  sexe: z.enum(['M', 'F']),
  matricule: z.string().min(1, 'formStudentSchema.requiredMatricule')
})
export const formProfessorSchema = z.object({
  firstname: z.string().min(1, 'formProfessorSchema.requiredFirstname'),
  lastname: z.string().min(1, 'formProfessorSchema.requiredLastname'),
  email: z.string().email('formProfessorSchema.invalidEmail').min(1, 'formProfessorSchema.requiredEmail'),
  birthday: z.string().refine(dateStr => !isNaN(Date.parse(dateStr)), 'formProfessorSchema.invalidBirthday'),
  sexe: z.enum(['M', 'F']),
  fonction: z.string().min(1, 'formProfessorSchema.requiredFonction')
})

export type FormProfessorSchema = z.infer<typeof formProfessorSchema>
export type FormStudentSchema = z.infer<typeof formStudentSchema>
export type FormLoginSchema = z.infer<typeof formLoginSchema>
