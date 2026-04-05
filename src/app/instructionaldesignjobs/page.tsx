import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Jobs",
  description:
    "Browse instructional design job listings. Find your next ID, eLearning, or learning designer role.",
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
