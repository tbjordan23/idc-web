import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Rated LMS",
  description:
    "View top rated Learning Management Systems (LMS). IDC ranks the best Learning Management Systems (LMS) in the industry.",
  path: "/top-rated-lms",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Learning Management System (LMS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Learning Management System (LMS) is a software platform used to create, deliver, manage, and track online learning and training programs. Organizations use LMS platforms to host eLearning courses, manage learner progress, issue certifications, and report on training outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "What are the top-rated Learning Management Systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top-rated LMS platforms include Moodle, Canvas, Cornerstone OnDemand, Docebo, TalentLMS, Absorb LMS, and Litmos. The best LMS for your organization depends on factors such as organization size, budget, required features, and whether you need a cloud-based or self-hosted solution.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right LMS for my organization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When choosing an LMS, consider your organization's size and number of learners, budget, required features (such as SCORM compliance, reporting, mobile access, and integrations), ease of use for administrators and learners, and level of customer support. It is recommended to pilot two or three platforms before making a final decision.",
      },
    },
  ],
}

export default function TopLMSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero title="Top Rated LMS" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — LMS reviews will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
