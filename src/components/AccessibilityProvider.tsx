'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type FontSize = 'normal' | 'large' | 'xlarge'
type Contrast = 'normal' | 'high'

interface AccessibilityContextType {
  fontSize: FontSize
  contrast: Contrast
  setFontSize: (size: FontSize) => void
  setContrast: (contrast: Contrast) => void
  cycleFontSize: () => void
  toggleContrast: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  fontSize: 'normal',
  contrast: 'normal',
  setFontSize: () => {},
  setContrast: () => {},
  cycleFontSize: () => {},
  toggleContrast: () => {},
})

export function useAccessibility() {
  return useContext(AccessibilityContext)
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('normal')
  const [contrast, setContrastState] = useState<Contrast>('normal')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize') as FontSize | null
    const savedContrast = localStorage.getItem('contrast') as Contrast | null
    
    if (savedFontSize) setFontSizeState(savedFontSize)
    if (savedContrast) setContrastState(savedContrast)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Apply font size
    const root = document.documentElement
    switch (fontSize) {
      case 'large':
        root.style.fontSize = '18px'
        break
      case 'xlarge':
        root.style.fontSize = '20px'
        break
      default:
        root.style.fontSize = '16px'
    }
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize, mounted])

  useEffect(() => {
    if (!mounted) return

    // Apply contrast
    if (contrast === 'high') {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
    localStorage.setItem('contrast', contrast)
  }, [contrast, mounted])

  const setFontSize = (size: FontSize) => setFontSizeState(size)
  const setContrast = (c: Contrast) => setContrastState(c)

  const cycleFontSize = () => {
    setFontSizeState((prev) => {
      switch (prev) {
        case 'normal':
          return 'large'
        case 'large':
          return 'xlarge'
        case 'xlarge':
          return 'normal'
      }
    })
  }

  const toggleContrast = () => {
    setContrastState((prev) => (prev === 'normal' ? 'high' : 'normal'))
  }

  return (
    <AccessibilityContext.Provider
      value={{ fontSize, contrast, setFontSize, setContrast, cycleFontSize, toggleContrast }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}
