'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBriefcase, FaArrowRight, FaArrowLeft, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function InternshipsPage() {
  const internships = [
    {
      company: 'Tech Company A',
      logo: '🏢',
      position: 'Software Development Intern',
      location: 'San Francisco, CA',
      duration: 'Jun 2023 - Aug 2023',
      type: 'On-site',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing code.',
      achievements: [
        'Built 3 major features that improved user engagement by 25%',
        'Reduced API response time by 40% through optimization',
        'Participated in agile sprints and code reviews',
        'Mentored junior interns on best practices',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Startup B',
      logo: '🚀',
      position: 'Full Stack Developer Intern',
      location: 'New York, NY',
      duration: 'Jan 2023 - May 2023',
      type: 'Hybrid',
      description: 'Worked on both frontend and backend development. Contributed to the architecture and implementation of a new product feature.',
      achievements: [
        'Designed and implemented RESTful APIs',
        'Created responsive UI components using React',
        'Integrated third-party services and APIs',
        'Improved test coverage from 60% to 85%',
      ],
      technologies: ['Next.js', 'Express', 'MongoDB', 'Docker'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Innovation Labs',
      logo: '🔬',
      position: 'Research Intern',
      location: 'Boston, MA',
      duration: 'May 2022 - Aug 2022',
      type: 'Remote',
      description: 'Conducted research on machine learning algorithms and their applications in real-world scenarios.',
      achievements: [
        'Published a research paper on ML optimization',
        'Developed proof-of-concept prototypes',
        'Presented findings to technical team',
        'Collaborated with PhD researchers',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter'],
      color: 'from-green-500 to-emerald-500',
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
            <Typewriter text="Internships" speed={100} className="text-accent" />
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey and the amazing teams I&apos;ve had the privilege to work with.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.company}
                variants={itemVariants}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  className={`absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br ${internship.color} flex items-center justify-center text-lg shadow-lg`}
                >
                  {internship.logo}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-secondary rounded-2xl p-6 shadow-xl border border-accent/10 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent">{internship.position}</h3>
                      <p className="text-xl text-gray-300">{internship.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaCalendar className="text-accent" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                        <FaMapMarkerAlt className="text-accent" />
                        {internship.location} • {internship.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{internship.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-accent mb-2 font-mono">// Key Achievements</p>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, i) => (
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
                    {internship.technologies.map((tech) => (
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