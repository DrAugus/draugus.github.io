<template>

  <div v-if="sentences">
    <h2>
    <span @click="showLang">
      <span v-if="language===1">英文</span>
      <span v-if="language===2">意大利文</span>
    </span> |
      <span @click="showZH">中文</span> |
      <span @click="showAll">双语</span>
    </h2>

    <span v-for="(v,i) in info">
      <span v-if="show_lang" class="words-explain-en"> {{ v[0] + " " }}<br v-if="show_lang&&!show_zh"></span>
      <span v-if="v[1]&&show_zh" class="words-explain-zh"> {{ v[1] + " " }}<br></span>
    </span>
  </div>

  <div v-if="words">
    <h2>查询</h2>
    <blockquote>仅限下文收录的查询</blockquote>
    <input v-model="query_words" placeholder="输入需要查询的单词">
    <h3 @click="showResult"><a>点击</a>查询</h3>
    <p v-for="(item,ii) in query_res">
      <span v-if="item[1]" class="words-explain-en"> {{ item[1] + " " }}</span>
      <span v-if="item[0]" class="words-explain-zh"> {{ item[0] + " " }}</span><br>
      <span v-if="item[2]"> {{ item[2] }}</span>
    </p>

    <h2>全部词汇</h2>
    <div class="words-part" v-for="(v,k,i) in info">
      <span class="words-head">{{ k }} </span><br>
      <ol class="words-list">
        <li v-for="(item,ii) in v">
          <span v-if="item[1]" class="words-explain-en"> {{ item[1] + " " }}</span>
          <span v-if="item[0]" class="words-explain-zh"> {{ item[0] + " " }}</span><br>
          <span v-if="item[2]"> {{ item[2] }}</span>
        </li>
      </ol>
    </div>
  </div>

</template>

<script>


export default {
  name: "Language",
  props: {
    words: Boolean,
    sentences: Boolean,
    language: Number,
    info: Object,
  },
  data() {
    return {
      show_lang: true,
      show_zh: true,
      query_words: null,
      query_res: null,
    };
  },
  methods: {
    showLang() {
      this.show_lang = true;
      this.show_zh = false;
    },
    showZH() {
      this.show_lang = false;
      this.show_zh = true;
    },
    showAll() {
      this.show_lang = true;
      this.show_zh = true;
    },
    showResult() {
      let words = this.query_words;
      console.log(words);
      this.query_res = this.info[words];
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
