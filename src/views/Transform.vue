<template>
    <div class="p-4">
        <div class="mb-4">
            <label class="font-bold mb-2" for="input-text">Texto de entrada:</label>
            <textarea class="border w-full py-2 px-3 rounded" v-model="inputText" rows="10" cols="100"></textarea>
            <label class="font-bold mb-2" for="input-text">Texto de saída:</label>
            <textarea class="border w-full py-2 px-3 rounded" readonly v-model="outputText" rows="10" cols="100"></textarea>
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
                    <input type="radio" class="form-radio" name="format" value="capitalizeSentences"
                        v-model="selectedFormat">
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
                <label for="remove-special-chars">Remover caracteres especiais</label>
                <input type="checkbox" id="remove-special-chars" v-model="transforms.removeSpecialChars">
            </div>
            <div>
                <label for="replace-spaces-checkbox">Substituir espaços por -</label>
                <input type="checkbox" id="replace-spaces-checkbox" v-model="transforms.replaceSpaces">
            </div>
        </div>


        <div>
            <legend class="font-bold">Whitespace:</legend>
            <div>
                <label for="trim">Remover espaços no início e no fim</label>
                <input type="checkbox" id="trim" v-model="transforms.trim">
            </div>

            <div>
                <label for="remove-leading-spaces">Remover espaços no início de cada linha</label>
                <input type="checkbox" id="remove-leading-spaces" v-model="transforms.removeLeadingSpaces">
            </div>

            <div>
                <label for="remove-trailing-spaces">Remover espaços no final de cada linha</label>
                <input type="checkbox" id="remove-trailing-spaces" v-model="transforms.removeTrailingSpaces">
            </div>

            <!-- <div>
                <label for="replace-space">Substituir espaços por</label>
                <input type="checkbox" id="replace-space" v-model="transforms.replaceSpace">
                <input type="number" id="replace-space-count" v-model="transforms.replaceSpaceCount" min="1">
            </div>

            <div>
                <label for="replace-tab">Substituir tabulações por</label>
                <input type="checkbox" id="replace-tab" v-model="transforms.replaceTab">
                <input type="number" id="replace-tab-count" v-model="transforms.replaceTabCount" min="1">
            </div> -->

            <div>
                <label for="remove-blank-lines">Remover linhas em branco</label>
                <input type="checkbox" id="remove-blank-lines" v-model="transforms.removeBlankLines">
            </div>

            <!-- <div>
                <label for="replace-line-break">Substituir quebras de linha por</label>
                <input type="checkbox" id="replace-line-break" v-model="transforms.replaceLineBreak">
            </div> -->

            <div>
                <label for="multiple-spaces">Remover espaços múltiplos</label>
                <input type="checkbox" id="multiple-spaces" v-model="transforms.multipleSpaces">
            </div>

            <div>
                <label for="multiple-lines">Remover linhas múltiplas</label>
                <input type="checkbox" id="multiple-lines" v-model="transforms.multipleLines">
            </div>

            <div>
                <label for="remove-line-breaks">Remover quebras de linha</label>
                <input type="checkbox" id="remove-line-breaks" v-model="transforms.removeLineBreaks">
            </div>

            <legend class="font-bold">Characters:</legend>
            <div>
                <label for="remove-punctuation">Remover pontuação</label>
                <input type="checkbox" id="remove-punctuation" v-model="transforms.removePunctuation">
            </div>

            <div>
                <label for="strip-emojis">Remover emojis</label>
                <input type="checkbox" id="strip-emojis" v-model="transforms.stripEmojis">
            </div>

            <div>
                <label for="remove-accents">Remover acentos</label>
                <input type="checkbox" id="remove-accents" v-model="transforms.removeAccents">
            </div>

            <div>
                <label for="normalize-unicode">Normalizar caracteres unicode</label>
                <input type="checkbox" id="normalize-unicode" v-model="transforms.normalizeUunicode">
            </div>


            <div>
                <label for="non-ascii">Remover Caracteres Não ASCII</label>
                <input type="checkbox" id="non-ascii" v-model="transforms.removeNonAscii">
            </div>
            <div>
                <label for="non-alphanumeric">Remover Caracteres Não Alfanuméricos</label>
                <input type="checkbox" id="non-alphanumeric" v-model="transforms.removeNonAlphanumeric">
            </div>

            <legend class="font-bold">Other:</legend>
            <div>
                <label for="emails">Remover Todos os E-mails</label>
                <input type="checkbox" id="emails" v-model="transforms.stripAllEmails">
            </div>
            <div>
                <label for="bbcode">Remover BBCode</label>
                <input type="checkbox" id="bbcode" v-model="transforms.removeBbcode">
            </div>

            <legend class="font-bold">HTML:</legend>
            <div>
                <label for="unescape">Remover Escapes de HTML</label>
                <input type="checkbox" id="unescape" v-model="transforms.unescapeHtml">
            </div>
            <div>
                <label for="strip">Remover Todo o HTML</label>
                <input type="checkbox" id="strip" v-model="transforms.stripAllHtml">
            </div>


            <div>
                <label for="removeIds">Remover todos os ids</label>
                <input type="checkbox" id="removeIds" v-model="transforms.removeIds">
            </div>

            <div>
                <label for="removeClasses">Remover todas as classes</label>
                <input type="checkbox" id="removeClasses" v-model="transforms.removeClasses">
            </div>

            <div>
                <label for="removeStyles">Remover estilos inline</label>
                <input type="checkbox" id="removeStyles" v-model="transforms.removeStyles">
            </div>

            <div>
                <label for="removeStyles">Remover todos os atributos</label>
                <input type="checkbox" id="removeStyles" v-model="transforms.removeAllAttributes">
            </div>

            <div>
                <label for="decodeHtmlEntities">Decodificar entidades de caracteres HTML</label>
                <input type="checkbox" id="decodeHtmlEntities" v-model="transforms.decodeHtmlEntities">
            </div>

            <div>
                <label for="decodeUrl">Decodificar caracteres em URL</label>
                <input type="checkbox" id="decodeUrl" v-model="transforms.decodeUrl">
            </div>

            <div>
                <label for="decodeUrl">Encodar caracteres em URL</label>
                <input type="checkbox" id="decodeUrl" v-model="transforms.encodeUrl">
            </div>


            <legend class="font-bold">Links:</legend>
            <div>
                <label for="removeUrls">Remover todos os URLs da web</label>
                <input type="checkbox" id="removeUrls" v-model="transforms.removeUrls">
            </div>

            <div>
                <label for="convertUrlsToLinks">Converter URLs para links</label>
                <input type="checkbox" id="convertUrlsToLinks" v-model="transforms.convertUrlsToLinks">
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
                removeSpecialChars: false,
                replaceSpaces: false,

                trim: false,
                removeLeadingSpaces: false,
                removeTrailingSpaces: false,
                //replaceSpaceCount: 1,
                //replaceSpace: false,
                //replaceTabCount: 4,
                //replaceTab: false,
                removeBlankLines: false,
                multipleSpaces: false,
                multipleLines: false,
                removeLineBreaks: false,
                removePunctuation: false,
                stripEmojis: false,
                removeAccents: false,
                normalizeUunicode: false,
                removeNonAscii: false,
                removeNonAlphanumeric: false,
                stripAllEmails: false,
                removeBbcode: false,
                unescapeHtml: false,
                stripAllHtml: false,

                removeIds: false,
                removeClasses: false,
                removeStyles: false,
                removeAllAttributes: false,
                decodeHtmlEntities: false,
                decodeUrl: false,
                encodeUrl: false,
                removeUrls: false,
                convertUrlsToLinks: false,
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
                    result = result.replace(/\w\S*/g, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    })
                    break
                case 'capitalizeSentences':
                    result = result.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (txt) {
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

            if (this.transforms.removeSpecialChars) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '')
            }

            if (this.transforms.replaceSpaces) {
                result = result.replace(/\s+/g, '-')
            }



            if (this.transforms.trim) {
                result = result.trim();
            }

            if (this.transforms.removeLeadingSpaces) {
                result = result.replace(/^\s+/gm, '');
            }

            if (this.transforms.removeTrailingSpaces) {
                result = result.replace(/\s+$/gm, '');
            }

            /* 
            if (this.transforms.replaceSpace) {
                result = result.replace(/ /gm, this.transforms.replaceSpaceCount);
            }

            if (this.transforms.replaceTab) {
                result = result.replace(/\t/gm, this.transforms.replaceTabCount);
            } */

            if (this.transforms.removeBlankLines) {
                //result = result.replace(/^\s*\n/gm, '');
                result = result.replace(/\n\s*\n/g, "\n");
            }

            if (this.transforms.multipleSpaces) {
                result = result.replace(/  +/gm, ' ');
            }

            if (this.transforms.multipleLines) {
                result = result.replace(/(\r\n|\r|\n){2,}/g, "\n\n");
            }

            if (this.transforms.removeLineBreaks) {
                result = result.replace(/(\r\n|\n|\r)/gm, '');
            }

            if (this.transforms.removePunctuation) {
                result = result.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
            }

            if (this.transforms.stripEmojis) {
                result = result.replaceAll(/\p{Emoji}/ug, '')
            }

            if (this.transforms.removeAccents) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            }

            if (this.transforms.normalizeUunicode) {
                result = result.normalize('NFKD').replace(/\\u([\d\w]{4})/gi, (match, group) => String.fromCharCode(parseInt(group, 16)));
            }

            if (this.transforms.removeNonAscii) {
                result = result.replace(/[^\x00-\x7F]/g, '');
            }

            if (this.transforms.removeNonAlphanumeric) {
                result = result.replace(/\W/gm, '');
            }

            if (this.transforms.stripAllEmails) {
                result = result.replace(/\S+@\S+\.\S+/gm, '');
            }

            if (this.transforms.removeBbcode) {
                result = result.replace(/\[.*?\]/gm, '');
            }

            if (this.transforms.unescapeHtml) {
                result = result.replace(/\&\w+\;/g, '');
            }

            if (this.transforms.stripAllHtml) {
                result = result.replace(/<[^>]+>/gm, '');
            }


            if (this.transforms.removeIds) {
                result = result.replace(/ id="[^"]*"/g, '')
            }


            if (this.transforms.removeClasses) {
                result = result.replace(/ class="[^"]*"/g, '')
            }

            if (this.transforms.removeStyles) {
                result = result.replace(/ style="[^"]*"/g, '')
            }

            if (this.transforms.removeAllAttributes) {
                result = result.replace(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, '');
            }

            if (this.transforms.decodeHtmlEntities) {
                const el = document.createElement('div');
                el.innerHTML = result;
                result = el.textContent;
            }

            if (this.transforms.decodeUrl) {
                result = decodeURIComponent(result)
            }

            if (this.transforms.encodeUrl) {
                result = encodeURIComponent(result)
            }

            if (this.transforms.removeUrls) {
                result = result.replace(/https?:\/\/\S+/g, '')
            }

            if (this.transforms.convertUrlsToLinks) {
                result = result.replace(/(https?:\/\/\S+)/g, '<a href="$1">$1</a>')
            }

            if (this.transforms.commaSeparated) {
                result = result.split(' ').join(', ')
            }

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