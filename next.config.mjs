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
                source: '/',
                destination: '/atomic/pages/home',
            },
            {
                source: '/meals/:id',
                destination: '/atomic/pages/meals/:id',
            }
        ];
    },
};

export default nextConfig;