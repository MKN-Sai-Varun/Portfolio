'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendar, FaBook, FaArrowRight, FaArrowLeft, FaTrophy } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function EducationPage() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Keshav Memorial Institute of Technology',
      logo: '🎓',
      duration: '2023 - 2027',
      gpa: '9.6/10',
      description: 'Specialized in software engineering and artificial intelligence. Active member of coding club and tech society.',
      coursework: ['Data Structures & Algorithms', 'Database Systems', 'Machine Learning', 'Web Development', 'System Design', 'Computer Networks'],
      achievements: ['Achieved internship in second year of UG at Salesforce'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      degree: 'Intermediate',
      institution: 'Nano Junior College',
      logo: '📚',
      duration: '2020 - 2022',
      gpa: '96.7%',
      description: 'Focused on Mathematics and Computer Science. Won several inter-school coding competitions.',
      coursework: ['Mathematics', 'Physics', 'Chemistry'],
      achievements: [],
      color: 'from-green-500 to-teal-500',
    },
  ]

  const certifications = [
    { name: 'NPTEL Python for DSA', issuer: 'NPTEL', year: '2024', icon: '🐍' },
    { name: 'IBM Certified Data Science with Python', issuer: 'IBM', year: '2024', icon: '📊' },
    { name: 'Prompt Design for Vertex AI', issuer: 'Google Cloud Skill Boost', year: '2024', icon: '🤖' },
    { name: 'Develop GenAI Apps with Gemini and Streamlit', issuer: 'Google Cloud Skill Boost', year: '2024', icon: '✨' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-gray-400 font-mono mb-2">class Education {'{'}</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            <Typewriter text="Education" speed={100} className="text-accent" />
          </h1>
          <p className="text-gray-400 mt-4">Academic journey and continuous learning</p>
        </motion.div>


        {/* Main Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary rounded-2xl overflow-hidden shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`} />

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}
                  >
                    {edu.logo}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-accent mb-1">{edu.degree}</h3>
                    <p className="text-xl text-gray-300 mb-3">{edu.institution}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-accent" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBook className="text-accent" />
                        GPA: {edu.gpa}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{edu.description}</p>

                    {/* Achievements */}
                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-mono text-accent mb-3 flex items-center gap-2">
                        <FaTrophy /> Achievements
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <motion.span
                            key={achievement}
                            whileHover={{ scale: 1.05 }}
                            className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    )}

                    {/* Coursework */}
                    <div>
                      <p className="text-sm font-mono text-gray-400 mb-3">// Key Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-accent mb-6 font-mono">// Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="bg-secondary/50 p-4 rounded-xl border border-accent/10 hover:border-accent/30 transition-all flex items-center gap-4"
              >
                <div className="text-3xl">{cert.icon}</div>
                <div>
                  <h4 className="font-semibold text-white">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/internships">
            <motion.button whileHover={{ x: -5 }} className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
              <FaArrowLeft /> Internships
            </motion.button>
          </Link>
          <p className="text-gray-400 font-mono">{'}'}</p>
          <Link href="/achievements">
            <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-accent hover:text-blue-400 transition-colors">
              Achievements <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
