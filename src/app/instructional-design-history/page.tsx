import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "History of Instructional Design",
  description:
    "View an interactive instructional design timeline that displays the evolution and history of instructional design and instructional technology.",
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
