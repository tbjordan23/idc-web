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
    resource: "bg-secondary/15 text-accent-2",
    blog: "bg-surface-2 text-copy-muted",
  }[variant]

  const content = (
    <div className="group flex h-full flex-col rounded-card border border-edge bg-surface p-6 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
      <div className="flex items-center justify-between gap-2">
        {tag && (
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${tagColors}`}>
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
