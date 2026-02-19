'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceImageShowcaseProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  title?: string
}

export default function ServiceImageShowcase({
  images,
  title,
}: ServiceImageShowcaseProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          </motion.div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-3">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-gray-600 text-center">
                  {image.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




