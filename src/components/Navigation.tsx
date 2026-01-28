'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Scale, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '#o-mne', label: 'O mne' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#preco-ja', label: 'Prečo ja' },
  { href: '#proces', label: 'Spolupráca' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
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
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-3 group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled ? 'bg-forest-900 dark:bg-forest-800' : 'bg-white/10 backdrop-blur-sm'
                }`}
              >
                <Scale className={`w-6 h-6 ${isScrolled ? 'text-terracotta-400' : 'text-terracotta-300'}`} />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                  isScrolled ? 'text-forest-900 dark:text-cream-100' : 'text-white'
                }`}>
                  JUDr. Hrebenárová
                </span>
                <span className={`text-xs tracking-wider uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-terracotta-500 dark:text-terracotta-400' : 'text-terracotta-300'
                }`}>
                  Advokátka
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-terracotta-400 ${
                    isScrolled 
                      ? 'text-dark-700 dark:text-cream-300' 
                      : 'text-white/90'
                  } ${activeSection === link.href.substring(1) ? 'text-terracotta-400' : ''}`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta-400 rounded-full"
                    />
                  )}
                </a>
              ))}
              
              {/* Theme Toggle - Desktop */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'bg-sage-100 dark:bg-dark-700 text-sage-600 dark:text-cream-300 hover:bg-sage-200 dark:hover:bg-dark-600'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
                aria-label={theme === 'light' ? 'Prepnúť na tmavý režim' : 'Prepnúť na svetlý režim'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'light' ? (
                      <Moon className="w-5 h-5" />
                    ) : (
                      <Sun className="w-5 h-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.a
                href="tel:+421905718706"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'bg-terracotta-400 text-forest-900 hover:bg-terracotta-300'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+421 905 718 706</span>
                <span className="xl:hidden">Volať</span>
              </motion.a>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Theme Toggle - Mobile */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? 'text-forest-900 dark:text-cream-100'
                    : 'text-white'
                }`}
                aria-label={theme === 'light' ? 'Prepnúť na tmavý režim' : 'Prepnúť na svetlý režim'}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled ? 'text-forest-900 dark:text-cream-100' : 'text-white'
                }`}
                aria-label={isMobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-forest-900/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-cream-100 dark:bg-dark-900 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-sage-200 dark:border-dark-700">
                  <span className="font-serif font-bold text-forest-900 dark:text-cream-100">Menu</span>
                  <div className="flex items-center gap-2">
                    {/* Theme Toggle in Mobile Menu */}
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg bg-sage-100 dark:bg-dark-700 text-sage-600 dark:text-cream-300 hover:bg-sage-200 dark:hover:bg-dark-600 transition-colors"
                      aria-label={theme === 'light' ? 'Prepnúť na tmavý režim' : 'Prepnúť na svetlý režim'}
                    >
                      {theme === 'light' ? (
                        <Moon className="w-5 h-5" />
                      ) : (
                        <Sun className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-sage-600 dark:text-dark-400 hover:text-forest-900 dark:hover:text-cream-100 transition-colors"
                      aria-label="Zavrieť menu"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`block py-3 text-lg font-medium transition-colors ${
                            activeSection === link.href.substring(1)
                              ? 'text-terracotta-500'
                              : 'text-dark-700 dark:text-cream-300 hover:text-terracotta-500'
                          }`}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                
                {/* Theme info in mobile menu */}
                <div className="px-6 py-4 border-t border-sage-200 dark:border-dark-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-sage-600 dark:text-dark-400">
                      {theme === 'light' ? 'Svetlý režim' : 'Tmavý režim'}
                    </span>
                    <button
                      onClick={toggleTheme}
                      className={`relative w-14 h-8 rounded-full transition-colors ${
                        theme === 'dark' ? 'bg-terracotta-400' : 'bg-sage-300'
                      }`}
                    >
                      <motion.div
                        layout
                        className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                        style={{ left: theme === 'dark' ? 'calc(100% - 28px)' : '4px' }}
                      >
                        {theme === 'light' ? (
                          <Sun className="w-4 h-4 text-terracotta-500" />
                        ) : (
                          <Moon className="w-4 h-4 text-forest-900" />
                        )}
                      </motion.div>
                    </button>
                  </div>
                </div>

                <div className="p-6 border-t border-sage-200 dark:border-dark-700 bg-sage-50 dark:bg-dark-800">
                  <a
                    href="tel:+421905718706"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-terracotta-400 text-forest-900 font-medium rounded-lg hover:bg-terracotta-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +421 905 718 706
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
