<template>
  <Language :info="info" :words="false" :sentences="true" :language="2"></Language>
</template>

<script>
//1 English 2 Italian
import italian from "../../data/language/italian.json";

import Language from "./Language.vue";

export default {
  name: "SentenceItalian",
  components: { Language },
  data() {
    return {
      info: italian.sentence
    };
  }
};
</script>

<style scoped></style>
