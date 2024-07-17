/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.icourse163.org",
            },
            {
                protocol: "https",
                hostname: "www.bilibili.com"
            },
            {
                protocol: "https",
                hostname: "www.coursera.org"
            },
            {
                protocol: "https",
                hostname: "www.edx.org"
            },
            {
                protocol: "https",
                hostname: "www.khanacademy.org"
            },
            {
                protocol: "https",
                hostname: "www.udemy.com"
            }
        ]
    }
};

export default nextConfig;
