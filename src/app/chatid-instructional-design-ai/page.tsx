import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"

export const metadata: Metadata = generatePageMetadata({
  title: "ChatID: Instructional Design GPT",
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
        background="primary"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-gray-600">Placeholder — ChatID interface will appear here.</p>
      </section>
    </>
  )
}
