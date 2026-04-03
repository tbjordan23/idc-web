import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Rated LMS Platforms",
  description:
    "Compare and review the top-rated Learning Management Systems for corporate training and academic use.",
  path: "/top-rated-lms",
})

export default function TopLMSPage() {
  return (
    <>
      <Hero title="Top Rated LMS Platforms" background="primary" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — LMS reviews will appear here.</p>
      </section>
    </>
  )
}
