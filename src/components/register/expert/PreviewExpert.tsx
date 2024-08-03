import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Expert } from '@/types'
import React from 'react'

export default function PreviewExpert({ expert }: { expert: Partial<Expert> }) {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                <Avatar className="w-full h-48 md:w-48 md:h-48 bg-gray-100">
                    <AvatarImage src="/assets/no-user-picture.png" alt="User Avatar" />
                    <AvatarFallback>{expert.firstname?.[0]}{expert.lastname?.[0]}</AvatarFallback>
                </Avatar>
                <div className="mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{expert.firstname} {expert.lastname}</h1>
                    <p className="text-gray-600"><span className="font-semibold">Email:</span> {expert.email}</p>
                    <p className="text-gray-600"><span className="font-semibold">Date de naissance:</span> {expert.birthday as string}</p>
                    <p className="text-gray-600"><span className="font-semibold">Sexe:</span> {expert.sexe === 'M' ? 'Homme' : 'Femme'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Adresse:</span> {expert.adress}</p>
                    <p className="text-gray-600"><span className="font-semibold">Téléphone:</span> {expert.phoneNumber}</p>
                    <p className="text-gray-600"><span className="font-semibold">Fonction:</span> {expert.fonction}</p>
                </div>
            </div>
        </div>
    )
}
