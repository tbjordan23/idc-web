import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Contact Instructional Design Central (IDC). Instructional Design resources, community, and content.",
  path: "/contactinstructionaldesigncentral",
})

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-heading">Contact Us</h1>
        <p className="mt-4 text-copy-muted">Placeholder content — migrate from Wix.</p>
      </ScrollReveal>
    </section>
  )
}
