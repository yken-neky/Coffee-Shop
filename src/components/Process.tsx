'use client'

import React from 'react'
import { Coffee, Leaf, PackageCheck, Truck } from 'lucide-react'

const processes = [
  {
    icon: Leaf,
    title: "Cultivo Selectivo",
    description: "Seleccionamos cuidadosamente las mejores plantas de café arábica, cultivadas en altitudes óptimas y en condiciones perfectas."
  },
  {
    icon: Coffee,
    title: "Tostado Artesanal",
    description: "Cada lote de café es tostado artesanalmente para resaltar sus características únicas y desarrollar el mejor perfil de sabor."
  },
  {
    icon: PackageCheck,
    title: "Empaque Inmediato",
    description: "Empacamos nuestro café inmediatamente después del tostado para preservar su frescura y aromas característicos."
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Garantizamos que nuestro café llegue a tu puerta en el menor tiempo posible para que disfrutes de su máxima frescura."
  }
]

export default function Process() {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#4A3428] mb-12">
          Nuestro Proceso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-[#FAF5F0] transition-colors">
              <div className="w-16 h-16 bg-[#4A3428] rounded-full flex items-center justify-center mb-4">
                <process.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4A3428] mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 