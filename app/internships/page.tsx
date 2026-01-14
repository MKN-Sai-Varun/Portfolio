'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBriefcase, FaArrowRight, FaArrowLeft, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import { SiSalesforce } from 'react-icons/si'
import Typewriter from '@/components/Typewriter'

export default function InternshipsPage() {
  const experiences = [
    {
      company: 'Salesforce',
      logo: 'salesforce',
      position: 'Software Engineering Intern',
      location: 'Hyderabad, India',
      duration: 'May 2024 - Jul 2024',
      type: 'On-site',
      description: 'Worked on a critical backend reliability issue related to duplicate order creation in a Salesforce-integrated system. The problem stemmed from non-idempotent request handling in distributed and event-driven systems, where retries, delays, or repeated triggers could result in data inconsistency and downstream processing issues.',
      achievements: [
        'Analyzed existing order creation flows to identify duplicate request processing points',
        'Designed and implemented idempotency logic with order identifier and time-based validation',
        'Introduced conditional checks using order metadata and timestamps for safe request handling',
        'Optimized backend queries to minimize unnecessary Salesforce API calls',
        'Collaborated with senior engineers on edge case validation and production standards',
        'Explored Agentic AI capabilities and MuleSoft integration patterns',
      ],
      technologies: ['Salesforce', 'Apex', 'MuleSoft', 'Agentic AI', 'REST APIs', 'Java'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'KMIT GDG (Google Developer Groups)',
      logo: '🎯',
      position: 'Active Member',
      location: 'KMIT, Hyderabad',
      duration: 'Aug 2023 - Present',
      type: 'On-campus',
      description: 'Active participant in Google Developer Groups at KMIT. Engaged in study jams, workshops, and collaborative learning sessions focused on Google technologies.',
      achievements: [
        'Participated in multiple Google Cloud Study Jams',
        'Completed hands-on labs on GCP and Google technologies',
        'Collaborated with peers on technical projects',
        'Engaged in community learning and knowledge sharing',
      ],
      technologies: ['Google Cloud', 'Firebase', 'Android', 'Flutter'],
      color: 'from-green-500 to-yellow-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, rotateX: -15, y: 50 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-24 px-4"
      style={{ perspective: 1000 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-gray-400 font-mono mb-2">// Work Experience</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            <Typewriter text="Experience" speed={100} className="text-accent" />
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey and the communities I have been part of.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[140px] md:left-[180px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={itemVariants}
                className="relative flex gap-4 md:gap-8"
              >
                {/* Left side - Date */}
                <div className="w-[120px] md:w-[160px] flex-shrink-0 text-right pr-4">
                  <div className="text-accent font-mono text-sm font-semibold">
                    {experience.duration.split(' - ')[0]}
                  </div>
                  <div className="text-gray-500 font-mono text-xs">
                    {experience.duration.split(' - ')[1]}
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    {experience.type}
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  className={`absolute left-[132px] md:left-[172px] w-4 h-4 rounded-full bg-gradient-to-br ${experience.color} shadow-lg z-10`}
                />

                {/* Right side - Content */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex-1 bg-secondary rounded-2xl p-6 shadow-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 ml-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">
                      {experience.logo === 'salesforce' ? (
                        <SiSalesforce className="text-[#00A1E0]" />
                      ) : (
                        experience.logo
                      )}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-accent">{experience.position}</h3>
                      <p className="text-gray-300">{experience.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="text-accent" />
                    {experience.location}
                  </div>

                  <p className="text-gray-300 mb-4 text-sm">{experience.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-accent mb-2 font-mono">// Key Achievements</p>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <FaArrowRight className="text-accent mt-1 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <FaArrowLeft /> Projects
            </motion.button>
          </Link>
          <Link href="/education">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
            >
              Education <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}