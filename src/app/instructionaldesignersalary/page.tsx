import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Designer Salary Guide",
  description:
    "How much do instructional designers make? Explore salary ranges by experience, location, industry, and role type.",
  path: "/instructionaldesignersalary",
})

export default function IDSalaryPage() {
  return (
    <ContentPage
      title="Instructional Designer Salary Guide"
      subtitle="How much do instructional designers make? Explore salary ranges by experience, location, and industry."
    >
      <p>Placeholder — salary data and analysis will appear here.</p>
    </ContentPage>
  )
}
