import { defineConfig } from 'astro/config';

// SITE_URL и BASE_PATH задаются при сборке превью на GitHub Pages; локально сайт в корне
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'es', 'uk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
