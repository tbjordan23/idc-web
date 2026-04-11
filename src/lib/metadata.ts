import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.instructionaldesigncentral.com"

const siteName = "Instructional Design Central"

interface PageMetadataOptions {
  title: string
  description: string
  path?: string
  /** Override the auto-generated OG image with a specific URL or path. */
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`

  // Default: dynamic branded image generated per page via /api/og
  const ogImageUrl =
    ogImage
      ? ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`
      : `${siteUrl}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  }
}
