/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'instructionaldesigncentral.com',
          },
        ],
        destination: 'https://www.instructionaldesigncentral.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
