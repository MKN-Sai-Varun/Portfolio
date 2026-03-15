'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaCode, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function AchievementsPage() {
  const achievements = [
    {
      title: '500+ LeetCode Problems',
      description: 'Solved over 500 problems on LeetCode spanning arrays, graphs, dynamic programming, and system design. Achieved a highest contest rating of 1660.',
      icon: FaCode,
      color: 'from-yellow-400 to-orange-500',
      year: '2023-Present',
      category: 'Competitive Programming',
    },
    {
      title: 'Salesforce Ranger & Agentblazer Innovator',
      description: 'Achieved Salesforce Ranger status and Agentblazer Innovator badge on Trailhead, demonstrating expertise in Salesforce platform and Agentic AI.',
      icon: FaTrophy,
      color: 'from-blue-400 to-cyan-500',
      year: '2024',
      category: 'Certification',
    },
    {
      title: 'GDG KMIT Study Jams — Top 80',
      description: 'Secured a top 80 rank three times in Google Developer Groups KMIT Study Jams, competing across cloud and development challenges.',
      icon: FaMedal,
      color: 'from-green-400 to-emerald-500',
      year: '2023-Present',
      category: 'Community',
    },
    {
      title: 'AI & Deep Learning Certifications',
      description: 'Completed certifications in Artificial Intelligence, Deep Learning, and NPTEL courses, building a strong foundation in modern ML techniques.',
      icon: FaCertificate,
      color: 'from-purple-400 to-pink-500',
      year: '2023-2024',
      category: 'Certification',
    },
    {
      title: 'Salesforce AMTS Step Intern — 2nd Year',
      description: 'Secured a Software Engineering internship at Salesforce in the second year of undergraduate studies, working on backend reliability and idempotency.',
      icon: FaAward,
      color: 'from-red-400 to-rose-500',
      year: '2024',
      category: 'Internship',
    },
    {
      title: 'Volunteering at Salesforce',
      description: 'Volunteered at Salesforce events and initiatives, contributing to community outreach and tech engagement programs during the internship.',
      icon: FaTrophy,
      color: 'from-sky-400 to-blue-500',
      year: '2024',
      category: 'Volunteering',
    },
  ]

  const stats = [
    { label: 'LeetCode Problems', value: '500+', icon: '💻' },
    { label: 'Contest Rating', value: '1660', icon: '📈' },
    { label: 'Salesforce Badges', value: 'Ranger', icon: '🏆' },
    { label: 'GDG Top 80 Ranks', value: '3x', icon: '🎯' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, type: 'spring' },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={cardVariants} className="text-center mb-12">
          <p className="text-gray-400 font-mono mb-2">const achievements = [</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            <Typewriter text="Achievements" speed={100} className="text-accent" />
          </h1>
          <p className="text-gray-400 mt-4">Recognition and milestones along my journey</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-secondary/50 p-6 rounded-xl text-center border border-accent/10"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, transition: { duration: 0.3 } }}
                className="relative bg-secondary rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">{achievement.category}</span>
                </div>
                <div className="relative p-6">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{achievement.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <span className="text-accent font-mono text-sm">{achievement.year}</span>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-gray-500">→</motion.span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity"><Icon /></div>
              </motion.div>
            )
          })}
        </div>

        {/* Quote */}
        <motion.div
          variants={cardVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-mono">];</p>
          <p className="text-gray-300 text-lg mt-6 italic">
            &quot;Success is not final, failure is not fatal: it is the courage to continue that counts.&quot;
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={cardVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/education">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <FaArrowLeft /> Education
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
            >
              Contact <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}