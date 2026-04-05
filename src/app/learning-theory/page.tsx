import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Learning Theory Overview",
  description:
    "View definitions and history of learning theory including behaviorist learning theory, constructivist learning theory, and cognitivism learning theory.",
  path: "/learning-theory",
})

export default function LearningTheoryPage() {
  return (
    <ContentPage
      title="What is Learning Theory?"
      subtitle="The major learning theories and how to apply them in your instructional design practice."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
