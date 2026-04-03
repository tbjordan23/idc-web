import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Needs Analysis Tool",
  description:
    "Use the IDC Needs Analysis Tool to identify performance gaps, root causes, and the right learning solutions for your organization.",
  path: "/needs-analysis-app",
})

export default function NeedsAnalysisApp() {
  return (
    <>
      <Hero
        title="Needs Analysis Tool"
        subtitle="Identify performance gaps and design the right learning solutions."
        background="primary"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — interactive needs analysis tool will appear here.</p>
      </section>
    </>
  )
}
