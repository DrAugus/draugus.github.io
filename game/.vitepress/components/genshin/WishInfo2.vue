<template>
  <p class="center">也许有未实装、未确定的虚假信息</p>

  <a @click="sortLast">时间最近排序</a> |
  <a @click="sortEarly">时间最远排序</a>|
  <a @click="sortUptimes">up 次数最多</a>
  <br><br>


  <ul>
    <li v-for="(v, i) in char">
      <span class="f-w-600"> {{ v.wishName + modifyChar(v.wish5star, CHARACTER) }} </span>
      <Badge :text="v.version"></Badge>
      <Badge :text="v.image + ' up'" :type="getBadgeType(v.image)"></Badge>
      {{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}
      <span v-for="(vv, ii) in v.wish4star">
        {{ modifyChar(replaceAndLow(vv), CHARACTER) + ' ' }}
      </span>
    </li>
  </ul>
</template>

<script>
import dayjs from "dayjs";
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import "dayjs/locale/zh";
import { replaceAndLow, formatDayjs, modifyChar } from "../utils";

dayjs.locale("zh");

export default {
  name: "WishInfo",
  data() {
    return {
      char: WISH.characters,
      CHARACTER,
      replaceAndLow,
      dayjs,
      formatDayjs,
      modifyChar,
    };
  },
  methods: {
    sortLast() {
      this.char = this.char.sort(
        (a, b) => dayjs(b.start).diff(dayjs(a.start), "day", true)
      )
    },
    sortEarly() {
      this.char = this.char.sort(
        (a, b) => dayjs(a.start).diff(dayjs(b.start), "day", true)
      )
    },
    sortUptimes() {
      this.char = this.char.sort((a, b) => b.image - a.image)
    },

    replaceImg(event) {
      event.target.src = '/image/genshin/wish/_1.jpg'
    },

    getBadgeType(upTimes) {
      let up = parseInt(upTimes);
      if (up > 6) return 'danger';
      if (up > 4) return 'warning';
      if (up > 2) return 'tip';
      return 'info';
    },
  },
  async mounted() {

    // default
    this.sortEarly()
  },
};
</script>

<style scoped>
.f-w-600 {
  font-weight: 600;
}
</style>
