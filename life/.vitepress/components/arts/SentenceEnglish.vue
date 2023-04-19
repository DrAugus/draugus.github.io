<template>
  <Language :info="info" :words="false" :sentences="true" :language="1"></Language>
</template>

<script>
//1 English 2 Italian
import english from "../../data/language/english.json";

import Language from "./Language.vue";

export default {
  name: "SentenceEnglish",
  components: { Language },
  data() {
    return {
      info: english.sentence
    };
  }
};
</script>

<style scoped></style>
