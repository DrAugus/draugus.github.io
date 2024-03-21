<template>
  <div>

    <h3><a @click="showExplain">显示</a>/<a @click="hideExplain">隐藏</a>翻译</h3>
    <br />

    <div class="heti heti--ancient">
      <p v-for="(v, i) in daodejing.info.article">
        <span v-if="daodejing.explain">
          {{ v }}<br>
          <span class="article-explain">{{ daodejing.info.explain[i] }}</span>
        </span>
        <span v-else>{{ v }}</span>
      </p>
    </div>
  </div>


</template>

<script setup lang="ts">
import { ref } from "vue";
import article from "../../data/article.json";


// const props = defineProps<{
//   info: Object,
// }>();


let daodejing = ref({
  info: article.daodejing,
  explain: false,
});

function showExplain() {
  daodejing.value = {
    info: article.daodejing,
    explain: true,
  };
}
function hideExplain() {
  daodejing.value = {
    info: article.daodejing,
    explain: false,
  };
}

</script>

<style scoped>
.article-explain {
  font-style: italic;
}
</style>
