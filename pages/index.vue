<template>
  <Header />
  <div>
    <main>
      <!-- Hero Section !! -->
      <section>
        <div
          class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-20"
        >
          <div
            class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
          >
            <svg
              class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z "></path>
            </svg>
            <img
              class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="../assets/images/backgroundMain.webp"
              alt="background image for main page"
            />
          </div>

          <div
            class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl text-right"
          >
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h1
                class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none transition duration-500 transform hover:-translate-y-1"
              >
                {{ $t("slogan") }}
                <!-- v-motion-roll-left :delay="500" -->
                <div class="inline-block">
                  <span class="text-[#FFA602]">
                    {{ $t("word_coating") }}
                  </span>
                </div>
                {{ $t("word_and") }}
                <!-- v-motion-roll-left :delay="500" -->
                <div class="inline-block">
                  <span class="text-[#FFA602]">
                    {{ $t("word_insulation") }}
                  </span>
                </div>
                {{ $t("word_needs") }}
              </h1>
              <h2
                class="pr-5 mb-5 text-base text-gray-700 md:text-lg transition duration-500 transform hover:-translate-y-1"
              >
                {{ $t("hero_Content") }}
              </h2>
              <div class="flex items-center">
                <NuxtLink
                  aria-label="go to contact page"
                  to="/contact"
                  class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FFA602] hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
                >
                  {{ $t("Contact_us") }}
                </NuxtLink>
                <NuxtLink
                  to="/Services"
                  aria-label="go to Services page"
                  class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-[#FFA602]"
                  >{{ $t("Learn_more") }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- About Section !! -->
      <section  :dir="locale === 'en' ? 'ltr ' : 'rtl'">
        <div class="bg-yellow-600">
          <div
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          >
            <div>
              <i
                class="absolute fa fa-shield text-white z-0 w-96 h-96 opacity-20"
                aria-multiline="1"
              ></i>
            </div>

            <div class="grid gap-10 lg:grid-cols-2">
              <div
                class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
              >
                <div class="max-w-xl mb-6">
                  <h1
                    class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
                  >
                    <!-- Let us -->
                    {{ $t("About_us_Let") }}
                    <div class="inline-block">
                      <span class="inline-block">
                        <!-- protect -->
                        {{ $t("About_us_protect") }}
                      </span>
                    </div>
                    <!-- your property with our coating and insulation services. -->
                    {{ $t("About_us_your") }}
                  </h1>
                  <h2 class="text-base text-gray-100 md:text-lg">
                    {{ $t("About_content") }}
                  </h2>
                </div>
                <div></div>
              </div>

              <!--  -->
              <div class="flex items-center justify-center -mx-4 lg:pl-8">
                <div class="flex flex-col items-end px-3">
                  <img
                    class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 bg-teal-400"
                    src="../assets/images/img.jpg"
                    alt="Some of our projects."
                  />
                  <img
                    class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 bg-indigo-400"
                    src="../assets/images/img2.jpg"
                    alt="Some of our projects."
                  />
                </div>
                <div class="px-3">
                  <img
                    format="webp"
                    class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 bg-blue-400"
                    src="../assets/images/img3.jpg"
                    alt="Some of our projects."
                  />
                </div>
              </div>

              <!--  -->
            </div>
          </div>
        </div>
      </section>
      <!-- Logo Section !! -->
      <section  :dir="locale === 'en' ? 'ltr ' : 'rtl'">
        <div class="bg-white py-10 sm:py-10 bg-no-repeat bg-center">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2
              class="text-center text-lg font-semibold leading-8 text-gray-900"
            >
              <!-- We choose our suppliers carefully to ensure the highest standards of
        quality and safety -->
              {{ $t("Logo") }}
            </h2>
            <div
              class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            >
              <a href="https://jazeerapaints.com/" target="_blank"
                ><img
                  class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/jazeera.svg"
                  alt="logo of Aljazeera"
                  width="158"
                  height="48"
              /></a>
              <a href="https://www.basf.com/sa/en.html/" target="_blank"
                ><img
                  class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/BASF.svg"
                  alt="logo of  BASF "
                  width="158"
                  height="48"
              /></a>
              <a href="https://www.sika.com/" target="_blank"
                ><img
                  class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/sika.svg"
                  alt="logo of  sika"
                  width="158"
                  height="48"
              /></a>
              <a href="https://fosroc.com/" target="_blank"
                ><img
                  class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/fosroc.svg"
                  alt="logo of  fosroc"
                  width="158"
                  height="48"
              /></a>
              <a href="https://www.hempel.com/ar-me" target="_blank"
                ><img
                  class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/hempel.svg"
                  alt="logo of  hempel"
                  width="158"
                  height="48"
              /></a>
              <a
                href="https://sigmapaints.com/"
                target="_blank"
                class="text-center"
                ><img
                  class="col-span-1 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/sigma.svg"
                  alt="logo of  sigma"
                  width="158"
                  height="48"
              /></a>
              <a
                href="https://www.jotun.com/"
                target="_blank"
                class="text-center"
                ><img
                  class="col-span-1 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
                  src="../assets/images/logos/jotun.svg"
                  alt="logo of  jotun"
                  width="158"
                  height="48"
              /></a>
            </div>
          </div>
        </div>
      </section>
      <!-- Services Section -->
      <section  :dir="locale === 'en' ? 'ltr ' : 'rtl'">
        <div class="bg-gray-200">
          <div
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20"
          >
            <div
              class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            >
              <h1
                class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
              >
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="text-white"
                    class="absolute z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block top-2"
                  >
                    <defs>
                      <pattern
                        id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" fill="#1b3699B"></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                      width="52"
                      height="24"
                    ></rect>
                  </svg>
                  <span class="relative">
                    {{ $t("Protect") }}
                  </span>
                </span>
                <span class="text-[#FFA602]">{{ $t("assets") }}</span>
                <span>
                  {{ $t("soloution") }}
                </span>
              </h1>
            </div>
            <div
              class="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-5"
            >
              <div class="text-center">
                <div
                  class="flex items-center justify-center w-20 h-20 mx-auto mb-4 sm:w-24 sm:h-24"
                >
                  <i
                    class="fa-solid fa-fire text-white text-6xl w-12 h-12 fa-shake z-10"
                  ></i>

                  <i
                    class="fa-solid fa-shield text-[#FFA602] w-20 h-20 absolute"
                  ></i>
                </div>
                <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
                  {{ $t("Intumescent") }}
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFA602] border-solid border-2 sm:w-24 sm:h-24"
                >
                  <i class="fa-solid fa-paint-roller text-white w-12 h-12"></i>
                </div>
                <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
                  {{ $t("Floor_coating") }}
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] sm:w-24 sm:h-24"
                >
                  <i
                    class="fa-solid fa-temperature-half text-white w-12 h-12"
                  ></i>
                </div>
                <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
                  {{ $t("Thermal_insulation") }}
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] sm:w-24 sm:h-24"
                >
                  <img
                    src="../assets/images/sbgEA.svg"
                    alt="Thermal Insulation For water"
                    srcset=""
                    class="w-12 h-12"
                  />
                </div>
                <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
                  {{ $t("Thermal_Insulation_For_water") }}
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] sm:w-24 sm:h-24"
                >
                  <img
                    src="../assets/images/bridge.svg"
                    alt="Intumescent coatings"
                    class="w-12 h-12"
                    fill="white"
                  />
                </div>
                <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
                  {{ $t("Intumescent_coatings") }}
                </h6>
              </div>
            </div>
            <div class="text-center">
              <NuxtLink
                to="/services"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FFA602] hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
              >
                {{ $t("Learn_more") }}
                <span class="ml-1 -mr-2"> </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <!-- Team Section -->
      <section  :dir="locale === 'en' ? 'ltr ' : 'rtl'">
        <section
          class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 shadow-lg"
        >
          <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <div class="mx-auto text-center">
              <a href="/" aria-label="Go home" title="Company" class="">
                <img
                  src="../assets/images/image.svg"
                  alt="logo of the company"
                  srcset=""
                  class="w-12 h-12 inline-block"
                />
                <span class="text-2xl font-bold tracking-wide text-[#C5943B]">
                  {{ $t("title") }}</span
                >
              </a>
            </div>
            <figure class="mt-10">
              <blockquote
                class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
              >
                <p>
                  {{ $t("Team") }}
                </p>
              </blockquote>
            </figure>
          </div>
        </section>
      </section>
      <!-- contact -->
      <section
        class="relative py-20 md:py-[120px]"
        :dir="locale === 'en' ? 'ltr ' : 'rtl'"
      >
        <div
          class="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-gray-200 lg:h-[45%] xl:h-1/2"
        ></div>
        <div class="container px-4 mx-auto">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div class="ud-contact-content-wrapper">
                <div class="ud-contact-title mb-12 lg:mb-[150px] bg-wh">
                  <span class="mb-5 text-base font-semibold text-dark">
                    {{ $t("Contact_Us_contact") }}
                  </span>
                  <h2 class="text-4xl font-semibold">
                    {{ $t("Let_Connect") }}
                    <div class="mt-2">
                      {{ $t("We_just_click_away") }}
                      <span class="bg-[#FFA602] text-white"
                        >{{ $t("click_away") }}
                      </span>
                    </div>
                  </h2>
                </div>
                <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
                  <div class="mb-8 flex w-[330px] max-w-full">
                    <div class="mr-6 text-[32px] text-primary">
                      <svg
                        width="29"
                        height="35"
                        viewBox="0 0 29 35"
                        class="fill-current"
                      >
                        <path
                          d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"
                        />
                        <path
                          d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5
                        class="mb-6 text-lg font-semibold text-[#FFA602] ml-2 mr-2"
                      >
                        {{ $t("Our_Location") }}
                      </h5>
                      <div class="text-base text-body-color">
                        Find Us in Dammam, Saudi Arabia
                        <div>
                          <a
                            href="https://goo.gl/maps/gAgAfzpRoj9vqC117"
                            target="_blank"
                            >View on Google Map
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-8 flex w-[330px] max-w-full">
                    <div class="mr-6 text-[32px] text-primary">
                      <svg
                        width="34"
                        height="25"
                        viewBox="0 0 34 25"
                        class="fill-current"
                      >
                        <path
                          d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"
                        />
                      </svg>
                    </div>
                    <div class="">
                      <h5
                        class="mb-6 text-lg font-semibold ml-2 mr-2 text-[#FFA602]"
                      >
                        {{ $t("How_Can_We_Help") }}
                      </h5>
                      <div class="">
                        <span><i class="fas fa-envelope text-4xl"></i></span
                        ><a
                          href="mailto:contact@estehdath.com"
                          class="text-base text-body-color"
                        >
                          contact@estehdath.com</a
                        >
                      </div>
                      <div class="mt-2">
                        <span><i class="fa fa-phone text-4xl"></i></span
                        ><a
                          href="tel:+966532688777"
                          class="text-base text-body-color"
                        >
                          +966532688777</a
                        >
                      </div>
                      <p class="text-base text-body-color mt-2">
                        <a href="https://wa.me/966532688777" target="_blank">
                          <i class="fab fa-whatsapp text-4xl"></i>
                        </a>
                        <a href="https://wa.me/966532688777"> 0532688777</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div
                class="rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px] shadow-lg"
                data-wow-delay=".2s
              "
              >
                <h3
                  class="mb-8 text-4xl font-semibold md:text-4xl text-[#FFA602]"
                >
                  {{ $t("Send_us_a_Message") }}
                </h3>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div class="mb-6">
                    <label for="fullName" class="block text-xs text-dark"
                      >{{ $t("Full_Name") }}*
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
                      >{{ $t("Email_Address") }}*
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
                      >{{ $t("Phone_Number") }}*
                      <input
                        type="number"
                        name="phone"
                        placeholder="+966 555 555 555"
                        class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                  <div class="mb-6">
                    <label for="message" class="block text-xs text-dark"
                      >{{ $t("Message") }}*
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
                      {{ $t("Send_Message") }}
                    </button>
                    <div class="relative flex py-5 items-center">
                      <div class="flex-grow border-t border-gray-400"></div>
                      <span class="flex-shrink mx-4 text-gray-400">{{
                        $t("or")
                      }}</span>
                      <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <a
                      href="https://wa.me/966532688777"
                      class="inline-flex items-center justify-center rounded bg-green-600 py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                      target="_blank"
                    >
                      <i class="fab fa-whatsapp w-30 h-30 ml-2 mr-2"></i>
                      Whatsapp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <Footer />
  <!-- </HTML> -->
</template>
<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
};
</script>
<script setup>
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  LanguageIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

// const switchLocalePath = useSwitchLocalePath();
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const title = computed(() =>
  t("title", { title: t(route.meta.title ?? "title") })
);
</script>
