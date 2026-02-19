'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-ocean-600 via-cyan-600 to-blue-600 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/PSV03.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/90 via-cyan-600/90 to-blue-600/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-ocean-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how Opensea Marine can support your maritime
            operations and oil & gas projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="group bg-white text-ocean-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+2349166898766"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-ocean-100">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <a
                href="tel:+2349166898766"
                className="hover:text-white transition-colors"
              >
                +234 916 689 8766
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:info@opensea.com.ng"
                className="hover:text-white transition-colors"
              >
                info@opensea.com.ng
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

