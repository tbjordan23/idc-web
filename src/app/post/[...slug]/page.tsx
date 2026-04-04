// Handles both:
//   /post/article-slug                  → params.slug = ['article-slug']
//   /post/2016/04/14/article-slug       → params.slug = ['2016','04','14','article-slug']

import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"

interface Props {
  params: { slug: string[] }
}

function getArticleSlug(slugParts: string[]): string {
  // If first segment looks like a year, drop date prefix and take the last segment
  return slugParts[slugParts.length - 1]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = getArticleSlug(params.slug)
  const title = slug.replace(/-/g, " ")
  return generatePageMetadata({
    title,
    description: `Read this article on Instructional Design Central.`,
    path: `/post/${params.slug.join("/")}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const slug = getArticleSlug(params.slug)
  const title = slug.replace(/-/g, " ")

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold capitalize text-copy">{title}</h1>
      <div className="mt-8 text-copy-muted">
        <p>Placeholder — blog post content will be rendered here from the CMS or MDX source.</p>
      </div>
    </article>
  )
}
