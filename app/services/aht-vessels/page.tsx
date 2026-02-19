'use client'

import { motion } from 'framer-motion'
import { Anchor, CheckCircle, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceImageShowcase from '@/components/ServiceImageShowcase'

export default function AHTVesselsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Anchor className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AHT Vessels
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Anchor Handling Tug vessels for offshore operations, towing, and
              anchor handling services
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
                Anchor Handling Tug Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our Anchor Handling Tug (AHT) vessels are specialized offshore
                  support vessels designed specifically for anchor handling, towing,
                  and positioning operations. These powerful vessels feature high
                  bollard pull capacity (typically 80-150 tonnes) and are equipped
                  with advanced anchor handling winches capable of handling heavy
                  anchor chains and wire ropes.
                </p>
                <p>
                  AHT vessels are essential for deploying and recovering anchors for
                  mobile offshore drilling units (MODUs), floating production storage
                  and offloading (FPSO) vessels, and other floating structures. Our
                  fleet operates throughout Nigeria&apos;s offshore oil fields, providing
                  critical support for drilling campaigns and production operations.
                </p>
                <p>
                  Each AHT vessel in our fleet is equipped with dual anchor handling
                  winches, towing winches, and dynamic positioning (DP2) systems for
                  precise vessel control. Our experienced crews hold international
                  certifications in anchor handling operations, and all vessels comply
                  with IMO and NIMASA regulations for offshore operations.
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
                src="/images/AHT2.jpeg"
                alt="Anchor Handling Tug (AHT) vessel with anchor handling winch and towing equipment at offshore location"
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
        title="AHT Vessel Operations"
        images={[
          {
            src: '/images/AHT2.jpeg',
            alt: 'AHT vessel towing large offshore structure',
            caption: 'AHT vessel performing heavy towing operations with high bollard pull capacity',
          },
          {
            src: '/images/AHTDP2.jpeg',
            alt: 'AHT vessel with dynamic positioning system',
            caption: 'AHT vessel equipped with DP2 system for precise positioning and anchor handling',
          },
          {
            src: '/images/AHT2.jpeg',
            alt: 'AHT vessel deck with anchor handling equipment',
            caption: 'Specialized deck layout with anchor handling equipment and towing gear',
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
                icon: Anchor,
                title: 'Anchor Handling',
                description:
                  'Professional anchor handling for offshore platforms and rigs',
              },
              {
                icon: Shield,
                title: 'Towing Services',
                description:
                  'Safe and efficient towing of vessels and offshore structures',
              },
              {
                icon: Clock,
                title: '24/7 Operations',
                description:
                  'Round-the-clock support for critical offshore operations',
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
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-blue-600" />
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
                'High bollard pull capacity (80+ tonnes)',
                'Advanced winch systems with remote control',
                'Dynamic positioning (DP2) capabilities',
                'Comprehensive safety equipment and protocols',
                'Experienced crew with international certifications',
                'Full compliance with IMO and NIMASA standards',
                '24/7 operational readiness',
                'Emergency response and rescue capabilities',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
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
            className="bg-blue-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your AHT Vessel Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our anchor handling tug services
              and how we can support your offshore operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

