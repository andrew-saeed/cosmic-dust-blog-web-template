// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmic-dust-blog-web-template.netlify.app',
  integrations: [],
  server: {
    port: 4200
  },
  trailingSlash: 'always',
  redirects: {
    '/': '/en/1/'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});