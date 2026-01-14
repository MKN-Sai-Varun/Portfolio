'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with modern technologies for scalability and performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-purple-500 to-pink-500',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management tool with drag-and-drop functionality, team features, and smart notifications.',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-blue-500 to-cyan-500',
      image: '📋',
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chatbot powered by machine learning with natural language processing capabilities and context awareness.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'OpenAI'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-green-500 to-emerald-500',
      image: '🤖',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with real-time data, 7-day forecasts, interactive maps, and location-based alerts.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-orange-500 to-yellow-500',
      image: '⛅',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive analytics dashboard for social media management with scheduling, insights, and multi-platform support.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-red-500 to-rose-500',
      image: '📊',
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracker with price alerts, historical data, and profit/loss analysis.',
      tech: ['React Native', 'CoinGecko API', 'Firebase', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-indigo-500 to-violet-500',
      image: '💰',
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
          {projects.map((project, index) => (
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