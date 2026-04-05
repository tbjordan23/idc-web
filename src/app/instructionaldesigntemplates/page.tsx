import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Templates",
  description:
    "Access FREE instructional design & training plan templates. These templates include an ADDIE template, storyboard template & training needs assessment template.",
  path: "/instructionaldesigntemplates",
})

export default function TemplatesPage() {
  return (
    <>
      <Hero
        title="Instructional Design Templates"
        subtitle="Ready-to-use templates that accelerate your ID workflow."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — template library will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
