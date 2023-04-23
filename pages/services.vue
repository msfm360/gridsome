<template>
  <Header />
  <main>
    <div class="mx-auto container xl:px-0 mt-12 shadow-2xl mb-10">
      <section>
        <div
          class="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32 justify-end items-end rounded-lg"
        >
          <img
            src="../assets/images/background.webp"
            alt="background for services page"
            class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-sm"
          />
          <div
            class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div
            class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <h2
                class="font-bold tracking-tight text-white sm:text-6xl lg:whitespace-nowrap text-4xl"
              >
                {{ $t("Main_activities_of_Estehdath") }}
              </h2>
            </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <dl
                class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
              ></dl>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
        >
          <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2
              class="font-extrabold sm:text-4xl lg:whitespace-nowrap text-blue-500 dark:text-white"
            >
              <span
                class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
              >
                {{ $t("Protective_coatings") }}
              </span>
            </h2>
            <p class="text-2xl mt-4 text-gray-400 text-center">
              {{ $t("Protective_coatings_description") }}
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0"></div>
          </div>
          <div class="flex items-center gap-8 p-8 lg:p-24">
            <img
              src="../assets/images/Protective_coatings_image.png"
              class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
              alt="Tree"
            />
          </div>
        </div>
      </section>
      <section>
        <div
          class="bg-slate-200 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
        >
          <div class="flex items-center gap-8 p-8 lg:p-24 justify-center">
            <img
              src="../assets/images/Fire_proofing_coatings.webp"
              class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
              alt="Tree"
            />
          </div>
          <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2
              class="font-extrabold text-[#C5943B] dark:text-white sm:text-4xl"
            >
              <span
                class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
              >
                {{ $t("Fire_proofing_coatings") }}
              </span>
            </h2>
            <p class="text-2xl mt-4 text-gray-600 text-center">
              {{ $t("Fire_proofing_coatings_description") }}
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0"></div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
        >
          <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <div
              class="font-extrabold text-blue-500 dark:text-white sm:text-4xl"
            >
              <span
                class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
              >
                {{ $t("Floor_coatings") }}
              </span>
            </div>
            <p class="text-2xl mt-4 text-gray-600 text-center">
              {{ $t("Floor_coatings_description") }}
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0"></div>
          </div>
          <div class="flex items-center gap-8 p-8 lg:p-24">
            <img
              src="../assets/images/img2.jpg"
              class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
              alt="Tree"
            />
          </div>
        </div>
      </section>
      <section>
        <div
          class="bg-slate-200 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
        >
          <div class="flex items-center gap-8 p-8 lg:p-24 justify-center">
            <img
              src="../assets/images/Insulation.webp"
              class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
              alt="Tree"
            />
          </div>
          <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2
              class="font-extrabold text-[#C5943B] dark:text-white sm:text-4xl"
            >
              <span
                class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
              >
                {{ $t("Insulation") }}
              </span>
            </h2>
            <p class="text-2xl mt-4 text-gray-600 text-center">
              {{ $t("Insulation_description") }}
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0"></div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
        >
          <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2
              class="font-extrabold text-blue-500 dark:text-white sm:text-4xl"
            >
              <span
                class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
              >
                {{ $t("Tank_protection_coatings") }}
              </span>
            </h2>
            <p class="text-2xl mt-4 text-gray-600 text-center">
              {{ $t("Tank_protection_coatings_description") }}
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0"></div>
          </div>

          <div class="flex items-center gap-8 p-8 lg:p-24">
            <img
              src="../assets/images/tank.jpg"
              class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
              alt="picture for tank protection coatings"
            />
          </div>
        </div>
      </section>
      <section>
        <div class="relative bg-cover bg-left h-96 bg-slate-200 shadow-md">
          <img
            src="../assets/images/bridge-full.webp"
            alt="picture of a bridge with a sunset in the background"
            srcset=""
            class="object-cover w-full h-full opacity-25 blur-sm"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <h2 class="text-4xl font-extrabold text-[#C5943B] mb-4">
                {{ $t("Coating_for_concrete_structure") }}
              </h2>
              <p class="text-lg text-gray-600 font-bold flex ml-6 mr-6">
                {{ $t("Coating_for_concrete_structure_description") }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ok -->
      <div class="relative isolate overflow-hidden"></div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code === locale.value);
});

useHead({
  htmlAttrs: {
    dir: availableLocales.value[0].dir,
  },
});

</script>
