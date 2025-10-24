'use client'

import { useState } from "react"

interface ExperienceCardProps {
  id: string
  title: string
  company: string
  date: string
  duration: string
  color: 'cyan' | 'emerald' | 'yellow' | 'rose' | 'blue' | 'purple' | 'slate'
  description: React.ReactNode
  tags: string[]
  position?: 'left' | 'right'
  defaultExpanded?: boolean
}

const colorClasses = {
  cyan: {
    dot: 'bg-cyan-500 shadow-cyan-500/50',
    text: 'text-cyan-500',
    textSecondary: 'text-cyan-400',
    textTertiary: 'text-cyan-400/70',
    border: 'hover:border-cyan-500/50',
    tag: 'bg-cyan-500/10 text-cyan-400'
  },
  emerald: {
    dot: 'bg-emerald-500 shadow-emerald-500/50',
    text: 'text-emerald-500',
    textSecondary: 'text-emerald-400',
    textTertiary: 'text-emerald-400/70',
    border: 'hover:border-emerald-500/50',
    tag: 'bg-emerald-500/10 text-emerald-400'
  },
  yellow: {
    dot: 'bg-yellow-500 shadow-yellow-500/50',
    text: 'text-yellow-500',
    textSecondary: 'text-yellow-400',
    textTertiary: 'text-yellow-400/70',
    border: 'hover:border-yellow-500/50',
    tag: 'bg-yellow-500/10 text-yellow-400'
  },
  rose: {
    dot: 'bg-rose-500 shadow-rose-500/50',
    text: 'text-rose-500',
    textSecondary: 'text-rose-400',
    textTertiary: 'text-rose-400/70',
    border: 'hover:border-rose-500/50',
    tag: 'bg-rose-500/10 text-rose-400'
  },
  blue: {
    dot: 'bg-blue-500 shadow-blue-500/50',
    text: 'text-blue-500',
    textSecondary: 'text-blue-400',
    textTertiary: 'text-blue-400/70',
    border: 'hover:border-blue-500/50',
    tag: 'bg-blue-500/10 text-blue-400'
  },
  purple: {
    dot: 'bg-purple-500 shadow-purple-500/50',
    text: 'text-purple-500',
    textSecondary: 'text-purple-400',
    textTertiary: 'text-purple-400/70',
    border: 'hover:border-purple-500/50',
    tag: 'bg-purple-500/10 text-purple-400'
  },
  slate: {
    dot: 'bg-slate-500 shadow-slate-500/50',
    text: 'text-slate-500',
    textSecondary: 'text-slate-400',
    textTertiary: 'text-slate-400/70',
    border: 'hover:border-slate-500/50',
    tag: 'bg-slate-500/10 text-slate-400'
  }
}

export default function ExperienceCard({
  id,
  title,
  company,
  date,
  duration,
  color,
  description,
  tags,
  position = 'left',
  defaultExpanded = false
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const colors = colorClasses[color]

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-start">
      <div className={`absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 top-6 md:top-8 w-4 h-4 md:w-5 md:h-5 rounded-full ${colors.dot} border-4 border-black shadow-lg z-10`} />
      
      <div className="md:hidden mb-3">
        <span className={`${colors.text} text-xs sm:text-sm font-semibold`}>{date}</span>
        <p className={`${colors.textTertiary} text-xs mt-1`}>{duration}</p>
      </div>
      
      {position === 'right' && (
        <>
          <div className={`hidden md:block text-right pr-8 pt-6`}>
            <span className={`${colors.text} text-sm font-semibold`}>{date}</span>
            <p className={`${colors.textTertiary} text-xs mt-1`}>{duration}</p>
          </div>
          <div className="hidden md:block w-0"></div>
        </>
      )}
      
      <div 
        className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 md:p-6 ${colors.border} transition-all duration-300 cursor-pointer w-full ${position === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'}`}
        onClick={handleClick}
      >
        <div className="flex items-start justify-between mb-3 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h3>
            <p className={`${colors.textSecondary} font-medium text-sm md:text-base`}>{company}</p>
          </div>
          <svg 
            className={`w-5 h-5 ${colors.textSecondary} transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className={`text-slate-300 space-y-2 md:space-y-3 mb-4 overflow-hidden transition-all duration-500 text-sm md:text-base ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 mb-0'}`}>
          {description}
        </div>
        <div className={`flex flex-wrap gap-2 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {tags.map((tag) => (
            <span key={tag} className={`px-2 py-1 md:px-3 ${colors.tag} rounded-full text-xs md:text-sm`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {position === 'left' && (
        <>
          <div className="hidden md:block w-0"></div>
          <div className="hidden md:block text-left pl-8 pt-6">
            <span className={`${colors.text} text-sm font-semibold`}>{date}</span>
            <p className={`${colors.textTertiary} text-xs mt-1`}>{duration}</p>
          </div>
        </>
      )}
    </div>
  )
}

