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

export default function IDFoundationsCourse() {
  return (
    <>
      <Hero
        title="Instructional Design Foundations Course and Certificate"
        subtitle="Master the fundamentals of instructional design with this comprehensive online course."
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
