module.exports = {
    content: [
        "./public/**/*.html",
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
    ],
    theme: {
        extend: {
            height: {
                '128': '32rem',
                '156': '44rem',
                '256': '64rem',
            }
        },
    },
    plugins: [],
};