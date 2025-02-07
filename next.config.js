/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/v1/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:19159'}/v1/:path*`,
                basePath: false
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/v1/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
                ]
            }
        ]
    }
}

module.exports = nextConfig
