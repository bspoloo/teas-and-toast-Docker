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
            },
            {
                source: '/meals',
                destination: '/atomic/pages/meals',
            },
            {
                source: '/cocktails',
                destination: '/atomic/pages/cocktails',
            },
            {
                source: '/meals/countries',
                destination: '/atomic/pages/meals/countries',
            },
            {
                source: '/cocktails/:id',
                destination: '/atomic/pages/cocktails/:id',
            },
            {
                source: '/cocktails/category/:category',
                destination: '/atomic/pages/cocktails/categories/:category',
            },
            {
                source: '/meals/category/:category',
                destination: '/atomic/pages/meals/categories/:category',
            },
            {
                source: '/meals/countries/:country',
                destination: '/atomic/pages/meals/countries/:country',
            },
            {
                source: '/search',
                destination: '/atomic/pages/search',
            },
            {
                source: '/look',
                destination: '/atomic/pages/look',
            },
        ];
    },
};

export default nextConfig;