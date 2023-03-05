import i18n from "i18next"
import Backend from "i18next-http-backend"
import HttpBackend from "i18next-http-backend"
import resourcesToBackend from "i18next-resources-to-backend"
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
      backends: [
        HttpBackend,
        resourcesToBackend((lng) =>
          import(`./locales/${lng}/translation.json`),
        ),
      ],
      backendOptions: [
        {
          loadPath: "./locales/{{lng}}/translation.json",
        },
      ],
    },
  })

export default i18n
