import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createMetaManager } from 'vue-meta'

import './assets/main.css'

const messages = {
  'en': {
    message: {
      copyright: "All rights reserved.",
      inputTextArea: {
        label: "Input text"
      },
      outputTextArea: {
        label: "Output"
      },
    }
  },
  'pt-br': {
    message: {
      copyright: "Todos os direitos reservados.",
      textFormat: {

      },
      inputTextArea: {
        label: "Texto de entrada"
      },
      outputTextArea: {
        label: "Texto de saída"
      },
    }
  }
}

const i18n = createI18n({
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages,
})

function getBrowserLocale() {
  const navigatorLocale =
  navigator.languages !== undefined
    ? navigator.languages[0]
    : navigator.language;  
  const normalizedLocale = navigatorLocale.toLowerCase()
  return normalizedLocale
}


const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(createMetaManager())
await router.isReady()
app.mount('#app')
