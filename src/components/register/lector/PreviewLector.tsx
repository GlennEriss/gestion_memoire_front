import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Lector } from '@/types';
import React from 'react';

export default function PreviewLector({ lector }: { lector: Partial<Lector> }) {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                <Avatar className="w-full h-48 md:w-48 md:h-48 bg-gray-100">
                    <AvatarImage src="/assets/no-user-picture.png" alt="User Avatar" />
                    <AvatarFallback>{lector.firstname?.[0]}{lector.lastname?.[0]}</AvatarFallback>
                </Avatar>
                <div className="mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{lector.firstname} {lector.lastname}</h1>
                    <p className="text-gray-600"><span className="font-semibold">Email:</span> {lector.email}</p>
                    <p className="text-gray-600"><span className="font-semibold">Date de naissance:</span> {lector.birthday as string}</p>
                    <p className="text-gray-600"><span className="font-semibold">Sexe:</span> {lector.sexe === 'M' ? 'Homme' : 'Femme'}</p>
                    <p className="text-gray-600"><span className="font-semibold">Adresse:</span> {lector.adress}</p>
                    <p className="text-gray-600"><span className="font-semibold">Téléphone:</span> {lector.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}