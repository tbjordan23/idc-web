import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model Course",
  description:
    "Master the ADDIE instructional design model with this practical, expert-led course. Learn to design, develop, and evaluate effective learning experiences using industry-proven methods. Enroll today to boost your instructional design skills.",
  path: "/addie-model-course",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Mastering the ADDIE Model course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mastering the ADDIE Model is a practical, project-based online course offered by Instructional Design Central. It walks instructional designers step-by-step through the ADDIE framework — Analysis, Design, Development, Implementation, and Evaluation — giving learners the skills to design and build effective courses. The course includes a professional certificate upon completion.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the ADDIE Model course for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mastering the ADDIE Model course is ideal for instructional designers who want to deepen their understanding and application of the ADDIE framework, as well as trainers, educators, and curriculum designers looking to apply a structured design process to their work. It is suitable for intermediate learners who already have a basic understanding of instructional design.",
      },
    },
  ],
}

export default function ADDIECourse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="ADDIE Model Course and Certificate"
        subtitle="Learn the framework the pros trust — and walk away knowing how to use it in your own work."
        cta={{ label: "Enroll Now", href: "#enroll" }}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — course detail content will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
