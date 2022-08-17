import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind(),
        VitePWA(),
        sitemap()
    ]
});