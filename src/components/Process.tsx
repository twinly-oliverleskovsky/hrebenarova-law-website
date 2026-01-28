'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageCircle, 
  Search, 
  Lightbulb, 
  Scale,
  ArrowRight
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Úvodná konzultácia',
    description: 'Stretneme sa osobne alebo online. Vypočujem váš problém, zistím všetky dôležité detaily a odpoviem na vaše otázky.',
    highlight: 'Prvá konzultácia zdarma',
  },
  {
    number: '02',
    icon: Search,
    title: 'Analýza prípadu',
    description: 'Dôkladne preštudujem všetky dokumenty a právne aspekty vášho prípadu. Zhodnotím možnosti a riziká.',
    highlight: 'Dôkladná príprava',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Návrh riešenia',
    description: 'Predstavím vám možné riešenia, vysvetlím ich výhody aj nevýhody. Spoločne zvolíme najlepšiu stratégiu.',
    highlight: 'Transparentné možnosti',
  },
  {
    number: '04',
    icon: Scale,
    title: 'Právne zastupovanie',
    description: 'Aktívne zastupujem vaše záujmy, vediem rokovania, pripravujem dokumenty a informujem vás o priebehu.',
    highlight: 'Plná podpora',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="proces" className="section-padding bg-forest-900 dark:bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-terracotta-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-terracotta-400 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>

      <div className="container-custom relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-terracotta-300 font-semibold tracking-wider uppercase text-sm mb-4">
            Ako spolupracujeme
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Jednoduchý proces k vyriešeniu vášho prípadu
          </h2>
          <p className="text-lg text-white/70">
            Spolupráca so mnou je jednoduchá a transparentná. V každom kroku viete, 
            čo sa deje a aké sú ďalšie kroky.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-terracotta-400/50 transition-all duration-300 hover:bg-white/10 h-full"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-serif font-bold text-terracotta-400/20">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 bg-terracotta-400 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-forest-900" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-terracotta-400/10 rounded-full">
                    <span className="w-1.5 h-1.5 bg-terracotta-400 rounded-full" />
                    <span className="text-xs text-terracotta-300 font-medium">
                      {step.highlight}
                    </span>
                  </div>
                </motion.div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 transform translate-x-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-terracotta-400/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Ste pripravení začať? Kontaktujte ma ešte dnes.
          </p>
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 165, 116, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta-400 text-forest-900 font-semibold rounded-lg transition-colors"
          >
            Začať spoluprácu
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
