"use client"

import Galaxy from "@/components/Galaxy"
import GlassSurface from "@/components/GlassSurface"
import VariableProximity from "@/components/VariableProximity"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function NotFound() {
  const navRef = useRef<HTMLElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      {isMounted && (
        <div className="absolute inset-0 w-full h-full">
          <Galaxy 
            transparent={false}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.3}
            hueShift={200}
            rotationSpeed={0.05}
            mouseRepulsion={true}
            mouseInteraction={true}
            repulsionStrength={3}
            twinkleIntensity={0.5}
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {isMounted && (
          <div className="pointer-events-auto">
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
              <GlassSurface
                width="100%"
                height={70}
                borderRadius={50}
                blur={15}
                opacity={0.9}
                brightness={50}
                className="max-w-7xl mx-auto"
              >
                <div className="flex items-center justify-between w-full px-8">
                  <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 via-emerald-400 to-rose-400 bg-clip-text text-transparent">
                    G
                  </div>
                  
                  <nav ref={navRef} className="flex items-center gap-10">
                    <Link
                      href="/#home"
                      className="bg-linear-to-r from-slate-200 to-cyan-300 bg-clip-text text-transparent"
                    >
                      <VariableProximity
                        label="Home"
                        fromFontVariationSettings="'wght' 300, 'wdth' 75"
                        toFontVariationSettings="'wght' 1000, 'wdth' 151"
                        containerRef={navRef}
                        radius={200}
                        falloff="linear"
                        className="text-xl font-medium"
                        style={{ fontFamily: 'var(--font-roboto-flex)' }}
                      />
                    </Link>
                    <Link
                      href="/#projects"
                      className="bg-linear-to-r from-slate-200 to-emerald-300 bg-clip-text text-transparent"
                    >
                      <VariableProximity
                        label="Projects"
                        fromFontVariationSettings="'wght' 300, 'wdth' 75"
                        toFontVariationSettings="'wght' 1000, 'wdth' 151"
                        containerRef={navRef}
                        radius={200}
                        falloff="linear"
                        className="text-xl font-medium"
                        style={{ fontFamily: 'var(--font-roboto-flex)' }}
                      />
                    </Link>
                    <Link
                      href="/#experience"
                      className="bg-linear-to-r from-slate-200 to-rose-300 bg-clip-text text-transparent"
                    >
                      <VariableProximity
                        label="Experience"
                        fromFontVariationSettings="'wght' 300, 'wdth' 75"
                        toFontVariationSettings="'wght' 1000, 'wdth' 151"
                        containerRef={navRef}
                        radius={200}
                        falloff="linear"
                        className="text-xl font-medium"
                        style={{ fontFamily: 'var(--font-roboto-flex)' }}
                      />
                    </Link>
                    <Link
                      href="/#about"
                      className="bg-linear-to-r from-slate-200 to-cyan-300 bg-clip-text text-transparent"
                    >
                      <VariableProximity
                        label="About"
                        fromFontVariationSettings="'wght' 300, 'wdth' 75"
                        toFontVariationSettings="'wght' 1000, 'wdth' 151"
                        containerRef={navRef}
                        radius={200}
                        falloff="linear"
                        className="text-xl font-medium"
                        style={{ fontFamily: 'var(--font-roboto-flex)' }}
                      />
                    </Link>
                  </nav>
                </div>
              </GlassSurface>
            </header>
          </div>
        )}
        
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-2xl pointer-events-auto">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-bold text-white drop-shadow-2xl animate-pulse">
                404
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-linear-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text">
                Ops! Parece que você se perdeu no espaço 🚀
              </h2>
            </div>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed px-4">
              Esta página foi abduzida por alienígenas... ou talvez ela nunca existiu. 
              De qualquer forma, vamos te levar de volta para casa!
            </p>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 via-purple-500 to-rose-500 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
              >
                <span>Voltar para casa</span>
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-3 text-slate-400 text-sm">
              <span>Coordenadas atuais:</span>
              <span className="font-mono text-cyan-400">404 - NÃO ENCONTRADO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

