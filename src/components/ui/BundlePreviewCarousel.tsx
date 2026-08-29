"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

export interface BundlePreviewSlide {
  src: string
  alt: string
  caption: string
  url: string
}

interface Props {
  slides: BundlePreviewSlide[]
}

export default function BundlePreviewCarousel({ slides }: Props) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [slides.length])

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
      role="region"
      aria-roledescription="carousel"
      aria-label="Preview of everything included in the bundle"
    >
      {/* Fake browser frame */}
      <div className="mx-auto max-w-2xl overflow-hidden rounded-card border border-edge shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]">
        <div className="flex items-center gap-1.5 border-b border-edge bg-surface-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
          <div className="ml-3 flex-1 truncate rounded bg-edge/60 px-3 py-1 text-[10px] font-medium text-copy-dim">
            {slides[current].url}
          </div>
        </div>

        {/* Image stage */}
        <div className="relative h-[320px] overflow-hidden bg-[#f5f5f5] sm:h-[420px]">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              aria-hidden={i !== current}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Prev/Next overlaid on sides */}
          <button
            onClick={prev}
            aria-label="Previous preview image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-heading shadow backdrop-blur-sm transition hover:bg-white hover:text-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next preview image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-heading shadow backdrop-blur-sm transition hover:bg-white hover:text-accent"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide counter badge */}
          <div className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="mt-3 text-center text-sm font-medium text-copy-muted min-h-[1.5rem]">
        {slides[current].caption}
      </p>

      {/* Dot nav */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to preview image ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "h-2 w-5 bg-accent" : "h-2 w-2 bg-edge hover:bg-copy-dim"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
