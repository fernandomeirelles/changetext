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

        <div v-for="(value, key) in transforms" :key="key">
            <input type="checkbox" :id="key" v-model="transforms[key].value">
            <label class="ml-2" :for="key">{{ transforms[key].label }}</label>
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
                reverse: {
                    value: false,
                    label: "Inverter"
                },
                commaSeparated: {
                    value: false,
                    label: "Separado por vírgula"
                },
                removeSpecialChars: {
                    value: false,
                    label: "Remover caracteres especiais"
                },
                trim: {
                    value: false,
                    label: "Remover espaços em branco"
                },
                removeLeadingSpaces: {
                    value: false,
                    label: "Remover espaços no início das linhas"
                },
                removeTrailingSpaces: {
                    value: false,
                    label: "Remover espaços no final das linhas"
                },
                removeBlankLines: {
                    value: false,
                    label: "Remover linhas em branco"
                },
                multipleSpaces: {
                    value: false,
                    label: "Substituir múltiplos espaços por um único espaço"
                },
                multipleLines: {
                    value: false,
                    label: "Substituir múltiplas quebras de linha por uma única quebra de linha"
                },
                removeLineBreaks: {
                    value: false,
                    label: "Remover quebras de linha"
                },
                removePunctuation: {
                    value: false,
                    label: "Remover pontuação"
                },
                stripEmojis: {
                    value: false,
                    label: "Remover emojis"
                },
                removeAccents: {
                    value: false,
                    label: "Remover acentos"
                },
                normalizeUnicode: {
                    value: false,
                    label: "Normalizar caracteres Unicode"
                },
                removeNonAscii: {
                    value: false,
                    label: "Remover caracteres não ASCII"
                },
                removeNonAlphanumeric: {
                    value: false,
                    label: "Remover caracteres não alfanuméricos"
                },
                stripAllEmails: {
                    value: false,
                    label: "Remover endereços de email"
                },
                removeBbcode: {
                    value: false,
                    label: "Remover BBCode"
                },
                unescapeHtml: {
                    value: false,
                    label: "Desescapar HTML"
                },
                stripAllHtml: {
                    value: false,
                    label: "Remover HTML"
                },
                removeIds: {
                    value: false,
                    label: "Remover IDs"
                },
                removeClasses: {
                    value: false,
                    label: "Remover classes"
                },
                removeStyles: {
                    value: false,
                    label: "Remover estilos"
                },
                removeAllAttributes: {
                    value: false,
                    label: "Remover todos os atributos"
                },
                decodeHtmlEntities: {
                    value: false,
                    label: "Decodificar entidades HTML"
                },
                decodeUrl: {
                    value: false,
                    label: "Decodificar URLs"
                },
                encodeUrl: {
                    value: false,
                    label: "Codificar URLs"
                },
                removeUrls: {
                    value: false,
                    label: "Remover URLs"
                },
                convertUrlsToLinks: {
                    value: false,
                    label: "Converter URLs em links"
                }
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

            if (this.transforms.reverse.value) {
                result = result.split('').reverse().join('')
            }

            if (this.transforms.removeSpecialChars.value) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '')
            }

            if (this.transforms.trim.value) {
                result = result.trim();
            }

            if (this.transforms.removeLeadingSpaces.value) {
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

            if (this.transforms.removeBlankLines.value) {
                result = result.replace(/\n\s*\n/g, "\n");
            }

            if (this.transforms.multipleSpaces.value) {
                result = result.replace(/  +/gm, ' ');
            }

            if (this.transforms.multipleLines.value) {
                result = result.replace(/(\r\n|\r|\n){2,}/g, "\n\n");
            }

            if (this.transforms.removeLineBreaks.value) {
                result = result.replace(/(\r\n|\n|\r)/gm, '');
            }

            if (this.transforms.removePunctuation.value) {
                result = result.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
            }

            if (this.transforms.stripEmojis.value) {
                result = result.replaceAll(/\p{Emoji}/ug, '')
            }

            if (this.transforms.removeAccents.value) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            }

            if (this.transforms.normalizeUnicode.value) {
                result = result.normalize('NFKD').replace(/\\u([\d\w]{4})/gi, (match, group) => String.fromCharCode(parseInt(group, 16)));
            }

            if (this.transforms.removeNonAscii.value) {
                result = result.replace(/[^\x00-\x7F]/g, '');
            }

            if (this.transforms.removeNonAlphanumeric.value) {
                result = result.replace(/\W/gm, '');
            }

            if (this.transforms.stripAllEmails.value) {
                result = result.replace(/\S+@\S+\.\S+/gm, '');
            }

            if (this.transforms.removeBbcode.value) {
                result = result.replace(/\[.*?\]/gm, '');
            }

            if (this.transforms.unescapeHtml.value) {
                result = result.replace(/\&\w+\;/g, '');
            }

            if (this.transforms.stripAllHtml.value) {
                result = result.replace(/<[^>]+>/gm, '');
            }


            if (this.transforms.removeIds.value) {
                result = result.replace(/ id="[^"]*"/g, '')
            }

            if (this.transforms.removeClasses.value) {
                result = result.replace(/ class="[^"]*"/g, '')
            }

            if (this.transforms.removeStyles.value) {
                result = result.replace(/ style="[^"]*"/g, '')
            }

            if (this.transforms.removeAllAttributes.value) {
                result = result.replace(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, '');
            }

            if (this.transforms.decodeHtmlEntities.value) {
                const el = document.createElement('div');
                el.innerHTML = result;
                result = el.textContent;
            }

            if (this.transforms.decodeUrl.value) {
                result = decodeURIComponent(result)
            }

            if (this.transforms.encodeUrl.value) {
                result = encodeURIComponent(result)
            }

            if (this.transforms.removeUrls.value) {
                result = result.replace(/https?:\/\/\S+/g, '')
            }

            if (this.transforms.convertUrlsToLinks.value) {
                result = result.replace(/(https?:\/\/\S+)/g, '<a href="$1">$1</a>')
            }

            if (this.transforms.commaSeparated.value) {
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