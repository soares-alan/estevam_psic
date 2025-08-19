// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './locales/pt-BR/translation.json';
import translationEN from './locales/en-US/translation.json';

const resources = {
  'pt-BR': {
    translation: translationPT
  },
  'pt': {
    translation: translationPT
  },
  'en-US': {
    translation: translationEN
  },
  'en': {
    translation: translationEN
  }
};


// Detect language from localStorage or fallback
let savedLang = localStorage.getItem('i18nextLng') || 'pt-BR';
if (savedLang === 'pt') savedLang = 'pt-BR';

// Debug para verificar qual idioma está sendo usado
console.log('Idioma detectado:', savedLang);


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: ['pt-BR', 'en-US'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    }
  });

// Listen for language changes and persist
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
  
  // Forçar o recarregamento dos recursos de tradução
  i18n.reloadResources().then(() => {
    console.log('Recursos de tradução recarregados para:', lng);
  });
});

export default i18n;
