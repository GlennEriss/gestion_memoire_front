'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/ui/phone-number'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formExpertSchema, FormExpertSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ExpertModel } from '@/models'
import { useToast } from '@/components/ui/use-toast'
import { Expert } from '@/types'

type ExpertFormProps = {
  expert?: Partial<Expert>
}
export default function ExpertForm({ expert }: ExpertFormProps) {
  console.log(expert)
  const t = useTranslations('ExpertForm')
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const form = useForm<FormExpertSchema>({
    resolver: zodResolver(formExpertSchema),
    defaultValues: {
      firstname: expert ? expert.firstname : '',
      lastname: expert ? expert.lastname : '',
      email: expert ? expert.email : '',
      birthday: expert ? expert.birthday as string : '',
      //sexe: expert ? expert.sexe as any : 'M',
      fonction: expert ? expert.fonction : '',
      address: expert ? expert.adress : '',
      phoneNumber: expert ? expert.phoneNumber : ''
    }
  })
  const { isSubmitting } = form.formState
  const mutation = useMutation({
    mutationKey: ['experts'],
    mutationFn: async (data: Partial<ExpertModel>) => {
      let response
      if (expert) {
        response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/expert/update`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
      } else {
        response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/expert`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
      }


      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experts'] })
      if (expert) {
        toast({
          title: "Ajout d'un expert",
          description: "Expert ajouté avec succès!",
          variant: "success"
        })
      }else{
        toast({
          title: "Modification d'un expert",
          description: "Expert modifié avec succès!",
          variant: "success"
        })
      }

    }
  });
  function onSubmit(values: FormExpertSchema) {
    const validatedFields = formExpertSchema.safeParse(values)
    if (!validatedFields.success) {
      return { success: false, error: true, message: 'invalidFields' }
    }
    const data: Partial<ExpertModel> = {
      id: expert ? expert.id : 0,
      nom: validatedFields.data.firstname,
      prenom: validatedFields.data.lastname,
      email: validatedFields.data.email,
      dateNaissance: validatedFields.data.birthday,
      //sexe: validatedFields.data.sexe,
      fonction: validatedFields.data.fonction,
      adresse: validatedFields.data.address,
      telephone: validatedFields.data.phoneNumber,
      password: 'Passer1234',
    }
    mutation.mutate(data)
  }
  return (
    <div className='overflow-y-auto h-[600px]'>
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
          {/* <FormField
            control={form.control}
            name="sexe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('sexe')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={expert?.sexe}>
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
          /> */}
          <FormField
            control={form.control}
            name='fonction'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='fonction'>
                  {t('fonction')}
                </FormLabel>
                <FormControl>
                  <Input id='fonction' type='text' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='address'>
                  {t('address')}
                </FormLabel>
                <FormControl>
                  <Input id='address' type='text' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='phoneNumber'>
                  {t('phoneNumber')}
                </FormLabel>
                <FormControl>
                  <PhoneInput defaultCountry='SN' id='phoneNumber' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end md:space-x-2">
            <Button type='submit'>
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
                  <span>
                    {
                      expert ? (
                        <span>Modifier</span>
                      ) :
                        (
                          <span>{t('save')}</span>
                        )
                    }

                  </span>
                )
              }

            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
