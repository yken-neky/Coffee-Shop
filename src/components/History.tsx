'use client'

import React from 'react'
import Image from 'next/image'
import { images } from '@/data/images'

export default function History() {
  return (
    <section id="historia" className="py-20 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={images.history}
              alt="Historia de nuestro café"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-[#4A3428] mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-700 mb-6">
              Desde 1985, hemos estado comprometidos con la búsqueda y selección de los mejores granos de café en todo el mundo. Nuestra historia comenzó en una pequeña tienda en el centro de la ciudad, donde nuestro fundador compartía su pasión por el café de calidad con los clientes locales.
            </p>
            <p className="text-gray-700 mb-6">
              A lo largo de los años, hemos establecido relaciones directas con agricultores en las principales regiones productoras de café, asegurando no solo la mejor calidad, sino también prácticas de comercio justo y sostenible.
            </p>
            <p className="text-gray-700">
              Hoy, seguimos manteniendo ese mismo compromiso con la calidad y la excelencia, mientras compartimos nuestra pasión por el café con una comunidad cada vez más grande de amantes del café.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 