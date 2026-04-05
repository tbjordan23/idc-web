import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "ChatID: Instructional Design AI",
  description:
    "ChatID is an AI assistant trained specifically for instructional designers. Get expert guidance on ID models, eLearning, and learning design.",
  path: "/chatid-instructional-design-ai",
})

export default function ChatIDPage() {
  return (
    <>
      <Hero
        title="ChatID: Your AI Instructional Design Assistant"
        subtitle="An AI assistant trained specifically for instructional designers."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-copy-muted">Placeholder — ChatID interface will appear here.</p>
        </ScrollReveal>
      </section>
    </>
  )
}
