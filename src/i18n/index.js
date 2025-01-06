import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationAR from '../i18n/ar.json';
import translationEN from '../i18n/en.json';

const resources = {
  EN: {
    translation: translationEN,
  },
  ع: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'translation',
    fallbackLng: 'EN',  
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
