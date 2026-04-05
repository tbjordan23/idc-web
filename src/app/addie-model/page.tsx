import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model",
  description:
    "What is the ADDIE Model? The ADDIE instructional design model is the generic process traditionally used by instructional designers to create instruction.",
  path: "/addie-model",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ADDIE Model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ADDIE Model is the most widely used instructional design framework. It stands for Analysis, Design, Development, Implementation, and Evaluation — the five phases of the instructional design process. It provides a systematic approach for designing and developing effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What are the five phases of the ADDIE Model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five phases of the ADDIE Model are: 1) Analysis — identifying the learning problem, goals, and audience; 2) Design — planning the instructional strategy, objectives, and assessments; 3) Development — creating and assembling the learning content and materials; 4) Implementation — delivering or distributing the instruction to learners; 5) Evaluation — measuring the effectiveness of instruction through formative and summative assessments.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the ADDIE Model important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ADDIE Model is important because it provides a structured, repeatable process for designing effective learning experiences. It helps instructional designers systematically address learner needs, align training with business goals, and ensure quality through ongoing evaluation. It is recognized as the gold standard framework in the instructional design field.",
      },
    },
  ],
}

export default function ADDIEModelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="ADDIE Model Course and Certificate"
        subtitle="Analysis, Design, Development, Implementation, and Evaluation — a complete guide."
      >
        <p>Placeholder — migrate content from Wix.</p>
      </ContentPage>
    </>
  )
}
