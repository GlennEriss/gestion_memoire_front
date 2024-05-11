import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../ui/card'
import Image from 'next/image'

export default function TheseItem() {
  return (
    <Card>
      <CardHeader className='p-0 m-0'>
        <Image
          src={'/assets/couverture.jpg'}
          sizes="100vw"
          alt=""
          width={300}
          height={80}
          className="object-cover"
          priority
          unoptimized
        />
      </CardHeader>
      <CardContent className='flex flex-col gap-3 p-2'>
        <CardTitle>
                    Ma préparation de classe
        </CardTitle>
        <CardDescription className='flex flex-col'>
          <span>Promotion 2024</span>
          <span>En attente de publication</span>
        </CardDescription>
        <div className='grid grid-cols-2 gap-2'>
          <Button variant='outline' className='hover:bg-green-500 hover:text-white text-gray-500'>
                        Publier
          </Button>
          <Button variant='outline' className='hover:bg-app-color-blue hover:text-white text-gray-500'>
                        Modifier
          </Button>
          <Button variant='outline' className='hover:bg-orange-500 hover:text-white text-gray-500'>
                        Détails
          </Button>
          <Button variant='outline' className='hover:bg-red-500 hover:text-white text-gray-500'>
                        Supprimer
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
