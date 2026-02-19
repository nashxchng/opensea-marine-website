'use client'

import { motion } from 'framer-motion'
import { Ship, Target, Users, Award } from 'lucide-react'
import ImageGallery from '@/components/ImageGallery'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-600 to-ocean-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-ocean-100 max-w-3xl mx-auto">
              Leading indigenous maritime service provider in Nigeria, serving
              the oil & gas industry with excellence since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Opensea Marine Resources Limited was incorporated as a limited
                  liability company in Nigeria in 2020 to carry on the business
                  of marketing, supply and trading of petroleum products, marine
                  logistics, support and project management.
                </p>
                <p>
                  As an indigenous service provider in the marine sector, we
                  specialize in trading within the oil and gas industry in
                  Nigeria. Our commitment to excellence and safety has made us a
                  trusted partner for major oil & gas operations across the
                  country.
                </p>
                <p>
                  We operate a diverse fleet of vessels and rigs, including AHT
                  (Anchor Handling Tug) vessels, PSV (Platform Supply Vessel)
                  vessels, swamp rigs, and land rigs, providing comprehensive
                  maritime solutions tailored to our clients&apos; needs.
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
              <img
                src="/images/PSV02.jpeg"
                alt="Opensea Marine fleet operations including AHT vessels, PSV vessels, and drilling rigs"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-100 rounded-lg mb-6">
                <Target className="h-8 w-8 text-ocean-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class maritime services and petroleum product
                solutions that drive operational excellence in Nigeria&apos;s oil
                & gas industry, while maintaining the highest standards of
                safety, reliability, and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-100 rounded-lg mb-6">
                <Award className="h-8 w-8 text-ocean-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be Nigeria&apos;s leading indigenous maritime service provider,
                recognized for innovation, reliability, and exceptional service
                delivery in the oil & gas sector, while contributing to the
                nation&apos;s energy security and economic growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operations Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into our maritime operations across Nigeria&apos;s oil &
              gas sector
            </p>
          </motion.div>
          <ImageGallery
            images={[
              {
                src: '/images/AHT2.jpeg',
                alt: 'AHT vessel performing anchor handling operations',
                title: 'AHT Vessel Operations',
              },
              {
                src: '/images/PSV01.jpeg',
                alt: 'PSV vessel delivering supplies to offshore platform',
                title: 'PSV Platform Supply',
              },
              {
                src: '/images/swamprig.jpeg',
                alt: 'Swamp drilling rig in Niger Delta wetland',
                title: 'Swamp Rig Operations',
              },
              {
                src: '/images/landrig.jpeg',
                alt: 'Land drilling rig onshore operations',
                title: 'Land Rig Operations',
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Safety First',
                description:
                  'Uncompromising commitment to safety in all operations',
              },
              {
                title: 'Excellence',
                description:
                  'Delivering superior quality in every service we provide',
              },
              {
                title: 'Integrity',
                description:
                  'Transparent, honest, and ethical business practices',
              },
              {
                title: 'Innovation',
                description:
                  'Embracing modern technology and best practices',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-ocean-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-ocean-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

