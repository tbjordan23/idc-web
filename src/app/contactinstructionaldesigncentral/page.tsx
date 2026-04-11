import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"
import ContactForm from "./ContactForm"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Instructional Design Central. Have a question, partnership idea, or just want to connect? We'd love to hear from you.",
  path: "/contactinstructionaldesigncentral",
})

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Get in Touch"
      title="Contact Us"
      subtitle="Have a question, a partnership idea, or just want to connect? We'd love to hear from you."
    >
      <p>
        Whether you&rsquo;re looking for more information about our courses, have a content
        suggestion, or want to explore a collaboration — this is the place. Fill out the form
        below and we&rsquo;ll get back to you as soon as we can.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </ContentPage>
  )
}
