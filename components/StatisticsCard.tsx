'use client'

import { useEffect, useRef, useState } from 'react'
import { LucideIcon } from 'lucide-react'

interface StatisticsCardProps {
  number: string
  label: string
  icon: LucideIcon
}

function AnimatedCounter({ targetText }: { targetText: string }) {
  const [displayText, setDisplayText] = useState('0')
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          // Extract number from text like "5000+" to get 5000
          const numMatch = targetText.match(/(\d+)/)?.[1]
          if (numMatch) {
            const target = parseInt(numMatch, 10)
            const duration = 2000
            const startTime = Date.now()

            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              const current = Math.floor(progress * target)
              setDisplayText(`${current}${targetText.slice(-1) === '+' ? '+' : ''}`)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setDisplayText(targetText)
              }
            }

            animate()
          }
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector(`[data-stat="${targetText}"]`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [targetText])

  return displayText
}

export default function StatisticsCard({ number, label, icon: Icon }: StatisticsCardProps) {
  return (
    <div
      data-stat={number}
      className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:shadow-lg transition-all duration-300 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Icon size={24} className="text-primary" />
        </div>
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        <AnimatedCounter targetText={number} />
      </div>
      <p className="text-muted-foreground font-semibold">{label}</p>
    </div>
  )
}
