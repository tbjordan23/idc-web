import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "What is Instructional Design?",
  description:
    "A complete guide to instructional design — what it is, what instructional designers do, key models, and how to get started in the field.",
  path: "/whatisinstructionaldesign",
})

export default function WhatIsIDPage() {
  return (
    <ContentPage
      title="What is Instructional Design?"
      subtitle="A complete guide to the field, the role, and how to get started."
    >
      <p>Placeholder — migrate content from Wix.</p>
    </ContentPage>
  )
}
