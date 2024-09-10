import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from '../Locales/es.json';
import translationEN from '../Locales/en.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;