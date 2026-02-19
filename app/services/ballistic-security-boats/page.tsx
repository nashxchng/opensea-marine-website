'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Lock, Users, AlertTriangle, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceImageShowcase from '@/components/ServiceImageShowcase'

export default function BallisticSecurityBoatsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ballistic Security Boats
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Armored security vessels for protection of offshore installations,
              vessels, and personnel in high-risk maritime environments
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
                Maritime Security Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our ballistic security boats are purpose-built armored vessels
                  designed to provide protection for offshore oil & gas
                  installations, vessels, and personnel operating in high-risk
                  maritime environments. These specialized security vessels are
                  essential for safeguarding critical infrastructure and ensuring
                  the safety of operations in Nigeria&apos;s offshore fields.
                </p>
                <p>
                  Equipped with ballistic protection, advanced communication
                  systems, and trained security personnel, our security boats
                  provide 24/7 protection services. These vessels are capable
                  of rapid response, patrol operations, and escort duties for
                  high-value assets and personnel transfers.
                </p>
                <p>
                  Our security boat fleet operates in compliance with
                  international maritime security standards and Nigerian
                  regulations. All vessels are crewed by certified security
                  personnel with extensive training in maritime security
                  operations, threat assessment, and emergency response
                  procedures.
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
                src="/images/AHTDP2.jpeg"
                alt="Ballistic security boat providing protection for offshore operations"
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
        title="Security Boat Operations"
        images={[
          {
            src: '/images/AHTDP2.jpeg',
            alt: 'Security boat patrolling offshore installation',
            caption: 'Security boat providing 24/7 protection for offshore platforms',
          },
          {
            src: '/images/AHT2.jpeg',
            alt: 'Security escort operations',
            caption: 'Escort services for high-value vessels and personnel transfers',
          },
          {
            src: '/images/PSV01.jpeg',
            alt: 'Security boat with armored protection',
            caption: 'Armored security vessel with ballistic protection systems',
          },
        ]}
      />

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Security Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maritime security solutions for high-risk operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Ballistic Protection',
                description:
                  'Armored hulls and ballistic protection systems for crew and equipment safety.',
              },
              {
                icon: Lock,
                title: '24/7 Patrol Services',
                description:
                  'Round-the-clock patrol and surveillance of offshore installations and vessels.',
              },
              {
                icon: Users,
                title: 'Trained Security Personnel',
                description:
                  'Certified security teams with extensive maritime security training.',
              },
              {
                icon: AlertTriangle,
                title: 'Threat Assessment',
                description:
                  'Advanced threat detection and assessment capabilities for proactive security.',
              },
              {
                icon: Zap,
                title: 'Rapid Response',
                description:
                  'High-speed vessels capable of rapid response to security incidents.',
              },
              {
                icon: CheckCircle,
                title: 'Escort Services',
                description:
                  'Professional escort services for vessels and personnel in transit.',
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
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-lg mb-6">
                    <Icon className="h-7 w-7 text-amber-600" />
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
                'Ballistic protection systems (Level III/IV)',
                'High-speed capability for rapid response',
                'Advanced communication and surveillance equipment',
                'Trained and certified security personnel',
                '24/7 operational readiness',
                'Compliance with ISPS Code and Nigerian regulations',
                'Escort and patrol capabilities',
                'Emergency response and medical support',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
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
            className="bg-amber-50 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discuss Your Security Requirements?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our ballistic security boat services
              and how we can protect your offshore operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

