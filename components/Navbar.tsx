'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Ship } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Logo() {
  const [logoError, setLogoError] = useState(false)

  if (logoError) {
    // Fallback when logo is missing
    return (
      <>
        <div className="bg-ocean-500 p-2 rounded-lg group-hover:bg-ocean-600 transition-colors">
          <Ship className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">
          Opensea Marine
        </span>
      </>
    )
  }

  return (
    <>
      <Image
        src="/images/logo.png"
        alt="Opensea Marine Services"
        width={180}
        height={60}
        className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
        priority
        onError={() => setLogoError(true)}
        unoptimized
      />
    </>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'AHT Vessels', href: '/services/aht-vessels' },
    { name: 'PSV Vessels', href: '/services/pasv-vessels' },
    { name: 'Swamp Rigs', href: '/services/swamp-rigs' },
    { name: 'Land Rigs', href: '/services/land-rigs' },
    { name: 'Petroleum Products', href: '/services/petroleum-products' },
    { name: 'Bunker Trading', href: '/services/bunker-trading' },
    { name: 'Ballistic Security Boats', href: '/services/ballistic-security-boats' },
    { name: 'Marine Logistics', href: '/services/marine-logistics' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-ocean-50 hover:text-ocean-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/contact"
              className="bg-ocean-600 text-white px-6 py-2 rounded-lg hover:bg-ocean-700 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-ocean-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-ocean-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-ocean-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block pl-4 text-gray-600 hover:text-ocean-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="block bg-ocean-600 text-white px-6 py-2 rounded-lg text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

