// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css" , 'animate.css/animate.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
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
        { hid: "description", name: "description", content: "Estehdath provides coating and insulation solutions for your home or business. From intumescent paint to water and thermal insulation, we have you covered with the latest technology and materials to ensure quality and durability" },
        { hid: "og:title", property: "og:title", content: "Estehdath" },
        { hid: "og:description", property: "og:description", content: "Estehdath provides coating and insulation solutions for your home or business. From intumescent paint to water and thermal insulation, we have you covered with the latest technology and materials to ensure quality and durability" },
        { hid: "og:image", property: "og:image", content: "https://estehdath.com/og-image.png" },
        { hid: "og:url", property: "og:url", content: "https://estehdath.com" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:site_name", property: "og:site_name", content: "Estehdath" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:site", name: "twitter:site", content: "@estehdath117" },
        { hid: "twitter:creator", name: "twitter:creator", content: "@estehdath117" },
        { hid: "twitter:title", name: "twitter:title", content: "estehdath117" },
        { hid: "twitter:description", name: "twitter:description", content: "Estehdath provides coating and insulation solutions for your home or business. From intumescent paint to water and thermal insulation, we have you covered with the latest technology and materials to ensure quality and durability" },
        { hid: "twitter:image", name: "twitter:image", content: "https://estehdath.com/og-image.png" },
        { hid: "twitter:image:alt", name: "twitter:image:alt", content: "Estehdath"}
        

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
