'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeaturedSectionProps {
  title: string
  description: string
  image: string
  imageAlt: string
  link?: string
  linkText?: string
  reverse?: boolean
}

export default function FeaturedSection({
  title,
  description,
  image,
  imageAlt,
  link,
  linkText,
  reverse = false,
}: FeaturedSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={reverse ? 'lg:order-2' : ''}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              {description.split('\n').map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            {link && linkText && (
              <Link
                href={link}
                className="inline-flex items-center space-x-2 mt-6 text-ocean-600 font-semibold hover:text-ocean-700 group"
              >
                <span>{linkText}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${
              reverse ? 'lg:order-1' : ''
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}




