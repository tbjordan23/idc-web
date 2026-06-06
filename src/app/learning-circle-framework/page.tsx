import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "The Learning Circle Framework™",
  description:
    "The Learning Circle Framework guides instructional design professionals through a structured learning design process — naturally and intuitively.",
  path: "/learning-circle-framework",
})

export default function LearningCircleFramework() {
  return (
    <>
      <Hero title="The Learning Circle Framework™" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — framework content will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
