import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Instructional Design Conferences",
  description:
    "The top instructional design, eLearning, and L&D conferences to attend this year.",
  path: "/instructionaldesignconferences",
})

export default function ConferencesPage() {
  return (
    <>
      <Hero title="Top Instructional Design Conferences" background="primary" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — conference list will appear here.</p>
      </section>
    </>
  )
}
