import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Foundations Course and Certification",
  description:
    "Learn the basics of instructional design with Instructional Design Foundations, a beginner-friendly online course covering core principles, models, and best practices. Perfect for aspiring instructional designers, transitioning teachers, and curriculum designers looking to build a strong foundation and start creating effective learning experiences.",
  path: "/instructional-design-course",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Instructional Design Foundations course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional Design Foundations is a beginner-friendly online course offered by Instructional Design Central that teaches the core principles, language, and practices of instructional design. It is designed for aspiring instructional designers, transitioning teachers, and curriculum designers who want to build a strong foundation and start creating effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What will I learn in the Instructional Design Foundations course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Instructional Design Foundations course, you will learn the core principles of instructional design, key instructional design models and frameworks, how to write learning objectives, the basics of needs analysis, how to design and develop effective learning experiences, and how to use AI tools and professional templates in your design workflow.",
      },
    },
  ],
}

export default function IDFoundationsCourse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="Instructional Design Foundations Course and Certificate"
        subtitle="Build the confidence and skills to design learning experiences that truly make a difference."
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
