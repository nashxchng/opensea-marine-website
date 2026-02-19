'use client'

import { motion } from 'framer-motion'
import { Ship, Users, Award, Globe } from 'lucide-react'

const stats = [
  {
    icon: Ship,
    value: '50+',
    label: 'Vessels & Rigs',
    description: 'Fleet capacity',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Expert Team',
    description: 'Maritime professionals',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
  {
    icon: Globe,
    value: '100+',
    label: 'Projects Completed',
    description: 'Successful operations',
  },
]

export default function Stats() {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-cyan-500 to-teal-500',
    'from-teal-500 to-green-500',
    'from-green-500 to-emerald-500',
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/swamprig.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-full mb-4 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

