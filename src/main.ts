import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

//import 'tailwindcss/dist/tailwind.css'
import './assets/main.css'

const messages = {
  'en': {
    message: {
      hello: 'hello world',
      inputTextArea: {
        label: "Texto de entrada"
      },
      outputTextArea: {
        label: "Texto de saída"
      }
    }
  },
  'pt-br': {
    message: {
      hello: 'Olá mundo',
      textFormat: {

      },
      inputTextArea: {
        label: "Texto de entrada"
      },
      outputTextArea: {
        label: "Texto de saída"
      }
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
  .use(i18n)
  .use(createPinia())
  .use(router)

app.mount('#app')
