import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Instructional Design Degrees",
  description:
    "Explore the best instructional design degree programs — online and on-campus options for bachelor's, master's, and doctoral studies.",
  path: "/instructionaldesigndegree",
})

export default function IDDegreePage() {
  return (
    <>
      <Hero title="Top Instructional Design Degrees" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-copy-muted">Placeholder — degree program listings will appear here.</p>
      </section>
    </>
  )
}
