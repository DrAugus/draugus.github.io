<template>

  <div v-if="current.able">

    <h2>当前祈愿</h2>
    <h3>{{ end }} 后结束</h3>
    <blockquote>祈愿周期：{{ current.date[0] }}</blockquote>

    <div v-for="(item, index) in current.src">
      <img :src="item">
    </div>

  </div>
  <div v-else>
    <h2>现在 暂无祈愿，敬请期待</h2>
  </div>

  <div v-if="future.able">

    <h2>未来祈愿</h2>
    <h3>{{ begin }} 后开始</h3>
    <blockquote>祈愿周期：{{ future.date[0] }}</blockquote>

    <div v-for="(item, index) in future.src">
      <img :src="item">

    </div>

  </div>
  <div v-else>
    <h2>未来祈愿，等待更新</h2>
  </div>

</template>

<script>

import { current, future, wishDeadline, wishBegin } from "./wishRecent";

export default {
  name: "Wish",
  components: {
    wishDeadline,
    wishBegin,
  },
  data() {
    return {
      future,
      current,
      begin: new Date(),
      end: new Date(),
    };
  },
  methods: {},
  mounted() {
    let _this = this;
    this.timer1 = setInterval(() => {
      _this.begin = wishBegin();
    }, 1000);
    this.timer2 = setInterval(() => {
      _this.end = wishDeadline();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer1)
      clearInterval(this.timer1);
    if (this.timer2)
      clearInterval(this.timer2);
  },

};
</script>

<style scoped>

</style>
