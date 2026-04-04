import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Card from "@/components/ui/Card"

export const metadata: Metadata = generatePageMetadata({
  title: "Blog — Instructional Design Insights",
  description:
    "Articles, insights, and practical tips for instructional designers. Covering ID models, eLearning tools, AI, learning theory, and more.",
  path: "/blog",
})

// Placeholder posts — replace with CMS/MDX data source
const placeholderPosts = [
  {
    title: "Making the Leap from Teaching to Instructional Design",
    description:
      "Thinking about transitioning from classroom teaching to instructional design? Here's what you need to know.",
    href: "/post/making-the-leap-from-teaching-to-instructional-design",
    tag: "Teacher Transition",
    date: "2025-03-15",
  },
  {
    title: "The Future of Learning: Why Personalization Changes Everything",
    description:
      "Personalized learning is no longer a nice-to-have. Here's why it's becoming mission-critical.",
    href: "/post/the-future-of-learning-why-personalization-changes-everything",
    tag: "Learning Design",
    date: "2025-02-28",
  },
  {
    title: "Top 5 Learning Experience Design Trends for 2026",
    description:
      "The LX design landscape is shifting fast. These five trends will shape how we build learning in 2026.",
    href: "/post/top-5-learning-experience-design-trends-for-2026",
    tag: "eLearning",
    date: "2025-01-10",
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-copy">Blog</h1>
      <p className="mt-4 text-lg text-copy-muted">
        Insights and practical tips for instructional designers.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderPosts.map((post) => (
          <Card key={post.href} {...post} variant="blog" />
        ))}
      </div>
    </div>
  )
}
