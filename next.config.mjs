/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'instructionaldesigncentral.com' }],
        destination: 'https://www.instructionaldesigncentral.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
