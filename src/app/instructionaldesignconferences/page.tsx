import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Instructional Design Conferences",
  description:
    "The top instructional design, eLearning, and L&D conferences to attend this year.",
  path: "/instructionaldesignconferences",
})

export default function ConferencesPage() {
  return (
    <>
      <Hero title="Top Instructional Design Conferences" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — conference list will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
