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
      buttons: {
        transform: "Transform",
        copyResult: "Copy result",
      },
      i18n: {
        'pt-br': "Portuguese",
        en: "English"
      },
      formats: {
        label: "Format text",
        actions: {
          notChange: "Don't format",
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
        },
        characters: {
          label: "Characters",
          actions: {
              removeSpecialChars: "Remove special characters",
              removePunctuation: "Remove Punctuation",
              stripEmojis: "Remove emojis",
              removeAccents: "Remove Accents",
              normalizeUnicode: "Normalize Unicode characters",
              removeNonAscii: "Remove non-ASCII characters",
              removeNonAlphanumeric: "Remove non-alphanumeric characters",
          },
        },
        html: {
          label: "HTML",
          actions: {
              stripAllEmails: "Remove email addresses",
              removeBbcode: "Remove BBCode",
              unescapeHtml: "Unescape HTML",
              stripAllHtml: "Remove HTML",
              removeIds: "Remove IDs",
              removeClasses: "Remove classes",
              removeStyles: "Remove styles",
              removeAllAttributes: "Remove all attributes",
              decodeHtmlEntities: "Decode HTML Entities",
          },
        },
        url: {
          label: "URL",
          actions: {
              decodeUrl: "Decode URLs",
              encodeUrl: "Encode URLs",
              removeUrls: "Remove URLs",
              convertUrlsToLinks: "Convert URLs to Links",
          },
        },
        others: {
          label: "Other",
          actions: {
              reverse: "Invert",
              commaSeparated: "Separate by comma",
              slug: "Turn into slug",
              strikethrough: "Strikethrough",
          },
        },
      },
      specialTransform: {
        label: "Special",
        actions: {
            notChangeSpecial: "Don't format ",
            upsideDown: "Upside Down",
            morseCode: "Text to morse code",
            morseToText: "Morse code to text",
            binaryCode: "Text to binary code",
            binaryCodeToText: "Binary code to text",
        },
      },
      replace: {
        label: "Replace text",
        fields: {
          locate: "Find",
          replace: "Replace",
        },
        actions: {
            add: "Add",
            delete: "Delete",
        },
      },
      articles: {
        changeText: [
          {
            title: 'Transform, replace and format texts easily with ChangeText',
            description: 'If you\'re a writer, student, or marketer, you\'ve probably come across the need to format, replace, or transform text at some point. This can be frustrating and time consuming if you don\'t have the right tools. Fortunately, there is a free site called ChangeText that can help you accomplish these tasks quickly and easily.',
          },
          {
            title: 'Features',
            description: 'ChangeText offers three main features to make your work with text easier: formatting, replacing and transforming.',
            tag: 'h2',
          },
          {
            title: 'Text formatting',
            description: 'If you need to change the style, size or color of text, ChangeText has the tools to help you. With options like "Capital Case", "Lower Case", "Invert Case" and "Title Capitalization", you can quickly format the text to suit your needs.',
          },
          {
            title: 'Text Replacement',
            description: 'ChangeText also allows you to easily replace specific words or phrases in the text. You can use "Replace word" option to replace individual words or "Replace block of text" option to replace entire blocks of text. Also, you can use "Remove Extra Space" option to remove extra spaces between words and sentences.',
          },
          {
            title: 'Text Transformation',
            description: 'Finally, the transform functionality allows you to change the text in a variety of ways. With options like "HTML Encoding", "URL Encoding" and "Convert Text to List", you can quickly transform text to be used in different contexts. Now that you know what ChangeText can do, let\'s learn how to use it in your next project.',
          },
          {
            title: 'Conclusion',
            description: 'ChangeText is a simple and effective tool that can help you save time and effort in text editing. With its formatting, replacing and transforming functionalities, you can easily customize the text to suit your specific needs. While the site has its limitations, it\'s a great choice for those looking for a free, easy-to-use tool.',
          },
        ],
      }
    }
  },

  'pt-br': {
    message: {
      description: "Change Text melhora a formatação e limpeza do seu texto com uma solução completa e gratuita. Realize diversas operações, como remoção de quebras de linha e caracteres, busca e substituição de texto, formatações para HTML e URL e muito mais. Change Text é a ferramenta perfeita para limpar e formatar seu texto de forma simples e eficiente. Experimente agora!",
      copyright: "Todos os direitos reservados.",
      inputTextArea: {
        label: "Texto de entrada"
      },
      outputTextArea: {
        label: "Texto de saída",
        copyResult: "Copiar resultado",
      },
      buttons: {
        transform: "Transformar",
        copyResult: "Copiar resultado",
      },
      i18n: {
        'pt-br': "Português",
        en: "Inglês"
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
        },
        characters: {
          label: "Caracteres",
          actions: {
              removeSpecialChars: "Remover caracteres especiais",
              removePunctuation: "Remover pontuação",
              stripEmojis: "Remover emojis",
              removeAccents: "Remover acentos",
              normalizeUnicode: "Normalizar caracteres Unicode",
              removeNonAscii: "Remover caracteres não ASCII",
              removeNonAlphanumeric: "Remover caracteres não alfanuméricos",
          },
        },
        html: {
          label: "HTML",
          actions: {
              stripAllEmails: "Remover endereços de email",
              removeBbcode: "Remover BBCode",
              unescapeHtml: "Desescapar HTML",
              stripAllHtml: "Remover HTML",
              removeIds: "Remover IDs",
              removeClasses: "Remover classes",
              removeStyles: "Remover estilos",
              removeAllAttributes: "Remover todos os atributos",
              decodeHtmlEntities: "Decodificar entidades HTML",
          },
        },
        url: {
          label: "URL",
          actions: {                   
              decodeUrl: "Decodificar URLs",
              encodeUrl: "Codificar URLs",
              removeUrls: "Remover URLs",
              convertUrlsToLinks: "Converter URLs em links",
          },
        },
        others: {
          label: "Outros",
          actions: {
              reverse: "Inverter",
              commaSeparated: "Separar por vírgula",
              slug: "Trasnformar em slug",
              strikethrough: "Tachado",
          },
        },
      },
      specialTransform: {
        label: "Especial",
        actions: {
            notChangeSpecial: "Não formatar ",
            upsideDown: "Cabeça para baixo",
            morseCode: "Texto para código morse",
            morseToText: "Código morse para texto",
            binaryCode: "Texto para código binário",
            binaryCodeToText: "Códdigo binário para texto",
        },
      },
      replace: {
        label: "Substituir texto",
        fields: {
          locate: "Localizar",
          replace: "Substituir",
        },
        actions: {
            add: "Adicionar",
            delete: "Apagar",
        },
      },
      articles: {
        changeText: [
          {
            title: 'Transforme, substitua e formate textos facilmente com o ChangeText',
            description: 'Se você é um escritor, estudante ou profissional de marketing, provavelmente já se deparou com a necessidade de formatar, substituir ou transformar o texto em algum momento. Isso pode ser frustrante e consumir muito tempo se você não tiver as ferramentas certas. Felizmente, existe um site gratuito chamado ChangeText que pode ajudá-lo a realizar essas tarefas de forma rápida e fácil.',
          },
          {
            title: 'Funcionalidades',
            description: 'O ChangeText oferece três principais funcionalidades para facilitar o seu trabalho com o texto: formatação, substituição e transformação.',
            tag: 'h2',
          },
          {
            title: 'Formatação de texto',
            description: 'Se você precisa alterar o estilo, tamanho ou a cor do texto, o ChangeText tem as ferramentas para ajudá-lo. Com opções como "Caixa alta", "Caixa baixa", "Inverter maiúsculas e minúsculas" e "Capitalização de título", você pode rapidamente formatar o texto para atender às suas necessidades.',
          },
          {
            title: 'Substituição de texto',
            description: 'O ChangeText também permite que você substitua facilmente palavras ou frases específicas no texto. Você pode usar a opção "Substituir palavra" para substituir palavras individuais ou "Substituir bloco de texto" para substituir blocos de texto inteiros. Além disso, você pode usar a opção "Remover espaço extra" para remover espaços extras entre palavras e frases.',
          },
          {
            title: 'Transformação de texto',
            description: 'Por fim, a funcionalidade de transformação permite que você altere o texto de várias maneiras. Com opções como "Codificação HTML", "Codificação URL" e "Converter texto em lista", você pode transformar rapidamente o texto para ser usado em diferentes contextos. Agora que você sabe o que o ChangeText pode fazer, vamos aprender como usá-lo em seu próximo projeto.',
          },
          {
            title: 'Conclusão',
            description: 'O ChangeText é uma ferramenta simples e eficaz que pode ajudá-lo a economizar tempo e esforço na edição de textos. Com suas funcionalidades de formatação, substituição e transformação, você pode facilmente personalizar o texto para atender às suas necessidades específicas. Embora o site tenha suas limitações, é uma ótima opção para aqueles que procuram uma ferramenta gratuita e fácil de usar.',
          },
        ],
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
