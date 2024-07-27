/**
 * @module schemas
 */

import { yearRegex } from '@/regex';
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
  adresse: z.string().min(1, 'formStudentSchema.requiredMatricule'),
  phone: z.string().min(1, 'formStudentSchema.requiredPhone')
})
export const formExpertSchema = z.object({
  firstname: z.string().min(1, 'formExpertSchema.requiredFirstname'),
  lastname: z.string().min(1, 'formExpertSchema.requiredLastname'),
  email: z.string().email('formExpertSchema.invalidEmail').min(1, 'formExpertSchema.requiredEmail'),
  birthday: z.string().refine(dateStr => !isNaN(Date.parse(dateStr)), 'formExpertSchema.invalidBirthday'),
  sexe: z.enum(['M', 'F']),
  fonction: z.string().min(1, 'formExpertSchema.requiredFonction'),
  address: z.string().min(1, 'formExpertSchema.requiredAdress'),
  phoneNumber: z.string().min(1, 'formExpertSchema.requiredPhoneNumber'),
})

export const formAcademicYearSchema = z.object({
  year: z.string()
    .min(1, 'academicYearSchema.requiredYear')
    .regex(yearRegex, 'academicYearSchema.invalidFormat')
    .refine(year => {
      const [startYear, endYear] = year.split('-').map(Number);
      return endYear - startYear === 1;
    }, 'academicYearSchema.invalidYearRange')
});

export type FormAcademicYearSchema = z.infer<typeof formAcademicYearSchema>
export type FormExpertSchema = z.infer<typeof formExpertSchema>
export type FormStudentSchema = z.infer<typeof formStudentSchema>
export type FormLoginSchema = z.infer<typeof formLoginSchema>
