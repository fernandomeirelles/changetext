<script setup>
    import { Button } from 'flowbite-vue'
    import ReplaceText from '@/components/form/ReplaceText.vue'
    import Header from '../components/template/Header.vue'
    import Footer  from '../components/template/Footer.vue'
    import ChangeText from '../components/articles/ChangeText.vue'
</script>

<template>
    <Header></Header>

    <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col gap-10 w-full">
            <h1 class="text-sm text-slate-500">
                {{ $t('message.description') }}
            </h1>

            <div ref="inputTextRef" @scroll="handleSCroll" class="flex flex-col sm:flex-row gap-4 bg-white pt-4 pb-2 lg:sticky lg:top-0">
                <div class="flex flex-col gap">
                    <label class="font-bold mb-2" for="inputText">{{ $t('message.inputTextArea.label') }}</label>
                    <textarea id="inputText" class="focus:border-blue-700 border w-full py-2 px-3 rounded" v-model="inputText" rows="6" cols="100"></textarea>
                </div>
                <div class="flex flex-col gap relative">
                    <label class="font-bold mb-2" for="outputTextArea">{{ $t('message.outputTextArea.label') }}</label>
                    <textarea id="outputTextArea" class="bg-stone-100 border w-full py-2 px-3 rounded" readonly v-model="outputText" rows="6" cols="100"></textarea>
                    <Button class="absolute bottom-2 right-2" color="alternative" @click="copyToClipboard">{{ $t('message.outputTextArea.copyResult') }}</Button>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div class="flex w-full flex-col gap-2">
                    <strong class="font-bold mb-2">{{ formats.label }}</strong>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div v-for="(formatValue, formatKey) in formats.actions" :key="formatKey" :class="[selectedFormat === formatKey ? 'bg-blue-50 border-blue-700 hover:border-blue-700' : 'border-gray-200','flex pl-4 py-1 border items-center rounded cursor-pointer hover:border-blue-400 transition-all']">
                            <input type="radio" :id="formatKey" :name="formatValue.label" :value="formatKey" v-model="selectedFormat" name="format" class="w-4 h-4">
                            <label :for="formatKey" class="pl-2 w-full py-2 pr-4 cursor-pointer">{{ formatValue.label }}</label>
                        </div>
                    </div>
                </div>

                <!-- <div class="flex flex-col lg:flex-nowrap flex-wrap gap-10"> -->
                    <div v-for="(groupValue, groupKey) in transforms" :key="groupKey" class="flex w-full flex-col gap-2">
                        <strong :for="groupKey" class="font-bold mb-2">{{ transforms[groupKey].label }}</strong>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div v-for="(itemValue, itemKey) in groupValue.actions" :key="itemKey" :class="[itemValue.value === true ? 'bg-blue-50 border-blue-700 hover:border-blue-700' : 'border-gray-200' ,'flex pl-4 py-1 border items-center rounded cursor-pointer hover:border-blue-400 transition-all']">
                                <input type="checkbox" :id="itemKey" v-model="itemValue.value" class="w-4 h-4">
                                <label :for="itemKey" class="px-2 w-full py-2 cursor-pointer">{{ itemValue.label }}</label>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->

                <div class="flex w-full flex-col gap-2">
                    <strong class="font-bold mb-2">{{ specialTransform.label }}</strong>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div v-for="(specialValue, specialKey) in specialTransform.actions" :key="specialKey" :class="[selectedSpecialFormat === specialKey ? 'bg-blue-50 border-blue-700 hover:border-blue-700' : 'border-gray-200','flex pl-4 py-1 border items-center rounded cursor-pointer hover:border-blue-400 transition-all']">
                            <input type="radio" :id="specialKey" :name="specialValue.label" :value="specialKey" v-model="selectedSpecialFormat" name="specialTransform" class="w-4 h-4">
                            <label :for="specialKey" class="pl-2 w-full py-2 pr-4 cursor-pointer">{{ specialValue.label }}</label>
                        </div>
                    </div>
                </div>

                <div class="flex w-full flex-col gap-2">
                    <strong class="font-bold mb-2">{{ replace.label }}</strong>
                    <div class="flex flex-col w-full gap-2">
                        <ReplaceText :value="inputText" @replacedText="getReplacedText"></ReplaceText>
                    </div>
                </div>
            </div>

            <div ref="actionsBarRef" class="flex gap-4 sticky bottom-0 bg-white py-4 border-t-2 border-gray-100">
                <Button size="xl" shadow color="default" @click="transformText">{{ $t('message.buttons.transform') }}</Button>
                <!--<Button size="xl" shadow color="alternative" @click="copyToClipboard">{{ $t('message.buttons.copyResult') }}</Button>-->
                <Button size="xl" shadow color="alternative" @click="clearForm">Limpar</Button>
            </div>
        </div>

        <div class="flex justify-center my-8 border-t pt-20 border-gray-600/20">
            <div class="flex flex-col max-w-4xl gap-8">
                <ChangeText></ChangeText>
            </div>
        </div>

    </div>

    <Footer></Footer>
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
                label: this.$t('message.replace.label'),
            },
            formats: {
                label: this.$t('message.formats.label'),
                actions: {
                    notChange: {
                        value: true,
                        label: this.$t('message.formats.actions.notChange'),
                    },
                    uppercase: {
                        value: false,
                        label: this.$t('message.formats.actions.uppercase'),
                    },
                    lowercase: {
                        value: false,
                        label: this.$t('message.formats.actions.lowercase'),
                    },
                    capitalizeWords: {
                        value: false,
                        label: this.$t('message.formats.actions.capitalizeWords'),
                    },
                    capitalizeSentences: {
                        value: false,
                        label: this.$t('message.formats.actions.capitalizeSentences'),
                    },
                },

            },

            transforms: {
                whitespaces: {
                    label: this.$t('message.transforms.whitespaces.label'),
                    actions: {
                        trim: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.trim'),
                        },
                        removeLeadingSpaces: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.removeLeadingSpaces'),
                        },
                        removeTrailingSpaces: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.removeTrailingSpaces'),
                        },
                        removeBlankLines: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.removeBlankLines'),
                        },
                        multipleSpaces: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.multipleSpaces'),
                        },
                        multipleLines: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.multipleLines'),
                        },
                        removeLineBreaks: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.removeLineBreaks'),
                        },
                        lineBreakToSpace: {
                            value: false,
                            label: this.$t('message.transforms.whitespaces.actions.lineBreakToSpace'),
                        },
                    }
                },

                characters: {
                    label: this.$t('message.transforms.characters.label'),
                    actions: {
                        removeSpecialChars: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.removeSpecialChars'),
                        },
                        removePunctuation: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.removePunctuation'),
                        },
                        stripEmojis: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.stripEmojis'),
                        },
                        removeAccents: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.removeAccents'),
                        },
                        normalizeUnicode: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.normalizeUnicode'),
                        },
                        removeNonAscii: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.removeNonAscii'),
                        },
                        removeNonAlphanumeric: {
                            value: false,
                            label: this.$t('message.transforms.characters.actions.removeNonAlphanumeric'),
                        },
                    },
                },
                
                html: {
                    label: this.$t('message.transforms.html.label'),
                    actions: {
                        stripAllEmails: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.stripAllEmails'),
                        },
                        removeBbcode: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.removeBbcode'),
                        },
                        unescapeHtml: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.unescapeHtml'),
                        },
                        stripAllHtml: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.stripAllHtml'),
                        },
                        removeIds: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.removeIds'),
                        },
                        removeClasses: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.removeClasses'),
                        },
                        removeStyles: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.removeStyles'),
                        },
                        removeAllAttributes: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.removeAllAttributes'),
                        },
                        decodeHtmlEntities: {
                            value: false,
                            label: this.$t('message.transforms.html.actions.decodeHtmlEntities'),
                        },
                    },
                },

                url: {
                    label: this.$t('message.transforms.url.label'),
                    actions: {                   
                        decodeUrl: {
                            value: false,
                            label: this.$t('message.transforms.url.actions.decodeUrl'),
                        },
                        encodeUrl: {
                            value: false,
                            label: this.$t('message.transforms.url.actions.encodeUrl'),
                        },
                        removeUrls: {
                            value: false,
                            label: this.$t('message.transforms.url.actions.removeUrls'),
                        },
                        convertUrlsToLinks: {
                            value: false,
                            label: this.$t('message.transforms.url.actions.convertUrlsToLinks'),
                        },
                    },
                },

                others: {
                    label: this.$t('message.transforms.others.label'),
                    actions: {
                        reverse: {
                            value: false,
                            label: this.$t('message.transforms.others.actions.reverse'),
                        },
                        commaSeparated: {
                            value: false,
                            label: this.$t('message.transforms.others.actions.commaSeparated'),
                        },
                        slug: {
                            value: false,
                            label: this.$t('message.transforms.others.actions.slug'),
                        },
                        strikethrough: {
                            value: false,
                            label: this.$t('message.transforms.others.actions.strikethrough'),
                        },
                    },
                },
                
            },

            specialTransform: {
                label: this.$t('message.specialTransform.label'),
                actions: {
                    notChangeSpecial: {
                        value: true,
                        label: this.$t('message.specialTransform.actions.notChangeSpecial'),
                    },
                    upsideDown: {
                        value: false,
                        label: this.$t('message.specialTransform.actions.upsideDown'),
                    },
                    morseCode: {
                        value: false,
                        label: this.$t('message.specialTransform.actions.morseCode'),
                    },
                    morseToText: {
                        value: false,
                        label: this.$t('message.specialTransform.actions.morseToText'),
                    },
                    binaryCode: {
                        value: false,
                        label: this.$t('message.specialTransform.actions.binaryCode'),
                    },
                    binaryCodeToText: {
                      value: false,
                      label: this.$t('message.specialTransform.actions.binaryCodeToText'),
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
        },
        clearForm() {
            this.inputText = '',
            this.outputText= '',
            this.selectedFormat = 'notChange',
            this.selectedSpecialFormat = 'notChangeSpecial',

            Object.values(this.transforms).forEach(category => {
                Object.values(category.actions).forEach(action => {
                    action.value = false;
                })
            })
        },
    },
    watch: {
        '$i18n.locale': function() {
            this.formats.label = this.$t('message.formats.label');
            this.formats.actions.notChange.label = this.$t('message.formats.actions.notChange');
            this.formats.actions.uppercase.label = this.$t('message.formats.actions.uppercase');
            this.formats.actions.lowercase.label = this.$t('message.formats.actions.lowercase');
            this.formats.actions.capitalizeWords.label = this.$t('message.formats.actions.capitalizeWords');
            this.formats.actions.capitalizeSentences.label = this.$t('message.formats.actions.capitalizeSentences');

            this.transforms.whitespaces.label = this.$t('message.transforms.whitespaces.label');           
            this.transforms.whitespaces.actions.trim.label = this.$t('message.transforms.whitespaces.actions.trim');
            this.transforms.whitespaces.actions.removeLeadingSpaces.label = this.$t('message.transforms.whitespaces.actions.removeLeadingSpaces');
            this.transforms.whitespaces.actions.removeTrailingSpaces.label = this.$t('message.transforms.whitespaces.actions.removeTrailingSpaces');
            this.transforms.whitespaces.actions.removeBlankLines.label = this.$t('message.transforms.whitespaces.actions.removeBlankLines');
            this.transforms.whitespaces.actions.multipleSpaces.label = this.$t('message.transforms.whitespaces.actions.multipleSpaces');
            this.transforms.whitespaces.actions.multipleLines.label = this.$t('message.transforms.whitespaces.actions.multipleLines');
            this.transforms.whitespaces.actions.removeLineBreaks.label = this.$t('message.transforms.whitespaces.actions.removeLineBreaks');
            this.transforms.whitespaces.actions.lineBreakToSpace.label = this.$t('message.transforms.whitespaces.actions.lineBreakToSpace');

            this.transforms.characters.label = this.$t('message.transforms.characters.label');           
            this.transforms.characters.actions.removeSpecialChars.label = this.$t('message.transforms.characters.actions.removeSpecialChars');
            this.transforms.characters.actions.removePunctuation.label = this.$t('message.transforms.characters.actions.removePunctuation');
            this.transforms.characters.actions.stripEmojis.label = this.$t('message.transforms.characters.actions.removePunctuation');
            this.transforms.characters.actions.removeAccents.label = this.$t('message.transforms.characters.actions.removeAccents');
            this.transforms.characters.actions.normalizeUnicode.label = this.$t('message.transforms.characters.actions.normalizeUnicode');
            this.transforms.characters.actions.removeNonAscii.label = this.$t('message.transforms.characters.actions.removeNonAscii');
            this.transforms.characters.actions.removeNonAlphanumeric.label = this.$t('message.transforms.characters.actions.removeNonAlphanumeric');

            this.transforms.html.label = this.$t('message.transforms.html.label');           
            this.transforms.html.actions.stripAllEmails.label = this.$t('message.transforms.html.actions.stripAllEmails');
            this.transforms.html.actions.removeBbcode.label = this.$t('message.transforms.html.actions.removeBbcode');
            this.transforms.html.actions.unescapeHtml.label = this.$t('message.transforms.html.actions.unescapeHtml');
            this.transforms.html.actions.stripAllHtml.label = this.$t('message.transforms.html.actions.stripAllHtml');
            this.transforms.html.actions.removeIds.label = this.$t('message.transforms.html.actions.removeIds');
            this.transforms.html.actions.removeClasses.label = this.$t('message.transforms.html.actions.removeClasses');
            this.transforms.html.actions.removeStyles.label = this.$t('message.transforms.html.actions.removeStyles');
            this.transforms.html.actions.removeAllAttributes.label = this.$t('message.transforms.html.actions.removeAllAttributes');
            this.transforms.html.actions.decodeHtmlEntities.label = this.$t('message.transforms.html.actions.decodeHtmlEntities');

            this.transforms.url.label = this.$t('message.transforms.url.label');           
            this.transforms.url.actions.decodeUrl.label = this.$t('message.transforms.url.actions.decodeUrl');
            this.transforms.url.actions.encodeUrl.label = this.$t('message.transforms.url.actions.encodeUrl');
            this.transforms.url.actions.removeUrls.label = this.$t('message.transforms.url.actions.removeUrls');
            this.transforms.url.actions.convertUrlsToLinks.label = this.$t('message.transforms.url.actions.convertUrlsToLinks');

            this.transforms.others.label = this.$t('message.transforms.others.label');           
            this.transforms.others.actions.reverse.label = this.$t('message.transforms.others.actions.reverse');
            this.transforms.others.actions.commaSeparated.label = this.$t('message.transforms.others.actions.commaSeparated');
            this.transforms.others.actions.slug.label = this.$t('message.transforms.others.actions.slug');
            this.transforms.others.actions.strikethrough.label = this.$t('message.transforms.others.actions.strikethrough');

            this.specialTransform.label = this.$t('message.specialTransform.label');           
            this.specialTransform.actions.notChangeSpecial.label = this.$t('message.specialTransform.actions.notChangeSpecial');
            this.specialTransform.actions.upsideDown.label = this.$t('message.specialTransform.actions.upsideDown');
            this.specialTransform.actions.morseCode.label = this.$t('message.specialTransform.actions.morseCode');
            this.specialTransform.actions.morseToText.label = this.$t('message.specialTransform.actions.morseToText');
            this.specialTransform.actions.binaryCode.label = this.$t('message.specialTransform.actions.binaryCode');
            this.specialTransform.actions.binaryCodeToText.label = this.$t('message.specialTransform.actions.binaryCodeToText');
        
            this.replace.label = this.$t('message.replace.label');
        }
    },
}
</script>