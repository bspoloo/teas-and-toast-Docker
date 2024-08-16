/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });

        return config;
    },
    async rewrites() {
        return [
            {
                source: '/home',
                destination: '/atomic/pages/home',
            },
        ];
    },
};

export default nextConfig;