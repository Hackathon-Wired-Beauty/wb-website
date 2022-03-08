/** traductions */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

const resources = {
  en: {
    translation: {
      title: "Title",
      test: "Test",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  detection: DETECTION_OPTIONS,
  fallbackLng: "en",
});

export default i18n;
