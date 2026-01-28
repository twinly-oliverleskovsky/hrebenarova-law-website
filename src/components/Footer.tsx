'use client'

import { Scale, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'O mne', href: '#o-mne' },
  { label: 'Právne služby', href: '#sluzby' },
  { label: 'Prečo ja', href: '#preco-ja' },
  { label: 'Spolupráca', href: '#proces' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

const services = [
  'Občianske právo',
  'Obchodné právo',
  'Rodinné právo',
  'Pracovné právo',
  'Trestné právo',
  'Právo nehnuteľností',
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
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
    <footer className="bg-forest-950 dark:bg-dark-950 text-white relative">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-terracotta-400 rounded-lg">
                <Scale className="w-6 h-6 text-forest-900" />
              </div>
              <div>
                <span className="block font-serif font-bold text-lg">JUDr. Hrebenárová</span>
                <span className="text-xs text-terracotta-300 tracking-wider uppercase">Advokátka</span>
              </div>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Profesionálne právne služby v Prešove s individuálnym prístupom ku každému klientovi. 
              Vaša právna istota je mojou prioritou.
            </p>
            
            {/* SAK Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <div className="w-8 h-8 bg-terracotta-400/20 rounded-full flex items-center justify-center">
                <Scale className="w-4 h-4 text-terracotta-300" />
              </div>
              <span className="text-xs text-white/80">Člen Slovenskej advokátskej komory</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Rýchle odkazy</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-terracotta-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Právne služby</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#sluzby"
                    onClick={(e) => handleNavClick(e, '#sluzby')}
                    className="text-sm text-white/60 hover:text-terracotta-300 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Grešova+7,+080+01+Prešov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-terracotta-300 transition-colors"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Grešova 7<br />080 01 Prešov</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+421905718706"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-terracotta-300 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+421 905 718 706</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:iveta.hrebenarova@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-terracotta-300 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>iveta.hrebenarova@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} JUDr. Iveta Hrebenárová. Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-terracotta-300 transition-colors">
              Ochrana osobných údajov
            </a>
            <a href="#" className="hover:text-terracotta-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
