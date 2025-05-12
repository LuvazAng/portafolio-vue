// src/i18n.js
import { createI18n } from 'vue-i18n';

// Importa tus archivos de traducción
import en from './locales/en.json';
import es from './locales/es.json';

// Función para cargar el idioma guardado en localStorage o usar uno por defecto/sistema
function getSavedLocale() {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    return savedLocale;
  }
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'es'].includes(browserLang)) {
    return browserLang;
  }
  return 'es'; // Idioma por defecto si no hay preferencia guardada ni del sistema
}


const i18n = createI18n({
  legacy: false, // Usa la Composition API
  locale: getSavedLocale(), // Establece el idioma inicial
  fallbackLocale: 'en', // Idioma de reserva si falta una traducción
  messages: {
    en, // 'en': en (usa la variable importada)
    es  // 'es': es
  },
  // Para evitar advertencias sobre fallbackLocale si no tienes todas las traducciones
  missingWarn: false,
  fallbackWarn: false,
});

// Función para cambiar el idioma y guardarlo en localStorage
export function setLocale(locale) {
  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale;
    localStorage.setItem('locale', locale);
  }
}

export default i18n;
