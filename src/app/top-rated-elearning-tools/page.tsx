import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Rated eLearning Tools",
  description:
    "The best eLearning authoring tools, LMS platforms, and ID resources reviewed and rated by instructional designers.",
  path: "/top-rated-elearning-tools",
})

export default function TopElearningTools() {
  return (
    <>
      <Hero title="Top Rated eLearning Tools" background="primary" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — tool reviews will appear here.</p>
      </section>
    </>
  )
}
