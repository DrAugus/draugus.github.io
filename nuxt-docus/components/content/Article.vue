<template>

  <div v-if="info.daodejing">

    <h3><a @click="showExplain">显示</a>/<a @click="hideExplain">隐藏</a>翻译</h3>

    <div class="heti heti--ancient">
      <p v-for="(v,i) in daodejing.info.article">
        <span v-if="daodejing.explain">
          {{ v }}<br>
         <span class="article-explain">{{ daodejing.info.explain[i] }}</span>
        </span>
        <span v-else>{{ v }}</span>
      </p>
    </div>
  </div>

  <div v-if="info.other">
    我是other
  </div>


</template>

<script>
import article from "~/assets/json/article.json";

export default {
  name: "Article",
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      daodejing: {
        info: article.daodejing,
        explain: false,
      },
    };
  },
  methods: {
    showExplain() {
      this.daodejing = {
        info: article.daodejing,
        explain: true,
      };
    },
    hideExplain() {
      this.daodejing = {
        info: article.daodejing,
        explain: false,
      };
    },
  }
};
</script>

<style scoped>
.article-explain {
  font-style: italic;
}
</style>
