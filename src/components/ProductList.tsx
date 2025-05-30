'use client'

import React from 'react'
import Image from 'next/image'
import { products } from '@/data/products'
import { ShoppingCart } from 'lucide-react'

export default function ProductList() {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#4A3428] mb-12">
          Nuestros Productos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4A3428] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#4A3428]">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    className="flex items-center gap-2 bg-[#4A3428] text-white px-4 py-2 rounded-lg hover:bg-[#6B4D3B] transition-colors"
                    onClick={() => {/* Implementar lógica del carrito */}}
                  >
                    <ShoppingCart size={20} />
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 