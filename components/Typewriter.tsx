'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string | string[]
  speed?: number
  delay?: number
  loop?: boolean
  cursor?: boolean
  className?: string
  onComplete?: () => void
}

export default function Typewriter({
  text,
  speed = 100,
  delay = 0,
  loop = false,
  cursor = true,
  className = '',
  onComplete
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textArrayIndex, setTextArrayIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const texts = Array.isArray(text) ? text : [text]
  const currentText = texts[textArrayIndex]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else if (Array.isArray(text) && texts.length > 1) {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (!loop) {
          setIsComplete(true)
          onComplete?.()
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setTextArrayIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, delay > 0 && currentIndex === 0 && !isDeleting ? delay : isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, currentText, text, texts, speed, delay, loop, onComplete])

  return (
    <span className={className}>
      {displayText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block ml-1 w-[3px] h-[1em] bg-accent align-middle"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
