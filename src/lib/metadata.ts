import type { Metadata } from "next"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.instructionaldesigncentral.com"

const siteName = "Instructional Design Central"

interface PageMetadataOptions {
  title: string
  description: string
  path?: string
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-default.png",
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`

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
          url: ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
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
      images: [ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`],
    },
  }
}
