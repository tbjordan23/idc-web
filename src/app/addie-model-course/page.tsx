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

export default function ADDIECourse() {
  return (
    <>
      <Hero
        title="ADDIE Model Course and Certificate"
        subtitle="A practical, project-based online course for instructional designers."
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
