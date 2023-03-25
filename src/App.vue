<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMeta } from 'vue-meta'

export default {
  setup () {
    const title = 'Change Text'
    const subTitle = 'Solução completa para limpeza e formatação de texto'
    const description = 'Melhore a formatação e limpeza do seu texto com a solução completa online e gratuita do Change Text. Realize operações simples e complexas, incluindo remoção de quebras de linha, caracteres e formatações, além de busca e substituição de texto. Experimente agora!'
    useMeta({
      title: title +' - '+ subTitle,
      description: description,
      metaTitle: title,
      author: "Fernando Meirelles",
      keywords: "Change Text, formatação de texto, limpeza de texto, operações de texto, busca e substituição de texto",
      og: {
        "site_name": title,
        title: title,
        description: description,
        type: 'website',
        image: '/changetext/meta-image.jpg',
        "image:type": 'image/jpeg',
        "image:width": '1200',
        "image:height": '630',
      },
      twitter: {
        title: title,
        description: description,
        image: '/changetext/meta-image.jpg',
      },
        htmlAttrs: { lang: 'en', amp: true }
      },
    )
  }
}
</script>

<template>
  <metainfo>
      <template v-slot:title="{ content }">{{content}}</template>
      <template v-slot:og(description)="{ content, metainfo }">{{ content || metainfo.description }}</template>
      <template v-slot:twitter(description)="{ content, metainfo }">{{ content || metainfo.description }}</template>
  </metainfo>
  <div class="flex flex-col w-fulll basis-full max-w-none items-stretch">

    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <div :key="$route.path" class="content w-full">
          <component :is="Component" :ref="$route.path" :key="$route.fullPath"></component>
        </div>
      </transition>
    </router-view>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>