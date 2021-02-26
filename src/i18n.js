import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
    "en-US": {
    translation: translationEN,
    },
    "tr-TR": {
    translation: translationTR,
    }
   };

i18n
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    resources,
    lng:'tr-TR',
    fallbackLng: "tr-TR",
    keySeparator: false, 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;