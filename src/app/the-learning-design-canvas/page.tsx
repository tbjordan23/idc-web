import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "The Learning Design Canvas™",
  description:
    "The Learning Design Canvas consolidates a complete learning plan onto one visual page — built on instructional design and user experience design principles.",
  path: "/the-learning-design-canvas",
})

export default function LearningDesignCanvas() {
  return (
    <>
      <Hero title="The Learning Design Canvas™" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — canvas download and content will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
