// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiBase: "http://152.101.90.195:10004",
    public: {
      apiBase: "http://152.101.90.195:10004",
    },
  },
  modules: [
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "dayjs-nuxt",
  ],
  elementPlus: {
    themes: ["dark"],
  },
  dayjs: {
    plugins: ["Duration"],
  },
  routeRules: {
    "/api/**": {
      proxy: "http://152.101.90.195:10004/**",
    },
    "/muc/**": {
      proxy: "https://www.nekomo.work/**",
    },
  },
});
