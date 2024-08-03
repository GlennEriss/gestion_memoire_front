import { apiRoutes } from '@/constantes'
import { ExpertModel, Utilisateur } from '@/models'
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

export async function fetchLectorById(id: string): Promise<Partial<Utilisateur> | null> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.lector.getById}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
            },
        });

        if (!response.ok) {
            return null;
        }

        const lectorModel: Partial<Utilisateur> = await response.json();

        if (!lectorModel || !lectorModel.id) {
            return null;
        }

        return lectorModel;
    } catch (error) {
        console.error('Error fetching lector data:', error);
        return null;
    }
}

export async function fetchExpertById(id: string): Promise<Partial<ExpertModel> | null> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.expert.getById}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
            },
        });

        if (!response.ok) {
            return null;
        }

        const expertModel: Partial<ExpertModel> = await response.json();

        if (!expertModel || !expertModel.id) {
            return null;
        }

        return expertModel;
    } catch (error) {
        console.error('Error fetching lector data:', error);
        return null;
    }
}