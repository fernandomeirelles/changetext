<script setup>
  import Article  from '../template/Article.vue'
</script>

<template>
  <div v-for="(articleText, key) in article" :key="key">
    <Article :title="articleText.title" :description="articleText.description" :imageSrc="null" :imageAlt="null" :tag="articleText.tag"></Article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: [
        {
          title: this.$t('message.articles.changeText[0].title'),
          description: this.$t('message.articles.changeText[0].description'),
          tag: 'h1',
        },
        {
          title: this.$t('message.articles.changeText[1].title'),
          description: this.$t('message.articles.changeText[1].description'),
          tag: 'h2',
        },
        {
          title: this.$t('message.articles.changeText[2].title'),
          description: this.$t('message.articles.changeText[2].description'),
          tag: 'h3',
        },
        {
          title: this.$t('message.articles.changeText[3].title'),
          description: this.$t('message.articles.changeText[3].description'),
          tag: 'h3',
        },
        {
          title: this.$t('message.articles.changeText[4].title'),
          description: this.$t('message.articles.changeText[4].description'),
          tag: 'h3',
        },
        {
          title: this.$t('message.articles.changeText[5].title'),
          description: this.$t('message.articles.changeText[5].description'),
          tag: 'h3',
        },
      ]
    }
  },
  watch: {
    '$i18n.locale': function() {
      this.article[0].title = this.$t('message.articles.changeText[0].title');
      this.article[0].description = this.$t('message.articles.changeText[0].description');
      this.article[1].title = this.$t('message.articles.changeText[1].title');
      this.article[1].description = this.$t('message.articles.changeText[1].description');
      this.article[2].title = this.$t('message.articles.changeText[2].title');
      this.article[2].description = this.$t('message.articles.changeText[2].description');
      this.article[3].title = this.$t('message.articles.changeText[3].title');
      this.article[3].description = this.$t('message.articles.changeText[3].description');
      this.article[4].title = this.$t('message.articles.changeText[4].title');
      this.article[4].description = this.$t('message.articles.changeText[4].description');
      this.article[5].title = this.$t('message.articles.changeText[5].title');
      this.article[5].description = this.$t('message.articles.changeText[5].description');
    }
  }
}
</script>