import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'es', 'uk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
