'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'GraphQL', level: 70 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-24 px-4"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-gray-400 font-mono mb-2">&lt;About&gt;</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            <Typewriter text="About Me" speed={100} className="text-accent" />
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            variants={itemVariants}
            className="bg-secondary/50 p-8 rounded-2xl border border-accent/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400 text-sm font-mono ml-2">about.md</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-accent font-mono">## Who I Am</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a passionate developer with a strong foundation in computer science 
                and a love for creating innovative solutions. With experience in both 
                frontend and backend development, I enjoy building full-stack applications 
                that make a difference.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a constant desire 
                to learn. I thrive in collaborative environments and believe in writing 
                clean, maintainable code.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-accent/20">
              <h3 className="text-xl font-bold mb-4 text-accent font-mono">## Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years Experience', value: '3+' },
                  { label: 'Projects Completed', value: '20+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Coffee Cups', value: '∞' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="bg-accent/10 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-accent font-mono">## Skills & Expertise</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm text-accent font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-accent to-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <FaArrowLeft /> Home
            </motion.button>
          </Link>
          <p className="text-gray-400 font-mono">&lt;/About&gt;</p>
          <Link href="/projects">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
            >
              Projects <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}