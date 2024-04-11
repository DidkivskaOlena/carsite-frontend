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
          },
          hero: {
            definition: "MULTIBRAND CAR SERVICE AND REPAIR",
            question: "WHY US?"
          },
          modal: {
            greetings: "DEAR USER!",
            conditions: "CURRENTLY THIS PAGE IS NOT AVAILABLE BECAUSE OUR WEBSITE IS STILL IN PROGRESS.",
            request: "WE APPOLOGIZE FOR THE INCONVENIENCE.",
            btn: "RETURN BACK"
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
          },
          hero: {
            definition: "МУЛЬТИБРЕНДОВЕ ОБСЛУГОВУВАННЯ ТА РЕМОНТ АВТО",
            question: "ЧОМУ МИ?"
          },
          modal: {
            greetings: "ШАНОВНИЙ КОРИСТУВАЧ!",
            conditions: "ЗАРАЗ ЦЯ СТОРІНКА НЕ ДОСТУПНА, ОСКІЛЬКИ НАШ ВЕБ-САЙТ ЩЕ РОЗРОБЛЯЄТЬСЯ.",
            request: "МИ ПРОСИМО ВИБАЧЕННЯ ЗА НЕЗРУЧНОСТІ.",
            btn: "ПОВЕРНУТИСЯ НАЗАД"
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
          },
          hero: {
            definition: "МУЛЬТИБРЕНДОВЫЙ АВТОСЕРВИС И РЕМОНТ",
            question: "ПОЧЕМУ МЫ?"
          },
          modal: {
            greetings: "ДОРОГОЙ ПОЛЬЗОВАТЕЛЬ!",
            conditions: "В НАСТОЯЩЕЕ ВРЕМЯ ЭТА СТРАНИЦА НЕ ДОСТУПНА, ПОТОМУ ЧТО НАШ САЙТ ЕЩЕ В РАЗРАБОТКЕ.",
            request: "ПРИНОСИМ СВОИ ИЗВИНЕНИЯ ЗА ДОСТАВЛЕННЫЕ НЕУДОБСТВА.",
            btn: "ВЕРНУТЬСЯ НАЗАД"
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
          },
          hero: {
            definition: "SERVICE UND REPARATUR VON MEHRMARKENFAHRZEUGEN",
            question: "WARUM WIR?"
          },
          modal: {
            greetings: "LIEBER NUTZER!",
            conditions: "DERZEIT IST DIESE SEITE NICHT VERFÜGBAR, DA UNSERE WEBSITE NOCH IN BEARBEITUNG IST.",
            request: "WIR ENTSCHULDIGEN UNS FÜR DIE UNANNEHMLICHKEITEN.",
            btn: "KEHREN SIE ZURÜCK"
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
          },
          hero: {
            definition: "MULTIMERK AUTOSERVICE EN REPARATIE",
            question: "WAAROM WIJ?"
          },
          modal: {
            greetings: "BESTE GEBRUIKER!",
            conditions: "MOMENTEEL IS DEZE PAGINA NIET BESCHIKBAAR OMDAT ONZE WEBSITE NOG IN WERKING IS.",
            request: "ONZE EXCUSES VOOR HET ONGEMAK.",
            btn: "TERUGKEREN"
          }
        }
      }
    }
  });

export default i18n;