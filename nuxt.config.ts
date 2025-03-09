// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-09',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  build: {
    transpile: ['vuedraggable']
  },
})