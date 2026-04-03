import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Templates",
  description:
    "Download free and premium instructional design templates. Storyboards, job aids, needs analysis forms, and more.",
  path: "/instructionaldesigntemplates",
})

export default function TemplatesPage() {
  return (
    <>
      <Hero
        title="Instructional Design Templates"
        subtitle="Ready-to-use templates that accelerate your ID workflow."
        background="primary"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — template library will appear here.</p>
      </section>
    </>
  )
}
