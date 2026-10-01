import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../../src/shared/i18n/locales/en.json";
import esTranslations from "../../src/shared/i18n/locales/es.json";

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }, // React сам экранирует
});

export default i18n;
