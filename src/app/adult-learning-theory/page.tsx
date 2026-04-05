import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Adult Learning Theory",
  description:
    "View definitions for adult learning theory, andragogy, and adult education. Learning about core adult learning principles including those from Malcolm Knowles.",
  path: "/adult-learning-theory",
})

export default function AdultLearningTheoryPage() {
  return (
    <ContentPage
      title="What is Adult Learning Theory"
      subtitle="Understanding andragogy and how adults learn — essential knowledge for every instructional designer."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
