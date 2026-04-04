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
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted transition-colors hover:border-edge-hover hover:text-copy"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
