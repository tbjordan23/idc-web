"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"

export interface BlogPost {
  title: string
  description: string
  href: string
  tag: string
  date: string
  readTime: string
  views: number
}

const BATCH_SIZE = 9

function formatViews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`
  return n.toString()
}

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

          {/* Category tag + date */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {post.tag}
            </span>
            <time className="shrink-0 text-xs text-copy-dim">{post.date}</time>
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

          {/* Footer: read time, views, CTA */}
          <div className="mt-4 flex items-center gap-4 border-t border-edge pt-4 text-xs text-copy-dim">
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

export default function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [loading, setLoading] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const hasMore = visibleCount < posts.length

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return
    setLoading(true)
    setTimeout(() => {
      setVisibleCount(c => Math.min(c + BATCH_SIZE, posts.length))
      setLoading(false)
    }, 350)
  }, [loading, hasMore, posts.length])

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

  const visible = posts.slice(0, visibleCount)

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post, i) => (
          <BlogCard key={post.href} post={post} stagger={i % BATCH_SIZE} />
        ))}
      </div>

      <div ref={sentinelRef} className="mt-12 flex min-h-8 items-center justify-center">
        {loading && (
          <div className="flex items-center gap-2 text-sm text-copy-muted">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            Loading more articles...
          </div>
        )}
        {!loading && !hasMore && (
          <p className="text-sm text-copy-dim">You&apos;ve reached the end — thanks for reading!</p>
        )}
      </div>
    </div>
  )
}
