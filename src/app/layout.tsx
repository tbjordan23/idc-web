import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.instructionaldesigncentral.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Instructional Design Central | Community and Resources",
    template: "%s | Instructional Design Central",
  },
  description:
    "Instructional Design Central (IDC) helps instructional design related professionals stay sharp and create amazing learning experiences by providing access to online learning, community connections, and professional resources.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Instructional Design Central",
  },
  twitter: {
    card: "summary_large_image",
    site: "@id_central",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-canvas text-copy antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
