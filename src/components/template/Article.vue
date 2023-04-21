<template>
  <div class="flex flex-col gap-4">
    <h1 v-if="title && tag == 'h1'" class="text-5xl font-medium text-black">{{ title }}</h1>
    <h2 v-if="title && tag == 'h2'" class="text-4xl font-medium text-black">{{ title }}</h2>
    <h3 v-if="title && tag == 'h3'" class="text-3xl font-medium text-black">{{ title }}</h3>
    <h4 v-if="title && tag == 'h4'" class="text-2xl font-medium text-black">{{ title }}</h4>
    <h4 v-if="title && tag == 'h5' || tag == null" class="text-xl font-medium text-black">{{ title }}</h4>
    <p v-for="(item, index) in description" :key="index" class="flex flex-col gap-2">
      {{ item }}
    </p>
    <div v-if="imageSrc" class="image-container mt-4">
      <img :src="imageSrc" :alt="imageAlt" class="rounded-lg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: Array,
      required: false,
      default: () => [],
      validator: (value) => {
        return value.every((item) => {
          return typeof item;
        });
      }
    },
    imageSrc: {
      type: String,
      required: false
    },
    imageAlt: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description }
      ]
    }
  }
}
</script>