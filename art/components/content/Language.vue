<template>

  <span v-if="sentences">


    <ButtonLink :icon="show_icon[0]" @click="showLang(true, false)">
      {{ display_lang }}
    </ButtonLink> |
    <ButtonLink :icon="show_icon[1]" @click="showLang(false, true)">
      中文
    </ButtonLink> |
    <ButtonLink :icon="show_icon[2]" @click="showLang(true, true)">
      双语
    </ButtonLink>

    <br>
    <br>

    <span v-for="(v, i) in info">
      <span v-if="show_lang" class="words-explain-en"> {{ v[0] + " " }}<br v-if="show_lang && !show_zh"></span>
      <span v-if="v[1] && show_zh" class="words-explain-zh"> {{ v[1] + " " }}<br></span>
    </span>
  </span>

  <div v-if="words">
    <h2>查询</h2>
    <blockquote>仅限下文收录的查询</blockquote>
    <input v-model="query_words" placeholder="输入需要查询的单词">
    <h3 @click="showResult"><a>点击</a>查询</h3>
    <Card v-if="query_words">
      <template #title>{{ query_words }}</template>
      <template #description>
        <span v-if="query_res == null">输入错误或未收录</span>
        <span v-else v-for="(item, ii) in query_res">
          <span v-if="item[1]" class="words-explain-en"> {{ item[1] + " " }}</span>
          <span v-if="item[0]" class="words-explain-zh"> {{ item[0] + " " }}</span><br>
          <span v-if="item[2]"> {{ item[2] }}</span>
        </span>

      </template>
    </Card>

    <br>

    <CardGrid>
      <template #title>全部词汇</template>
      <Card v-for="(v, k, i) in info">
        <template #title>{{ k }}</template>
        <template #description>
          <ol class="words-list">
            <li v-for="(item, ii) in v">
              <span v-if="item[1]" class="words-explain-en"> {{ item[1] + " " }}</span>
              <span v-if="item[0]" class="words-explain-zh"> {{ item[0] + " " }}</span><br>
              <span v-if="item[2]"> {{ item[2] }}</span>
            </li>
          </ol>

        </template>
      </Card>

    </CardGrid>


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
      // 0 lang 1 cn 2 all
      show_icon: ["fluent:local-language-zi-24-filled", "ion:language", "material-symbols:language"],
      display_lang: this.language === 1 ? '英文' : '意大利文',
    };
  },
  methods: {
    showLang(lang, zh) {
      this.show_lang = lang;
      this.show_zh = zh;
    },
    showResult() {
      let words = this.query_words;
      // console.log(words);
      this.query_res = this.info[words];
    },
  },
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
