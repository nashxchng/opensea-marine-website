'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, CheckCircle, Fuel, Ship, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceImageShowcase from '@/components/ServiceImageShowcase'

export default function BunkerTradingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bunker Trading
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Marine fuel bunkering services and trading for vessels operating in
              Nigerian waters and international shipping routes
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
                Marine Fuel Bunkering Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Opensea Marine provides comprehensive marine fuel bunkering
                  services for vessels operating in Nigerian ports and offshore
                  locations. Our bunker trading division supplies high-quality
                  marine fuels including Marine Gas Oil (MGO), Intermediate Fuel
                  Oil (IFO), and Low Sulphur Fuel Oil (LSFO) that meet
                  international standards and IMO regulations.
                </p>
                <p>
                  We operate a fleet of dedicated bunker barges and tanker vessels
                  capable of delivering fuel to vessels at anchor, alongside
                  berths, or at offshore locations. Our bunkering operations cover
                  major ports including Lagos, Port Harcourt, Warri, and Calabar,
                  as well as offshore locations in the Niger Delta.
                </p>
                <p>
                  Our bunker trading services include spot trading, term contracts,
                  and fuel supply agreements for shipping companies, offshore
                  operators, and vessel owners. We maintain strategic partnerships
                  with major refineries and fuel suppliers, ensuring reliable supply
                  chains and competitive pricing. All fuels are tested and certified
                  to meet ISO 8217 standards and IMO MARPOL Annex VI requirements
                  for sulphur content.
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
                src="/images/bunkertrading01.jpeg"
                alt="Bunker barge delivering marine fuel to vessel at port"
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
        title="Bunkering Operations"
        images={[
          {
            src: '/images/bunkertrading01.jpeg',
            alt: 'Bunker barge alongside vessel',
            caption: 'Bunker barge delivering marine fuel to container vessel at port',
          },
          {
            src: '/images/bunkertrading02.jpeg',
            alt: 'Offshore bunkering operations',
            caption: 'Offshore bunkering operations for vessels at anchor',
          },
          {
            src: '/images/bunkertrading03.jpeg',
            alt: 'Fuel quality testing',
            caption: 'Quality testing and certification of marine fuels',
          },
        ]}
      />

      {/* Products & Services */}
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
              Bunker Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marine fuel solutions for all vessel types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Fuel,
                title: 'Marine Gas Oil (MGO)',
                description:
                  'High-quality distillate fuel for main engines and generators, compliant with IMO regulations.',
              },
              {
                icon: Ship,
                title: 'Intermediate Fuel Oil (IFO)',
                description:
                  'Heavy fuel oil blends for large marine engines, available in various grades (IFO 180, IFO 380).',
              },
              {
                icon: Shield,
                title: 'Low Sulphur Fuel Oil (LSFO)',
                description:
                  'Ultra-low sulphur fuel oil (0.10% or 0.50% sulphur) for Emission Control Areas (ECAs).',
              },
              {
                icon: Clock,
                title: '24/7 Bunkering',
                description:
                  'Round-the-clock bunkering services at major ports and offshore locations.',
              },
              {
                icon: ShoppingCart,
                title: 'Spot & Term Trading',
                description:
                  'Flexible trading options including spot sales and long-term supply contracts.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Assurance',
                description:
                  'ISO 8217 certified fuels with quality testing and certification documentation.',
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
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
              Why Choose Our Bunker Trading Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'ISO 8217 certified marine fuels',
                'IMO MARPOL Annex VI compliant (sulphur content)',
                'Dedicated bunker barge fleet',
                'Strategic port coverage (Lagos, Port Harcourt, Warri, Calabar)',
                'Offshore bunkering capabilities',
                'Competitive pricing and flexible payment terms',
                'Quality testing and certification documentation',
                '24/7 operational support and emergency response',
                'Spot trading and long-term supply contracts',
                'Experienced bunkering crews and operations team',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section - Inspired by Propetrol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-700 font-semibold">
                  MT Single Delivery Capacity
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">
                  Bunkering Operations
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">
                  Quality Compliance
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your Bunker Trading Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for competitive bunker fuel pricing, supply contracts, or
              spot trading inquiries. Our team is available 24/7 to support your
              bunkering needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

