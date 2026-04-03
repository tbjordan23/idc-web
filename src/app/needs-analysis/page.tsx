import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Needs Analysis in Instructional Design",
  description:
    "Learn how to conduct a needs analysis for learning and training programs. Steps, templates, and best practices.",
  path: "/needs-analysis",
})

export default function NeedsAnalysisPage() {
  return (
    <ContentPage
      title="Needs Analysis"
      subtitle="How to identify performance gaps and design the right learning solutions."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
