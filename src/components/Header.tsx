"use client"

import { useRef } from "react"
import GlassSurface from "./GlassSurface"
import VariableProximity from "./VariableProximity"

export default function Header() {
  const navRef = useRef<HTMLElement>(null)

  return (
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
            <a
              href="#home"
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
            </a>
            <a
              href="#projects"
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
            </a>
            <a
              href="#experience"
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
            </a>
            <a
              href="#about"
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
            </a>
          </nav>
        </div>
      </GlassSurface>
    </header>
  )
}

