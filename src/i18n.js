import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lng) => {
        return lng === "en"
          ? "https://locales2.s3.eu-central-1.amazonaws.com/translation.json"
          : "https://locales2.s3.eu-central-1.amazonaws.com/translation-uk.json"
      },
    },
  })

export default i18n
