import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import tr from "../locales/tr.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    globalInjection: true,
    messages: {
      en,
      tr,
    },
  });
  vueApp.use(i18n);
});
