'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ 
  children, 
  className = '',
  speed = 0.5 
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

// Animated Background Shapes
export function AnimatedShapes() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-terracotta-200/30 dark:bg-terracotta-900/20 rounded-full blur-3xl"
      />
      
      {/* Shape 2 */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-sage-200/30 dark:bg-sage-900/20 rounded-full blur-3xl"
      />

      {/* Floating dots */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-terracotta-400/40 rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-forest-400/40 rounded-full"
      />
    </div>
  )
}

// Animated Gradient Background
export function AnimatedGradient({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-sage-800 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-terracotta-500/10 to-transparent"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-sage-500/10 to-transparent"
      />
    </div>
  )
}
