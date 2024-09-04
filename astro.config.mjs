import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro'
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

import cloudflare from '@astrojs/cloudflare';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(),  keystatic()],
  output: 'hybrid',
  adapter: vercel()
});