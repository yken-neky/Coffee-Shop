'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#4A3428] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-300 text-sm">
              Dedicados a ofrecer la mejor experiencia en café, desde el cultivo hasta tu taza.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-gray-300 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#historia" className="text-gray-300 hover:text-white transition-colors">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-gray-300 hover:text-white transition-colors">
                  Proceso
                </Link>
              </li>
            </ul>
          </div>

          {/* Atención al Cliente */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Tu Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 