'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Anchor, Ship, Drill, Wrench, Fuel, Package, ShoppingCart, Shield } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Anchor,
    title: 'AHT Vessels',
    description:
      'Anchor Handling Tug vessels for offshore operations, towing, and anchor handling services.',
    href: '/services/aht-vessels',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Ship,
    title: 'PSV Vessels',
    description:
      'Platform Supply Vessels for efficient cargo and equipment transport to offshore platforms.',
    href: '/services/pasv-vessels',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Drill,
    title: 'Swamp Rigs',
    description:
      'Specialized swamp drilling rigs for operations in challenging wetland environments.',
    href: '/services/swamp-rigs',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Wrench,
    title: 'Land Rigs',
    description:
      'Comprehensive land-based drilling rig services for onshore oil & gas operations.',
    href: '/services/land-rigs',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Fuel,
    title: 'Petroleum Products',
    description:
      'Supply and trading of PMS, AGO, DPK, LPG, ATK, and LPFO under NNPC specifications.',
    href: '/services/petroleum-products',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Package,
    title: 'Marine Logistics',
    description:
      'End-to-end marine logistics, support services, and project management solutions.',
    href: '/services/marine-logistics',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: ShoppingCart,
    title: 'Bunker Trading',
    description:
      'Marine fuel bunkering services and trading for vessels operating in Nigerian waters and beyond.',
    href: '/services/bunker-trading',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Shield,
    title: 'Ballistic Security Boats',
    description:
      'Armored security vessels for protection of offshore installations, vessels, and personnel in high-risk maritime environments.',
    href: '/services/ballistic-security-boats',
    color: 'from-amber-500 to-amber-600',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive maritime solutions tailored for the oil & gas industry
            in Nigeria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-ocean-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        service.title === 'AHT Vessels'
                          ? '/images/AHT2.jpeg'
                          : service.title === 'PSV Vessels'
                          ? '/images/PSV01.jpeg'
                          : service.title === 'Swamp Rigs'
                          ? '/images/swamprig.jpeg'
                          : service.title === 'Land Rigs'
                          ? '/images/landrig.jpeg'
                          : service.title === 'Bunker Trading'
                          ? '/images/bunkertrading01.jpeg'
                          : service.title === 'Ballistic Security Boats'
                          ? '/images/PSV01.jpeg'
                          : '/images/PSV02.jpeg'
                      }
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ocean-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-ocean-600 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn more</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

