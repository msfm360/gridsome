<template>
  <Header />
      <div class="bg-white relative lg:py-20">
    <div
      class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row"
    >
      <div
        class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row"
      >
        <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div
            class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10"
          >
            <img src="../assets/images/svgwriter.svg" />
          </div>
        </div>
        <div
          class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12"
        >
          <div
            class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10"
          >
            <p
              class="w-full text-4xl font-extrabold text-center leading-snug text-blue-500"
            >
              {{ $t("contact") }}
            </p>

            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              <form name="contact" method="POST" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <div class="relative mb-6">
                  <p
                    class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                  >
                    {{ $t("name") }}
                  </p>
                  <input
                  type="text"
                    name="fullName"
                    placeholder="First and Last Name "                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div class="relative mb-6">
                  <p
                    class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                  >
                    {{ $t("Email") }}
                  </p>
                  <input
                  type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div class="relative mb-6">
                  <p
                    class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                  >
                    {{ $t("PhoneNumber") }}
                  </p>
                  <input
                  type="number"
                    name="phone"
                    placeholder="+966 555 555 555"
                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div class="relative mb-6">
                  <p
                    class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute"
                  >
                    {{ $t("Message") }}
                  </p>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="type your message here"
                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>
                <div class="relative">
                  <button
                    type="submit"
                    class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-blue-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                  >
                    {{ $t("Send") }}
                  </button>
                  <div class="relative flex py-5 items-center">
                    <div class="flex-grow border-t border-gray-400"></div>
                    <span class="flex-shrink mx-4 text-gray-400">{{ $t("or") }}</span>
                    <div class="flex-grow border-t border-gray-400"></div>
                  </div>
                  <a
                    href="https://wa.me/966532688777"
                    class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-green-500 rounded-lg transition duration-200 hover:bg-green-600 ease"
                    target="_blank"
                  >
                    <i class="fab fa-whatsapp w-30 h-30 ml-2 mr-2"></i> Whatsapp
                  </a>
                </div>
              </form>
            </div>
          </div>
          <svg
            viewbox="0 0 91 91"
            class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-[#FFA602] fill-current"
          >
            <g stroke="none" strokewidth="1" fillrule="evenodd">
              <g fillrule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72" />
                    <circle cx="15.296" cy="3.445" r="2.719" />
                    <circle cx="27.333" cy="3.445" r="2.72" />
                    <circle cx="39.369" cy="3.445" r="2.72" />
                    <circle cx="51.405" cy="3.445" r="2.72" />
                    <circle cx="63.441" cy="3.445" r="2.72" />
                    <circle cx="75.479" cy="3.445" r="2.72" />
                    <circle cx="87.514" cy="3.445" r="2.719" />
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72" />
                    <circle cx="15.296" cy="3.525" r="2.719" />
                    <circle cx="27.333" cy="3.525" r="2.72" />
                    <circle cx="39.369" cy="3.525" r="2.72" />
                    <circle cx="51.405" cy="3.525" r="2.72" />
                    <circle cx="63.441" cy="3.525" r="2.72" />
                    <circle cx="75.479" cy="3.525" r="2.72" />
                    <circle cx="87.514" cy="3.525" r="2.719" />
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72" />
                    <circle cx="15.296" cy="3.605" r="2.719" />
                    <circle cx="27.333" cy="3.605" r="2.72" />
                    <circle cx="39.369" cy="3.605" r="2.72" />
                    <circle cx="51.405" cy="3.605" r="2.72" />
                    <circle cx="63.441" cy="3.605" r="2.72" />
                    <circle cx="75.479" cy="3.605" r="2.72" />
                    <circle cx="87.514" cy="3.605" r="2.719" />
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72" />
                    <circle cx="15.296" cy="3.686" r="2.719" />
                    <circle cx="27.333" cy="3.686" r="2.72" />
                    <circle cx="39.369" cy="3.686" r="2.72" />
                    <circle cx="51.405" cy="3.686" r="2.72" />
                    <circle cx="63.441" cy="3.686" r="2.72" />
                    <circle cx="75.479" cy="3.686" r="2.72" />
                    <circle cx="87.514" cy="3.686" r="2.719" />
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72" />
                    <circle cx="15.296" cy="2.767" r="2.719" />
                    <circle cx="27.333" cy="2.767" r="2.72" />
                    <circle cx="39.369" cy="2.767" r="2.72" />
                    <circle cx="51.405" cy="2.767" r="2.72" />
                    <circle cx="63.441" cy="2.767" r="2.72" />
                    <circle cx="75.479" cy="2.767" r="2.72" />
                    <circle cx="87.514" cy="2.767" r="2.719" />
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72" />
                    <circle cx="15.296" cy="2.846" r="2.719" />
                    <circle cx="27.333" cy="2.846" r="2.72" />
                    <circle cx="39.369" cy="2.846" r="2.72" />
                    <circle cx="51.405" cy="2.846" r="2.72" />
                    <circle cx="63.441" cy="2.846" r="2.72" />
                    <circle cx="75.479" cy="2.846" r="2.72" />
                    <circle cx="87.514" cy="2.846" r="2.719" />
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72" />
                    <circle cx="15.296" cy="2.926" r="2.719" />
                    <circle cx="27.333" cy="2.926" r="2.72" />
                    <circle cx="39.369" cy="2.926" r="2.72" />
                    <circle cx="51.405" cy="2.926" r="2.72" />
                    <circle cx="63.441" cy="2.926" r="2.72" />
                    <circle cx="75.479" cy="2.926" r="2.72" />
                    <circle cx="87.514" cy="2.926" r="2.719" />
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72" />
                    <circle cx="15.296" cy="3.006" r="2.719" />
                    <circle cx="27.333" cy="3.006" r="2.72" />
                    <circle cx="39.369" cy="3.006" r="2.72" />
                    <circle cx="51.405" cy="3.006" r="2.72" />
                    <circle cx="63.441" cy="3.006" r="2.72" />
                    <circle cx="75.479" cy="3.006" r="2.72" />
                    <circle cx="87.514" cy="3.006" r="2.719" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            viewbox="0 0 91 91"
            class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current"
          >
            <g stroke="none" strokewidth="1" fillrule="evenodd">
              <g fillrule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72" />
                    <circle cx="15.296" cy="3.445" r="2.719" />
                    <circle cx="27.333" cy="3.445" r="2.72" />
                    <circle cx="39.369" cy="3.445" r="2.72" />
                    <circle cx="51.405" cy="3.445" r="2.72" />
                    <circle cx="63.441" cy="3.445" r="2.72" />
                    <circle cx="75.479" cy="3.445" r="2.72" />
                    <circle cx="87.514" cy="3.445" r="2.719" />
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72" />
                    <circle cx="15.296" cy="3.525" r="2.719" />
                    <circle cx="27.333" cy="3.525" r="2.72" />
                    <circle cx="39.369" cy="3.525" r="2.72" />
                    <circle cx="51.405" cy="3.525" r="2.72" />
                    <circle cx="63.441" cy="3.525" r="2.72" />
                    <circle cx="75.479" cy="3.525" r="2.72" />
                    <circle cx="87.514" cy="3.525" r="2.719" />
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72" />
                    <circle cx="15.296" cy="3.605" r="2.719" />
                    <circle cx="27.333" cy="3.605" r="2.72" />
                    <circle cx="39.369" cy="3.605" r="2.72" />
                    <circle cx="51.405" cy="3.605" r="2.72" />
                    <circle cx="63.441" cy="3.605" r="2.72" />
                    <circle cx="75.479" cy="3.605" r="2.72" />
                    <circle cx="87.514" cy="3.605" r="2.719" />
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72" />
                    <circle cx="15.296" cy="3.686" r="2.719" />
                    <circle cx="27.333" cy="3.686" r="2.72" />
                    <circle cx="39.369" cy="3.686" r="2.72" />
                    <circle cx="51.405" cy="3.686" r="2.72" />
                    <circle cx="63.441" cy="3.686" r="2.72" />
                    <circle cx="75.479" cy="3.686" r="2.72" />
                    <circle cx="87.514" cy="3.686" r="2.719" />
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72" />
                    <circle cx="15.296" cy="2.767" r="2.719" />
                    <circle cx="27.333" cy="2.767" r="2.72" />
                    <circle cx="39.369" cy="2.767" r="2.72" />
                    <circle cx="51.405" cy="2.767" r="2.72" />
                    <circle cx="63.441" cy="2.767" r="2.72" />
                    <circle cx="75.479" cy="2.767" r="2.72" />
                    <circle cx="87.514" cy="2.767" r="2.719" />
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72" />
                    <circle cx="15.296" cy="2.846" r="2.719" />
                    <circle cx="27.333" cy="2.846" r="2.72" />
                    <circle cx="39.369" cy="2.846" r="2.72" />
                    <circle cx="51.405" cy="2.846" r="2.72" />
                    <circle cx="63.441" cy="2.846" r="2.72" />
                    <circle cx="75.479" cy="2.846" r="2.72" />
                    <circle cx="87.514" cy="2.846" r="2.719" />
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72" />
                    <circle cx="15.296" cy="2.926" r="2.719" />
                    <circle cx="27.333" cy="2.926" r="2.72" />
                    <circle cx="39.369" cy="2.926" r="2.72" />
                    <circle cx="51.405" cy="2.926" r="2.72" />
                    <circle cx="63.441" cy="2.926" r="2.72" />
                    <circle cx="75.479" cy="2.926" r="2.72" />
                    <circle cx="87.514" cy="2.926" r="2.719" />
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72" />
                    <circle cx="15.296" cy="3.006" r="2.719" />
                    <circle cx="27.333" cy="3.006" r="2.72" />
                    <circle cx="39.369" cy="3.006" r="2.72" />
                    <circle cx="51.405" cy="3.006" r="2.72" />
                    <circle cx="63.441" cy="3.006" r="2.72" />
                    <circle cx="75.479" cy="3.006" r="2.72" />
                    <circle cx="87.514" cy="3.006" r="2.719" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Contact Section Start -->
  <div class="pb-16" >
    <div class="container flex justify-center mx-auto pt-6">
      <div>
        <!-- <p class="text-[#FFA602] text-4xl text-center font-normal pb-3">
          {{ contact }}
        </p> -->
        <h1
          class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto"
        >
          <!-- slogan -->
        </h1>
      </div>
    </div>
    <div class="w-full px-10 pt-10">
      <div class="container mx-auto">
        <div
          class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <!-- card -->
          <div
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div class="h-300 rounded-xl overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <div
                    class="h-full w-full rounded-full shadow-lg border border-solid flex justify-center items-center text-gray-700 bg-white"
                  >
                    <i class="fa-regular fa-envelope w-24 h-24"></i>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-16 text-center mb-10">
                <div class="font-bold text-3xl text-center pb-1 text-gray-700">
                  {{ $t("Email") }}
                </div>
                <span>{{ $t("info") }}:</span>
                <a
                  href="mailto:info@estehdath.com
                    "
                  class="text-blue-500"
                >
                  contact@estehdath.com
                </a>
                <div>
                  <span>{{ $t("sales") }}:</span>
                  <a
                    href="mailto:info@estehdath.com
                    "
                    class="text-blue-500"
                  >
                    sales@estehdath.com
                  </a>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end -->
          <!-- card -->
          <div
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div class="h-300 rounded-xl overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <div
                    class="h-full w-full rounded-full shadow-lg border border-solid flex justify-center items-center text-gray-700 bg-white"
                  >
                    <i class="fa-brands fa-whatsapp w-24 h-24"></i>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-16 text-center mb-20">
                <div class="font-bold text-3xl text-center pb-1 text-gray-700">
                  Whatsapp
                </div>
                <!-- whatsapp -->
                {{ $t("sales") }} :
                <a
                  href="https://wa.me/966532688777"
                  class="text-blue-500"
                  target="_blank"
                  >+966532688777</a
                >
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end -->
          <!-- card -->
          <div
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div class="h-300 rounded-xl overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <div
                    class="h-full w-full rounded-full shadow-lg border border-solid flex justify-center items-center text-gray-700 bg-white"
                  >
                    <i class="fa-solid fa-phone w-20 h-20"></i>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-16 text-center mb-20">
                <div class="font-bold text-3xl text-center pb-1 text-gray-700">
                  {{ $t("Phone") }}
                </div>
                <div>
                  <span>{{ $t("sales") }}:</span>
                  <a href="tel:+966532688777" class="text-blue-500">
                    +966532688777
                  </a>
                </div>
                <div></div>
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end -->
          <!-- card  -->
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Contact Section End -->
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
