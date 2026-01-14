'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTrophy, FaMedal, FaAward, FaStar, FaCertificate, FaCode, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function AchievementsPage() {
  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'Won 1st place at National Tech Hackathon 2023 for developing an innovative healthcare solution that helps patients track medications.',
      icon: FaTrophy,
      color: 'from-yellow-400 to-orange-500',
      year: '2023',
      category: 'Competition',
    },
    {
      title: '5-Star Coder',
      description: 'Achieved 5-star rating on CodeChef and Expert level on Codeforces. Solved 500+ competitive programming problems.',
      icon: FaStar,
      color: 'from-blue-400 to-cyan-500',
      year: '2023',
      category: 'Competitive Programming',
    },
    {
      title: 'Open Source Hero',
      description: 'Contributed to 15+ open source projects including React, Next.js ecosystem. Accumulated 500+ GitHub stars collectively.',
      icon: FaCode,
      color: 'from-green-400 to-emerald-500',
      year: '2022-Present',
      category: 'Open Source',
    },
    {
      title: 'Research Publication',
      description: 'Published research paper in IEEE conference on machine learning optimization techniques for edge computing.',
      icon: FaCertificate,
      color: 'from-purple-400 to-pink-500',
      year: '2023',
      category: 'Research',
    },
    {
      title: 'Dean\'s List',
      description: 'Consistently maintained position in Dean\'s List for 6 consecutive semesters for academic excellence.',
      icon: FaMedal,
      color: 'from-red-400 to-rose-500',
      year: '2020-2024',
      category: 'Academic',
    },
    {
      title: 'Tech Conference Speaker',
      description: 'Delivered talks at 3 major tech conferences on modern web development practices and React patterns.',
      icon: FaAward,
      color: 'from-indigo-400 to-violet-500',
      year: '2023',
      category: 'Speaking',
    },
  ]

  const stats = [
    { label: 'GitHub Stars', value: '500+', icon: '⭐' },
    { label: 'Problems Solved', value: '500+', icon: '💻' },
    { label: 'Hackathons Won', value: '5', icon: '🏆' },
    { label: 'Contributions', value: '200+', icon: '🔧' },
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
                whileHover={{ 
                  scale: 1.05, 
                  rotate: Math.random() > 0.5 ? 2 : -2,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-secondary rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Top badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
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
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <span className="text-accent font-mono text-sm">{achievement.year}</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-gray-500"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon />
                </div>
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