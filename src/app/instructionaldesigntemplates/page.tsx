import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Templates",
  description:
    "Access FREE instructional design & training plan templates. These templates include an ADDIE template, storyboard template & training needs assessment template.",
  path: "/instructionaldesigntemplates",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find free instructional design templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional Design Central offers a comprehensive library of free instructional design templates including ADDIE model templates, storyboard templates, training needs assessment templates, project plan templates, and more. These templates are designed to help instructional designers accelerate their workflow and maintain consistency across projects.",
      },
    },
    {
      "@type": "Question",
      name: "What types of instructional design templates are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common instructional design templates include: ADDIE model project templates, course storyboard templates, training needs analysis templates, learning objectives templates, lesson plan templates, evaluation and assessment templates, and eLearning design documents. These templates help streamline the design and development process.",
      },
    },
    {
      "@type": "Question",
      name: "Why should instructional designers use templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional design templates save time, ensure consistency across projects, and provide a professional starting point. They help designers communicate more clearly with stakeholders and subject matter experts, maintain quality standards, and follow best practices without starting from scratch on every project.",
      },
    },
  ],
}

export default function TemplatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="Instructional Design Templates"
        subtitle="Ready-to-use templates that accelerate your ID workflow."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — template library will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
