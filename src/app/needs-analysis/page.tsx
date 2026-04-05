import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Needs Analysis",
  description:
    "What is a needs analysis? Overview of how to perform a needs analysis as a part of the instructional design process. Access instructional design and training needs analysis tools and resources.",
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
