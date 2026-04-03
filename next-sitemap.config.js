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
  // Exclude API routes and auth pages
  exclude: ["/api/*", "/auth/*"],
}
