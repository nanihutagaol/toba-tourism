import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

var i18n = {}
var i18nMapping = {
  en: {}, id: {}
}
// define supported language packs
i18n = new VueI18n({
  locale: 'en', // default locale, let's keep it at 'id' if it's "standalone"
  fallbackLocale: 'en',
  messages: i18nMapping
})

function addLanguageAsyncToMapping (locale) {
  import(`./${locale}.json`).then(function (languagePack) {
    if (window.i18n) {
      window.i18n.mergeLocaleMessage(locale, {'rail': languagePack})
      window.i18n.locale = locale
    }
    i18n.mergeLocaleMessage(locale, {'rail': languagePack})
    i18n.locale = locale
    console.log('loaded rail', locale, languagePack, window.i18n)
  })
}
function changeLanguage (locale) {
  i18n.locale = locale
}

if (window.eventHub) {
  addLanguageAsyncToMapping(window.i18n.locale)
  window.eventHub.$on('changeLanguageLocale', addLanguageAsyncToMapping)
} else {
  addLanguageAsyncToMapping('en')
  addLanguageAsyncToMapping('id')
  setTimeout(function () {
    changeLanguage('en')
  }, 500)
}

export default i18n
