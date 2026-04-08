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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the top instructional design degree programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top instructional design programs offer degrees at the bachelor's, master's (MS, MEd), and doctoral (PhD, EdD) levels in instructional design, instructional technology, and learning design. Many programs are available fully online. Leading programs are offered at universities such as Utah State University, Florida State University, Indiana University, and Purdue University.",
      },
    },
    {
      "@type": "Question",
      name: "What degree do I need to become an instructional designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most instructional design positions require at minimum a bachelor's degree, and many professional roles prefer or require a master's degree in instructional design, instructional technology, educational technology, or a related field. Common graduate degrees include the MS, MEd, and online certificate programs. Some senior and academic positions require a PhD or EdD.",
      },
    },
    {
      "@type": "Question",
      name: "Are there online instructional design degree programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many accredited universities offer fully online instructional design degree programs. Online options exist at both the master's and doctoral levels, making it convenient for working professionals to earn a degree without relocating. Programs are offered through institutions such as Utah State University, Purdue University, and many others.",
      },
    },
  ],
}

export default function IDDegreePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="Top Instructional Design Degrees"
        subtitle="Explore degree and certificate programs that can open the door to a career you love."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — degree program listings will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
