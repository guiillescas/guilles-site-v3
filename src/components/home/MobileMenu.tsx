'use client'

import { useState, useEffect } from "react"
import { gsap } from "gsap"

const menuItems = [
  {
    label: 'Home',
    href: '#home',
    gradient: 'from-cyan-400 to-cyan-600'
  },
  {
    label: 'Projects',
    href: '#projects',
    gradient: 'from-emerald-400 to-emerald-600'
  },
  {
    label: 'Experience',
    href: '#experience',
    gradient: 'from-amber-400 to-amber-600'
  },
  {
    label: 'About',
    href: '#about',
    gradient: 'from-rose-400 to-rose-600'
  }
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      gsap.fromTo(
        '.mobile-drawer',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      
      gsap.fromTo(
        '.mobile-menu-item',
        { 
          opacity: 0,
          x: -50
        },
        { 
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      )
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  function handleLinkClick() {
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div 
          className="w-full h-[60px] rounded-[30px] backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-center justify-between w-full h-full px-5">
            <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 via-emerald-400 to-rose-400 bg-clip-text text-transparent">
              G
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="mobile-drawer fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div 
            className="absolute top-20 left-4 right-4 bottom-4 rounded-[30px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
              backdropFilter: 'blur(24px) saturate(180%) brightness(110%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(110%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            }}
          >
            <nav className="flex flex-col items-start justify-center h-full px-8 gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="mobile-menu-item w-full"
                >
                  <div className="group relative">
                    <div className={`text-4xl font-bold bg-linear-to-r ${item.gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 group-hover:translate-x-2`}>
                      {item.label}
                    </div>
                    <div className={`h-1 bg-linear-to-r ${item.gradient} rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left mt-2`} />
                  </div>
                </a>
              ))}
              
              <div className="mobile-menu-item mt-8 pt-8 border-t border-white/10 w-full">
                <div className="flex gap-6">
                  <a
                    href="https://github.com/guiillescas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/guilherme-illescas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/gui.illescas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-rose-400 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
