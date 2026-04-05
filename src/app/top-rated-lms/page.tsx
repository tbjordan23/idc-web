import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Rated LMS Platforms",
  description:
    "Compare and review the top-rated Learning Management Systems for corporate training and academic use.",
  path: "/top-rated-lms",
})

export default function TopLMSPage() {
  return (
    <>
      <Hero title="Top Rated LMS Platforms" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — LMS reviews will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
