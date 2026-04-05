import Link from "next/link"

interface CardProps {
  title: string
  description: string
  href?: string
  tag?: string
  date?: string
  variant?: "course" | "resource" | "blog"
}

export default function Card({ title, description, href, tag, date, variant = "blog" }: CardProps) {
  const tagColors = {
    course: "bg-[var(--accent-glow)] text-accent",
    resource: "bg-[rgba(74,123,196,0.15)] text-accent-2",
    blog: "bg-surface-2 text-copy-muted",
  }[variant]

  const tagIcon = {
    course: (
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    resource: (
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    blog: (
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  }[variant]

  const content = (
    <div className="group flex h-full flex-col rounded-card border border-edge bg-surface p-6 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
      <div className="flex items-center justify-between gap-2">
        {tag && (
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${tagColors}`}>
            {tagIcon}
            {tag}
          </span>
        )}
        {date && (
          <time className="text-xs text-copy-dim">{date}</time>
        )}
      </div>
      <h3 className="mt-4 text-base font-bold leading-snug text-copy transition-colors group-hover:text-accent">
        {title}
      </h3>
      <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
      <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-copy-muted line-clamp-3">
        {description}
      </p>
      {href && (
        <span className="mt-5 text-sm font-semibold text-accent">
          Read more →
        </span>
      )}
    </div>
  )

  if (href) {
    return <Link href={href} className="h-full">{content}</Link>
  }
  return content
}
