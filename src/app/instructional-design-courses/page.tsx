import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import Card from "@/components/ui/Card"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Courses",
  description:
    "Browse all Instructional Design Central courses. Master instructional design, the ADDIE model, eLearning development, and more.",
  path: "/instructional-design-courses",
})

const courses = [
  {
    title: "Instructional Design Foundations",
    description:
      "Build a solid foundation in instructional design principles, models, and practical application.",
    href: "/instructional-design-course",
    tag: "Foundations",
  },
  {
    title: "Mastering the ADDIE Model",
    description:
      "Deep-dive into the ADDIE model and learn how to apply it across real-world learning projects.",
    href: "/addie-model-course",
    tag: "ADDIE",
  },
]

export default function CoursesPage() {
  return (
    <>
      <Hero
        title="Instructional Design Courses"
        subtitle="Online courses designed for instructional designers at every level."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <ScrollReveal key={course.href} delay={(i + 1) as 1 | 2} className="h-full">
              <Card {...course} variant="course" />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
