import PreviewLector from '@/components/register/lector/PreviewLector'
import BreadCrumbDashboard from '@/components/template-dashboard/BreadCrumbDashboard';
import { fetchLectorById } from '@/lib/utils';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const lectorModel = await fetchLectorById(params.id);
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
  if (!lectorModel) {
    notFound();
  }

  return (
    <div className='space-y-10'>
      <BreadCrumbDashboard title='detailsLector' subtitle='lector' breadCrumpList={breadCrumpList} />
      <PreviewLector lector={{
        id: lectorModel.id,
        birthday: lectorModel.dateNaissance,
        email: lectorModel.email,
        firstname: lectorModel.prenom,
        lastname: lectorModel.nom,
        sexe: lectorModel.sexe,
        phoneNumber: lectorModel.telephone,
        adress: lectorModel.adresse
      }} />
    </div>

  );
}