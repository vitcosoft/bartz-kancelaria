import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    baseURL: '/bartz-kancelaria/',
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  nitro: {
    prerender: {
      routes: ['/', '/o-kancelarii', '/oferta', '/kontakt'],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
