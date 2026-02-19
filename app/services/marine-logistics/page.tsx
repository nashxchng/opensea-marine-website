'use client'

import { motion } from 'framer-motion'
import { Package, CheckCircle, Ship, Clock } from 'lucide-react'
import Link from 'next/link'

export default function MarineLogisticsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Package className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Marine Logistics
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              End-to-end marine logistics, support services, and project
              management solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Marine Logistics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide complete marine logistics solutions, from planning and
              coordination to execution and support, ensuring seamless operations
              for your oil & gas projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: 'Vessel Management',
                description:
                  'Complete vessel operations, maintenance, and crew management services',
              },
              {
                icon: Package,
                title: 'Cargo Handling',
                description:
                  'Efficient loading, unloading, and transportation of cargo and equipment',
              },
              {
                icon: Clock,
                title: 'Project Management',
                description:
                  'End-to-end project coordination and logistics support',
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
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-indigo-600" />
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

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Logistics Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Customs clearance and documentation',
                'Port operations and coordination',
                'Equipment mobilization and demobilization',
                'Supply chain management',
                'Warehousing and storage solutions',
                'Emergency response and support',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
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
            className="bg-indigo-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your Marine Logistics Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our comprehensive marine logistics
              services and how we can support your operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

