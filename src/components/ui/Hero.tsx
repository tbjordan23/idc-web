import Link from "next/link"

interface HeroProps {
  title: string
  subtitle?: string
  cta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  background?: "primary" | "white" | "light"
  centered?: boolean
}

export default function Hero({
  title,
  subtitle,
  cta,
  secondaryCta,
  background = "primary",
  centered = true,
}: HeroProps) {
  const bgClass = {
    primary: "bg-idc-primary text-white",
    white: "bg-white text-gray-900",
    light: "bg-gray-50 text-gray-900",
  }[background]

  const subtitleClass = background === "primary" ? "text-blue-200" : "text-gray-600"

  return (
    <section className={`${bgClass} py-20`}>
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${centered ? "text-center" : ""}`}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className={`mt-6 max-w-2xl text-lg ${subtitleClass} ${centered ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div
            className={`mt-10 flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}
          >
            {cta && (
              <Link
                href={cta.href}
                className="rounded-md bg-idc-accent px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-idc-accent-700"
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`rounded-md border px-6 py-3 text-base font-semibold shadow-sm ${
                  background === "primary"
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
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
