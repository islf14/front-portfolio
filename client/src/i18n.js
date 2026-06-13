import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en_lang from './translations/en.json'
import es_lang from './translations/es.json'
import { detectedLng, supportedLngs } from './components/language-prefix'

const resources = {
  en: {
    translation: en_lang
  },
  es: {
    translation: es_lang
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: detectedLng,
    supportedLngs: supportedLngs,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    fallbackLng: 'en'
  })

export default i18n
