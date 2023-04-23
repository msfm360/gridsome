// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
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
    body: {
      div: [
        {
          id: "app",
          _dangerouslySetInnerHTML: {
            __html: `<div>
            <form name="contact" method="POST" netlify hidden>
            <input type="hidden" name="form-name" value="contact" />
            <div class="mb-6">
              <label for="fullName" class="block text-xs text-dark"
                >{{ Full_Name }}*
                <input
                  type="text"
                  name="fullName"
                  placeholder="First and Last Name "
                  class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                  required
                />
              </label>
            </div>
            <div class="mb-6">
              <label for="email" class="block text-xs text-dark"
                >{{ Email_Address }}*
                <input
                  type="email"
                  name="email"
                  placeholder="example@yourmail.com"
                  class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                  required
                />
              </label>
            </div>
            <div class="mb-6">
              <label for="phone" class="block text-xs text-dark"
                >{{ Phone_Number }}*
                <input
                  type="text"
                  name="phone"
                  placeholder="+966 555 555 555"
                  class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                  required
                />
              </label>
            </div>
            <div class="mb-6">
              <label for="message" class="block text-xs text-dark"
                >{{ Message }}*
                <textarea
                  name="message"
                  rows="3"
                  placeholder="type your message here"
                  class="w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                  required
                ></textarea>
              </label>
            </div>
            <div class="mb-0 flex flex-col">
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded bg-[#FFA602] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
              >
                {{ Send_Message }}
              </button>
              <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">or</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>
              <a
                href="https://wa.me/966532688777"
                class="inline-flex items-center justify-center rounded bg-green-600 py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
              >
                <i class="fab fa-whatsapp w-30 h-30 ml-2 mr-2"></i> Whatsapp
              </a>
            </div>
          </form>
      
            </div>`,
          },
        },
      ],
    },
  },
  sitemap: {
    siteUrl: "https://estehdath.com",
  },
});
// sitemap
