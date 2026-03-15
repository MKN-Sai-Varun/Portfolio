'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaArrowLeft, FaJava } from 'react-icons/fa'
import {
  SiPython, SiTensorflow, SiPytorch, SiReact, SiNextdotjs,
  SiFastapi, SiFlask, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiAmazon, SiScikitlearn,
} from 'react-icons/si'
import Typewriter from '@/components/Typewriter'

export default function AboutPage() {
  const ref = useRef(null)

  const skillGroups = [
    {
      category: 'AI / ML',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      ],
    },
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      ],
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Flask', icon: SiFlask, color: '#ffffff' },
        { name: 'Java', icon: FaJava, color: '#007396' },
      ],
    },
    {
      category: 'Databases & Tools',
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
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

            <h2 className="text-2xl font-bold mb-4 text-accent font-mono">## Who Am I ?</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a computer science undergraduate and AI-focused full-stack developer who enjoys building systems that solve real problems, not just demos. My work sits at the intersection of artificial intelligence, backend engineering, and modern web development.
              </p>
              <p>
                I have hands-on experience working with Python, Java, Flask, FastAPI, React, and Next.js, and have built projects ranging from AI-powered developer tools to full-stack platforms. Having interned at Salesforce, I have learned the importance of writing clean, maintainable, and production-ready code.
              </p>
              <p>
                What drives me is curiosity and consistency. I enjoy understanding how things work under the hood - whether it is optimizing an algorithm, designing an API, or integrating large language models into real applications.
              </p>
              <p>
                Outside of development, I explore emerging AI technologies, refine my problem-solving skills on platforms like LeetCode, and contribute to meaningful projects. My goal is simple: build impactful software while continuously growing as an engineer.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-accent/20">
              <h3 className="text-xl font-bold mb-4 text-accent font-mono">## Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'LeetCode Rating', value: '1660' },
                  { label: 'Projects Completed', value: '5+' },
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
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-accent font-mono">## Skills & Expertise</h2>
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-5 border border-accent/10 hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`h-1 w-6 rounded-full bg-gradient-to-r ${group.color}`} />
                  <p className="text-sm font-mono text-gray-400">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: gi * 0.1 + si * 0.05 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="flex items-center gap-2 bg-gray-800/60 px-3 py-2 rounded-xl border border-gray-700/50 hover:border-accent/30 transition-all"
                      >
                        <Icon style={{ color: skill.color }} className="text-lg" />
                        <span className="text-sm text-gray-300">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}

            {/* Extracurriculars */}
            <div>
              <div className="flex items-center gap-2 mb-4 mt-2">
                <div className="h-1 w-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                <p className="text-sm font-mono text-gray-400">Beyond the Code</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🏓', label: 'Table Tennis', desc: 'Competitive player, love the fast pace' },
                  { emoji: '📖', label: 'Reading', desc: 'Real mysteries, thrillers, and tech deep-dives' },
                  { emoji: '⚽', label: 'Sports', desc: 'Football, cricket — anything with a team' },
                  { emoji: '🤝', label: 'Networking', desc: 'Connecting with devs and builders worldwide' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-secondary/50 rounded-2xl p-4 border border-accent/10 hover:border-accent/30 transition-all text-center"
                  >
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <p className="text-white text-sm font-semibold mb-1">{item.label}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/">
            <motion.button whileHover={{ x: -5 }} className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
              <FaArrowLeft /> Home
            </motion.button>
          </Link>
          <p className="text-gray-400 font-mono">&lt;/About&gt;</p>
          <Link href="/projects">
            <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors">
              Projects <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
