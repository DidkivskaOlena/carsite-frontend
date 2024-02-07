import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          loading: "Loading...",
          header: {
            about: "About us",
            services: "Services",
            catalogue: "Car catalogue",
            favorites: "Favorites",
            faq: "FAQ",
            contact: "Contact us"
          }
        }
      },
      ua: {
        translation: {
          loading: "Завантаження...",
          header: {
            about: "Про нас",
            services: "Послуги",
            catalogue: "Каталог машин",
            favorites: "Вибране",
            faq: "Питання",
            contact: "Контакти"
          }
        }
      }
    }
  });

export default i18n;