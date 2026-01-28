'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Koľko stojí úvodná konzultácia?',
    answer: 'Prvá konzultácia je bezplatná a nezáväzná. Počas nej si vypočujem váš problém, posúdim možnosti riešenia a navrhnem ďalší postup. Až potom sa rozhodnete, či budeme spolupracovať.',
  },
  {
    question: 'Ako dlho trvá rozvodové konanie?',
    answer: 'Dĺžka rozvodového konania závisí od mnohých faktorov - či ide o sporový alebo nesporový rozvod, či sú maloletí, majetok na vyporiadanie. Nesporový rozvod môže trvať 2-4 mesiace, sporový aj niekoľko rokov. Na konzultácii vám dám presnejší odhad pre váš konkrétny prípad.',
  },
  {
    question: 'Zastupujete aj mimo Prešova?',
    answer: 'Áno, poskytujem právne služby v celom Prešovskom kraji a v prípade potreby aj v iných častiach Slovenska. Pre klientov z ďalších miest ponúkam aj online konzultácie.',
  },
  {
    question: 'Aké dokumenty potrebujem priniešť na konzultáciu?',
    answer: 'Záleží od typu prípadu. Vo všeobecnosti je dobré priniešť všetky relevantné zmluvy, súdne rozhodnutia, korešpondenciu a ďalšie dokumenty súvisiace s vaším prípadom. Pred konzultáciou vám emailom pošlem zoznam odporúčaných dokumentov.',
  },
  {
    question: 'Ako funguje platba za právne služby?',
    answer: 'Ponúkam transparentné ceny. Väčšinou pracujem na hodinovej sadzbe alebo dohodnutej odmene za celý prípad. Pred začiatím spolupráce vám dám písomný rozpočet, aby ste vedeli, s čím počítať. Platba je možná prevodom alebo v hotovosti.',
  },
  {
    question: 'Môžem vás kontaktovať aj mimo pracovných hodín?',
    answer: 'V naliehavých prípadoch som dostupná aj mimo štandardných hodín. Pre bežnú komunikáciu používame email alebo telefón počas pracovných dní. Na správy odpovedám spravidla do 24 hodín.',
  },
  {
    question: 'Poskytujete aj online konzultácie?',
    answer: 'Áno, pre klientov, ktorí to preferujú alebo nemôžu prísť osobne, ponúkam konzultácie cez video hovor (Zoom, Google Meet, Teams). Online konzultácia má rovnakú kvalitu ako osobné stretnutie.',
  },
  {
    question: 'Čo ak súdny spor prehrám?',
    answer: 'Vždy sa snažím dosiahnuť najlepší možný výsledok, ale výsledok súdneho sporu nikdy nemožno garantovať. Pred začiatím konania vás vždy oboznámim s možnými rizikami a šancami na úspech, aby ste sa mohli informovane rozhodnúť.',
  },
]

function FAQItem({ 
  faq, 
  isOpen, 
  onToggle, 
  index 
}: { 
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className={`border rounded-xl transition-all duration-300 ${
          isOpen 
            ? 'border-terracotta-300 dark:border-terracotta-500 bg-white dark:bg-dark-800 shadow-lg' 
            : 'border-sage-200 dark:border-dark-700 bg-white dark:bg-dark-800 hover:border-sage-300 dark:hover:border-dark-600'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-serif font-semibold text-forest-900 dark:text-cream-100 pr-4">
            {faq.question}
          </span>
          <motion.span 
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isOpen ? 'bg-terracotta-400 text-white' : 'bg-sage-100 dark:bg-dark-700 text-sage-600 dark:text-dark-300'
            }`}
          >
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </motion.span>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-sage-600 dark:text-dark-300 leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-cream-100 dark:bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-terracotta-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Často kladené otázky
          </span>
          <h2 className="heading-secondary mb-6">
            Máte otázky? Mám odpovede
          </h2>
          <p className="text-body">
            Tu nájdete odpovede na najčastejšie otázky, ktoré dostávam od klientov. 
            Ak nenájdete odpoveď na vašu otázku, neváhajte ma kontaktovať.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sage-600 dark:text-dark-400 mb-4">
            Nenašli ste odpoveď na vašu otázku?
          </p>
          <a href="#kontakt" className="btn-primary">
            Opýtajte sa ma priamo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
