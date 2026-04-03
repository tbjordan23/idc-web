import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "Mastering the ADDIE Model Course",
  description:
    "Learn to apply the ADDIE instructional design model across real-world learning projects. Online course by Instructional Design Central.",
  path: "/addie-model-course",
})

export default function ADDIECourse() {
  return (
    <>
      <Hero
        title="Mastering the ADDIE Model"
        subtitle="A practical, project-based online course for instructional designers."
        cta={{ label: "Enroll Now", href: "#enroll" }}
        background="primary"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — course detail content will appear here.</p>
      </section>
    </>
  )
}
