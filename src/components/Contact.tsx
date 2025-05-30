'use client'

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#4A3428] mb-12">
          Contáctanos
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#4A3428] mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={20} />
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={20} />
                  <span>info@tucafe.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} />
                  <span>Calle del Café 123, Ciudad</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#4A3428] mb-4">
                Horario de Atención
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Lunes a Viernes: 9:00 - 20:00</p>
                <p>Sábados: 10:00 - 18:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A3428] focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A3428] focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A3428] focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#4A3428] text-white py-3 px-6 rounded-lg hover:bg-[#6B4D3B] transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 