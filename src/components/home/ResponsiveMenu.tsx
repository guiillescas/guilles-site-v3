'use client'

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import MobileMenu from "./MobileMenu"

export default function ResponsiveMenu() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile ? <MobileMenu /> : <Header />
}

