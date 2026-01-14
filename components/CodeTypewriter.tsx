'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CodeTypewriterProps {
  lines: { text: string; color?: string; indent?: number }[]
  speed?: number
  lineDelay?: number
  className?: string
}

export default function CodeTypewriter({
  lines,
  speed = 50,
  lineDelay = 500,
  className = ''
}: CodeTypewriterProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [completedLines, setCompletedLines] = useState<string[]>([])
  const [currentLineText, setCurrentLineText] = useState('')

  useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const currentLine = lines[currentLineIndex]

    if (currentCharIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setCurrentLineText(currentLine.text.slice(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCompletedLines([...completedLines, currentLine.text])
        setCurrentLineText('')
        setCurrentCharIndex(0)
        setCurrentLineIndex(currentLineIndex + 1)
      }, lineDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex, lines, completedLines, speed, lineDelay])

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="bg-secondary/80 rounded-lg p-4 backdrop-blur-sm border border-accent/20">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-400 text-xs ml-2">portfolio.tsx</span>
        </div>
        <div className="space-y-1">
          {completedLines.map((line, index) => (
            <div key={index} style={{ paddingLeft: `${(lines[index]?.indent || 0) * 16}px` }}>
              <span className={lines[index]?.color || 'text-gray-300'}>{line}</span>
            </div>
          ))}
          {currentLineIndex < lines.length && (
            <div style={{ paddingLeft: `${(lines[currentLineIndex]?.indent || 0) * 16}px` }}>
              <span className={lines[currentLineIndex]?.color || 'text-gray-300'}>
                {currentLineText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="text-accent"
              >
                █
              </motion.span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
