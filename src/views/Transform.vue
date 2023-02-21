<script setup>
    import { Button } from 'flowbite-vue'
</script>

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

        <div v-for="(groupValue, groupKey) in transforms" :key="groupKey">
            <h3 class="ml-2" :for="groupKey">{{ transforms[groupKey].label }}</h3>
            <div v-for="(itemValue, itemKey) in groupValue.actions" :key="itemKey">
                <input type="checkbox" :id="itemKey" v-model="itemValue.value">
                <label class="ml-2" :for="itemKey">{{ itemValue.label }}</label>
            </div>
        </div>

        <div>
            <Button color="default" @click="transformText">Transformar</Button>
            <Button color="alternative" @click="copyToClipboard">Copiar resultado</Button>
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

                whitespaces: {
                    label: "whitespaces",
                    actions: {
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
                            label: "Múltiplos espaços por um espaço"
                        },
                        multipleLines: {
                            value: false,
                            label: "Múltiplas quebras de linha por uma"
                        },
                        removeLineBreaks: {
                            value: false,
                            label: "Remover quebras de linha"
                        },

                        lineBreakToSpace: {
                            value: false,
                            label: "Substituir quebras de linha por espaço"
                        },
                    }
                },

                characters: {
                    label: "characters",
                    actions: {
                        removeSpecialChars: {
                            value: false,
                            label: "Remover caracteres especiais"
                        },
                        trim: {
                            value: false,
                            label: "Remover espaços em branco"
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
                    },
                },

                others: {
                    label: "characters",
                    actions: {
                        reverse: {
                            value: false,
                            label: "Inverter"
                        },
                        commaSeparated: {
                            value: false,
                            label: "Separado por vírgula"
                        },
                    },
                },
                
                html: {
                    label: "html",
                    actions: {
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
                    },
                },

                url: {
                    label: "url",
                    actions: {                   
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
                        },
                    },
                },
                
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

            if (this.transforms.others.actions.reverse.value) {
                result = result.split('').reverse().join('')
            }
    
            if (this.transforms.characters.actions.removeSpecialChars.value) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '')
            }

            if (this.transforms.characters.actions.trim.value) {
                result = result.trim();
            }
            
            if (this.transforms.whitespaces.actions.removeLeadingSpaces.value) {
                result = result.replace(/^\s+/gm, '');
            }
            
            if (this.transforms.whitespaces.actions.removeTrailingSpaces) {
                result = result.replace(/\s+$/gm, '');
            }

            if (this.transforms.whitespaces.actions.removeBlankLines.value) {
                result = result.replace(/\n\s*\n/g, "\n");
            }

            if (this.transforms.whitespaces.actions.lineBreakToSpace.value) {
                result = result.replace(/\n\s*\n/g, " ");
            }
            
            if (this.transforms.whitespaces.actions.multipleSpaces.value) {
                result = result.replace(/  +/gm, ' ');
            }

            if (this.transforms.whitespaces.actions.multipleLines.value) {
                result = result.replace(/(\r\n|\r|\n){2,}/g, "\n\n");
            }

            if (this.transforms.whitespaces.actions.removeLineBreaks.value) {
                result = result.replace(/(\r\n|\n|\r)/gm, '');
            }

            if (this.transforms.characters.actions.removePunctuation.value) {
                result = result.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
            }

            if (this.transforms.characters.actions.stripEmojis.value) {
                result = result.replaceAll(/\p{Emoji}/ug, '')
            }

            if (this.transforms.characters.actions.removeAccents.value) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            }

            if (this.transforms.characters.actions.normalizeUnicode.value) {
                result = result.normalize('NFKD').replace(/\\u([\d\w]{4})/gi, (match, group) => String.fromCharCode(parseInt(group, 16)));
            }

            if (this.transforms.characters.actions.removeNonAscii.value) {
                result = result.replace(/[^\x00-\x7F]/g, '');
            }

            if (this.transforms.characters.actions.removeNonAlphanumeric.value) {
                result = result.replace(/\W/gm, '');
            }

            if (this.transforms.html.actions.stripAllEmails.value) {
                result = result.replace(/\S+@\S+\.\S+/gm, '');
            }

            if (this.transforms.html.actions.removeBbcode.value) {
                result = result.replace(/\[.*?\]/gm, '');
            }

            if (this.transforms.html.actions.unescapeHtml.value) {
                result = result.replace(/\&\w+\;/g, '');
            }

            if (this.transforms.html.actions.stripAllHtml.value) {
                result = result.replace(/<[^>]+>/gm, '');
            }


            if (this.transforms.html.actions.removeIds.value) {
                result = result.replace(/ id="[^"]*"/g, '')
            }

            if (this.transforms.html.actions.removeClasses.value) {
                result = result.replace(/ class="[^"]*"/g, '')
            }

            if (this.transforms.html.actions.removeStyles.value) {
                result = result.replace(/ style="[^"]*"/g, '')
            }

            if (this.transforms.html.actions.removeAllAttributes.value) {
                result = result.replace(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, '');
            }

            if (this.transforms.html.actions.decodeHtmlEntities.value) {
                const el = document.createElement('div');
                el.innerHTML = result;
                result = el.textContent;
            }

            if (this.transforms.url.actions.decodeUrl.value) {
                result = decodeURIComponent(result)
            }

            if (this.transforms.url.actions.encodeUrl.value) {
                result = encodeURIComponent(result)
            }

            if (this.transforms.url.actions.removeUrls.value) {
                result = result.replace(/https?:\/\/\S+/g, '')
            }

            if (this.transforms.url.actions.convertUrlsToLinks.value) {
                result = result.replace(/(https?:\/\/\S+)/g, '<a href="$1">$1</a>')
            }

            if (this.transforms.others.actions.commaSeparated.value) {
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