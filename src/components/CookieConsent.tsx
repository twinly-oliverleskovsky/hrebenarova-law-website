'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setIsVisible(false)
    setShowSettings(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-sage-100 dark:border-dark-700 overflow-hidden">
              {!showSettings ? (
                // Main Banner
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-xl flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-terracotta-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-lg text-forest-900 dark:text-cream-100 mb-2">
                        Táto stránka používa cookies
                      </h3>
                      <p className="text-sm text-sage-600 dark:text-dark-400 mb-4">
                        Používame cookies na zlepšenie vášho zážitku na našej stránke. 
                        Niektoré sú nevyhnutné pre správne fungovanie, zatiaľ čo iné nám 
                        pomáhajú analyzovať návštevnosť a zlepšovať naše služby.
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <motion.button
                          onClick={handleAcceptAll}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-2.5 bg-terracotta-400 text-forest-900 font-medium rounded-lg hover:bg-terracotta-300 transition-colors"
                        >
                          Prijať všetky
                        </motion.button>
                        <motion.button
                          onClick={handleAcceptNecessary}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-2.5 bg-sage-100 dark:bg-dark-700 text-sage-700 dark:text-cream-300 font-medium rounded-lg hover:bg-sage-200 dark:hover:bg-dark-600 transition-colors"
                        >
                          Len nevyhnutné
                        </motion.button>
                        <button
                          onClick={() => setShowSettings(true)}
                          className="flex items-center gap-2 px-4 py-2.5 text-sage-600 dark:text-dark-400 font-medium hover:text-forest-900 dark:hover:text-cream-100 transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          Nastavenia
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={handleAcceptNecessary}
                      className="flex-shrink-0 p-2 text-sage-400 dark:text-dark-500 hover:text-sage-600 dark:hover:text-dark-300 transition-colors"
                      aria-label="Zavrieť"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                // Settings Panel
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif font-bold text-lg text-forest-900 dark:text-cream-100">
                      Nastavenia cookies
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-sage-400 dark:text-dark-500 hover:text-sage-600 dark:hover:text-dark-300 transition-colors"
                      aria-label="Späť"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Necessary Cookies */}
                    <div className="flex items-center justify-between p-4 bg-sage-50 dark:bg-dark-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-forest-900 dark:text-cream-100">Nevyhnutné cookies</h4>
                        <p className="text-sm text-sage-600 dark:text-dark-400">
                          Potrebné pre základné fungovanie stránky. Nemožno vypnúť.
                        </p>
                      </div>
                      <div className="w-12 h-6 bg-terracotta-400 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-center justify-between p-4 bg-sage-50 dark:bg-dark-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-forest-900 dark:text-cream-100">Analytické cookies</h4>
                        <p className="text-sm text-sage-600 dark:text-dark-400">
                          Pomáhajú nám pochopiť, ako návštevníci používajú stránku.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics ? 'bg-terracotta-400 justify-end' : 'bg-sage-300 dark:bg-dark-500 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between p-4 bg-sage-50 dark:bg-dark-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-forest-900 dark:text-cream-100">Marketingové cookies</h4>
                        <p className="text-sm text-sage-600 dark:text-dark-400">
                          Používajú sa na zobrazenie relevantnej reklamy.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.marketing ? 'bg-terracotta-400 justify-end' : 'bg-sage-300 dark:bg-dark-500 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={handleSavePreferences}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 bg-terracotta-400 text-forest-900 font-medium rounded-lg hover:bg-terracotta-300 transition-colors"
                    >
                      Uložiť nastavenia
                    </motion.button>
                    <motion.button
                      onClick={handleAcceptAll}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2.5 bg-forest-900 dark:bg-forest-800 text-white font-medium rounded-lg hover:bg-forest-800 dark:hover:bg-forest-700 transition-colors"
                    >
                      Prijať všetky
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
