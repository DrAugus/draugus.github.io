<template>

  <div v-if="current.able">

    <blockquote>祈愿周期：{{ current.currentDate[0] }}</blockquote>

    <div v-for="(item,index) in current.currentSrc">
      <img :src="item">
    </div>

  </div>
  <div v-else>
    暂无祈愿，敬请期待
  </div>

</template>

<script>

import { current} from "./wishRecent";

export default {
  name: "Event",
  data() {
    return {
      current,
    };
  },
};
</script>

<style scoped>

</style>