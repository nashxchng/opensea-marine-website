'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Users, Award, Zap, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Rigorous safety protocols and compliance with international maritime standards. Our vessels and rigs undergo regular safety audits, and all crew members are certified in advanced safety training including STCW, firefighting, and emergency response procedures.',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    description:
      'Round-the-clock support and operations to meet your project timelines. Our operations centers are staffed 24/7, ensuring immediate response to any operational needs or emergencies, keeping your projects on schedule.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Experienced maritime professionals with deep industry knowledge. Our team includes certified engineers, master mariners, and drilling specialists with decades of combined experience in Nigeria&apos;s oil & gas sector.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description:
      '15+ years of successful operations in Nigeria&apos;s oil & gas sector. We have completed hundreds of projects, from small-scale operations to major offshore campaigns, consistently delivering on time and within budget.',
  },
  {
    icon: Zap,
    title: 'Efficient Operations',
    description:
      'Streamlined processes and modern equipment for optimal performance. Our fleet is regularly upgraded with the latest technology, and our operational procedures are continuously refined to maximize efficiency and minimize downtime.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      'Personalized service and dedicated account management for every client. Each client is assigned a dedicated operations manager who provides personalized support, coordinates all aspects of your project, and ensures seamless communication throughout.',
  },
]

export default function WhyChooseUs() {
  const iconColors = [
    'from-blue-500 to-cyan-500',
    'from-cyan-500 to-teal-500',
    'from-teal-500 to-green-500',
    'from-green-500 to-emerald-500',
    'from-emerald-500 to-blue-500',
    'from-blue-500 to-indigo-500',
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/landrig.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Opensea Marine?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise with modern technology to deliver
            exceptional maritime services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-ocean-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${iconColors[index]} rounded-lg mb-6 shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

