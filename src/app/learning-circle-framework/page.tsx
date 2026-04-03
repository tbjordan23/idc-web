import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "The Learning Circle Framework",
  description:
    "Explore the Learning Circle Framework — a practical model for designing holistic, learner-centered learning experiences.",
  path: "/learning-circle-framework",
})

export default function LearningCircleFramework() {
  return (
    <>
      <Hero title="The Learning Circle Framework" background="primary" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — framework content will appear here.</p>
      </section>
    </>
  )
}
