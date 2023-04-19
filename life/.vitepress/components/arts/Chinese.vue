<template>
  <h2>查询</h2>
  <blockquote>仅限下文收录的查询</blockquote>
  <input v-model="query_words" placeholder="输入需要查询的单词">
  <h3 @click="showResult"><a>点击</a>查询</h3>
  <div v-if="query_res">
    <span class="words-head">{{ query_words + " " }} </span><span>{{ query_res[0] }}</span><br>
    <ul class="words-list">
      <li>释义：{{ query_res[1] }}</li>
      <li v-if="query_res[2].length">近义：<span v-for="(vv, ii) in query_res[2]"> {{ vv + " " }} </span></li>
      <li v-if="query_res[3].length">反义：<span v-for="(vv, ii) in query_res[3]"> {{ vv + " " }} </span></li>
      <li v-if="query_res[4]">出处：{{ query_res[4] }}</li>
    </ul>
  </div>

  <CardGrid>
    <template #title>全部词汇</template>

    <Card v-for="(v, k, i) in chinese">
      <template #title>{{ k }}</template>
      <template #description>

        {{ v[0] }}<br>

        <ul class="words-list">
          <li>释义：{{ v[1] }}</li>
          <li v-if="v[2].length">近义：<span v-for="(vv, ii) in v[2]"> {{ vv + " " }} </span></li>
          <li v-if="v[3].length">反义：<span v-for="(vv, ii) in v[3]"> {{ vv + " " }} </span></li>
          <li v-if="v[4]">出处：{{ v[4] }}</li>
        </ul>
      </template>
    </Card>

  </CardGrid>
</template>

<script>
import chinese from "../../data/language/chinese.json";

export default {
  name: "Chinese",
  data() {
    return {
      chinese,
      query_words: null,
      query_res: null,
    };
  },
  methods: {
    showResult() {
      let words = this.query_words;
      // console.log(words);
      this.query_res = chinese[words];
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
  font-weight: 600;
  line-height: 1.25;
}

.words-list {
  margin: unset !important;
}
</style>
