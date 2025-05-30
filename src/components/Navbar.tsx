'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '#historia', label: 'Historia' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#productos', label: 'Productos' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
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

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-[#4A3428] hover:text-[#6B4D3B]' : 'text-white hover:text-gray-200'
              }`}
            >
              <ShoppingCart size={24} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-[#4A3428] hover:text-[#6B4D3B]' : 'text-white hover:text-gray-200'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-16 left-0 w-full transform transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className={`px-4 py-3 shadow-lg ${
            isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-[#4A3428]'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`block py-2 px-4 text-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-[#4A3428] hover:text-[#6B4D3B]' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 