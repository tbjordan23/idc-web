import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Conferences",
  description:
    "View top rated instructional design and education conferences. These instructional design conferences focus on education, curriculum design, and eLearning.",
  path: "/instructionaldesignconferences",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the top instructional design conferences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top instructional design and learning development conferences include the ATD International Conference & Exposition, Learning Solutions Conference, DevLearn Conference & Expo, and the eLearning Guild events. These conferences focus on eLearning development, curriculum design, education technology, and training development.",
      },
    },
    {
      "@type": "Question",
      name: "Why should instructional designers attend conferences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional design conferences offer opportunities to learn about the latest tools, research, and best practices in the field, network with peers and thought leaders, attend hands-on workshops, and earn continuing education credits. They are valuable for both new and experienced instructional designers looking to stay current and grow professionally.",
      },
    },
  ],
}

export default function ConferencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero title="Top Instructional Design Conferences" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — conference list will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
