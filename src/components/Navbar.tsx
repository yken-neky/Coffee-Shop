'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#4A3428]">
            Coffee Shop
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#4A3428] hover:text-[#6B4D3B]">
              Inicio
            </Link>
            <Link href="#historia" className="text-[#4A3428] hover:text-[#6B4D3B]">
              Historia
            </Link>
            <Link href="#proceso" className="text-[#4A3428] hover:text-[#6B4D3B]">
              Proceso
            </Link>
            <Link href="#productos" className="text-[#4A3428] hover:text-[#6B4D3B]">
              Productos
            </Link>
            <Link href="#contacto" className="text-[#4A3428] hover:text-[#6B4D3B]">
              Contacto
            </Link>
            <button className="p-2 text-[#4A3428] hover:text-[#6B4D3B]">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 