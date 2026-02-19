'use client'

import { motion } from 'framer-motion'
import { Drill, CheckCircle, Droplets, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceImageShowcase from '@/components/ServiceImageShowcase'

export default function SwampRigsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Drill className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Swamp Rigs
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Specialized swamp drilling rigs for operations in challenging
              wetland environments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Swamp Drilling Rig Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our swamp drilling rigs are specialized mobile drilling units
                  designed to operate in shallow water and wetland environments
                  typical of the Niger Delta region. These rigs feature elevated
                  drilling platforms supported by flotation systems or pontoons,
                  allowing them to access oil reserves in swampy terrain that
                  conventional land rigs cannot reach.
                </p>
                <p>
                  Swamp rigs are essential for developing Nigeria&apos;s extensive
                  swamp oil fields, which contain significant hydrocarbon reserves.
                  These rigs can drill to depths of 10,000+ feet while operating in
                  water depths ranging from 0 to 20 feet, making them ideal for
                  swamp and shallow water environments. The rigs are typically
                  transported to location via waterways and can be repositioned using
                  their flotation systems.
                </p>
                <p>
                  Our swamp rig fleet includes both barge-mounted and self-elevating
                  designs, each equipped with full drilling packages including mud
                  systems, blowout preventers (BOP), and drill pipe handling
                  equipment. Environmental protection is paramount, with spill
                  containment systems, waste management protocols, and minimal
                  environmental footprint operations. Our crews are specially trained
                  in swamp operations and understand the unique challenges of
                  working in wetland environments.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/swamprig.jpeg"
                alt="Swamp drilling rig with elevated platform operating in Niger Delta wetland environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <ServiceImageShowcase
        title="Swamp Rig Operations"
        images={[
          {
            src: '/images/swamprig.jpeg',
            alt: 'Swamp drilling rig with elevated platform in Niger Delta wetland',
            caption: 'Swamp rig with elevated drilling platform operating in Niger Delta wetland environment',
          },
          {
            src: '/images/swamprig04.jpeg',
            alt: 'Swamp rig drilling operations in shallow water',
            caption: 'Active drilling operations in shallow water and swamp conditions',
          },
          {
            src: '/images/swampimage.jpeg',
            alt: 'Swamp rig flotation system and environmental protection',
            caption: 'Specialized flotation system and environmental protection measures for wetland operations',
          },
        ]}
      />

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: 'Wetland Operations',
                description:
                  'Specialized equipment for drilling in swamp and wetland environments',
              },
              {
                icon: Drill,
                title: 'Exploration Drilling',
                description:
                  'Comprehensive exploration and development drilling services',
              },
              {
                icon: Shield,
                title: 'Environmental Safety',
                description:
                  'Rigorous environmental protection and safety protocols',
              },
            ].map((capability, index) => {
              const Icon = capability.icon
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Enhanced mobility in wetland terrain with tracked systems',
                'Specialized flotation systems for stability',
                'High-capacity drilling equipment (up to 10,000ft depth)',
                'Comprehensive environmental protection measures',
                'Experienced swamp operations crew with local expertise',
                'Remote location accessibility via waterways',
                'All-weather operational capability',
                'Minimal environmental footprint operations',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your Swamp Rig Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our swamp drilling rig services and
              how we can support your wetland operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

