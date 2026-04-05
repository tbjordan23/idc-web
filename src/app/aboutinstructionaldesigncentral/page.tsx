import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "About Instructional Design Central",
  description:
    "Learn about Instructional Design Central (IDC) — our mission, story, and the team behind the #1 resource hub for instructional designers.",
  path: "/aboutinstructionaldesigncentral",
})

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About IDC"
        subtitle="Our mission is to help course designers create brilliant learning experiences."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-extrabold tracking-tight text-heading">Our Story</h2>
          <div className="mt-6 space-y-6 text-base font-medium leading-relaxed text-copy-muted">
            <p>
              IDC was created to provide instructional design and learning design related professionals
              access to brilliant resources, tools, and content so that they can be successful in their
              career and education.
            </p>
            <p>
              Instructional Design Central (IDC) is also a vibrant community that connects over 40,000
              instructional design related professionals across its platforms in more than 20 countries
              worldwide.
            </p>
            <p>
              Instructional Design Central (IDC) is a privately owned and operated company launched in
              2011 out of Saratoga Springs, Utah in the shadows of Silicon Slopes.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
