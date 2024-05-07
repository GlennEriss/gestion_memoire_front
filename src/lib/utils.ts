import { locales } from '@/navigation'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatUrl = (url: string): string => {
  const regex = new RegExp(`^/(${locales.join('|')})`, 'i')
  return url.replace(regex, '')
}