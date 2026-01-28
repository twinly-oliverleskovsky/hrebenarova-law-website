'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2,
  Loader2
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresa kancelárie',
    lines: ['Grešova 7', '080 01 Prešov'],
    link: 'https://maps.google.com/?q=Grešova+7,+080+01+Prešov',
  },
  {
    icon: Phone,
    title: 'Telefón',
    lines: ['+421 51 771 02 89', '+421 905 718 706'],
    link: 'tel:+421905718706',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['iveta.hrebenarova@gmail.com'],
    link: 'mailto:iveta.hrebenarova@gmail.com',
  },
  {
    icon: Clock,
    title: 'Úradné hodiny',
    lines: ['Po - Pi: 9:00 - 17:00', 'So - Ne: Zatvorené'],
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', phone: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="kontakt" className="section-padding bg-cream-100 dark:bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50/50 dark:from-dark-800/50 to-cream-100 dark:to-dark-900" />

      <div className="container-custom relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-terracotta-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Kontakt
          </span>
          <h2 className="heading-secondary mb-6">
            Neváhajte ma kontaktovať
          </h2>
          <p className="text-body">
            Máte právny problém alebo otázku? Vyplňte formulár alebo ma kontaktujte priamo. 
            Prvá konzultácia je nezáväzná a zdarma.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 border border-sage-100 dark:border-dark-700">
              <h3 className="font-serif font-bold text-xl text-forest-900 dark:text-cream-100 mb-6">
                Napíšte mi správu
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-sage-100 dark:bg-sage-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-forest-700 dark:text-forest-400" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-forest-900 dark:text-cream-100 mb-2">
                    Správa bola odoslaná!
                  </h4>
                  <p className="text-sage-600 dark:text-dark-400">
                    Ďakujem za váš záujem. Ozvem sa vám čo najskôr.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label-text">
                        Meno a priezvisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Ján Novák"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-text">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="jan.novak@email.sk"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-text">
                      Telefón
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+421 900 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="label-text">
                      Správa *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Opíšte váš právny problém alebo otázku..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr"
                      required
                      className="mt-1 w-4 h-4 text-terracotta-400 border-sage-300 dark:border-dark-600 rounded focus:ring-terracotta-400 bg-white dark:bg-dark-700"
                    />
                    <label htmlFor="gdpr" className="text-sm text-sage-600 dark:text-dark-400">
                      Súhlasím so spracovaním osobných údajov za účelom odpovede na moju správu. 
                      Viac informácií nájdete v zásadách ochrany osobných údajov. *
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-accent disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Odosielam...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Odoslať správu
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-sage-50 dark:bg-dark-800 rounded-xl p-5 hover:bg-sage-100 dark:hover:bg-dark-700 transition-colors"
              >
                {item.link ? (
                  <a href={item.link} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-forest-900 dark:bg-forest-800 rounded-lg flex items-center justify-center group-hover:bg-terracotta-400 transition-colors">
                      <item.icon className="w-6 h-6 text-terracotta-300 group-hover:text-forest-900 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-900 dark:text-cream-100 mb-1">
                        {item.title}
                      </h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm text-sage-600 dark:text-dark-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-forest-900 dark:bg-forest-800 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-terracotta-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-900 dark:text-cream-100 mb-1">
                        {item.title}
                      </h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm text-sage-600 dark:text-dark-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.5!2d21.2393!3d48.9977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eed45ed6b5e69%3A0x3d4b6f6ab3fba6d4!2sGre%C5%A1ova%207%2C%20080%2001%20Pre%C5%A1ov!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa kancelárie"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
