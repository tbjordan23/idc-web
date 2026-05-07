import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Link from "next/link"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Resources",
  description:
    "Free and premium resources for instructional designers — templates, tools, job board, courses, needs analysis app, and more from Instructional Design Central.",
  path: "/instructionaldesignresources",
})

const resources = [
  {
    title: "Instructional Design Templates",
    description:
      "A library of free and premium templates aligned to the ADDIE process — storyboards, job aids, needs analysis forms, and more. Ready to download and use on your next project.",
    href: "/instructionaldesigntemplates",
    label: "Browse Templates",
  },
  {
    title: "Instructional Design Job Board",
    description:
      "Search and apply for instructional designer, eLearning developer, and L&D roles. Find remote, hybrid, and on-site positions across corporate, higher ed, and government sectors.",
    href: "/instructionaldesignjobs",
    label: "Search Jobs",
  },
  {
    title: "ID Foundations Course & Certificate",
    description:
      "Everything you need to build a strong foundation in instructional design — the ID role, the ADDIE model, needs analysis, learning objectives, and more. Earn a certificate on completion.",
    href: "/instructional-design-course",
    label: "View Course",
  },
  {
    title: "Free Needs Analysis App",
    description:
      "Create a complete, industry-standard learning needs analysis in 5–10 minutes. Built for instructional designers and L&D professionals — free on iPhone and iPad.",
    href: "/needs-analysis-app",
    label: "Get the App",
  },
  {
    title: "ChatID: Instructional Design AI",
    description:
      "A specialized AI assistant trained on instructional design concepts, frameworks, and best practices. Get instant answers, content drafts, and design guidance — built for IDs.",
    href: "/chatid-instructional-design-ai",
    label: "Try ChatID",
  },
  {
    title: "The Learning Design Canvas™",
    description:
      "A one-page visual planning tool for designing learning experiences. Built on modern instructional design and UX principles — free to download and use.",
    href: "/the-learning-design-canvas",
    label: "Get the Canvas",
  },
  {
    title: "The Learning Circle Framework™",
    description:
      "A collaborative learning framework designed to support community-based and cohort-style learning. Free to download and adapt for your organization.",
    href: "/learning-circle-framework",
    label: "Learn More",
  },
  {
    title: "Top Rated eLearning Tools",
    description:
      "IDC&rsquo;s curated reviews of the leading eLearning authoring tools, design software, and development platforms — ranked by features, ease of use, and value.",
    href: "/top-rated-elearning-tools",
    label: "View Tools",
  },
  {
    title: "Top Rated LMS Platforms",
    description:
      "Compare the best Learning Management Systems for corporate, academic, and small business use. Side-by-side reviews to help you choose the right platform.",
    href: "/top-rated-lms",
    label: "Compare LMS",
  },
]

export default function IDResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-heading">Instructional Design Resources</h1>
        <p className="mt-4 max-w-2xl text-lg text-copy-muted">
          Tools, templates, courses, and community built specifically for instructional designers.
          Everything here is designed to make your work better — and your career stronger.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, i) => (
          <ScrollReveal key={resource.href} delay={(i % 3) as 0 | 1 | 2}>
            <Link href={resource.href} className="group block h-full">
              <div className="flex h-full flex-col rounded-card border border-edge bg-surface p-6 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
                <h2 className="text-base font-bold text-copy transition-colors group-hover:text-accent">
                  {resource.title}
                </h2>
                <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed text-copy-muted"
                  dangerouslySetInnerHTML={{ __html: resource.description }}
                />
                <span className="mt-4 text-xs font-semibold text-accent">{resource.label} →</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
