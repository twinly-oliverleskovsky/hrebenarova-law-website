'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Users, 
  Building2, 
  Heart, 
  Briefcase, 
  Gavel, 
  Home, 
  Banknote, 
  FileText,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Občianske právo',
    description: 'Zastupovanie v občianskoprávnych sporoch, vymáhanie nárokov, ochrana osobnosti a majetkových práv.',
    items: ['Zmluvy', 'Náhrada škody', 'Dedičské spory', 'Susedské spory'],
  },
  {
    icon: Building2,
    title: 'Obchodné právo',
    description: 'Komplexné právne služby pre podnikateľov a obchodné spoločnosti.',
    items: ['Zakladanie firiem', 'Obchodné zmluvy', 'Likvidácia', 'Súdne spory'],
  },
  {
    icon: Heart,
    title: 'Rodinné právo',
    description: 'Citlivý prístup k rodinným záležitostiam s ohľadom na záujmy všetkých zúčastnených.',
    items: ['Rozvod', 'Výživné', 'Starostlivosť o deti', 'Vyporiadanie BSM'],
  },
  {
    icon: Briefcase,
    title: 'Pracovné právo',
    description: 'Ochrana práv zamestnancov aj zamestnávateľov v pracovnoprávnych vzťahoch.',
    items: ['Pracovné zmluvy', 'Neplatná výpoveď', 'Pracovné úrazy', 'Diskriminácia'],
  },
  {
    icon: Gavel,
    title: 'Trestné právo',
    description: 'Obhajoba v trestnom konaní a zastupovanie poškodených.',
    items: ['Obhajoba obvinených', 'Zastupovanie poškodených', 'Priestupky'],
  },
  {
    icon: Home,
    title: 'Právo nehnuteľností',
    description: 'Právne služby súvisiace s kúpou, predajom a prenájmom nehnuteľností.',
    items: ['Kúpne zmluvy', 'Prenájom', 'Vecné bremená', 'Kataster'],
  },
  {
    icon: Banknote,
    title: 'Vymáhanie pohľadávok',
    description: 'Efektívne vymáhanie dlhov a pohľadávok mimosúdnou aj súdnou cestou.',
    items: ['Upomienky', 'Súdne vymáhanie', 'Exekúcie', 'Konkurzy'],
  },
  {
    icon: FileText,
    title: 'Zmluvy a dokumenty',
    description: 'Príprava, kontrola a revízia všetkých typov právnych dokumentov.',
    items: ['Kontrola zmlúv', 'Tvorba zmlúv', 'Právne analýzy', 'Stanoviská'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="sluzby" className="section-padding bg-sage-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-terracotta-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Právne služby
          </span>
          <h2 className="heading-secondary mb-6">
            Komplexné právne poradenstvo pre váš pokoj duše
          </h2>
          <p className="text-body">
            Ponúkam široké spektrum právnych služieb, ktoré pokrývajú väčšinu bežných 
            právnych situácií. Pre každý prípad nájdem individuálne riešenie.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-sage-100 dark:border-dark-700 hover:border-terracotta-300 dark:hover:border-terracotta-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-forest-900 dark:bg-forest-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-terracotta-400 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-terracotta-300 group-hover:text-forest-900 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl text-forest-900 dark:text-cream-100 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-sage-600 dark:text-dark-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 mb-5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-dark-700 dark:text-cream-300">
                    <span className="w-1.5 h-1.5 bg-terracotta-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1 text-sm font-medium text-terracotta-500 hover:text-terracotta-600 transition-colors group/link"
              >
                Viac informácií
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-sage-600 dark:text-dark-400 mb-6">
            Nenašli ste vašu oblasť? Kontaktujte ma pre individuálnu konzultáciu.
          </p>
          <a href="#kontakt" className="btn-primary">
            Konzultovať môj prípad
          </a>
        </motion.div>
      </div>
    </section>
  )
}
