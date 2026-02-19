'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import ImageGallery from '@/components/ImageGallery'
import FeaturedSection from '@/components/FeaturedSection'

export default function Home() {
  const fleetImages = [
    {
      src: '/images/AHT2.jpeg',
      alt: 'Anchor Handling Tug vessel performing anchor operations',
      title: 'AHT Vessel - Anchor Handling Operations',
    },
    {
      src: '/images/AHTDP2.jpeg',
      alt: 'AHT vessel with dynamic positioning system',
      title: 'AHT Vessel - DP2 Operations',
    },
    {
      src: '/images/PSV01.jpeg',
      alt: 'Platform Supply Vessel delivering cargo to offshore platform',
      title: 'PSV Vessel - Platform Supply Operations',
    },
    {
      src: '/images/PSV02.jpeg',
      alt: 'Platform Supply Vessel at offshore location',
      title: 'PSV Vessel - Offshore Support',
    },
    {
      src: '/images/swamprig.jpeg',
      alt: 'Swamp drilling rig in Niger Delta wetland',
      title: 'Swamp Rig - Wetland Drilling Operations',
    },
    {
      src: '/images/swamprig04.jpeg',
      alt: 'Swamp rig operating in challenging terrain',
      title: 'Swamp Rig - Specialized Operations',
    },
    {
      src: '/images/landrig.jpeg',
      alt: 'Land drilling rig onshore operations',
      title: 'Land Rig - Onshore Drilling Operations',
    },
    {
      src: '/images/PSV03.jpeg',
      alt: 'Platform Supply Vessel cargo operations',
      title: 'PSV Vessel - Cargo Handling',
    },
  ]

  return (
    <>
      <Hero />
      <Stats />
      
      {/* Colorful Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 via-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Vessels & Rigs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-xl opacity-90">Projects Completed</div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedSection
        title="Leading Maritime Excellence in Nigeria's Oil & Gas Sector"
        description={`With over 15 years of experience, Opensea Marine Resources Limited has established itself as a premier indigenous maritime service provider. Our comprehensive fleet of AHT vessels, PSV vessels, swamp rigs, and land rigs supports critical operations across Nigeria's oil & gas industry.\n\nWe combine cutting-edge technology with deep industry expertise to deliver safe, efficient, and reliable maritime solutions. From offshore platform support to onshore drilling operations, our services are designed to meet the most demanding requirements of the energy sector.`}
        image="/images/AHT2.jpeg"
        imageAlt="AHT vessel and PSV vessel supporting offshore oil platform operations in Nigeria"
        link="/about"
        linkText="Learn more about us"
      />
      <ServicesOverview />
      
      {/* Rigs & Vessels Showcase */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Fleet: Vessels & Rigs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive fleet of specialized vessels and drilling rigs supporting
              operations across Nigeria&apos;s oil & gas sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Vessels Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vessels</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/AHT2.jpeg"
                    alt="AHT Vessel"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">AHT Vessels</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/PSV01.jpeg"
                    alt="PSV Vessel"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">PSV Vessels</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/AHTDP2.jpeg"
                    alt="AHT DP2 Vessel"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">AHT DP2</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/PSV02.jpeg"
                    alt="PSV Vessel Operations"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">PSV Operations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rigs Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Rigs</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/swamprig.jpeg"
                    alt="Swamp Rig"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">Swamp Rigs</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/landrig.jpeg"
                    alt="Land Rig"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">Land Rigs</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/swamprig04.jpeg"
                    alt="Swamp Rig Operations"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">Swamp Operations</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/swampimage.jpeg"
                    alt="Swamp Environment"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">Wetland Operations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Fleet in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse fleet of vessels and rigs supporting operations
              across Nigeria&apos;s oil & gas sector
            </p>
          </motion.div>
          <ImageGallery images={fleetImages} columns={4} />
        </div>
      </section>
      <WhyChooseUs />
      
      {/* Colorful Service Highlights */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-ocean-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Maritime Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From vessel operations to security services, we provide end-to-end
              solutions for Nigeria&apos;s oil & gas sector
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AHT & PSV Vessels', icon: '🚢' },
              { title: 'Swamp & Land Rigs', icon: '⛽' },
              { title: 'Bunker Trading', icon: '⛴️' },
              { title: 'Security Boats', icon: '🛡️' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FeaturedSection
        title="Comprehensive Service Delivery Across All Operations"
        description={`Our integrated approach ensures seamless coordination from initial planning through execution. Whether it's anchor handling for offshore platforms, supply operations to remote locations, or drilling in challenging environments, we deliver with precision and reliability.\n\nOur experienced teams work around the clock to ensure your operations run smoothly, with rigorous safety protocols and environmental compliance at every step. We understand the critical nature of oil & gas operations and are committed to exceeding expectations.`}
        image="/images/swamprig.jpeg"
        imageAlt="Swamp drilling rig operating in Niger Delta wetland environment"
        reverse
        link="/services"
        linkText="View all services"
      />
      <CTA />
    </>
  )
}


