import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "About Instructional Design Central",
  description:
    "Learn about Instructional Design Central (IDC) — our mission, story, and the team behind the #1 resource hub for instructional designers.",
  path: "/aboutinstructionaldesigncentral",
})

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About IDC"
        subtitle="Our mission is to help course designers create brilliant learning experiences."
       
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-copy">Our Story</h2>
        <p className="mt-4 text-copy-muted">
          Placeholder content — migrate from Wix.
        </p>
      </section>
    </>
  )
}
