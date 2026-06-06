'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTerminal, FaArrowRight, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Link from 'next/link'
import Typewriter from '@/components/Typewriter'
import CodeTypewriter from '@/components/CodeTypewriter'

export default function Home() {
  const codeLines = [
    { text: 'const developer = {', color: 'text-purple-400' },
    { text: 'name: "Varun",', color: 'text-green-400', indent: 1 },
    { text: 'role: "AI Engineer & Full Stack Developer",', color: 'text-green-400', indent: 1 },
    { text: 'skills: ["Machine Learning", "Deep Learning", "LLM"],', color: 'text-yellow-400', indent: 1 },
    { text: 'passion: "Turning ideas into real-world AI solutions"', color: 'text-green-400', indent: 1 },
    { text: '};', color: 'text-purple-400' },
    { text: '', color: '' },
    { text: 'developer.sayHello();', color: 'text-blue-400' },
    { text: '// Output: "Welcome to my portfolio!"', color: 'text-gray-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const quickLinks = [
    { name: 'About Me', href: '/about', color: 'from-blue-500 to-cyan-500' },
    { name: 'Projects', href: '/projects', color: 'from-purple-500 to-pink-500' },
    { name: 'Experience', href: '/internships', color: 'from-green-500 to-emerald-500' },
    { name: 'Contact', href: '/contact', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center px-4 pt-20 pb-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-accent font-mono text-lg inline-flex items-center gap-2">
                <FaTerminal className="animate-pulse" />
                Hello World! I am
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-purple-600"
            >
              <Typewriter
                text="Varun"
                speed={150}
                delay={500}
                cursor={true}
              />
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
            >
              <Typewriter
                text={[
                  "AI Engineer",
                  "Full Stack Developer",
                  "Problem Solver",
                  "Tech Innovator"
                ]}
                speed={80}
                delay={2000}
                loop={true}
                cursor={true}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              AI Engineer and Full Stack Developer building real-world solutions at the intersection of machine learning, backend systems, and modern web. Salesforce SWE Intern at sophomore year.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6 mb-8"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/MKN-Sai-Varun', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mknsvarun/', label: 'LinkedIn' },
                { icon: SiLeetcode, href: 'https://leetcode.com/u/mknsvarun/', label: 'LeetCode' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  <Icon size={30} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-accent/25"
                >
                  Get In Touch
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-accent hover:bg-accent/10 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  View Work
                </motion.button>
              </Link>
              <motion.a
                href="https://drive.google.com/file/d/1xMjvtisJkxKPSLaYW0AqSK34PHY9m3V1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-transparent border-2 border-gray-600 hover:border-accent hover:text-accent text-gray-400 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                <FaDownload className="text-sm" /> Resume
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1eM9anvj2irUX2ZhydpJx_Z8Xf3939y5C/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-transparent border-2 border-gray-600 hover:border-accent hover:text-accent text-gray-400 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                <FaDownload className="text-sm" /> CV
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Code animation */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <CodeTypewriter lines={codeLines} speed={40} lineDelay={300} />
          </motion.div>
        </div>

        {/* Quick navigation cards */}
        <motion.div variants={itemVariants}>
          <h3 className="text-center text-gray-400 font-mono mb-6 text-sm">// Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-secondary/50 p-4 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-between">
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                    <FaArrowRight className="text-accent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
