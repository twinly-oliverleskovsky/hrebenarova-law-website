'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Clock, 
  UserCheck, 
  Lock, 
  Wallet, 
  MapPin,
  CheckCircle2
} from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Dlhoročné skúsenosti',
    description: 'Viac ako 20 rokov praxe v rôznych oblastiach práva mi umožňuje efektívne riešiť aj tie najzložitejšie prípady.',
  },
  {
    icon: UserCheck,
    title: 'Individuálny prístup',
    description: 'Každý klient je pre mňa dôležitý. Venujem sa vám osobne a hľadám riešenie šité na mieru vašej situácii.',
  },
  {
    icon: Lock,
    title: 'Diskrétnosť a mlčanlivosť',
    description: 'Advokátska mlčanlivosť je základom dôvery. Vaše informácie sú u mňa v absolútnom bezpečí.',
  },
  {
    icon: Wallet,
    title: 'Férové ceny',
    description: 'Transparentné oceňovanie služieb. Vždy vopred viete, koľko budete platiť. Bez skrytých poplatkov.',
  },
  {
    icon: MapPin,
    title: 'Dostupnosť v celom kraji',
    description: 'Poskytujem právne služby v celom Prešovskom kraji. Som vám blízko, keď ma potrebujete.',
  },
]

const stats = [
  { value: '1000+', label: 'Spokojných klientov' },
  { value: '20+', label: 'Rokov praxe' },
  { value: '98%', label: 'Úspešnosť' },
]

export default function WhyMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="preco-ja" className="section-padding bg-cream-100 dark:bg-dark-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 right-0 w-1/3 h-full bg-gradient-to-l from-sage-50 dark:from-dark-800 to-transparent -translate-y-1/2" />

      <div className="container-custom relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-terracotta-500 font-semibold tracking-wider uppercase text-sm mb-4">
              Prečo si vybrať mňa
            </span>
            <h2 className="heading-secondary mb-6">
              Spoľahlivý partner pre vaše právne záležitosti
            </h2>
            <p className="text-body mb-10">
              V právnom svete je dôvera kľúčová. Mojou prioritou je budovať dlhodobé 
              vzťahy s klientmi založené na profesionalite, transparentnosti a osobnom prístupe.
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 cursor-default"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-forest-900 dark:bg-forest-800 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-terracotta-300" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-forest-900 dark:text-cream-100 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-sage-600 dark:text-dark-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-forest-900 dark:bg-forest-950 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-terracotta-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-forest-900" />
                  </div>
                  <div>
                    <span className="block text-white font-serif font-bold text-xl">Garancie</span>
                    <span className="text-white/60 text-sm">Pre každého klienta</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    'Prvá konzultácia zdarma',
                    'Transparentné ceny bez prekvapení',
                    'Rýchla reakcia do 24 hodín',
                    'Osobný prístup ku každému',
                    'Pravidelné informovanie o prípade',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <span className="w-2 h-2 bg-terracotta-400 rounded-full flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <span className="block text-2xl md:text-3xl font-serif font-bold text-terracotta-300">
                        {stat.value}
                      </span>
                      <span className="text-xs text-white/60">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta-400/10 rounded-bl-full" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-4 border border-sage-100 dark:border-dark-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-terracotta-500" />
                </div>
                <div>
                  <span className="block font-semibold text-forest-900 dark:text-cream-100">Prešov</span>
                  <span className="text-sm text-sage-500 dark:text-dark-400">Grešova 7</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
