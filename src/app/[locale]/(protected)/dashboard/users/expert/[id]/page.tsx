import PreviewExpert from '@/components/register/expert/PreviewExpert';
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard';
import { fetchExpertById } from '@/lib/utils';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: { id: string } }) {
    const expertModel = await fetchExpertById(params.id);
    const breadCrumpList = [
      {
        title: 'dashboard',
        link: '/dashboard/theses'
      },
      {
        title: 'users',
        link: '/dashboard/users'
      }
    ]
    if (!expertModel) {
      notFound();
    }
  
    return (
      <div className='space-y-10'>
        <BreadCrumbDashboard title='detailsExpert' subtitle='expert' breadCrumpList={breadCrumpList} />
        <PreviewExpert expert={{
          id: expertModel.id,
          birthday: expertModel.dateNaissance,
          email: expertModel.email,
          firstname: expertModel.prenom,
          lastname: expertModel.nom,
          sexe: expertModel.sexe,
          phoneNumber: expertModel.telephone,
          adress: expertModel.adresse,
          fonction: expertModel.fonction
        }} />
      </div>
  
    );
}
