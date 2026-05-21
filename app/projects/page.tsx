'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight, FaArrowLeft, FaTimes, FaExpand } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  color: string
  image: string
  category: string
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: 'Duplicate Order Idempotency',
      description: 'Resolved duplicate order idempotency issue in a Salesforce-integrated system. Designed logic to identify and prevent duplicate order creation with date-based and ID-based validation checks. Implemented robust backend safeguards ensuring that retried requests or network failures never result in duplicate records, maintaining data integrity across the platform.',
      tech: ['Salesforce', 'Backend', 'Enterprise Systems', 'API Design'],
      github: '',
      live: '',
      color: 'from-blue-500 to-cyan-500',
      image: '🏢',
      category: 'Internship @ Salesforce',
    },
    {
      title: 'CodeGenie',
      description: 'AI-powered VS Code extension providing intelligent code generation, explanations, and inline auto-completions. Features locally hosted LLM inference for privacy and performance. Supports multiple programming languages, offers context-aware suggestions, and integrates seamlessly into the developer workflow without sending code to external servers.',
      tech: ['VS Code API', 'TypeScript', 'LLMs', 'AI/ML'],
      github: 'https://github.com/kmitofficial/CodeGenie-G335-PS25',
      live: '',
      color: 'from-purple-500 to-pink-500',
      image: '🧞',
      category: 'AI · Developer Tools',
    },
    {
      title: 'EchoTrace',
      description: 'AI-powered personal timeline platform. Log micro-events throughout your day and get behavioral insights, productivity scoring, mindset inference, and a conversational AI Coach. EchoTrace turns your daily activity logs into meaningful personal analytics, helping you understand patterns, optimize your routines, and grow with data-driven self-awareness.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Groq AI'],
      github: 'https://github.com/MKN-Sai-Varun/EchoTrace',
      live: 'https://echo-trace-gamma.vercel.app/',
      color: 'from-green-500 to-emerald-500',
      image: '🔍',
      category: 'Backend · Observability',
    },
    {
      title: 'FusionCast',
      description: 'AI-driven forecasting platform focused on predictive insights for planning and decision-making. Features demand and trend forecasting using data-driven models. FusionCast combines classical time-series methods with modern ML pipelines to deliver accurate, explainable forecasts that help businesses and individuals plan proactively.',
      tech: ['Python', 'Machine Learning', 'Data Analytics', 'Forecasting'],
      github: 'https://github.com/PranavKasanagottu/FusionCast',
      live: '',
      color: 'from-orange-500 to-yellow-500',
      image: '📈',
      category: 'AI · Data Analytics',
    },
    {
      title: 'Expression Analysis for Dyslexic Kids',
      description: 'Uses computer vision and deep learning to analyze facial expressions of dyslexic children during educational gameplay. Identifies emotions like engagement and frustration to optimize game design, tailoring experiences to individual learning needs and improving outcomes. The system provides real-time emotion feedback to educators, enabling adaptive learning interventions that significantly boost engagement and comprehension for children with dyslexia.',
      tech: ['Python', 'Computer Vision', 'Deep Learning', 'OpenCV'],
      github: 'https://github.com/MKN-Sai-Varun/Expression_Analysis-',
      live: '',
      color: 'from-indigo-500 to-violet-500',
      image: '🧠',
      category: 'AI · Computer Vision',
    },
  ]

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

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

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-secondary rounded-xl overflow-hidden shadow-xl cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

      {/* Expand hint */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-1.5">
          <FaExpand className="text-white text-xs" />
        </div>
      </div>

      {/* Project emoji/icon */}
      <div className="absolute top-6 right-12 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
        {project.image}
      </div>

      <div className="p-6">
        {/* Category badge */}
        {project.category && (
          <span className="text-xs font-mono text-gray-500 mb-2 block">
            {project.category}
          </span>
        )}

        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
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
            <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs cursor-pointer hover:bg-accent/20 hover:text-accent transition-colors">
              +{project.tech.length - 4} more
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> Demo
            </motion.a>
          )}
          {!project.github && !project.live && (
            <span className="text-gray-500 text-sm italic">Internal/Private Project</span>
          )}
          <span className="ml-auto text-xs text-gray-600 group-hover:text-accent/60 transition-colors flex items-center gap-1">
            <FaExpand className="text-xs" /> Click to expand
          </span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
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
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Bottom row - centered 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {projects.slice(3).map((project) => (
              <ProjectCard key={project.title} project={project} />
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

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${selectedProject.color} rounded-t-2xl`} />

                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/15 transition-all rounded-full p-2 z-10"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-2xl">{selectedProject.image}</span>
                    </div>
                    <div>
                      {selectedProject.category && (
                        <span className="text-xs font-mono text-gray-500 block mb-1">
                          {selectedProject.category}
                        </span>
                      )}
                      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r ${selectedProject.color} opacity-30 mb-6`} />

                  {/* Full description */}
                  <div className="mb-6">
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                      About this project
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-[15px]">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* All tech tags */}
                  <div className="mb-8">
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-lg text-sm font-mono"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-white/10">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 bg-gradient-to-r ${selectedProject.color} text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg`}
                      >
                        <FaGithub /> View Code
                      </motion.a>
                    )}
                    {selectedProject.live && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                    {!selectedProject.github && !selectedProject.live && (
                      <span className="text-gray-500 text-sm italic self-center">
                        🔒 Internal / Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}