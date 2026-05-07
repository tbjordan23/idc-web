import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Link from "next/link"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Education",
  description:
    "Explore instructional design definitions, foundational models, learning theory, history, and the core concepts every instructional designer needs to know.",
  path: "/instructionaldesigneducation",
})

const topics = [
  {
    title: "What is Instructional Design?",
    description:
      "New to the field? Start here. A clear, practical introduction to what instructional design is, where it came from, and why it matters.",
    href: "/whatisinstructionaldesign",
  },
  {
    title: "Instructional Design Models",
    description:
      "From ADDIE to SAM to Agile — explore the frameworks that guide how instructional designers plan, build, and evaluate learning experiences.",
    href: "/instructionaldesignmodels",
  },
  {
    title: "The ADDIE Model",
    description:
      "A deep dive into the most widely used instructional design framework: Analysis, Design, Development, Implementation, and Evaluation.",
    href: "/addie-model",
  },
  {
    title: "Adult Learning Theory",
    description:
      "Understanding how adults learn is foundational to designing training that sticks. Explore andragogy, self-directed learning, and the principles that shape effective adult education.",
    href: "/adult-learning-theory",
  },
  {
    title: "Learning Theory",
    description:
      "Behaviorism, cognitivism, constructivism — the theoretical foundations behind how humans acquire knowledge and build skills.",
    href: "/learning-theory",
  },
  {
    title: "Needs Analysis",
    description:
      "Learn how to identify the real performance gaps before you build anything — the foundational skill that separates great instructional designers from order takers.",
    href: "/needs-analysis",
  },
  {
    title: "History of Instructional Design",
    description:
      "From World War II military training to AI-powered personalized learning — how the field of instructional design has evolved over decades.",
    href: "/instructional-design-history",
  },
  {
    title: "IDC Blog",
    description:
      "Practical articles, insights, and career guidance for instructional designers at every stage — from first job to senior leadership.",
    href: "/blog",
  },
]

export default function IDEducationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-heading">Instructional Design Education</h1>
        <p className="mt-4 max-w-2xl text-lg text-copy-muted">
          Everything you need to understand the field — from foundational definitions to the models,
          theories, and history that shape how instructional designers work.
        </p>
        <p className="mt-3 text-base text-copy-muted">
          Whether you&rsquo;re just discovering instructional design or deepening expertise you&rsquo;ve
          built over years, this is your starting point.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, i) => (
          <ScrollReveal key={topic.href} delay={(i % 3) as 0 | 1 | 2}>
            <Link href={topic.href} className="group block h-full">
              <div className="flex h-full flex-col rounded-card border border-edge bg-surface p-6 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
                <h2 className="text-base font-bold text-copy transition-colors group-hover:text-accent">
                  {topic.title}
                </h2>
                <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-copy-muted">
                  {topic.description}
                </p>
                <span className="mt-4 text-xs font-semibold text-accent">Explore →</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
