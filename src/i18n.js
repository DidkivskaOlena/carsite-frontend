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
          menu: {
            services: "SERVICES & PRICE LIST",
            catalogue: "CAR CATALOGUE",
            faq: "FAQ",
            contact: "CONTACT US",
          }
        }
      },
      ua: {
        translation: {
          loading: "Завантаження...",
          menu: {
            services: "ПОСЛУГИ ТА ПРАЙС-ЛИСТ",
            catalogue: "КАТАЛОГ АВТО",
            faq: "FAQ",
            contact: "КОНТАКТИ"
          }
        }
      },
      ru: {
        translation: {
          loading: "Загрузка...",
          menu: {
            services: "УСЛУГИ И ПРАЙС-ЛИСТ",
            catalogue: "КАТАЛОГ АВТОМОБИЛЕЙ",
            faq: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
            contact: "КОНТАКТЫ",
          }
        }
      },
      de: {
        translation: {
          loading: "Herunterladen...",
          menu: {
            services: "DIENSTLEISTUNGEN & PREISLISTE",
            catalogue: "AUTOKATALOG",
            faq: "FAQ",
            contact: "KONTAKTIERE UNS"
          }
        }
      },
      nl: {
        translation: {
          loading: "Downloaden...",
          menu: {
            services: "DIENSTEN & PRIJSLIJST",
            catalogue: "AUTO CATALOGUS",
            faq: "FAQ",
            contact: "CONTACTEN"
          }
        }
      }
    }
  });

export default i18n;