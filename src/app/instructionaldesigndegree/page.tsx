import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Instructional Design Degrees",
  description:
    "View top rated instructional design programs & instructional design degree (PhD, MS, EdD). Also, view instructional design certificate programs.",
  path: "/instructionaldesigndegree",
})

export default function IDDegreePage() {
  return (
    <>
      <Hero title="Top Instructional Design Degrees" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — degree program listings will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
