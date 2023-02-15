import en from "./locales/en";
import es from "./locales/es";

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Jose Garcia | portfolio",
      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { name: "author", content: "jogarcia" },
        {
          hid: "description",
          name: "description",
          content:
            "This is a portfolio website. Where I talk a little about my skills and web presence. If you are looking for developers take a look.",
        },
        {
          name: "keywords",
          content:
            "portfolio, jogarcia, web, web development, developer, development, backend, frontend, database",
        },
        { property: "og:title", content: "Portfolio" },
        { property: "og:site_name", content: "Portfolio" },
        {
          property: "og:description",
          content:
            "This is a portfolio website. Where I talk a little about my skills and web presence. If you are looking for developers take a look.",
        },
        {
          property: "og:keywords",
          content:
            "portfolio, jogarcia, web, web development, developer, development, backend, frontend, database",
        },
        { property: "og:author", content: "jogarcia" },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://nuxt-portfolio-jogarcia.netlify.app/",
        },
        { hid: "og:image", property: "og:image", content: "/portfolio.png" },
        { property: "og:image:alt", content: "Image of the portfolio" },
        { property: "og:image:size", content: "300" },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "es_ES" },
        { property: "og:copyright", content: "Portfolio jogarcia" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com/" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Pridi&subset=latin-e&family=Righteous&display=swap&subset=latin-e",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-purgecss", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "en",
    lazy: true,
    langDir: "./locales",
    locales: [
      { code: "en", file: "en.js" },
      { code: "es", file: "es.js" },
    ],
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: { es, en },
    },
  },

  runtimeConfig: {
    public: {
      githubToken: process.env.NUXT_GITHUB_TOKEN,
      targetEmail: process.env.NUXT_TARGET_EMAIL,
      mailerUrl: process.env.NUXT_SERVICE_MAILER_URL,
    },
  },

  css: ["~/assets/scss/main.scss"],
});
