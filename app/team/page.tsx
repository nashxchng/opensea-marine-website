'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Briefcase } from 'lucide-react'

interface TeamMember {
  name: string
  title: string
  image: string
  bio: string
  qualifications: string[]
  experience: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Anthonia Hadiza Nwamanna',
    title: 'President and Founder',
    image: '/images/team/tonia-nwamanna.jpeg',
    bio: 'Provides strategic leadership and long-term vision across the company\'s operations. Oversees corporate direction, stakeholder engagement, regulatory relationships, and expansion strategy across the Upstream, Midstream, and Downstream divisions.',
    qualifications: [
      'B.Sc. in Sociology, University of Ibadan',
      'Recognized entrepreneur in sustainable enterprises',
    ],
    experience: 'Over 17 years in Oil & Gas, commodities trading, and agribusiness',
  },
  {
    name: 'Kingsley Ananenu',
    title: 'Vice President',
    image: '/images/team/kingsley-ananenu.jpeg',
    bio: 'Provides strategic oversight across corporate governance, systems development, performance management, and business transformation initiatives. Strengthens operational controls and reporting frameworks across the organization.',
    qualifications: [
      'BSc (Hons) Business Information Systems, University of Wales, Cardiff',
      'LLB (Hons), University of Wales, Cardiff',
    ],
    experience: 'Enterprise systems architecture & regulatory program delivery',
  },
  {
    name: 'John Onyekweli Opene',
    title: 'Managing Director/CEO - Upstream',
    image: '/images/team/john-opene.jpeg',
    bio: 'Leads the Upstream Division, overseeing rig acquisition, leasing, drilling operations, well completions, workovers, and rig maintenance. Ensures safe, efficient, and cost-effective drilling delivery in line with international HSE standards.',
    qualifications: [
      'B.Sc. in Physics',
      'IWCF Well Control Level 4 Certified',
    ],
    experience: 'Over 20 years across land, swamp, and offshore drilling environments',
  },
  {
    name: 'Obiakume Cleopatra Akinruli',
    title: 'Managing Director/CEO - Midstream & Downstream',
    image: '/images/team/obiakume-cleopatra.jpeg',
    bio: 'Heads the Midstream and Downstream divisions, overseeing marine transportation, tug and security vessel coordination, logistics support, procurement systems, and offshore trading.',
    qualifications: [
      'MSc. Industrial & Labour Relations, University of Lagos',
      'Currently pursuing Executive MBA',
    ],
    experience: 'Over 16 years in operational management, compliance & performance transformation',
  },
  {
    name: 'Balogun Moshood Ayotunde, ACA',
    title: 'Senior Financial Manager',
    image: '/images/team/balogun-ayotunde.jpeg',
    bio: 'Responsible for financial strategy, budgeting, reporting, tax compliance, and internal controls. Ensures financial integrity and strategic resource allocation across the company.',
    qualifications: [
      'Chartered Accountant (ACA)',
      'B.Sc. Accounting (Second Class Upper), University of Lagos',
    ],
    experience: 'Financial consolidation, treasury management & regulatory reporting',
  },
]

export default function TeamPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Executive Leadership Team
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the experienced professionals driving Opensea Marine&apos;s vision
              and delivering excellence across Nigeria&apos;s oil & gas sector.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Card Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-[3px] border-blue-500/30 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: member.name === 'Kingsley Ananenu' ? 'center 20%' : 'center' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-1 truncate">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Details */}
                <div className="space-y-4 border-t border-blue-500/20 pt-6">
                  {/* Qualifications */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                        Qualifications
                      </span>
                    </div>
                    <ul className="text-sm text-slate-400 space-y-1 ml-6">
                      {member.qualifications.map((qual, idx) => (
                        <li key={idx} className="list-disc">
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                        Experience
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 ml-6">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

