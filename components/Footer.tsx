'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Ship } from 'lucide-react'

function FooterLogo() {
  const [logoError, setLogoError] = useState(false)

  if (logoError) {
    // Fallback when logo is missing
    return (
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-ocean-500 p-2 rounded-lg">
          <Ship className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">
          Opensea Marine
        </span>
      </div>
    )
  }

  return (
    <div className="mb-4">
      <Image
        src="/images/logo.png"
        alt="Opensea Marine Services"
        width={200}
        height={70}
        className="h-14 w-auto object-contain"
        onError={() => setLogoError(true)}
        unoptimized
      />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <FooterLogo />
            <p className="text-sm text-gray-400 mb-4">
              Leading indigenous maritime service provider in Nigeria, specializing
              in oil & gas logistics and marine operations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/aht-vessels"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  AHT Vessels
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pasv-vessels"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  PSV Vessels
                </Link>
              </li>
              <li>
                <Link
                  href="/services/swamp-rigs"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Swamp Rigs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/land-rigs"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Land Rigs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bunker-trading"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Bunker Trading
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ballistic-security-boats"
                  className="text-gray-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Ballistic Security Boats
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ocean-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Plot 42 Donatus Odum Street,<br />
                  Elegushi-Lekki, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ocean-400 flex-shrink-0" />
                <a
                  href="tel:+2349166898766"
                  className="text-sm text-gray-400 hover:text-ocean-400 transition-colors"
                >
                  +234 916 689 8766
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ocean-400 flex-shrink-0" />
                <a
                  href="mailto:info@opensea.com.ng"
                  className="text-sm text-gray-400 hover:text-ocean-400 transition-colors"
                >
                  info@opensea.com.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Opensea Marine Resources Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

