import React from 'react'
import Image from 'next/image'

export default function LogoImg() {
  return (
    <Image
      src={'/assets/logo.png'}
      sizes="100vw"
      alt="ISI BIBLIOTHEQUE"
      width={200}
      height={100}
      className="w-full object-cover"
    />
  )
}
