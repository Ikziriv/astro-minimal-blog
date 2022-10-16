import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: deno(),
    integrations: [
        svelte(),
        tailwind(),
        VitePWA(),
        sitemap()
    ]
});