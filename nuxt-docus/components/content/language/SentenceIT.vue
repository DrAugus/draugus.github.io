<template>
  <Language :info="info" :words="false" :sentences="true" :language="2"></Language>
</template>

<script>
//1 English 2 Italian
import italian from "~/assets/json/words/italian.json";

import Language from "./Language.vue";

export default {
  name: "SentenceIT",
  components: {Language},
  data() {
    return {
      info: italian.sentence
    };
  }
};
</script>

<style scoped>

</style>
