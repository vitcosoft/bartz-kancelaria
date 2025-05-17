// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: true,
    },
    css: {
      devSourcemap: true,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/sitemap'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Kancelaria Bartz',
      meta: [
        { name: 'description', content: 'Strona WWW Kancelarii Radcy Prawnego Justyna Bartz' },
      ],
      htmlAttrs: {
        lang: 'pl'
      }
    }
  }
})
