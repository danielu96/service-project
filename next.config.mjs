/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
            {
                protocol: 'https',
                hostname: 'ntltjsyrbbnurrjfzzrn.supabase.co',
            }
        ],

    },
};



export default nextConfig;