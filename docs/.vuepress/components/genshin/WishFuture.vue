<template>

  <div v-if="future.able">

    <blockquote>祈愿周期：{{ future.futureDate[0] }}</blockquote>

    <div v-for="(item,index) in future.futureSrc">
      <img :src="item">

    </div>

  </div>
  <div v-else>
    未来祈愿，等待更新
  </div>

</template>

<script>

import {future} from "./wishRecent";

export default {
  name: "Event",
  data() {
    return {
      future,
    };
  },
};
</script>

<style scoped>

</style>