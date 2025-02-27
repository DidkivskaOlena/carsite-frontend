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
            title: "AUTOMAX GARAGE — MULTIBRAND CAR SERVICE AND REPAIR",
            definition: "We develop and implement software for BMW vehicles, ensuring top performance, reliability, and comfort.",
            text:"find your",
            span: "perfect",
            textnext: "car",
            spannext: "at the best deal",
            servicestitle: "Services & Price list",
            cataloguetitle: "Car catalogue",
            faq: "FAQ",
            contacttitle: "Contact us"
          },
          modal: {
            greetings: "DEAR USER!",
            conditions: "CURRENTLY THIS PAGE IS NOT AVAILABLE BECAUSE OUR WEBSITE IS STILL IN PROGRESS.",
            request: "WE APPOLOGIZE FOR THE INCONVENIENCE.",
            btn: "RETURN BACK"
          },
          contactus: {
            title: "GET IN TOUCH",
            text: "You can ask your question or simply get in touch with us by filling out the contact form below.",
            name: "NAME",
            phone: "PHONE",
            prefer: "I PREFER TO BE CONTACTED BY",
            message:"MESSAGE",
            button: "Send Message",
            comment: "Please specify a country code"
          },
          done: {
              title: "THANK YOU!",
              text: "WE RECEIVED YOUR MESSAGE. OUR TEAM WILL CONTACT YOU WITHIN 2 WORKING DAYS.",
              button: "Back to main page"
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
            title: "АВТОМАКС ГАРАЖ — МУЛЬТИБРЕНДОВИЙ СЕРВІС ТА РЕМОНТ АВТОМОБІЛІВ",
            definition: "Ми розробляємо та впроваджуємо програмне забезпечення для автомобілів BMW, що забезпечує максимальну продуктивність, надійність та комфорт.",
            text:"знайди свій",
            span: "ідеальний",
            textnext: "автомобіль",
            spannext: "за найкращою ціною",
            servicestitle: "Послуги та прайс лист",
            cataloguetitle: "Каталог автомобілів",
            faq: "FAQ",
            contacttitle: "Зв'яжіться з нами"
          },
          modal: {
            greetings: "ШАНОВНИЙ КОРИСТУВАЧ!",
            conditions: "ЗАРАЗ ЦЯ СТОРІНКА НЕ ДОСТУПНА, ОСКІЛЬКИ НАШ ВЕБ-САЙТ ЩЕ РОЗРОБЛЯЄТЬСЯ.",
            request: "МИ ПРОСИМО ВИБАЧЕННЯ ЗА НЕЗРУЧНОСТІ.",
            btn: "ПОВЕРНУТИСЯ НАЗАД"
          },
          contactus: {
            title: "ЗВ'ЯЖІТЬСЯ З НАМИ",
            text: "Ви можете поставити своє запитання або просто зв'язатися з нами, заповнивши контактну форму нижче.",
            name: "ІМ'Я",
            phone: "ТЕЛЕФОН",
            prefer: "Я ВІДДАЮ ПЕРЕВАГУ, ЩОБ ЗІ МНОЮ ЗВ'ЯЗАЛИСЯ",
            message:"ПОВІДОМЛЕННЯ",
            button: "Відправити",
            comment: "Будь ласка, вкажіть код країни"
          },
          done: {
              title: "ДЯКУЄМО ВАМ!",
              text: "МИ ОТРИМАЛИ ВАШЕ ПОВІДОМЛЕННЯ. НАША КОМАНДА ЗВ'ЯЖЕТЬСЯ З ВАМИ ПРОТЯГОМ 2 РОБОЧИХ ДНІВ.",
              button: "Повернутися на головну сторінку"
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
            title: "АВТОМАКС ГАРАЖ — МУЛЬТИБРЕНДОВЫЙ СЕРВИС И РЕМОНТ АВТОМОБИЛЕЙ",
            definition: "Мы разрабатываем и внедряем программное обеспечение для автомобилей BMW, гарантируя высочайшую производительность, надежность и комфорт.",
            text:"найдите свой",
            span: "идеальный",
            textnext: "автомобиль",
            spannext: "по лучшей цене",
            servicestitle: "Услуги и прайс-лист",
            cataloguetitle: "Каталог автомобилей",
            faq: "Часто задаваемые вопросы",
            contacttitle: "Связаться с нами"
          },
          modal: {
            greetings: "ДОРОГОЙ ПОЛЬЗОВАТЕЛЬ!",
            conditions: "В НАСТОЯЩЕЕ ВРЕМЯ ЭТА СТРАНИЦА НЕ ДОСТУПНА, ПОТОМУ ЧТО НАШ САЙТ ЕЩЕ В РАЗРАБОТКЕ.",
            request: "ПРИНОСИМ СВОИ ИЗВИНЕНИЯ ЗА ДОСТАВЛЕННЫЕ НЕУДОБСТВА.",
            btn: "ВЕРНУТЬСЯ НАЗАД"
          },
          contactus: {
            title: "СВЯЖИТЕСЬ С НАМИ",
            text: "Вы можете задать свой вопрос или просто связаться с нами, заполнив контактную форму ниже.",
            name: "ИМЯ",
            phone: "ТЕЛЕФОН",
            prefer: "Я ПРЕДПОЧИТАЮ, ЧТОБЫ СО МНОЙ СВЯЗАЛИСЬ",
            message:"СООБЩЕНИЕ",
            button: "Отправить",
            comment: "Пожалуйста, укажите код страны"
          },
          done: {
              title: "СПАСИБО!",
              text: "МЫ ПОЛУЧИЛИ ВАШЕ СООБЩЕНИЕ. НАША КОМАНДА СВЯЖЕТСЯ С ВАМИ В ТЕЧЕНИЕ 2 РАБОЧИХ ДНЕЙ.",
              button: "Вернуться на главную страницу"
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
            title: "AUTOMAX GARAGE — MEHRMARKEN-AUTODIENST UND -REPARATUR",
            definition: "Wir entwickeln und implementieren Software für BMW Fahrzeuge und sorgen so für höchste Leistung, Zuverlässigkeit und Komfort.",
            text:"Finden Sie Ihr",
            span: "perfektes",
            textnext: "Auto",
            spannext: "zum besten Preis",
            servicestitle: "Leistungen & Preisliste",
            cataloguetitle: "Autokatalog",
            faq: "Häufig gestellte Fragen",
            contacttitle: "Kontaktieren Sie uns"
          },
          modal: {
            greetings: "LIEBER NUTZER!",
            conditions: "DERZEIT IST DIESE SEITE NICHT VERFÜGBAR, DA UNSERE WEBSITE NOCH IN BEARBEITUNG IST.",
            request: "WIR ENTSCHULDIGEN UNS FÜR DIE UNANNEHMLICHKEITEN.",
            btn: "KEHREN SIE ZURÜCK"
          },
          contactus: {
            title: "IN KONTAKT KOMMEN",
            text: "Sie können Ihre Frage stellen oder einfach Kontakt mit uns aufnehmen, indem Sie das untenstehende Kontaktformular ausfüllen.",
            name: "NAME",
            phone: "TELEFON",
            prefer: "ICH LIEBE DIE KONTAKTIERUNG VON",
            message:"NACHRICHT",
            button: "Senden",
            comment: "Bitte geben Sie einen Ländercode an"
          },
          done: {
              title: "DANKE SCHÖN!",
              text: "Wir haben Ihre Nachricht erhalten. Unser Team wird sich innerhalb von 2 Werktagen mit Ihnen in Verbindung setzen.",
              button: "Zurück zur Hauptseite"
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
            title: "AUTOMAX GARAGE — MULTIBRAND AUTOSERVICE EN REPARATIE",
            definition: "Wij ontwikkelen en implementeren software voor BMW-voertuigen, waarmee we topprestaties, betrouwbaarheid en comfort garanderen.",
            text:"vind uw",
            span: "perfecte",
            textnext: "auto",
            spannext: "tegen de beste deal",
            servicestitle: "Diensten & Prijslijst",
            cataloguetitle: "Auto catalogus",
            faq: "Veelgestelde vragen",
            contacttitle: "Neem contact met ons op"
          },
          modal: {
            greetings: "BESTE GEBRUIKER!",
            conditions: "MOMENTEEL IS DEZE PAGINA NIET BESCHIKBAAR OMDAT ONZE WEBSITE NOG IN WERKING IS.",
            request: "ONZE EXCUSES VOOR HET ONGEMAK.",
            btn: "TERUGKEREN"
          },
          contactus: {
            title: "NEEM CONTACT OP",
            text: "U kunt uw vraag stellen of eenvoudigweg contact met ons opnemen door het onderstaande contactformulier in te vullen.",
            name: "NAAM",
            phone: "TELEFOON",
            prefer: "IK WORD VOORKEUR GECONTACTEERD DOOR",
            message:"BERICHT",
            button: "Versturen",
            comment: "Specificeer een landcode"
          },
          done: {
              title: "BEDANKT!",
              text: "WIJ HEBBEN UW BERICHT ONTVANGEN. ONS TEAM NEEM BINNEN 2 WERKDAGEN CONTACT MET U OP.",
              button: "Terug naar de hoofdpagina"
          }
        }
      }
    }
  });

export default i18n;