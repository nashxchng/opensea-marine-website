'use client'

import { motion } from 'framer-motion'
import { Ship, CheckCircle, Package, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceImageShowcase from '@/components/ServiceImageShowcase'

export default function PASVVesselsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Ship className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              PSV Vessels
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Platform Supply Vessels for efficient cargo and equipment transport
              to offshore platforms
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
                Platform Supply Vessel Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our Platform Supply Vessels (PSV) are specialized offshore support
                  vessels designed to transport dry bulk cargo, liquid cargo, and
                  equipment to offshore platforms and drilling rigs. These vessels
                  typically have deadweight tonnage (DWT) ranging from 2,000 to 5,000
                  tonnes and feature large open deck areas for cargo storage.
                </p>
                <p>
                  PSV vessels are essential for maintaining continuous offshore
                  operations, delivering drilling mud, cement, fuel, water, spare
                  parts, and provisions to platforms. Our fleet operates on scheduled
                  routes to major offshore fields in Nigeria, ensuring reliable supply
                  chains for production and drilling operations.
                </p>
                <p>
                  Each PSV in our fleet is equipped with deck cranes (typically
                  50-150 tonne capacity), bulk liquid tanks for fuel and water, and
                  dynamic positioning (DP2) systems for safe platform approach and
                  cargo transfer. Our vessels can handle both dry bulk cargo (drill
                  pipe, casing, chemicals) and liquid cargo (diesel, fresh water,
                  drilling mud) in a single voyage, maximizing operational efficiency.
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
                src="/images/PSV01.jpeg"
                alt="Platform Supply Vessel (PSV) with cargo deck delivering supplies to offshore oil platform"
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
        title="PSV Vessel Operations"
        images={[
          {
            src: '/images/PSV01.jpeg',
            alt: 'PSV vessel positioned at offshore platform using dynamic positioning',
            caption: 'PSV vessel using DP2 system for safe cargo transfer to offshore platform',
          },
          {
            src: '/images/PSV02.jpeg',
            alt: 'PSV vessel cargo deck with bulk materials and equipment',
            caption: 'Large cargo deck loaded with drilling equipment, pipes, and bulk materials',
          },
          {
            src: '/images/PSV03.jpeg',
            alt: 'PSV vessel crane operations',
            caption: 'Deck crane operations for loading and unloading heavy equipment',
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
                icon: Package,
                title: 'Cargo Transport',
                description:
                  'Efficient transport of equipment and supplies to offshore platforms',
              },
              {
                icon: Ship,
                title: 'Bulk Cargo Handling',
                description:
                  'Specialized handling of bulk materials and heavy equipment',
              },
              {
                icon: Clock,
                title: 'Scheduled Deliveries',
                description:
                  'Reliable scheduling to ensure continuous platform operations',
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
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-cyan-600" />
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
                'Large cargo capacity (3000+ DWT)',
                'Advanced cargo handling systems with cranes',
                'Dynamic positioning (DP2) for precise operations',
                'Fuel and water supply capabilities',
                'Spacious deck space for oversized cargo',
                'Experienced crew and logistics coordination team',
                'Bulk liquid and dry cargo capabilities',
                'Scheduled and on-demand delivery services',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0" />
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
            className="bg-cyan-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your PSV Vessel Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our platform supply vessel services
              and how we can support your offshore operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

