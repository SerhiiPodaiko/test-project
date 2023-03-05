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
      loadPath: () => {
        console.log(
          "1 - https://SerhiiPodaiko.github.io/test-project/locales/{{lng}}/translation.json",
        )
        console.log(
          "2 - https://SerhiiPodaiko.github.io/test-project/{{lng}}/translation.json",
        )
        console.log("3 - /locales/{{lng}}/translation.json")

        return `https://SerhiiPodaiko.github.io/test-project/locales/{{lng}}/translation.json`
      },
      crossDomain: true,
    },
  })

export default i18n
