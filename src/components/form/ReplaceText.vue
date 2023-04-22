<template>
    <input type="hidden" :value="formattedText" disabled/>

    <div v-for="(substitution, index) in substitutions" :key="index" class="flex items-center gap-2 sm:gap-4 w-full">
        <input type="text" v-model="substitution.searchTerm" :placeholder="$t('message.replace.fields.locate')" class="w-full">
        <ArrowRightIcon class="h-6 w-6 flex-shrink-0 text-black-600" aria-hidden="true"/>
        <input type="text" v-model="substitution.replaceTerm" :placeholder="$t('message.replace.fields.replace')" class="w-full">
        <Button color="alternative" @click="removeSubstitution(index)">
          <div class="flex items-center gap-2">
            <XMarkIcon class="h-6 w-6 flex-shrink-0 text-black-600" aria-hidden="true"/>
            {{ $t('message.replace.actions.delete') }}
          </div>
      </Button>
    </div>
    <div>
      <Button color="alternative" @click="addSubstitution">
        <div class="flex items-center gap-2">
          <PlusIcon class="h-6 w-6 flex-shrink-0 text-black-600" aria-hidden="true"/>
          {{ $t('message.replace.actions.add') }}
        </div>
      </Button>
    </div>
</template>

<script setup>
  import { ArrowRightIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  import { Button } from 'flowbite-vue'
</script>
<script>
export default {
  emits: ['replacedText'],
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputText: '',
      substitutions: [{ searchTerm: "", replaceTerm: "" }],
      componentKey: 0,
    };
  },
  computed: {
    formattedText() {
      let formatted = this.value;
      this.substitutions.forEach((substitution) => {
        const regex = new RegExp(this.escapeRegExp(substitution.searchTerm), "gi");
        formatted = formatted.replace(regex, substitution.replaceTerm);
      });

      this.emitFormattedText(formatted);
      return formatted;
    },
  },
  methods: {
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& significa o caractere encontrado
    },
    addSubstitution() {
      this.substitutions.push({ searchTerm: "", replaceTerm: "" });
    },
    removeSubstitution(index) {
      this.substitutions.splice(index, 1);
    },
    emitFormattedText(data) {
      this.$emit("replacedText", data);
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>