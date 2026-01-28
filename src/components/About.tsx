'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Heart, Scale } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Dôvernosť',
    description: 'Vaše informácie sú u mňa v absolútnom bezpečí. Advokátska mlčanlivosť je pre mňa sväté.',
  },
  {
    icon: Award,
    title: 'Profesionalita',
    description: 'Dlhoročné skúsenosti a neustále vzdelávanie garantujú kvalitné právne služby.',
  },
  {
    icon: Heart,
    title: 'Individuálny prístup',
    description: 'Každý klient a každý prípad je jedinečný. Vždy hľadám najlepšie riešenie práve pre vás.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="o-mne" className="section-padding bg-cream-100 dark:bg-dark-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100 dark:bg-sage-900/20 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta-100 dark:bg-terracotta-900/20 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="container-custom relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Photo Placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sage-100 dark:bg-dark-800">
              {/* Placeholder for attorney photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-sage-400 dark:text-dark-500">
                <Scale className="w-24 h-24 mb-4 text-sage-300 dark:text-dark-600" />
                <p className="text-sm font-medium">Fotografia advokátky</p>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-terracotta-400/30 rounded-xl pointer-events-none" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 border border-sage-100 dark:border-dark-700"
            >
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-terracotta-400">20+</span>
                <span className="text-sm text-sage-600 dark:text-dark-400">rokov praxe</span>
              </div>
            </motion.div>

            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-terracotta-400 rounded-tl-2xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-terracotta-500 font-semibold tracking-wider uppercase text-sm mb-4">
              O mne
            </span>
            <h2 className="heading-secondary mb-6">
              Vaša právna istota v Prešove
            </h2>
            <div className="space-y-4 text-body mb-10">
              <p>
                Som JUDr. Iveta Hrebenárová, advokátka s dlhoročnou praxou v oblasti práva. 
                Mojou prioritou je poskytovať profesionálne právne služby s osobným prístupom 
                ku každému klientovi.
              </p>
              <p>
                V právnickej praxi sa venujem širokému spektru právnych oblastí, od občianskeho 
                a obchodného práva, cez rodinné a pracovné právo, až po zastupovanie v trestných 
                veciach. Mojím cieľom je nájsť pre vás to najlepšie riešenie vášho právneho problému.
              </p>
              <p>
                Som členkou Slovenskej advokátskej komory a neustále sa vzdelávam, aby som vám 
                mohla ponúknuť aktuálne a kvalitné právne poradenstvo.
              </p>
            </div>

            {/* Values */}
            <div className="grid gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-sage-50 dark:hover:bg-dark-800 transition-colors cursor-default"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-terracotta-500" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-forest-900 dark:text-cream-100 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-sage-600 dark:text-dark-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
