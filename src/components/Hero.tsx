'use client'

import React from 'react'
import Image from 'next/image'
import { images } from '@/data/images'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Coffee beans background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Descubre el verdadero sabor del café
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Seleccionamos los mejores granos de café para brindarte una experiencia única en cada taza. Desde el cultivo hasta tu mesa, cuidamos cada detalle.
          </p>
          <a
            href="#productos"
            className="mt-8 inline-block bg-[#4A3428] text-white px-8 py-3 rounded-lg hover:bg-[#6B4D3B] transition-colors w-fit"
          >
            Ver productos
          </a>
        </div>
      </div>
    </div>
  )
} 