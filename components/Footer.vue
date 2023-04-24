<script setup>
const { locale} = useI18n();
</script>

<template>
  <footer  :dir="locale === 'en' ? 'ltr ' : 'rtl'">
    <hr class="shadow-lg " />
    <div>
      <div
        class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
      >
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <section>
            <h2 class="sm:col-span-2">
              <NuxtLink
                to="/"
                aria-label="Go home"
                title="ESTEHDATH"
                class="inline-flex items-center"
              >
                <img
                  src="../assets/images/image.svg"
                  alt="logo of the company"
                  class="w-10 h-10"
                />

                <span
                  class="ml-2 text-xl font-bold tracking-wide text-[#C5943B] mr-2"
                  >{{ $t("title") }}</span
                >
              </NuxtLink>
              <div class="mt-6 lg:max-w-sm">
                <p class="text-sm text-gray-800">{{ $t("question") }}</p>
                <p class="mt-4 text-sm text-gray-800">
                  {{ $t("technical") }}
                </p>
              </div>
            </h2>
          </section>
          <section>
            <div class="space-y-2 text-sm">
              <h2 class="text-base font-bold tracking-wide text-[#C5943B]">
                {{ $t("contact") }}
              </h2>
              <div class="flex">
                <p class="mr-1 text-gray-800">{{ $t("Phone_Number") }}:</p>
                <a
                  href="tel:+966532688777"
                  aria-label="Our phone"
                  title="Our phone"
                  class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >+966532688777
                </a>
              </div>
              <div class="flex">
                <p class="mr-1 text-gray-800">{{ $t("Email_Address") }}:</p>
                <a
                  href="mailto:info@estehdath.com"
                  aria-label="Our email"
                  title="Our email"
                  class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >info@estehdath.com
                </a>
              </div>
              <div class="flex">
                <p class="mr-1 text-gray-800">{{ $t("Address") }}:</p>
                <a
                  href="https://goo.gl/maps/gAgAfzpRoj9vqC117"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Dammam, Saudi Arabia
                </a>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2 class="text-base font-bold tracking-wide text-[#C5943B]">
                {{ $t("Social") }}
              </h2>
              <div class="flex items-center mt-1 space-x-3">
                <meta name="twitter" content="Social media account" />
                <a
                  href="https://twitter.com/Estehdath117"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                >
                  <i class="fa-brands fa-square-twitter h-8 w-8"></i>
                </a>
                <a
                  href="https://instgram.com/Estehdath1"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                >
                  <i class="fa-brands fa-square-instagram w-8 h-8"></i>
                </a>
                <a
                  href="https://www.snapchat.com/add/estehdath?share_id=YrjmztTJ9EU&locale=ar-AE"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                >
                  <i class="fa-brands fa-square-snapchat w-8 h-8"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091792728388&mibextid=ZbWKwL"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                >
                  <i class="fa-brands fa-square-facebook w-8 h-8"></i>
                </a>
                <a
                  href="https://wa.me/966532688777"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                >
                  <i class="fa-brands fa-square-whatsapp w-8 h-8"></i>
                </a>
              </div>
              <p class="mt-4 text-sm text-gray-500"></p>
            </div>
          </section>
        </div>
        <div
          class="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row"
        >
          <p class="text-sm text-gray-600 text-center">© {{ $t("rights") }}.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
