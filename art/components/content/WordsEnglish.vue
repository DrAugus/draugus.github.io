<template>
  <Language :info="info" :words="true" :sentences="false" :language="1"></Language>
</template>

<script>
//1 English 2 Italian
import english from "~/assets/json/words/english.json";

import Language from "./Language.vue";

export default {
  name: "WordsEnglish",
  components: {Language},
  data() {
    return {
      info: english.words
    };
  }
};
</script>

<style scoped>

</style>
