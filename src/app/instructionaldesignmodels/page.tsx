import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Models",
  description:
    "View industry standard instructional design models, learning theory, methods, learning strategies, & instructional design principles such as the ADDIE model.",
  path: "/instructionaldesignmodels",
})

export default function IDModelsPage() {
  return (
    <ContentPage
      title="Instructional Design Models"
      subtitle="The most important ID frameworks and when to use each one."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
