import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"

interface Props {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const label = params.category.replace(/-/g, " ")
  return generatePageMetadata({
    title: `${label} — Blog`,
    description: `Browse all IDC blog posts in the ${label} category.`,
    path: `/blog/categories/${params.category}`,
  })
}

export default function BlogCategoryPage({ params }: Props) {
  const label = params.category.replace(/-/g, " ")
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold capitalize text-heading">{label}</h1>
        <p className="mt-4 text-copy-muted">
          Placeholder — posts in the &ldquo;{label}&rdquo; category will appear here.
        </p>
      </ScrollReveal>
    </div>
  )
}
