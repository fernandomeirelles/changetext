<template>
  <div class="flex flex-col gap-1">
    <h1 v-if="title && tag == 'h1'" class="text-5xl font-medium text-black">{{ title }}</h1>
    <h2 v-if="title && tag == 'h2'" class="text-4xl font-medium text-black">{{ title }}</h2>
    <h3 v-if="title && tag == 'h3'" class="text-3xl font-medium text-black">{{ title }}</h3>
    <h4 v-if="title && tag == 'h4' || tag == null" class="text-2xl font-medium text-black">{{ title }}</h4>
    <p v-if="description" class="text-gray-500 text-base mt-2">{{ description }}</p>
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
      type: String,
      required: false
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