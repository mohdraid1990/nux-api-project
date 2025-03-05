export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700]
    }
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";'
        }
      }
    }
  },
  devtools: { enabled: false }
})