// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css" , 'animate.css/animate.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image-edge", "@nuxtjs/i18n", "nuxt-simple-sitemap"],
  i18n: {
    // vueI18n: './i18n.config.ts' // if you are using custom path, default
    lazy: true,
    strategy: "prefix_and_default",
    langDir: "locales/",
    defaultLocale: "en",
    baseUrl: "https://localhost:3000",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
        rtl: false,
        dir: "ltr",
        isCatchallLocale: true,
      },
      {
        code: "ar",
        iso: "ar-sa", // ISO 639-1 code
        name: "العربية",
        file: "ar.json",
        rtl: true,
        dir: "rtl",
        isCatchallLocale: true,
      },
    ],
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "My Project" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  sitemap: {
    siteUrl: "https://estehdath.com",
  },
});
// sitemap
