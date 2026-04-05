import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "History of Instructional Design",
  description:
    "A timeline of instructional design history — from WWII military training to modern eLearning and AI-driven learning experiences.",
  path: "/instructional-design-history",
})

export default function IDHistoryPage() {
  return (
    <ContentPage
      title="Instructional Design Timeline"
      subtitle="From World War II military training to AI-powered learning — how the field evolved."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
