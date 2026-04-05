import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Rated eLearning Tools",
  description:
    "The best eLearning authoring tools, LMS platforms, and ID resources reviewed and rated by instructional designers.",
  path: "/top-rated-elearning-tools",
})

export default function TopElearningTools() {
  return (
    <>
      <Hero title="Top Rated eLearning Tools" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — tool reviews will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
