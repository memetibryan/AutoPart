/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/uploads/**',
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/makes/:path*',
                destination: 'http://127.0.0.1:1337/api/makes/:path*' // Proxy to Backend
            }
        ]
    }
}

module.exports = nextConfig
