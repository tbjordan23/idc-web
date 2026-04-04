import type { Metadata } from "next"
import HomeHero from "@/components/ui/HomeHero"
import Card from "@/components/ui/Card"
import ScrollReveal from "@/components/ui/ScrollReveal"
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
      <HomeHero />

      {/* Courses section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Courses</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Learn from the Best
            </h2>
          </div>
          <Link
            href="/instructional-design-courses"
            className="hidden text-sm font-semibold text-accent hover:text-accent-hover sm:block"
          >
            All courses →
          </Link>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {featuredCourses.map((course, i) => (
            <ScrollReveal key={course.href} delay={(i + 1) as 1 | 2} className="h-full">
              <Card {...course} variant="course" />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Resources section */}
      <section className="border-y border-edge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Resources</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Free Tools &amp; Resources
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {featuredResources.map((resource, i) => (
              <ScrollReveal key={resource.href} delay={(i + 1) as 1 | 2 | 3} className="h-full">
                <Card {...resource} variant="resource" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Community</p>
            <h2
              className="mx-auto mt-3 max-w-xl font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Join the IDC Community
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base font-medium text-copy-muted">
              Connect with instructional designers worldwide. Share ideas, get feedback, and grow your career.
            </p>
            <Link
              href="/instructionaldesigncommunity"
              className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Join for Free →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
