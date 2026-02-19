'use client'

import { motion } from 'framer-motion'
import { Wrench, CheckCircle, MapPin, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceImageShowcase from '@/components/ServiceImageShowcase'

export default function LandRigsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Wrench className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Land Rigs
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Comprehensive land-based drilling rig services for onshore oil &
              gas operations
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
                Land Drilling Rig Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our land drilling rigs are mobile or skid-mounted drilling units
                  designed for onshore oil and gas exploration and development
                  operations. These rigs are capable of drilling vertical, directional,
                  and horizontal wells to depths exceeding 15,000 feet, supporting
                  both conventional and unconventional resource development across
                  Nigeria&apos;s onshore fields.
                </p>
                <p>
                  Land rigs are essential for developing Nigeria&apos;s extensive onshore
                  oil reserves, including fields in the Niger Delta, Anambra Basin, and
                  other onshore locations. Our fleet includes both mechanical and
                  electric drilling rigs, ranging from 1,000 to 3,000 horsepower,
                  capable of handling various drilling programs from shallow
                  exploration wells to deep development wells.
                </p>
                <p>
                  Each land rig in our fleet is equipped with a complete drilling
                  package including top drive systems, mud pumps, mud tanks, shale
                  shakers, blowout preventers (BOP), and drill pipe handling
                  equipment. Our rigs can be quickly mobilized and demobilized,
                  minimizing downtime between locations. All rigs are equipped with
                  modern drilling control systems, real-time monitoring, and
                  comprehensive safety equipment. Our drilling crews hold international
                  certifications and are trained in advanced drilling techniques,
                  well control, and HSE protocols.
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
                src="/images/landrig.jpeg"
                alt="Land drilling rig with derrick and drilling equipment on onshore location"
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
        title="Land Rig Operations"
        images={[
          {
            src: '/images/landrig.jpeg',
            alt: 'Land drilling rig with derrick and drilling equipment',
            caption: 'Land drilling rig with derrick, top drive, and drilling equipment on location',
          },
          {
            src: '/images/landrig.jpeg',
            alt: 'Land rig mud system and BOP stack',
            caption: 'Mud circulation system and blowout preventer (BOP) stack for well control',
          },
          {
            src: '/images/landrig.jpeg',
            alt: 'Land rig drill floor and pipe handling',
            caption: 'Drill floor operations with automated pipe handling systems',
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
                icon: MapPin,
                title: 'Onshore Drilling',
                description:
                  'Comprehensive drilling services for onshore oil & gas fields',
              },
              {
                icon: Wrench,
                title: 'Well Services',
                description:
                  'Complete well construction, completion, and workover services',
              },
              {
                icon: Shield,
                title: 'Safety Excellence',
                description:
                  'Rigorous safety standards and environmental compliance',
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
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-orange-600" />
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
                'Modern drilling technology with automated systems',
                'High drilling capacity (15,000+ feet)',
                'Efficient mobilization and demobilization',
                'Comprehensive well services and completion',
                'Experienced drilling crews with international training',
                'Cost-effective operations with optimized performance',
                'Full well construction capabilities',
                'Real-time monitoring and data acquisition',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
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
            className="bg-orange-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your Land Rig Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our land drilling rig services and
              how we can support your onshore operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

