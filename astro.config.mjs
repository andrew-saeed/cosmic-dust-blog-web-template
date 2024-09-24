// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmic-dust-blog-web-template.netlify.app',
  integrations: [tailwind()],
  server: {
    port: 4200
  },
  trailingSlash: 'always',
  redirects: {
    '/': '/en/1/'
  }
});