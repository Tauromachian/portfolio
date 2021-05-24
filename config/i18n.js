import en from '../locales/en.json'
import es from '../locales/es.json'
export default {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en, es
    }
  }
}
