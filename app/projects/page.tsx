'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Duplicate Order Idempotency',
      description: 'Resolved duplicate order idempotency issue in a Salesforce-integrated system. Designed logic to identify and prevent duplicate order creation with date-based and ID-based validation checks.',
      tech: ['Salesforce', 'Backend', 'Enterprise Systems', 'API Design'],
      github: '',
      live: '',
      color: 'from-blue-500 to-cyan-500',
      image: '🏢',
      category: 'Internship @ Salesforce',
    },
    {
      title: 'CodeGenie',
      description: 'AI-powered VS Code extension providing intelligent code generation, explanations, and inline auto-completions. Features locally hosted LLM inference for privacy and performance.',
      tech: ['VS Code API', 'TypeScript', 'LLMs', 'AI/ML'],
      github: 'https://github.com/kmitofficial/CodeGenie-G335-PS25',
      live: '',
      color: 'from-purple-500 to-pink-500',
      image: '🧞',
      category: 'AI · Developer Tools',
    },
    {
      title: 'EchoTrace',
      description: 'Intelligent logging and trace analysis system for capturing, tracing, and analyzing application logs. Helps developers debug issues and understand execution flows efficiently.',
      tech: ['Python', 'Backend', 'Observability', 'Logging'],
      github: 'https://github.com/MKN-Sai-Varun/EchoTrace',
      live: '',
      color: 'from-green-500 to-emerald-500',
      image: '🔍',
      category: 'Backend · Observability',
    },
    {
      title: 'FusionCast',
      description: 'AI-driven forecasting platform focused on predictive insights for planning and decision-making. Features demand and trend forecasting using data-driven models.',
      tech: ['Python', 'Machine Learning', 'Data Analytics', 'Forecasting'],
      github: 'https://github.com/PranavKasanagottu/FusionCast',
      live: '',
      color: 'from-orange-500 to-yellow-500',
      image: '📈',
      category: 'AI · Data Analytics',
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern, responsive portfolio website with animated backgrounds, typewriter effects, and modular page architecture. Built with focus on clean design and performance.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/MKN-Sai-Varun/Portfolio',
      live: '',
      color: 'from-indigo-500 to-violet-500',
      image: '🌐',
      category: 'Frontend · Personal Branding',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
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
      <div className="max-w-6xl mx-auto">
        <motion.div variants={cardVariants} className="text-center mb-12">
          <p className="text-gray-400 font-mono mb-2">const projects = [</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            <Typewriter text="My Projects" speed={100} className="text-accent" />
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
              
              {/* Project emoji/icon */}
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {project.image}
              </div>
              
              <div className="p-6">
                {/* Category badge */}
                {'category' in project && project.category && (
                  <span className="text-xs font-mono text-gray-500 mb-2 block">
                    {project.category}
                  </span>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <FaCode className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-gray-500 text-sm italic">Internal/Private Project</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - centered 2 cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-secondary rounded-xl overflow-hidden shadow-xl"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
              
              {/* Project emoji/icon */}
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {project.image}
              </div>
              
              <div className="p-6">
                {/* Category badge */}
                {'category' in project && project.category && (
                  <span className="text-xs font-mono text-gray-500 mb-2 block">
                    {project.category}
                  </span>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <FaCode className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-gray-500 text-sm italic">Internal/Private Project</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          variants={cardVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <FaArrowLeft /> About
            </motion.button>
          </Link>
          <p className="text-gray-400 font-mono">];</p>
          <Link href="/internships">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors"
            >
              Internships <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}