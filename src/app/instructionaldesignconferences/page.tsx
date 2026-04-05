import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Conferences",
  description:
    "View top rated instructional design and education conferences. These instructional design conferences focus on education, curriculum design, and eLearning.",
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
