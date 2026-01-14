'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaTrophy, FaEnvelope } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '/', icon: FaHome },
  { name: 'About', href: '/about', icon: FaUser },
  { name: 'Projects', href: '/projects', icon: FaCode },
  { name: 'Internships', href: '/internships', icon: FaBriefcase },
  { name: 'Education', href: '/education', icon: FaGraduationCap },
  { name: 'Achievements', href: '/achievements', icon: FaTrophy },
  { name: 'Contact', href: '/contact', icon: FaEnvelope },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-accent/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-accent font-mono cursor-pointer"
            >
              &lt;Portfolio /&gt;
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-accent bg-accent/10' 
                            : 'text-gray-300 hover:text-accent hover:bg-accent/5'
                        }`}
                      >
                        <Icon size={14} />
                        {item.name}
                      </motion.div>
                      
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent focus:outline-none p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary/95 backdrop-blur-md border-t border-accent/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-accent bg-accent/10' 
                          : 'text-gray-300 hover:text-accent hover:bg-accent/5'
                      }`}
                    >
                      <Icon size={18} />
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="mobile-indicator"
                          className="ml-auto w-2 h-2 rounded-full bg-accent"
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
