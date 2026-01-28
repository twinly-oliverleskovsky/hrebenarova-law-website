'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Sun, 
  Moon, 
  Type, 
  Contrast, 
  X,
  Settings,
  ChevronUp
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useAccessibility } from './AccessibilityProvider'

export default function FloatingUI() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()
  const { fontSize, contrast, cycleFontSize, toggleContrast } = useAccessibility()

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getFontSizeLabel = () => {
    switch (fontSize) {
      case 'large':
        return 'Veľké'
      case 'xlarge':
        return 'Extra veľké'
      default:
        return 'Normálne'
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        className="fixed top-0 left-0 right-0 h-1 bg-terracotta-400 origin-left z-50"
        style={{ transformOrigin: 'left' }}
      />

      {/* Floating Controls Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl p-4 mb-2 border border-sage-100 dark:border-dark-700"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-sage-100 dark:border-dark-700">
                <span className="font-semibold text-forest-900 dark:text-white text-sm">Nastavenia</span>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-sage-400 hover:text-sage-600 dark:text-dark-400 dark:hover:text-dark-200 transition-colors"
                  aria-label="Zavrieť nastavenia"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 min-w-[200px]">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-sage-50 dark:bg-dark-700 hover:bg-sage-100 dark:hover:bg-dark-600 transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm text-forest-900 dark:text-white">
                    {theme === 'light' ? (
                      <Sun className="w-4 h-4 text-terracotta-500" />
                    ) : (
                      <Moon className="w-4 h-4 text-terracotta-400" />
                    )}
                    Tmavý režim
                  </span>
                  <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                    theme === 'dark' ? 'bg-terracotta-400 justify-end' : 'bg-sage-300 justify-start'
                  }`}>
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </button>

                {/* Font Size */}
                <button
                  onClick={cycleFontSize}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-sage-50 dark:bg-dark-700 hover:bg-sage-100 dark:hover:bg-dark-600 transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm text-forest-900 dark:text-white">
                    <Type className="w-4 h-4 text-terracotta-500" />
                    Veľkosť písma
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-terracotta-100 dark:bg-terracotta-900 text-terracotta-600 dark:text-terracotta-300 rounded-lg">
                    {getFontSizeLabel()}
                  </span>
                </button>

                {/* High Contrast */}
                <button
                  onClick={toggleContrast}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-sage-50 dark:bg-dark-700 hover:bg-sage-100 dark:hover:bg-dark-600 transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm text-forest-900 dark:text-white">
                    <Contrast className="w-4 h-4 text-terracotta-500" />
                    Vysoký kontrast
                  </span>
                  <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                    contrast === 'high' ? 'bg-terracotta-400 justify-end' : 'bg-sage-300 justify-start'
                  }`}>
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Settings Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowSettings(!showSettings)}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors ${
              showSettings 
                ? 'bg-forest-900 text-white' 
                : 'bg-white dark:bg-dark-800 text-sage-600 dark:text-dark-300 hover:text-forest-900 dark:hover:text-white'
            }`}
            aria-label="Nastavenia prístupnosti"
          >
            <Settings className="w-5 h-5" />
          </motion.button>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-terracotta-400 text-forest-900 rounded-full shadow-lg flex items-center justify-center hover:bg-terracotta-300 transition-colors"
            aria-label="Späť na vrch stránky"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Sticky Call Button */}
      <motion.a
        href="tel:+421905718706"
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-6 left-6 z-40 md:hidden flex items-center gap-2 px-5 py-3 bg-forest-900 text-white rounded-full shadow-lg hover:bg-forest-800 transition-colors"
        aria-label="Zavolať"
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Zavolať</span>
      </motion.a>
    </>
  )
}
