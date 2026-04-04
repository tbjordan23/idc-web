import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Community",
  description:
    "Join the Instructional Design Central community. Connect with instructional designers worldwide, share resources, and grow your career.",
  path: "/instructionaldesigncommunity",
})

export default function CommunityPage() {
  return (
    <>
      <Hero
        title="Instructional Design Community"
        subtitle="Connect with instructional designers from around the world."
        cta={{ label: "Join for Free", href: "https://instructional-design-central.mn.co/" }}
       
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-copy-muted">Placeholder content — migrate from Wix.</p>
      </section>
    </>
  )
}
