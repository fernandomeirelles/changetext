<template>
    <!-- <textarea v-model="inputText"></textarea> -->
    <input type="hidden" :value="formattedText" disabled/>

    <div v-for="(substitution, index) in substitutions" :key="index" class="flex items-center gap-4 w-full">
        <input type="text" v-model="substitution.searchTerm" placeholder="Localizar" class="w-full">
        <ArrowRightIcon class="h-6 w-6 flex-shrink-0 text-black-600" aria-hidden="true"/>
        <input type="text" v-model="substitution.replaceTerm" placeholder="Substituir" class="w-full">
        <Button color="alternative" @click="removeSubstitution(index)">
          <div class="flex items-center gap-2">
            <XMarkIcon class="h-6 w-6 flex-shrink-0 text-black-600" aria-hidden="true"/>
            Apagar
          </div>
      </Button>
    </div>
    <div>
      <Button color="alternative" @click="addSubstitution">
        <div class="flex items-center gap-2">
          <PlusIcon class="h-6 w-6 flex-shrink-0 text-black-600" aria-hidden="true"/>
          Adicionar
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
    }
  },
};
</script>