import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  debug: false,
  fallbackLng: 'en',
  returnObjects: true,
  ns: ['translation', 'risk_translate', 'risk_processes', 'risk_score_table', 'root_cause', 'risk_category', 'risk_subcategory', 'Impact_and_likelihood_table_name'],
  defaultNS: 'translation',
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
  },
  detection: {
    // Order and from where user language should be detected
    order: ['localStorage', 'cookie'],
    // Key of cookie
    lookupLocalStorage: 'i18nextLng',
    // Key for lookup cookie
    lookupCookie: 'i18nextLng',
    // Cache location
    caches: ['localStorage', 'cookie'],
    // languages to not persist (cookie, localStorage)
    excludeCacheFor: ['cimode'],
  },
})

export default i18n;