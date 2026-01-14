'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TransitionLinkProps {
  children: ReactNode
  className?: string
}

// Staggered children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const staggerItem = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

// Text reveal animation
export const textReveal = {
  initial: { y: '100%' },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

// Slide in from different directions
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay = 0) => ({
  initial: {
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay,
    },
  },
})

// Scale up animation
export const scaleUp = (delay = 0) => ({
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay,
    },
  },
})

// Floating animation for decorative elements
export function FloatingElement({ children, className = '', delay = 0 }: TransitionLinkProps & { delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// Glow pulse animation
export function GlowPulse({ children, className = '' }: TransitionLinkProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          '0 0 20px rgba(59, 130, 246, 0.3)',
          '0 0 40px rgba(59, 130, 246, 0.6)',
          '0 0 20px rgba(59, 130, 246, 0.3)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic hover effect
export function MagneticHover({ children, className = '' }: TransitionLinkProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}

// Reveal on scroll
export function RevealOnScroll({ children, className = '' }: TransitionLinkProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
