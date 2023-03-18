<script setup>
    import { Button } from 'flowbite-vue'
    import ReplaceText from '@/components/form/ReplaceText.vue'
</script>

<template>
    <div class="flex flex-col gap-8 w-full">
        <div>
            Text String Format: Solução completa para limpeza e formatação de texto, capaz de realizar diversas operações simples e complexas, como formatação de texto, remoção de quebras de linha, remoção de HTML, conversão de maiúsculas e minúsculas e busca, substituição de texto e muito mais, totalmente online.
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex flex-col gap">
                <label class="font-bold mb-2" for="input-text">{{ $t('message.inputTextArea.label') }}</label>
                <textarea class="border w-full py-2 px-3 rounded" v-model="inputText" rows="10" cols="100"></textarea>
            </div>
            <div class="flex flex-col gap">
                <label class="font-bold mb-2" for="input-text">{{ $t('message.outputTextArea.label') }}</label>
                <textarea class="bg-stone-100 border w-full py-2 px-3 rounded mb-2" readonly v-model="outputText" rows="10" cols="100"></textarea>
                <Button color="alternative" @click="copyToClipboard">Copiar resultado</Button>
            </div>
        </div>

        <div class="flex w-full flex-col gap-2">
            <h3 class="font-bold mb-2">{{ formats.label }}</h3>
            <div class="flex flex-wrap w-full gap-2">
                <label v-for="(formatValue, formatKey) in formats.actions" :key="formatKey" class="flex pl-4 items-center border border-gray-200 rounded cursor-pointer">
                    <input type="radio" :id="formatKey" :name="formatValue.label" :value="formatKey" v-model="selectedFormat" name="format" class="w-4 h-4">
                    <span :for="formatKey" class="pl-2 w-full py-2 pr-5 cursor-pointer">{{ formatValue.label }}</span>
                </label>
            </div>
        </div>

        <div class="flex lg:flex-nowrap flex-wrap gap-2">
            <div v-for="(groupValue, groupKey) in transforms" :key="groupKey" class="flex w-full flex-col gap-2">
                <h3 :for="groupKey" class="font-bold mb-2">{{ transforms[groupKey].label }}</h3>
                <div v-for="(itemValue, itemKey) in groupValue.actions" :key="itemKey" class="flex pl-4 items-center border border-gray-200 rounded cursor-pointer">
                    <input type="checkbox" :id="itemKey" v-model="itemValue.value" class="w-4 h-4">
                    <label :for="itemKey" class="pl-2 w-full py-2 cursor-pointer">{{ itemValue.label }}</label>
                </div>
            </div>
        </div>

        <div class="flex w-full flex-col gap-2">
            <h3 class="font-bold mb-2">{{ replace.label }}</h3>
            <div class="flex flex-col w-full gap-2">
                <ReplaceText :value="inputText" @replacedText="getReplacedText"></ReplaceText>
            </div>
        </div>

        <div class="flex w-full flex-col gap-2">
            <h3 class="font-bold mb-2">{{ specialTransform.label }}</h3>
            <div class="flex flex-wrap w-full gap-2">
                <label v-for="(specialValue, specialKey) in specialTransform.actions" :key="specialKey" class="flex pl-4 items-center border border-gray-200 rounded cursor-pointer">
                    <input type="radio" :id="specialKey" :name="specialValue.label" :value="specialKey" v-model="selectedSpecialFormat" name="specialTransform" class="w-4 h-4">
                    <span :for="specialKey" class="pl-2 w-full py-2 pr-5 cursor-pointer">{{ specialValue.label }}</span>
                </label>
            </div>
        </div>

        <div class="flex gap-4 sticky bottom-0 bg-white py-4 border-t-2 border-gray-100">
            <Button color="default" @click="transformText">Transformar</Button>
            <Button color="alternative" @click="copyToClipboard">Copiar resultado</Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        ReplaceText,
    },
    data() {
        return {
            inputText: '',
            selectedFormat: 'notChange',
            selectedSpecialFormat: 'notChangeSpecial',
            replace: {
                label: "Substituir texto"
            },
            formats: {
                label: "Formatar texto",
                actions: {
                    notChange: {
                        value: true,
                        label: "Não formatar",
                    },
                    uppercase: {
                        value: false,
                        label: "Maiúsculas",
                    },
                    lowercase: {
                        value: false,
                        label: "Minúsculas",
                    },
                    capitalizeWords: {
                        value: false,
                        label: "Capitalizar palavras",
                    },
                    capitalizeSentences: {
                        value: false,
                        label: "Capitalizar sentenças",
                    },
                },

            },

            transforms: {
                whitespaces: {
                    label: "whitespaces",
                    actions: {
                        trim: {
                            value: false,
                            label: "Remover espaços no início e final das linhas"
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

                others: {
                    label: "others",
                    actions: {
                        reverse: {
                            value: false,
                            label: "Inverter"
                        },
                        commaSeparated: {
                            value: false,
                            label: "Separar por vírgula"
                        },
                        slug: {
                            value: false,
                            label: "Trasnformar em slug"
                        },
                        strikethrough: {
                            value: false,
                            label: "Tachado"
                        },
                    },
                },
                
            },

            specialTransform: {
                label: "Especial",
                actions: {
                    notChangeSpecial: {
                        value: true,
                        label: "Não formatar "
                    },
                    upsideDown: {
                        value: false,
                        label: "Cabeça para baixo"
                    },
                    morseCode: {
                        value: false,
                        label: "Texto para código morse"
                    },
                    morseToText: {
                        value: false,
                        label: "Código morse para texto"
                    },
                    binaryCode: {
                        value: false,
                        label: "Texto para código binário"
                    },
                    binaryCodeToText: {
                      value: false,
                      label: "Códdigo binário para texto"  
                    },
                },

            },
            outputText: '',
            replacedText: '',
        }
    },
    methods: {
        getReplacedText(dados) {
            this.replacedText = dados;
            return dados;
        },
        transformText() {
            let result = this.inputText

            if(this.replacedText) {
                result = this.replacedText;
            }

            switch (this.selectedSpecialFormat) {
                case 'morseCode':
                    const morseChars = { 'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/', };
                    result = result.toLowerCase().split('').map(c => morseChars[c]).join(' ');
                    break

                case 'morseToText':
                    const morseToChar = { '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', };
                    const morseWords = result.split(' / ');
                    const textWords = morseWords.map(morseWord => morseWord.split(' ').map(morseLetter => morseToChar[morseLetter]).join('')).join(' ');
                    result = textWords;
                    break
                
                case 'upsideDown':
                    const upsideDownChars = {'a': '\u0250', 'b': 'q', 'c': '\u0254', 'd': 'p', 'e': '\u01DD', 'f': '\u025F', 'g': '\u0183', 'h': '\u0265', 'i': '\u0131', 'j': '\u027E', 'k': '\u029E', 'l': '\u05DF', 'm': '\u026F', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': '\u0279', 's': 's', 't': '\u0287', 'u': 'n', 'v': '\u028C', 'w': '\u028D', 'x': 'x', 'y': '\u028E', 'z': 'z', 'A': '\u2200', 'B': 'B', 'C': '\u0186', 'D': '\u15E1', 'E': '\u018E', 'F': '\u2132', 'G': '\u2141', 'H': 'H', 'I': 'I', 'J': '\u017F', 'K': 'K', 'L': '\u02E5', 'M': 'W', 'N': 'N', 'O': 'O', 'P': '\u0500', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': '\u2534', 'U': '\u2229', 'V': '\u039B', 'W': 'M', 'X': 'X', 'Y': '\u2144', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '!': '¡', '(': ')', ')': '(', ',': '\'', '.': '˙', ';': '\u061B', '<': '>', '>': '<', '?': '\u00BF', '[': ']', ']': '[', '_': '\u203E', '{': '}', '}': '{', '¡': '!', '?': '¿',};
                    let output = '';
                    for (let i = result.length - 1; i >= 0; i--) {
                        const char = result.charAt(i);
                        const upsideDownChar = upsideDownChars[char];
                        output += upsideDownChar != undefined ? upsideDownChar : char;
                    }
                    result = output;
                    break

                case 'binaryCode':
                    result = [...result].map(c => c.charCodeAt(0).toString(2)).join(" ");
                    break

                case 'binaryCodeToText':
                    const binaryArray = result.split(' '); // dividindo a string binária em um array
                    const characterArray = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2))); // convertendo cada binário para seu respectivo caracter
                    result = characterArray.join('');
                    break

                case 'notChangeSpecial':
                    //result = result;
                    break
            }

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
                    //result = result;
                    break
            }

            if (this.transforms.others.actions.reverse.value) {
                result = result.split('').reverse().join('')
            }
    
            if (this.transforms.characters.actions.removeSpecialChars.value) {
                result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '')
            }

            if (this.transforms.whitespaces.actions.trim.value) {
                result = result.trim();
            }
            
            if (this.transforms.whitespaces.actions.removeLeadingSpaces.value) {
                result = result.replace(/^\s+/gm, '');
            }
            
            if (this.transforms.whitespaces.actions.removeTrailingSpaces.value) {
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

            if(this.transforms.others.actions.slug.value) {
                result = result.toString()
                    .toLowerCase()
                    .normalize('NFD') // remover acentos
                    .replace(/[\u0300-\u036f]/g, '') // remover caracteres especiais
                    .replace(/\s+/g, '-') // substituir espaços em branco por "-"
                    .replace(/[^\w\-]+/g, '') // remover caracteres não alfanuméricos
                    .replace(/\-\-+/g, '-') // remover hífens duplicados
                    .replace(/^-+/, '') // remover hífens no início
                    .replace(/-+$/, ''); // remover hífens no final
            }

            if (this.transforms.others.actions.strikethrough.value) {
                const input = this.inputText;
                const output = result.split('').map(char => {
                    if (char === ' ') {
                        return char;
                    }
                    return `${char}̶`;
                }).join('');
                    
                result = output;
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