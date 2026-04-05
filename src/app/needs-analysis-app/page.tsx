import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Free Needs Analysis App",
  description:
    "Use the IDC Needs Analysis Tool to identify performance gaps, root causes, and the right learning solutions for your organization.",
  path: "/needs-analysis-app",
})

export default function NeedsAnalysisApp() {
  return (
    <>
      <Hero
        title="IDC Needs Analysis App"
        subtitle="Identify performance gaps and design the right learning solutions."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — interactive needs analysis tool will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
