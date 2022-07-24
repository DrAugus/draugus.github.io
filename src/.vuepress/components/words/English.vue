<template>

  <h2>查询</h2>
  <blockquote>仅限下文收录的查询</blockquote>
  <input v-model="query_words" placeholder="输入需要查询的单词">
  <h3 @click="showResult"><a>点击</a>查询</h3>
  <p v-for="(item,ii) in query_res">
    <span class="words-explain-en"> {{ item[1] + " " }}</span>
    <span class="words-explain-zh"> {{ item[0] + " " }}</span><br>
    <span v-if="item[2]"> {{ item[2] }}</span>
  </p>


  <h2>全部词汇</h2>
  <div class="words-part" v-for="(v,k,i) in english">
    <span class="words-head">{{ k }} </span><br>
    <ol class="words-list">
      <li v-for="(item,ii) in v">
        <span class="words-explain-en"> {{ item[1] + " " }}</span>
        <span class="words-explain-zh"> {{ item[0] + " " }}</span><br>
        <span v-if="item[2]"> {{ item[2] }}</span>
      </li>
    </ol>
  </div>


</template>

<script>
import english from "../../data/words/english.json";

export default {
  name: "English",
  data() {
    return {
      english: english.words,
      query_words: null,
      query_res: null,
    };
  },
  methods: {
    showResult() {
      let words = this.query_words;
      console.log(words);
      this.query_res = this.english[words];
    }
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

.words-head {
  font-weight: 500;
  line-height: 1.25;
}

.words-explain-en {
  font-style: italic;
}

.words-explain-zh {
  font-weight: 500;
}

.words-list {
  margin: unset !important;
}

</style>
