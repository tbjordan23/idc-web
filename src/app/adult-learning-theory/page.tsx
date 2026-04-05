import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Adult Learning Theory",
  description:
    "View definitions for adult learning theory, andragogy, and adult education. Learning about core adult learning principles including those from Malcolm Knowles.",
  path: "/adult-learning-theory",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Adult Learning Theory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adult learning theory, also known as andragogy, describes how adults learn differently from children. Malcolm Knowles' andragogy model identifies key principles: adults are self-directed, bring prior experience to learning, are ready to learn when they need to, and are motivated by relevance to real life. These principles are essential for instructional designers working in corporate and professional training environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is Andragogy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andragogy is the theory and practice of adult education, coined by educator Malcolm Knowles. It is based on the idea that adults learn differently than children (pedagogy). Andragogy emphasizes self-direction, experience-based learning, problem-centered approaches, and intrinsic motivation. It is a foundational concept in instructional design for corporate training and professional development.",
      },
    },
    {
      "@type": "Question",
      name: "What are Malcolm Knowles' principles of adult learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malcolm Knowles identified six key principles of adult learning: 1) Adults need to know why they are learning something; 2) Adults have a self-concept as capable, self-directed learners; 3) Adults bring a wealth of prior experience to the learning situation; 4) Adults are ready to learn things related to their current life roles; 5) Adults are problem-centered and want to apply learning immediately; 6) Adults are motivated more by internal factors than external ones.",
      },
    },
  ],
}

export default function AdultLearningTheoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="What is Adult Learning Theory"
        subtitle="Understanding andragogy and how adults learn — essential knowledge for every instructional designer."
      >
        <p>Placeholder — migrate content from Wix.</p>
      </ContentPage>
    </>
  )
}
