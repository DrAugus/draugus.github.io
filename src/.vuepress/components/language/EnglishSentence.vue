<template>

  <h2>
    <span @click="showEN">英文</span> |
    <span @click="showZH">中文</span> |
    <span @click="showAll">双语</span>
  </h2>

  <span v-for="(v,i) in english">
    <span v-if="show_en" class="words-explain-en"> {{ v[0] + " " }}<br v-if="show_en&&!show_zh"></span>
    <span v-if="v[1]&&show_zh" class="words-explain-zh"> {{ v[1] + " " }}<br></span>
  </span>

</template>

<script>
import english from "../../data/words/english.json";

export default {
  name: "English",
  data() {
    return {
      english: english.sentence,
      show_en: true,
      show_zh: true,
    };
  },
  methods: {
    showEN() {
      this.show_en = true;
      this.show_zh = false;
    },
    showZH() {
      this.show_en = false;
      this.show_zh = true;
    },
    showAll() {
      this.show_en = true;
      this.show_zh = true;
    },

  }
};
</script>

<style scoped>
.words-part {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.7;
}

.words-explain-en {
  font-style: italic;
}

.words-explain-zh {
  font-weight: 500;
}

</style>
