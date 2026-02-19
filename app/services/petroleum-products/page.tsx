'use client'

import { motion } from 'framer-motion'
import { Fuel, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function PetroleumProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Fuel className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Petroleum Products
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Supply and trading of petroleum products under NNPC specifications
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
              Petroleum Product Supply & Trading
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We supply and trade a comprehensive range of petroleum products
              that meet NNPC specifications and international quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'PMS (Premium Motor Spirit)',
                description: 'High-quality gasoline for automotive use',
              },
              {
                name: 'AGO (Automotive Gas Oil)',
                description: 'Diesel fuel for vehicles and generators',
              },
              {
                name: 'DPK (Dual Purpose Kerosene)',
                description: 'Kerosene for domestic and industrial use',
              },
              {
                name: 'LPG (Liquefied Petroleum Gas)',
                description: 'Cooking gas and industrial applications',
              },
              {
                name: 'ATK (Aviation Turbine Kerosene)',
                description: 'Jet fuel for aviation industry',
              },
              {
                name: 'LPFO (Low Pour Fuel Oil)',
                description: 'Heavy fuel oil for industrial use',
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 rounded-lg p-2">
                    <Fuel className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
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
              Why Choose Our Petroleum Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'NNPC specification compliance',
                'Quality assurance and testing',
                'Reliable supply chain',
                'Competitive pricing',
                'Bulk and retail supply',
                'Timely delivery',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
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
            className="bg-purple-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your Petroleum Product Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our petroleum product supply and
              trading services.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

