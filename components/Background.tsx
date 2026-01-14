'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-animated" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating orbs */}
      <motion.div
        className="floating-orb orb-1"
        animate={{
          x: [0, 50, -30, 50, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-orb orb-2"
        animate={{
          x: [0, -40, 30, -20, 0],
          y: [0, 30, -40, 20, 0],
          scale: [1, 0.95, 1.1, 0.98, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-orb orb-3"
        animate={{
          x: [0, 30, -50, 20, 0],
          y: [0, -20, 30, -40, 0],
          scale: [1, 1.05, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Glowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, delay: 1 }}
        />
      </svg>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-full" />
      
      {/* Code rain effect (subtle) */}
      <div className="absolute inset-0 code-lines opacity-30" />
    </div>
  )
}

// Floating geometric shapes component
export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 60, x: '10%', y: '20%', delay: 0 },
    { type: 'square', size: 40, x: '85%', y: '15%', delay: 1 },
    { type: 'triangle', size: 50, x: '75%', y: '70%', delay: 2 },
    { type: 'circle', size: 30, x: '20%', y: '80%', delay: 1.5 },
    { type: 'square', size: 25, x: '50%', y: '10%', delay: 0.5 },
  ]

  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute border border-accent/20 ${
            shape.type === 'circle' ? 'rounded-full' :
            shape.type === 'square' ? 'rounded-lg rotate-45' :
            ''
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: shape.type === 'square' ? [45, 90, 45] : [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Animated code brackets
export function CodeBrackets() {
  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden font-mono text-cyan-500/20 text-8xl font-bold">
      <motion.span
        className="absolute top-20 left-10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {'</>'}
      </motion.span>
      <motion.span
        className="absolute bottom-20 right-10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        {'{ }'}
      </motion.span>
      <motion.span
        className="absolute top-1/2 right-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        {'( )'}
      </motion.span>
      <motion.span
        className="absolute top-1/3 left-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      >
        {'[ ]'}
      </motion.span>
    </div>
  )
}
