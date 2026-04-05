import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Learning Theory Overview",
  description:
    "An overview of major learning theories — behaviorism, cognitivism, constructivism, connectivism — and their application in instructional design.",
  path: "/learning-theory",
})

export default function LearningTheoryPage() {
  return (
    <ContentPage
      title="Learning Theory"
      subtitle="The major learning theories and how to apply them in your instructional design practice."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
