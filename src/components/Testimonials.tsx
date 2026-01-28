'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'Pani doktorka mi pomohla v ťažkej životnej situácii pri rozvode. Vďaka jej profesionálnemu prístupu a ľudskému pochopeniu som získala starostlivosť o deti. Veľmi odporúčam.',
    author: 'Mária K.',
    location: 'Prešov',
    service: 'Rodinné právo',
    rating: 5,
  },
  {
    id: 2,
    text: 'Výbornadvokátka, ktorá vie poradiť aj v komplikovaných obchodných záležitostiach. Pomohla mi so zakladaním firmy a všetkými potrebnými zmluvami. Komunikácia bola vždy rýchla a profesionálna.',
    author: 'Peter M.',
    location: 'Sabinov',
    service: 'Obchodné právo',
    rating: 5,
  },
  {
    id: 3,
    text: 'S JUDr. Hrebenárovou spolupracujem už niekoľko rokov. Vždy sa môžem spoľahnúť na kvalitné právne poradenstvo. Férové ceny a individuálny prístup.',
    author: 'Ján H.',
    location: 'Prešov',
    service: 'Občianske právo',
    rating: 5,
  },
  {
    id: 4,
    text: 'Pomohla mi vyriešiť komplikovaný dedičský spor, ktorý sa ťahal roky. Jej skúsenosti a trpezlivosť boli kľúčové pre úspešné vyriešenie prípadu.',
    author: 'Anna S.',
    location: 'Bardejov',
    service: 'Dedičské právo',
    rating: 5,
  },
  {
    id: 5,
    text: 'Rýchla a efektívna pomoc pri vymáhaní pohľadávky. Všetko bolo vyriešené do mesiaca. Oceňujem profesionalitu a transparentnú komunikáciu.',
    author: 'Michal D.',
    location: 'Prešov',
    service: 'Vymáhanie pohľadávok',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-sage-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-100 dark:bg-terracotta-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-100 dark:bg-forest-900/20 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-terracotta-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Referencie
          </span>
          <h2 className="heading-secondary mb-6">
            Čo hovoria moji klienti
          </h2>
          <p className="text-body">
            Spokojnosť klientov je pre mňa prioritou. Tu sú niektoré z ohlasov 
            na moje právne služby.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-xl p-8 md:p-12 relative border border-sage-100 dark:border-dark-700">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-terracotta-400 rounded-xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta-400 text-terracotta-400" />
                ))}
              </div>

              {/* Quote Text */}
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-dark-700 dark:text-cream-200 leading-relaxed mb-8 italic"
              >
                "{testimonials[currentIndex].text}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-between flex-wrap gap-4"
              >
                <div>
                  <p className="font-serif font-bold text-forest-900 dark:text-cream-100 text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sage-500 dark:text-dark-400 text-sm">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={prevTestimonial}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-sage-100 dark:bg-dark-700 hover:bg-sage-200 dark:hover:bg-dark-600 flex items-center justify-center transition-colors group"
                    aria-label="Predchádzajúca referencia"
                  >
                    <ChevronLeft className="w-5 h-5 text-sage-600 dark:text-dark-300 group-hover:text-forest-900 dark:group-hover:text-cream-100 transition-colors" />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonial}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-sage-100 dark:bg-dark-700 hover:bg-sage-200 dark:hover:bg-dark-600 flex items-center justify-center transition-colors group"
                    aria-label="Ďalšia referencia"
                  >
                    <ChevronRight className="w-5 h-5 text-sage-600 dark:text-dark-300 group-hover:text-forest-900 dark:group-hover:text-cream-100 transition-colors" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-terracotta-400'
                      : 'w-2 bg-sage-300 dark:bg-dark-600 hover:bg-sage-400 dark:hover:bg-dark-500'
                  }`}
                  aria-label={`Zobraziť referenciu ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sage-500 dark:text-dark-400 text-sm">
            Viac ako <span className="font-semibold text-forest-900 dark:text-cream-100">500 spokojných klientov</span> za 20 rokov praxe
          </p>
        </motion.div>
      </div>
    </section>
  )
}
