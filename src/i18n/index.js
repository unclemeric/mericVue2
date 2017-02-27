import Vue from 'vue'
import VueI18n from 'vue-i18n';
import { locales } from './locales';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

// Object.keys(locales).forEach(lang => {
//   Vue.locale(lang, locales[lang])
// })
Vue.locale("en-US", Object.assign({},locales["en-US"],enLocale))
Vue.locale("zh-CN", Object.assign({},locales["zh-CN"],zhLocale))
export default function setLocale (locale) {
  Vue.config.lang = locale
}
