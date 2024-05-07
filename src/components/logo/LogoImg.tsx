import React from 'react'
import Image from 'next/image'

export default function LogoImg() {
  return (
    <Image
      src={'/assets/logo.png'}
      sizes="100vw"
      alt=""
      width={80}
      height={80}
      className="object-cover"
      priority
      unoptimized
    />
  )
}
