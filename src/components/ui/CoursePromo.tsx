import Image from "next/image"
import Link from "next/link"

interface CoursePromoProps {
  eyebrow?: string
  title: string
  description: React.ReactNode
  ctaLabel: string
  ctaHref: string
  image: string
  imageAlt: string
}

export default function CoursePromo({
  eyebrow = "IDC Course",
  title,
  description,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
}: CoursePromoProps) {
  return (
    <div className="mt-10 rounded-card border border-edge bg-surface p-6 shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-extrabold tracking-tight text-heading">{title}</h3>
      <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
      <div className="mt-3 flex items-start gap-5">
        <div className="relative hidden sm:block shrink-0 w-20 h-20 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium leading-relaxed text-copy-muted">{description}</p>
          <Link
            href={ctaHref}
            className="mt-4 self-start inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
          >
            {ctaLabel}
            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
