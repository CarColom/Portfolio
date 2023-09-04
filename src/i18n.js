import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./components/translations/en/global.json"; 
import translationES from "./components/translations/es/global.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    fallbackLng: "en", 
    detection: {
      order: ["localStorage", "navigator"],
    },
    interpolation: {
      escapeValue: false, // Evita la interpolación HTML
    },
  });

export default i18n;
