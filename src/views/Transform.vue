<template>
    <div class="p-4">
      <div class="mb-4">
        <label class="font-bold mb-2" for="input-text">Texto de entrada:</label>
        <textarea class="border w-full py-2 px-3 rounded" v-model="inputText" rows="5" cols="50"></textarea>
        
        <label class="font-bold mb-2" for="input-text">Texto de saída:</label>
        <textarea class="border w-full py-2 px-3 rounded" readonly v-model="outputText" rows="5" cols="50"></textarea>
      </div>
  
      <div class="mb-4">
        <legend class="font-bold mb-2">Formatar texto:</legend>
  
        <div class="mb-2">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="format" value="uppercase" v-model="selectedFormat">
            <span class="ml-2">Maiúsculas</span>
          </label>
        </div>
  
        <div class="mb-2">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="format" value="lowercase" v-model="selectedFormat">
            <span class="ml-2">Minúsculas</span>
          </label>
        </div>
  
        <div class="mb-2">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="format" value="capitalizeWords" v-model="selectedFormat">
            <span class="ml-2">Capitalizar palavras</span>
          </label>
        </div>
  
        <div class="mb-2">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="format" value="capitalizeSentences" v-model="selectedFormat">
            <span class="ml-2">Capitalizar sentenças</span>
          </label>
        </div>

        <div class="mb-2">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="format" value="notChange" v-model="selectedFormat">
            <span class="ml-2">Do not change</span>
          </label>
        </div>
      </div>
  
      <div>
        <legend class="font-bold">Opções de transformação:</legend>
        <div>
          <label for="reverse">Inverter</label>
          <input type="checkbox" id="reverse" v-model="transforms.reverse">
        </div>
        <div>
          <label for="comma-separated">Separar por vírgula</label>
          <input type="checkbox" id="comma-separated" v-model="transforms.commaSeparated">
        </div>
        <div>
          <label for="remove-accents">Remover acentos</label>
          <input type="checkbox" id="remove-accents" v-model="transforms.removeAccents">
        </div>
        <div>
          <label for="remove-special-chars">Remover caracteres especiais</label>
          <input type="checkbox" id="remove-special-chars" v-model="transforms.removeSpecialChars">
        </div>
        <div>
          <label for="replace-spaces-checkbox">Substituir espaços por -</label>
          <input type="checkbox" id="replace-spaces-checkbox" v-model="transforms.replaceSpaces">
        </div>


        
       </div>

       <div>
        <button @click="transformText">Transformar</button>
        <button @click="copyToClipboard">Copiar resultado</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: '',
        selectedFormat: 'notChange',
        transforms: {
          reverse: false,
          commaSeparated: false,
          removeAccents: false,
          removeSpecialChars: false,
          replaceSpaces: false,
        },
        outputText: ''
      }
    },
    methods: {
      transformText() {
        let result = this.inputText
        
        switch (this.selectedFormat) {
          case 'uppercase':
            result = result.toUpperCase()
            break
          case 'lowercase':
            result = result.toLowerCase()
            break
          case 'capitalizeWords':
            result = result.replace(/\w\S*/g, function(txt){
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            })
            break
          case 'capitalizeSentences':
            result = result.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(txt){
              return txt.toUpperCase()
            })
            break

        case 'notChange':
            result = result;
            break
        }
        
        if (this.transforms.reverse) {
          result = result.split('').reverse().join('')
        }
        
        if (this.transforms.commaSeparated) {
          result = result.split(' ').join(', ')
        }
        
        if (this.transforms.removeAccents) {
          result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        }
        
        if (this.transforms.removeSpecialChars) {
          //result = result.replace(/[^\w\s]|_/g, '')
          result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '')
        }
        
        if (this.transforms.replaceSpaces) {
          result = result.replace(/\s+/g, '-')
        }
  
       
        
        /*if (options.trim) {
            result = result.trim();
        }

        if (options.removeLeadingSpaces) {
            result = result.replace(/^\s+/gm, '');
        }

        if (options.removeTrailingSpaces) {
            result = result.replace(/\s+$/gm, '');
        }

        if (options.replaceSpace) {
            result = result.replace(/ /gm, options.replaceSpaceCount);
        }

        if (options.replaceTab) {
            result = result.replace(/\t/gm, options.replaceTabCount);
        }

        if (options.removeBlankLines) {
            result = result.replace(/^\s*\n/gm, '');
        }

        if (options.replaceLineBreak) {
            result = result.replace(/(\r\n|\n|\r)/gm, options.replaceLineBreak);
        }

        if (options.multipleSpaces) {
            result = result.replace(/  +/gm, ' ');
        }

        if (options.multipleLines) {
            result = result.replace(/\n{2,}/gm, '\n');
        }

        if (options.removeLineBreaks) {
            result = result.replace(/(\r\n|\n|\r)/gm, '');
        }

        if (options.removePunctuation) {
            result = result.replace(/[^\w\s]|_/gm, '');
        }

        if (options.stripEmojis) {
            result = result.replace(/[\u{1F600}-\u{1F64F}]/gu, '');
        }

        if (options.removeAccents) {
            result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }

        if (options.normalizeUunicode) {
            result = result.normalize('NFKD');
        }

        if (options.removeReplacement) {
            result = result.replace(/\ufffd/g, '');
        }

        if (options.removeNonAscii) {
            result = result.replace(/[^\x00-\x7F]/g, '');
        }

        if (options.removeNonAlphanumeric) {
            result = result.replace(/\W/gm, '');
        }

        if (options.stripAllEmails) {
            result = result.replace(/\S+@\S+\.\S+/gm, '');
        }

        if (options.removeBbcode) {
            result = result.replace(/\[.*?\]/gm, '');
        }

        if (options.unescapeHtml) {
            const doc = new DOMParser().parseFromString(result, 'text/html');
            result = doc.documentElement.textContent;
        }

        if (options.stripAllHtml) {
            result = result.replace(/<[^>]+>/gm, '');
        }*/
  
        
        this.outputText = result
      },
      copyToClipboard() {
        const textarea = document.createElement('textarea')
        textarea.value = this.outputText
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
    }
  }
  </script>
  
  
  