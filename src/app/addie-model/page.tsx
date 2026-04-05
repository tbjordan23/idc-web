import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model",
  description:
    "Everything you need to know about the ADDIE instructional design model: Analysis, Design, Development, Implementation, and Evaluation.",
  path: "/addie-model",
})

export default function ADDIEModelPage() {
  return (
    <ContentPage
      title="The ADDIE Model"
      subtitle="Analysis, Design, Development, Implementation, and Evaluation — a complete guide."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
