import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model",
  description:
    "What is the ADDIE Model? The ADDIE instructional design model is the generic process traditionally used by instructional designers to create instruction.",
  path: "/addie-model",
})

export default function ADDIEModelPage() {
  return (
    <ContentPage
      title="ADDIE Model Course and Certificate"
      subtitle="Analysis, Design, Development, Implementation, and Evaluation — a complete guide."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
