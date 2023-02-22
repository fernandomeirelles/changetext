<template>
  <div>
    <textarea v-model="inputText"></textarea>
    <textarea :value="formattedText" disabled></textarea>

    <div v-for="(substitution, index) in substitutions" :key="index">
      <div>
        <input type="text" v-model="substitution.searchTerm" placeholder="Search term">
        <input type="text" v-model="substitution.replaceTerm" placeholder="Replace term">
        <button v-if="index != 0" data-attr="index" @click="removeSubstitution(index)" :disabled="substitutions.length === 1">Remove</button>
      </div>
    </div>
    <button @click="addSubstitution">Add Substitution</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      substitutions: [{ searchTerm: "", replaceTerm: "" }],
    };
  },
  computed: {
    formattedText() {
      let formatted = this.inputText;
      this.substitutions.forEach((substitution) => {
        const regex = new RegExp(substitution.searchTerm, "gi");
        formatted = formatted.replace(regex, substitution.replaceTerm);
      });
      return formatted;
    },
  },
  methods: {
    addSubstitution() {
      this.substitutions.push({ searchTerm: "", replaceTerm: "" });
    },
    removeSubstitution(index) {
      this.substitutions.splice(index, 1);
    },
  },
};
</script>