import type { Metadata } from "next"
import Hero from "@/components/ui/Hero"
import Card from "@/components/ui/Card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Community and Resources | Instructional Design Central",
  description:
    "Instructional Design Central (IDC) helps instructional design related professionals stay sharp and create amazing learning experiences by providing access to online learning, community connections, and professional resources.",
  alternates: {
    canonical: "https://www.instructionaldesigncentral.com",
  },
}

const featuredCourses = [
  {
    title: "Instructional Design Foundations",
    description:
      "Build a solid foundation in instructional design principles, models, and practical application.",
    href: "/instructional-design-course",
    tag: "Course",
  },
  {
    title: "Mastering the ADDIE Model",
    description:
      "Deep-dive into the ADDIE model and learn how to apply it across real-world learning projects.",
    href: "/addie-model-course",
    tag: "Course",
  },
]

const featuredResources = [
  {
    title: "Instructional Design Templates",
    description:
      "A comprehensive library of ID templates to accelerate your design process.",
    href: "/instructionaldesigntemplates",
    tag: "Templates",
  },
  {
    title: "Needs Analysis Tool",
    description:
      "A practical app to guide your needs analysis process from start to finish.",
    href: "/needs-analysis-app",
    tag: "Tool",
  },
  {
    title: "ChatID: Instructional Design GPT",
    description:
      "AI-powered assistant trained specifically for instructional designers.",
    href: "/chatid-instructional-design-ai",
    tag: "AI Tool",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        title="Instructional Design Central"
        subtitle="Helping course designers create brilliant learning experiences"
        cta={{ label: "Explore Courses", href: "/instructional-design-courses" }}
        secondaryCta={{ label: "Join the Community", href: "/instructionaldesigncommunity" }}
      />

      {/* Courses section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-idc-primary">Featured Courses</h2>
          <Link
            href="/instructional-design-courses"
            className="text-sm font-medium text-idc-accent hover:text-idc-accent-700"
          >
            All courses →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featuredCourses.map((course) => (
            <Card key={course.href} {...course} variant="course" />
          ))}
        </div>
      </section>

      {/* Resources section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-idc-primary">Free Resources & Tools</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {featuredResources.map((resource) => (
              <Card key={resource.href} {...resource} variant="resource" />
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-idc-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Join the IDC Community</h2>
          <p className="mt-4 text-lg text-blue-200">
            Connect with instructional designers from around the world. Share ideas, get feedback,
            and grow your career.
          </p>
          <Link
            href="/instructionaldesigncommunity"
            className="mt-8 inline-block rounded-md bg-idc-accent px-8 py-3 text-base font-semibold text-white hover:bg-idc-accent-700"
          >
            Join for Free
          </Link>
        </div>
      </section>
    </>
  )
}
