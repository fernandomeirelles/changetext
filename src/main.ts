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
        clearForm: "Clear",
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
            description: "If you're a writer, student, or marketer, you know how labor-intensive and time-consuming formatting, replacing, and transforming text can be. Lacking the proper tools to handle these tasks can be frustrating and hinder your productivity. That's why you need to check out ChangeText, a free site that offers a quick and easy solution to these problems.",
            description1: "With ChangeText, you can format and transform text in a variety of ways, saving time and energy. Whether you need to adjust the formatting of text for a professional presentation, replace specific words or phrases, or transform text into a different language, ChangeText is the ideal tool to help you achieve these goals simply and efficiently.",
            description2: "With an intuitive and friendly interface, ChangeText allows you to enter your text directly into the platform and choose the desired formatting, replacement or transformation options. Everything is done quickly and easily, without the need for advanced technical knowledge.",
            description3: "Furthermore, ChangeText is completely free, with no additional software installation or account registration required. Just go to the website and start using it.",
            description4: "No more wasting time on repetitive and time-consuming tasks. Give ChangeText a try and discover how this tool can help you increase your productivity and efficiency.",
          },
          {
            title: 'Features',
            description: 'ChangeText is a highly versatile tool that lets you format text in a variety of ways. With it, you can choose from a number of capitalization options, remove blank lines, spaces at the beginning and end of lines, and much more. You can also remove special characters, accents, emojis and punctuation, normalize Unicode characters and remove non-ASCII or non-alphanumeric characters.',
            description1: 'ChangeText also supports HTML and URLs, allowing you to remove email addresses, BBCode and HTML, decode URLs and turn URLs into links. In addition, you can use the tool to invert text, comma-separate, slug, and apply strikethrough.',
            description2: 'And, if you need more specific functionality, ChangeText also offers special features, such as the option to turn text into morse or binary code and vice versa, as well as an option to turn text upside down.',
            description3: 'Com a opção de substituir texto, você também pode usar o ChangeText para encontrar e substituir palavras ou frases no seu texto. Tudo isso em um só lugar e de maneira fácil e intuitiva. Então, se você está procurando uma solução para lidar com tarefas tediosas e demoradas envolvendo texto, o ChangeText pode ser a resposta que você estava procurando.',
          },
          {
            title: 'Text formatting',
            description: 'If you need to change the style, size or color of text, ChangeText has the tools to help you. With options like "Capital Case", "Lower Case", "Invert Case" and "Title Capitalization", you can quickly format the text to suit your needs.',
          },

          {
            title: 'Do not format',
            description: 'ChangeText\'s "Don\'t Format" feature is ideal for keeping your text\'s original formatting. By selecting this option, ChangeText will preserve the text formatting without applying any additional formatting.',
          },
          {
            title: 'Capital letters',
            description: 'ChangeText\'s "Capital" functionality is useful for converting all text to uppercase. This option can be used for text standardization and readability purposes. You can apply this formatting to all text or just a specific selection.',
          },
          {
            title: 'Lowercase',
            description: 'ChangeText\'s "Lowercase" feature converts all text to lowercase. This option is ideal for standardizing text, making it uniform and easy to read. In addition, this option can be used for SEO purposes, since search engines prefer texts with lowercase letters.',
          },
          {
            title: 'Capitalize words',
            description: 'ChangeText\'s Capitalize Words feature is useful for converting the first letter of each word to uppercase. This option can be used to improve the readability of the text, making it clearer and easier to read. You can apply this formatting to all text or just a specific selection.',
          },
          {
            title: 'Capitalize sentences',
            description: 'ChangeText\'s "Capitalize Sentences" feature is useful for converting the first letter of each sentence to uppercase. This option is ideal for standardizing text, making it uniform and easy to read. Also, this option can be used for SEO purposes, as search engines prefer texts with capital letters at the beginning of each sentence.',
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
        clearForm: "Limpar",
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
            description: 'Se você é um escritor, estudante ou profissional de marketing, sabe o quanto a formatação, substituição e transformação de texto podem ser trabalhosos e consumir muito tempo. A falta de ferramentas adequadas para lidar com essas tarefas pode ser frustrante e prejudicar a sua produtividade. É por isso que você precisa conhecer o ChangeText, um site gratuito que oferece uma solução rápida e fácil para esses problemas.',
            description1: 'Com o ChangeText, você pode formatar e transformar o texto de diversas maneiras, economizando tempo e energia. Seja para ajustar a formatação de um texto para uma apresentação profissional, substituir palavras ou frases específicas, ou transformar o texto em uma linguagem diferente, o ChangeText é a ferramenta ideal para ajudá-lo a alcançar esses objetivos de forma simples e eficiente.',
            description2: 'Com uma interface intuitiva e amigável, o ChangeText permite que você insira o seu texto diretamente na plataforma e escolha as opções de formatação, substituição ou transformação desejadas. Tudo é feito de forma rápida e fácil, sem a necessidade de conhecimentos técnicos avançados.',
            description3: 'Além disso, o ChangeText é totalmente gratuito, sem a necessidade de instalação de nenhum software adicional ou registro de conta. É só acessar o site e começar a usar.',
            description4: 'Não perca mais tempo com tarefas repetitivas e demoradas. Experimente o ChangeText e descubra como essa ferramenta pode ajudar a aumentar a sua produtividade e eficiência.',
          },
          {
            title: 'Funcionalidades',
            description: 'O ChangeText é uma ferramenta altamente versátil que permite formatar o texto de diversas maneiras. Com ele, você pode escolher entre uma série de opções de capitalização, remover linhas em branco, espaços no início e no final das linhas e muito mais. Também é possível remover caracteres especiais, acentos, emojis e pontuação, além de normalizar caracteres Unicode e remover caracteres não ASCII ou não alfanuméricos.',
            description1: 'O ChangeText também oferece suporte a HTML e URLs, permitindo que você remova endereços de email, BBCode e HTML, decodifique URLs e transforme URLs em links. Além disso, é possível usar a ferramenta para inverter texto, separar por vírgula, transformar em slug e aplicar o efeito tachado.',
            description2: 'E, se você precisa de funcionalidades mais específicas, o ChangeText também oferece recursos especiais, como a opção de transformar o texto em código morse ou binário e vice-versa, além de uma opção para colocar o texto de cabeça para baixo.',
            description3: 'Com a opção de substituir texto, você também pode usar o ChangeText para encontrar e substituir palavras ou frases no seu texto. Tudo isso em um só lugar e de maneira fácil e intuitiva. Então, se você está procurando uma solução para lidar com tarefas tediosas e demoradas envolvendo texto, o ChangeText pode ser a resposta que você estava procurando.',
          },
          {
            title: 'Formatação de texto',
            description: 'Se você precisa alterar o estilo, tamanho ou a cor do texto, o ChangeText tem as ferramentas para ajudá-lo. Com opções como "Caixa alta", "Caixa baixa", "Inverter maiúsculas e minúsculas" e "Capitalização de título", você pode rapidamente formatar o texto para atender às suas necessidades.',
          },

          {
            title: 'Não formatar',
            description: 'A funcionalidade "Não formatar" do ChangeText é ideal para manter a formatação original do seu texto. Ao selecionar essa opção, o ChangeText irá preservar a formatação do texto sem aplicar nenhuma formatação adicional.',
          },
          {
            title: 'Maiúsculas',
            description: 'A funcionalidade "Maiúsculas" do ChangeText é útil para converter todo o texto para letras maiúsculas. Essa opção pode ser usada para fins de padronização e legibilidade do texto. É possível aplicar essa formatação a todo o texto ou somente a uma seleção específica.',
          },
          {
            title: 'Minúsculas',
            description: 'A funcionalidade "Minúsculas" do ChangeText converte todo o texto para letras minúsculas. Essa opção é ideal para padronizar o texto, deixando-o uniforme e fácil de ler. Além disso, essa opção pode ser utilizada para fins de SEO, uma vez que os mecanismos de busca dão preferência a textos com letras minúsculas.',
          },
          {
            title: 'Capitalizar palavras',
            description: 'A funcionalidade "Capitalizar palavras" do ChangeText é útil para converter a primeira letra de cada palavra para maiúscula. Essa opção pode ser usada para melhorar a legibilidade do texto, tornando-o mais claro e fácil de ler. É possível aplicar essa formatação a todo o texto ou somente a uma seleção específica.',
          },
          {
            title: 'Capitalizar sentenças',
            description: 'A funcionalidade "Capitalizar sentenças" do ChangeText é útil para converter a primeira letra de cada sentença para maiúscula. Essa opção é ideal para padronizar o texto, deixando-o uniforme e fácil de ler. Além disso, essa opção pode ser utilizada para fins de SEO, uma vez que os mecanismos de busca dão preferência a textos com letras maiúsculas no início de cada sentença.',
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
