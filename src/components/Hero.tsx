'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Phone, Calendar, Sparkles } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector('#kontakt')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleScrollDown = () => {
    const element = document.querySelector('#o-mne')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 gradient-forest" />
        
        {/* Animated Background Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-terracotta-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 bg-sage-500/10 rounded-full blur-3xl"
        />
      </motion.div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent Lines with Animation */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 160 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-terracotta-400 to-transparent" 
      />
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 160 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 right-0 w-1 bg-gradient-to-t from-terracotta-400 to-transparent" 
      />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-20 h-20 border border-terracotta-400/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-20 w-32 h-32 border border-terracotta-400/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-terracotta-400 rounded-full hidden lg:block"
      />

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 container-custom text-center px-4 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 cursor-default"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-terracotta-400 rounded-full"
            />
            <span className="text-sm text-white/90 font-medium">Advokátska kancelária v Prešove</span>
          </motion.div>

          {/* Main Heading with Stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              JUDr. Iveta
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="block text-terracotta-300"
            >
              Hrebenárová
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Profesionálne právne služby v Prešove s&nbsp;individuálnym prístupom ku každému klientovi
          </motion.p>

          {/* CTA Buttons with Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={handleScrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 165, 116, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 px-8 py-4 bg-terracotta-400 text-forest-900 font-semibold rounded-lg shadow-lg overflow-hidden transition-colors"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Calendar className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Dohodnúť konzultáciu</span>
              <Sparkles className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.a
              href="tel:+421905718706"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              +421 905 718 706
            </motion.a>
          </motion.div>

          {/* Trust Indicators with Stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
          >
            {[
              { icon: '✓', text: 'Člen SAK' },
              { icon: '✓', text: '20+ rokov praxe' },
              { icon: '✓', text: 'Prešovský kraj' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, color: 'rgba(255,255,255,0.9)' }}
                className="flex items-center gap-2 cursor-default"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-terracotta-400/20 text-terracotta-400 text-xs">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Posunúť nadol"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}
