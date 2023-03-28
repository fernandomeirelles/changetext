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
      description: "Change Text improves your text formatting and cleaning with a complete and free solution. Perform various operations such as line and character break removal, text search and replace, HTML and URL formatting, and more. Change Text is the perfect tool to clean up and format your text simply and efficiently. Try it now!",
      copyright: "All rights reserved.",
      inputTextArea: {
        label: "Input text"
      },
      outputTextArea: {
        label: "Output text",
        copyResult: "Copy result",
      },
      formats: {
        label: "Format text",
        actions: {
          notChange: "Do not format",
          uppercase: "Uppercase",
          lowercase: "Lowercase",
          capitalizeWords: "Capitalize words",
          capitalizeSentences: "Capitalize sentences",
        },
      },
      transforms: {
        whitespaces: {
          label: "Whitespaces",
          actions: {
            trim: "Remove spaces at the beginning and end of lines",
            removeLeadingSpaces: "Remove spaces at the beginning of lines",
            removeTrailingSpaces: "Remove spaces at the end of lines",
            removeBlankLines: "Remove blank lines",
            multipleSpaces: "Multiple spaces by one space",
            multipleLines: "Multiple line breaks by one",
            removeLineBreaks: "Remove line breaks",
            lineBreakToSpace: "Replace line breaks with space"
          },
        }
      }
    }
  },

  'pt-br': {
    message: {
      description: "Change Text melhora a formatação e limpeza do seu texto com uma solução completa e gratuita. Realize diversas operações, como remoção de quebras de linha e caracteres, busca e substituição de texto, formatações para HTML e URL e muito mais. Change Text é a ferramenta perfeita para limpar e formatar seu texto de forma simples e eficiente. Experimente agora!",
      copyright: "Todos os direitos reservados.",
      textFormat: {

      },
      inputTextArea: {
        label: "Texto de entrada"
      },
      outputTextArea: {
        label: "Texto de saída",
        copyResult: "Copiar resultado",
      },
      formats: {
        label: "Formatar texto",
        actions: {
          notChange: "Não formatar",
          uppercase: "Maiúsculas",
          lowercase: "Minúsculas",
          capitalizeWords: "Capitalizar palavras",
          capitalizeSentences: "Capitalizar sentenças",
        },
      },
      transforms: {
        whitespaces: {
          label: "Espaços em branco",
          actions: {
            trim: "Remover espaços no início e final das linhas",
            removeLeadingSpaces: "Remover espaços no início das linhas",
            removeTrailingSpaces: "Remover espaços no final das linhas",
            removeBlankLines: "Remover linhas em branco",
            multipleSpaces: "Múltiplos espaços por um espaço",
            multipleLines: "Múltiplas quebras de linha por uma",
            removeLineBreaks: "Remover quebras de linha",
            lineBreakToSpace: "Substituir quebras de linha por espaço"
          },
        }
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
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(createMetaManager())
await router.isReady()
app.mount('#app')
