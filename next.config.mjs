/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static site export
    images: {
        unoptimized: true, // Required for static exports if using next/image
            remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ], // for external images
    },
    trailingSlash: true, // Ensures proper routing for GitHub Pages
};
    
export default nextConfig;
    