'use client'

import { FaHeart, FaCode } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary py-8 px-4 border-t border-accent/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-mono text-sm text-gray-400 mb-4">
          <span className="text-purple-400">const</span>{' '}
          <span className="text-blue-400">footer</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-yellow-400">{`{`}</span>
        </div>
        
        <p className="text-gray-300 flex items-center justify-center font-mono">
          <span className="text-blue-400 mr-2">madeWith:</span>
          <FaHeart className="text-red-500 mx-1" />
          <span className="text-white mx-1">+</span>
          <FaCode className="text-accent mx-1" />
          <span className="text-green-400 ml-2">&quot;by Your Name&quot;</span>
        </p>
        
        <p className="text-gray-500 text-sm mt-2 font-mono">
          <span className="text-blue-400">year:</span>{' '}
          <span className="text-yellow-400">{new Date().getFullYear()}</span>
        </p>
        
        <div className="font-mono text-sm text-gray-400 mt-4">
          <span className="text-yellow-400">{`}`}</span>
          <span className="text-white">;</span>
        </div>
        
        <p className="text-gray-500 text-xs mt-4">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
