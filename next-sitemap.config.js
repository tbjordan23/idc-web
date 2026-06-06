/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.instructionaldesigncentral.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/auth/"] },
    ],
  },
  // Exclude API routes, auth pages, and Next.js-generated asset routes
  exclude: ["/api/*", "/auth/*", "/icon.png", "/apple-icon.png"],
}
