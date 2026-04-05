import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Learning Theory Overview",
  description:
    "View definitions and history of learning theory including behaviorist learning theory, constructivist learning theory, and cognitivism learning theory.",
  path: "/learning-theory",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Learning Theory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning theory is the study of how people learn and the psychological and cognitive principles behind the learning process. Major learning theories include behaviorism, cognitivism, constructivism, and connectivism. Understanding learning theory is foundational for instructional designers who want to create evidence-based, effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What are the major learning theories in instructional design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The major learning theories relevant to instructional design are: Behaviorism (learning as a change in observable behavior through reinforcement and conditioning); Cognitivism (learning as mental processing of information, schemas, and memory); Constructivism (learning as active construction of knowledge through experience); and Connectivism (learning as forming connections across networks and digital environments). Each theory offers different strategies for designing effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "How does learning theory apply to instructional design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning theories directly inform instructional design decisions. Behaviorism supports drill-and-practice and feedback mechanisms. Cognitivism informs how content is organized, chunked, and sequenced. Constructivism drives problem-based, experiential, and scenario-based learning. Connectivism supports social learning and knowledge sharing. Instructional designers draw on multiple theories to match the strategy to the learning goal.",
      },
    },
  ],
}

export default function LearningTheoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="What is Learning Theory?"
        subtitle="The major learning theories and how to apply them in your instructional design practice."
      >
        <p>Placeholder — migrate content from Wix.</p>
      </ContentPage>
    </>
  )
}
