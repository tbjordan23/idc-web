import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Needs Analysis",
  description:
    "What is a needs analysis? Overview of how to perform a needs analysis as a part of the instructional design process. Access instructional design and training needs analysis tools and resources.",
  path: "/needs-analysis",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Needs Analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A needs analysis is the systematic process of identifying performance gaps and determining the right learning or training solutions to address them. It is a critical first step in the instructional design process and helps ensure that training resources are targeted at real, measurable business or performance needs.",
      },
    },
    {
      "@type": "Question",
      name: "Why is a Needs Analysis important in instructional design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A needs analysis is important because it prevents organizations from investing in training solutions that don't address the root cause of performance problems. By diagnosing gaps between current and desired performance, instructional designers can recommend targeted interventions — whether that's training, process change, or resource support — that produce real results.",
      },
    },
    {
      "@type": "Question",
      name: "What are the steps in a training needs analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A training needs analysis typically involves: 1) Identifying the business or performance goal; 2) Assessing the current state of performance; 3) Identifying the gap between current and desired performance; 4) Determining the cause of the gap (knowledge, skills, or motivation); 5) Recommending appropriate solutions; 6) Prioritizing and scoping the intervention.",
      },
    },
  ],
}

export default function NeedsAnalysisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="Needs Analysis"
        subtitle="How to identify performance gaps and design the right learning solutions."
      >
        <p>Placeholder — migrate content from Wix.</p>
      </ContentPage>
    </>
  )
}
