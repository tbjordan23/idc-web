import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Jobs Remote",
  description:
    "View instructional design jobs, training jobs, instructional technology jobs, and jobs in education. Also, access instructional designer salary information. Job board also features remote instructional design jobs.",
  path: "/instructionaldesignjobs",
})

export default function IDJobsPage() {
  return (
    <>
      <Hero title="Instructional Design Jobs" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — job listings will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
