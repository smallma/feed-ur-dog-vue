import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import TW from './tw.js';
// import EN from './en.js';

import TW from 'js-yaml-loader!./tw.yml';
import EN from 'js-yaml-loader!./en.yml';

Vue.use(VueI18n);

const messages = {
  tw: {
    message: TW
  },
  en: {
    message: EN
  }
};

const I18n = new VueI18n({
  locale: 'tw',
  fallbackLocale: 'tw',
  messages,
})

export default I18n;
