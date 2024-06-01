import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formProfessorSchema, FormProfessorSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function ProfessorForm() {
  const t = useTranslations('ProfessorForm')
  const form = useForm<FormProfessorSchema>({
    resolver: zodResolver(formProfessorSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      birthday: '',
      sexe: 'M',
      fonction: ''
    }
  })
  function onSubmit(values: FormProfessorSchema) {
    console.log(values)
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='firstname'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='firstname'>
                  {t('firstname')}
                </FormLabel>
                <FormControl>
                  <Input id='firstname' type='text' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='lastname'>
                  {t('lastname')}
                </FormLabel>
                <FormControl>
                  <Input id='lastname' type='text' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='email'>
                  {t('email')}
                </FormLabel>
                <FormControl>
                  <Input id='email' type='email' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='birthday'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='birthday'>
                  {t('birthday')}
                </FormLabel>
                <FormControl>
                  <Input id='birthday' type='date' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sexe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('sexe')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('sexePlaceholder')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="M">{t('man')}</SelectItem>
                    <SelectItem value="F">{t('woman')}</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='fonction'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='fonction'>
                  {t('fonction')}
                </FormLabel>
                <FormControl>
                  <Input id='matricule' type='text' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-between md:justify-end md:space-x-2
          ">
            <Button type='submit'>
              {t('save')}
            </Button>
            <Button type='submit'>
              {t('saveAndContinue')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
