<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenuClass: "",
      hamburgerIcon: "fa-bars",
    };
  },
  methods: {
    openCloseMenu() {
      this.mobileMenuClass =
        this.mobileMenuClass === "block active" ? "" : "block active";
      this.changeIcon();
    },
    changeIcon() {
      this.hamburgerIcon =
        this.hamburgerIcon === "fa-bars" ? "fa-xmark" : "fa-bars";
    },
  },
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>
<script setup>
import { link } from "fs";

const switchLocalePath = useSwitchLocalePath();
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
const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code === locale.value);
});
useHead({
  htmlAttrs: {
    lang: availableLocales.value[0].iso,
  },
});
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <template v-for="link in head.link" :key="link.id">
      <Link
        :id="link.id"
        :rel="link.rel"
        :to="link.to"
        :hreflang="link.hreflang"
      />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>
  <header
    class="h-16 fixed top-0 left-0 right-0 z-50 bg-white bg-transparent"
    :class="className"
  >
    <nav class="relative px-2 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" aria-label="to home page">
          <img
            src="../assets/images/image.svg"
            alt="logo of the company"
            class="w-10 h-10 inline-block ml-2"
          />
          <span class="text-xl font-bold tracking-wide text-[#C5943B]">
            {{ $t("title") }}</span
          >
        </NuxtLink>
        <ul class="hidden md:flex gap-4">
          <li>
            <NuxtLink :to="localePath('/')">{{ $t("home") }} </NuxtLink>
          </li>
          <li class="">
            <NuxtLink :to="localePath('/services')">
              {{ $t("services") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="localePath('/about')">{{ $t("about") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')">{{
              $t("contact")
            }}</NuxtLink>
          </li>
        </ul>

        <li
          class="flex relative group max-md:hidden items-center justify-center space-y-2"
        >
          <i class="fa-solid fa-language w-8 h-8"></i>
          <!-- Submenu starts -->
          <ul
            class="absolute bg-white p-3 w-24 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded-xl"
          >
            <li
              class="text-sm hover:bg-slate-100 leading-8 rounded-xl w-full h-full text-center"
            >
              <NuxtLink
                dir="rtl"
                :to="switchLocalePath('ar')"
                aria-label="Arabic"
                class="mt-2"
                >العربية</NuxtLink
              >
            </li>
            <li
              class="text-sm hover:bg-slate-100 leading-8 rounded-xl w-full h-full text-center"
            >
              <NuxtLink
                dir="ltr"
                :to="switchLocalePath('en')"
                aria-label="English"
                class="mb-6"
                >English
              </NuxtLink>
            </li>
          </ul>
          <!-- Submenu ends -->
        </li>

        <!-- Mobile menu icon -->
        <button id="mobile-icon" class="md:hidden" @click="openCloseMenu">
          <i :class="['fa-solid', hamburgerIcon]"></i>
        </button>
      </div>

      <!-- Mobile menu -->
      <div class="md:hidden flex justify-center mt-3 w-full z-50">
        <div
          id="mobile-menu"
          :class="[mobileMenuClass]"
          class="mobile-menu absolute top-23 w-full"
        >
          <ul class="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
            <li
              class="border-b-2 border-white hover:bg-[#C5943B] hover:text-white pl-4"
            >
              <NuxtLink to="/" class="block pl-7">{{ $t("home") }}</NuxtLink>
            </li>
            <li
              class="border-b-2 border-white hover:bg-[#C5943B] hover:text-white pl-4"
            >
              <NuxtLink to="/services" class="block pl-7">{{
                $t("services")
              }}</NuxtLink>
            </li>
            <li
              class="border-b-2 border-white hover:bg-[#C5943B] hover:text-white pl-4"
            >
              <NuxtLink to="/about" class="block pl-11"
                >{{ $t("about") }}
              </NuxtLink>
            </li>

            <li
              class="border-b-2 border-white hover:bg-[#C5943B] hover:text-white pl-4"
            >
              <NuxtLink to="/contact" class="block pl-11"
                >{{ $t("contact") }}
              </NuxtLink>
            </li>
            <!-- Submenu starts -->
            <ul class="bg-white text-gray-800 w-full">
              <NuxtLink
                :to="switchLocalePath('ar')"
                aria-label="Arabic"
                class="mt-2"
              >
                <li
                  class="text-sm leading-8 font-normal hover:bg-slate-200 text-center"
                  dir="rtl"
                >
                  العربية
                </li>
              </NuxtLink>
              <NuxtLink
                dir="ltr"
                :to="switchLocalePath('en')"
                aria-label="English"
                class="mb-6"
              >
                <li
                  class="text-sm leading-8 font-normal hover:bg-slate-200 text-center"
                >
                  English
                </li>
              </NuxtLink>
            </ul>
            <!-- Submenu ends -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style>
.mobile-menu {
  left: -200%;
  transition: 0.5s;
}

.mobile-menu.active {
  left: 0;
}

.mobile-menu ul li ul {
  display: none;
}

.mobile-menu ul li:hover ul {
  display: block;
}
</style>
