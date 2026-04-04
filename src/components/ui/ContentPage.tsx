import ScrollReveal from "@/components/ui/ScrollReveal"

interface ContentPageProps {
  title: string
  subtitle?: string
  eyebrow?: string
  children: React.ReactNode
}

export default function ContentPage({ title, subtitle, eyebrow, children }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <header className="mb-10">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1
            className="font-extrabold tracking-tight text-copy"
            style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.05rem", lineHeight: 1.1 }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg font-medium text-copy-muted">{subtitle}</p>
          )}
          <div className="mt-6 h-0.5 w-12 rounded bg-idc-blue" />
        </header>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <div className="space-y-6 text-base font-medium leading-relaxed text-copy-muted">
          {children}
        </div>
      </ScrollReveal>
    </article>
  )
}
