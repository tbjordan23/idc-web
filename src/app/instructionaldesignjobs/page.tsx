import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Jobs",
  description:
    "Browse instructional design job listings. Find your next ID, eLearning, or learning designer role.",
  path: "/instructionaldesignjobs",
})

export default function IDJobsPage() {
  return (
    <>
      <Hero title="Instructional Design Jobs" background="primary" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — job listings will appear here.</p>
      </section>
    </>
  )
}
