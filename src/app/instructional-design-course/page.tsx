import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Foundations Course",
  description:
    "Master the fundamentals of instructional design. This online course covers ID models, learning theory, and real-world application.",
  path: "/instructional-design-course",
})

export default function IDFoundationsCourse() {
  return (
    <>
      <Hero
        title="Instructional Design Foundations"
        subtitle="Master the fundamentals of instructional design with this comprehensive online course."
        cta={{ label: "Enroll Now", href: "#enroll" }}
       
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-copy-muted">Placeholder — course detail content will appear here.</p>
      </section>
    </>
  )
}
