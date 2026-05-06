"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"

export interface BlogPost {
  title: string
  description: string
  href: string
  tag: string
  tags?: string[]   // extra filter tags; tag is always used for display
  date: string
  readTime: string
  views: number
}

const BATCH_SIZE = 9

const ALL_TABS = [
  "Instructional Design",
  "Career",
  "eLearning",
  "LX Design",
  "AI",
  "Learning Theory",
  "ID Models",
  "Tools",
  "Needs Analysis",
  "L&D",
  "SME",
  "Teacher Transition",
  "Higher Education",
  "Community",
]

// Maps a filter label to all post tags it should match
const TAG_GROUPS: Record<string, string[]> = {
  "AI": ["AI", "Artificial Intelligence", "Chat GPT", "GenAI"],
  "LX Design": ["LX Design", "Learning Design"],
  "LMS": ["LMS", "Learning Management"],
  "Tools": ["Tools", "eLearning Tools", "Instructional Design Tools"],
}

function formatViews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`
  return n.toString()
}

// ── Filter bar ────────────────────────────────────────────────────────────────
function FilterBar({
  active,
  onChange,
}: {
  active: string | null
  onChange: (tag: string | null) => void
}) {
  const pill = (label: string, value: string | null) => {
    const isActive = active === value
    return (
      <button
        key={label}
        onClick={() => onChange(value)}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-150 ${
          isActive
            ? "bg-accent text-white shadow-sm"
            : "bg-surface-2 text-copy-muted hover:bg-edge hover:text-copy"
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {pill("All Posts", null)}
      {ALL_TABS.map(t => pill(t, t))}
    </div>
  )
}

// ── Blog card ─────────────────────────────────────────────────────────────────
function BlogCard({ post, stagger }: { post: BlogPost; stagger: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal h-full"
      style={{ transitionDelay: `${stagger * 75}ms` }}
    >
      <Link href={post.href} className="block h-full">
        <div className="group flex h-full flex-col rounded-card border border-edge bg-surface p-6 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">

          {/* Category tags */}
          <div className="flex flex-wrap gap-1.5">
            {[post.tag, ...(post.tags ?? [])].map(t => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
                <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mt-4 text-base font-bold leading-snug text-copy transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />

          {/* Description */}
          <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-copy-muted line-clamp-3">
            {post.description}
          </p>

          {/* Footer */}
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-edge pt-4 text-xs text-copy-dim">
            <time className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </time>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime} read
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {formatViews(post.views)} views
            </span>
            <span className="ml-auto font-semibold text-accent">Read →</span>
          </div>

        </div>
      </Link>
    </div>
  )
}

// ── Main feed ─────────────────────────────────────────────────────────────────
export default function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [loading, setLoading] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag)
    setVisibleCount(BATCH_SIZE)
  }

  const filtered = activeTag
    ? posts.filter(p => {
        const postTags = p.tags ? [p.tag, ...p.tags] : [p.tag]
        const matchTags = TAG_GROUPS[activeTag] ?? [activeTag]
        return postTags.some(pt => matchTags.includes(pt))
      })
    : posts
  const hasMore = visibleCount < filtered.length

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return
    setLoading(true)
    setTimeout(() => {
      setVisibleCount(c => Math.min(c + BATCH_SIZE, filtered.length))
      setLoading(false)
    }, 350)
  }, [loading, hasMore, filtered.length])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore() },
      { rootMargin: "300px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [loadMore])

  const visible = filtered.slice(0, visibleCount)

  return (
    <div>
      <FilterBar active={activeTag} onChange={handleTagChange} />

      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-copy-dim">No articles found in this category.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <BlogCard key={post.href} post={post} stagger={i % BATCH_SIZE} />
          ))}
        </div>
      )}

      <div ref={sentinelRef} className="mt-12 flex min-h-8 items-center justify-center">
        {loading && (
          <div className="flex items-center gap-2 text-sm text-copy-muted">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            Loading more articles...
          </div>
        )}
        {!loading && !hasMore && visible.length > 0 && (
          <p className="text-sm text-copy-dim">You&apos;ve reached the end — thanks for reading!</p>
        )}
      </div>
    </div>
  )
}
