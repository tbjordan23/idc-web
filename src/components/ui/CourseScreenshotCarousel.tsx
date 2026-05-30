"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

export interface CourseScreenshot {
  src: string
  alt: string
  caption: string
}

interface Props {
  screenshots: CourseScreenshot[]
}

export default function CourseScreenshotCarousel({ screenshots }: Props) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % screenshots.length)
  }, [screenshots.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)
  }, [screenshots.length])

  const goTo = (i: number) => {
    setCurrent(i)
    setPaused(true)
    setTimeout(() => setPaused(false), 8000)
  }

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, next])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Browser chrome frame */}
      <div className="overflow-hidden rounded-card border border-edge shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]">
        {/* Fake browser bar */}
        <div className="flex items-center gap-1.5 border-b border-edge bg-surface-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
          <div className="ml-3 flex-1 rounded bg-edge/60 px-3 py-1 text-[10px] font-medium text-copy-dim">
            instructionaldesigncentral.com/courses
          </div>
        </div>

        {/* Image stage */}
        <div className="relative aspect-[3/2] overflow-hidden bg-[#f5f5f5]">
          {screenshots.map((shot, i) => (
            <div
              key={shot.src}
              aria-hidden={i !== current}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 900px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Prev/Next overlaid on sides */}
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-heading shadow backdrop-blur-sm transition hover:bg-white hover:text-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-heading shadow backdrop-blur-sm transition hover:bg-white hover:text-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide counter badge */}
          <div className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
            {current + 1} / {screenshots.length}
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="mt-3 text-center text-sm font-medium text-copy-muted min-h-[1.5rem]">
        {screenshots[current].caption}
      </p>

      {/* Dot nav */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-accent"
                : "w-2 h-2 bg-edge hover:bg-copy-dim"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
