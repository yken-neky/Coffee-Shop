'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-[#4A3428]' : 'text-white'
            }`}
          >
            Coffee Shop
          </Link>
          
          <div className="flex items-center gap-6">
            {[
              { href: '/', label: 'Inicio' },
              { href: '#historia', label: 'Historia' },
              { href: '#proceso', label: 'Proceso' },
              { href: '#productos', label: 'Productos' },
              { href: '#contacto', label: 'Contacto' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-[#4A3428] hover:text-[#6B4D3B]' : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button 
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-[#4A3428] hover:text-[#6B4D3B]' : 'text-white hover:text-gray-200'
              }`}
            >
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 