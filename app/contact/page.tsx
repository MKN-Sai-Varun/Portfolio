'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { SiLeetcode } from 'react-icons/si'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } else {
      setError(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'mknsvarun@gmail.com', href: 'mailto:mknsvarun@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Hyderabad, Telangana', href: '#' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/MKN-Sai-Varun', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mknsvarun', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/mknsvarun/', label: 'LeetCode', color: 'hover:bg-orange-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
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
      <div className="max-w-5xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-gray-400 font-mono mb-2">async function sendMessage() {'{'}</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            <Typewriter text="Get In Touch" speed={100} className="text-accent" />
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Terminal-style contact info */}
            <div className="bg-secondary rounded-2xl p-6 border border-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 text-sm font-mono ml-2">contact.json</span>
              </div>
              
              <pre className="font-mono text-sm overflow-x-auto">
                <code>
                  <span className="text-purple-400">{'{'}</span>{'\n'}
                  <span className="text-blue-400 ml-4">&quot;email&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">&quot;mknsvarun@gmail.com&quot;</span>
                  <span className="text-white">,</span>{'\n'}
                  <span className="text-blue-400 ml-4">&quot;location&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">&quot;Hyderabad, Telangana&quot;</span>
                  <span className="text-white">,</span>{'\n'}
                  <span className="text-blue-400 ml-4">&quot;available&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-400">true</span>
                  <span className="text-white">,</span>{'\n'}
                  <span className="text-blue-400 ml-4">&quot;openTo&quot;</span>
                  <span className="text-white">: [</span>{'\n'}
                  <span className="text-green-400 ml-8">&quot;Internships&quot;</span>
                  <span className="text-white">,</span>{'\n'}
                  <span className="text-green-400 ml-8">&quot;AIML Based Research Programs&quot;</span>
                  <span className="text-white">,</span>{'\n'}
                  <span className="text-green-400 ml-8">&quot;Collaborations&quot;</span>{'\n'}
                  <span className="text-white ml-4">]</span>{'\n'}
                  <span className="text-purple-400">{'}'}</span>
                </code>
              </pre>
            </div>

            {/* Contact buttons */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-accent/10 transition-all group border border-transparent hover:border-accent/20"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Icon className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 font-mono text-sm mb-4">// Social Links</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <Icon className="text-2xl text-gray-300" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Discussion' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-300 mb-2 font-mono text-sm">
                    {focused === field.name ? `> ${field.label}` : field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white font-mono border border-accent/20 focus:border-accent transition-all"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-gray-300 mb-2 font-mono text-sm">
                  {focused === 'message' ? '> Message' : 'Message'}
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={5}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-white font-mono resize-none border border-accent/20 focus:border-accent transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 font-mono transition-all ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : error
                    ? 'bg-red-600 text-white'
                    : 'bg-accent hover:bg-blue-600 text-white shadow-lg shadow-accent/25'
                }`}
              >
                {submitted ? (
                  <>
                    <FaCheckCircle /> Message Sent!
                  </>
                ) : error ? (
                  <>Something went wrong. Try again.</>
                ) : (
                  <>
                    <FaPaperPlane /> sendMessage()
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mt-16 pt-8 border-t border-accent/10"
        >
          <Link href="/achievements">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <FaArrowLeft /> Achievements
            </motion.button>
          </Link>
          <p className="text-gray-400 font-mono">{'}'}</p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-accent/20 text-accent px-4 py-2 rounded-lg hover:bg-accent/30 transition-colors"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}