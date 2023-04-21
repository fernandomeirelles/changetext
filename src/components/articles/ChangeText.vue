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
          description: [
            this.$t('message.articles.changeText[0].description'),
            this.$t('message.articles.changeText[0].description1'),
            this.$t('message.articles.changeText[0].description2'),
            this.$t('message.articles.changeText[0].description3'),
            this.$t('message.articles.changeText[0].description4'),
          ],
          tag: 'h2',
        },
        {
          title: this.$t('message.articles.changeText[1].title'),
          description: [
            this.$t('message.articles.changeText[1].description'),
            this.$t('message.articles.changeText[1].description1'),
            this.$t('message.articles.changeText[1].description2'),
            this.$t('message.articles.changeText[1].description3'),
          ],
          tag: 'h3',
        },
        {
          title: this.$t('message.articles.changeText[2].title'),
          description: [
            this.$t('message.articles.changeText[2].description'),
          ],
          tag: 'h4',
        },
        {
          title: this.$t('message.articles.changeText[3].title'),
          description: [this.$t('message.articles.changeText[3].description')],
          tag: 'h5',
        },
        {
          title: this.$t('message.articles.changeText[4].title'),
          description: [this.$t('message.articles.changeText[4].description')],
          tag: 'h5',
        },
        {
          title: this.$t('message.articles.changeText[5].title'),
          description: [this.$t('message.articles.changeText[5].description')],
          tag: 'h5',
        },
        {
          title: this.$t('message.articles.changeText[6].title'),
          description: [this.$t('message.articles.changeText[6].description')],
          tag: 'h5',
        },
        {
          title: this.$t('message.articles.changeText[7].title'),
          description: [this.$t('message.articles.changeText[7].description')],
          tag: 'h5',
        },
        {
          title: this.$t('message.articles.changeText[8].title'),
          description: [this.$t('message.articles.changeText[8].description')],
          tag: 'h4',
        },
        {
          title: this.$t('message.articles.changeText[9].title'),
          description: [this.$t('message.articles.changeText[9].description')],
          tag: 'h4',
        },
        {
          title: this.$t('message.articles.changeText[10].title'),
          description: [this.$t('message.articles.changeText[10].description')],
          tag: 'h3',
        },
      ]
    }
  },
  watch: {
    '$i18n.locale': function() {
      this.article[0].title = this.$t('message.articles.changeText[0].title');
      this.article[0].description[0] = this.$t('message.articles.changeText[0].description');
      this.article[0].description[1] = this.$t('message.articles.changeText[0].description1');
      this.article[0].description[2] = this.$t('message.articles.changeText[0].description2');
      this.article[0].description[3] = this.$t('message.articles.changeText[0].description3');
      this.article[0].description[4] = this.$t('message.articles.changeText[0].description4');

      this.article[1].title = this.$t('message.articles.changeText[1].title');
      this.article[1].description[0] = this.$t('message.articles.changeText[1].description');
      this.article[1].description[1] = this.$t('message.articles.changeText[1].description1');
      this.article[1].description[2] = this.$t('message.articles.changeText[1].description2');
      this.article[1].description[3] = this.$t('message.articles.changeText[1].description3');

      this.article[2].title = this.$t('message.articles.changeText[2].title');
      this.article[2].description[0] = this.$t('message.articles.changeText[2].description');

      this.article[3].title = this.$t('message.articles.changeText[3].title');
      this.article[3].description[0] = this.$t('message.articles.changeText[3].description');

      this.article[4].title = this.$t('message.articles.changeText[4].title');
      this.article[4].description[0] = this.$t('message.articles.changeText[4].description');

      this.article[5].title = this.$t('message.articles.changeText[5].title');
      this.article[5].description[0] = this.$t('message.articles.changeText[5].description');
      
      this.article[6].title = this.$t('message.articles.changeText[6].title');
      this.article[6].description[0] = this.$t('message.articles.changeText[6].description');

      this.article[7].title = this.$t('message.articles.changeText[7].title');
      this.article[7].description[0] = this.$t('message.articles.changeText[7].description');

      this.article[8].title = this.$t('message.articles.changeText[8].title');
      this.article[8].description[0] = this.$t('message.articles.changeText[8].description');

      this.article[9].title = this.$t('message.articles.changeText[9].title');
      this.article[9].description[0] = this.$t('message.articles.changeText[9].description');

      this.article[10].title = this.$t('message.articles.changeText[10].title');
      this.article[10].description[0] = this.$t('message.articles.changeText[10].description');
    }
  }
}
</script>