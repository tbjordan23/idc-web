import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Designer Salary",
  description:
    "What is the average salary of an instructional designer? An instructional designer salary varies based on location and job type.",
  path: "/instructionaldesignersalary",
})

export default function IDSalaryPage() {
  return (
    <ContentPage
      title="Instructional Designer Salary Guide"
      subtitle="Know your worth. Explore what instructional designers earn by experience, location, and industry — so you can advocate for yourself with confidence."
    >
      <p>Placeholder — salary data and analysis will appear here.</p>
    </ContentPage>
  )
}
