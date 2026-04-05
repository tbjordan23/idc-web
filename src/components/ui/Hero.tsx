import Link from "next/link"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  centered?: boolean
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  cta,
  secondaryCta,
  centered = true,
}: HeroProps) {
  return (
    <section className="border-b border-edge bg-canvas px-4 py-20 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-4xl ${centered ? "text-center" : ""}`}>
        {eyebrow && (
          <p className="hero-animate mb-4 text-xs font-bold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1
          className="hero-animate hero-animate-delay-1 font-extrabold tracking-tight text-heading"
          style={{ fontSize: "clamp(32px,5vw,46px)", letterSpacing: "-0.075rem", lineHeight: 1.1 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={`hero-animate hero-animate-delay-2 mt-5 max-w-2xl text-lg font-medium text-copy-muted ${centered ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className={`hero-animate hero-animate-delay-3 mt-10 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
              >
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
