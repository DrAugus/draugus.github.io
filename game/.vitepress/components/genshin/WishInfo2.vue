<template>
  <p class="center">也许有未实装、未确定的虚假信息</p>

  <a @click="sortLast">最近排序</a> |
  <a @click="sortEarly">最远排序</a>
  <br><br>


  <ul>
    <li v-for="(v, i) in char">
      <span class="f-w-600"> {{ modifyChar(v.wish5star) }} </span>
      <Badge :text="v.version"></Badge>
      {{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}
      <span v-for="(vv, ii) in v.wish4star">
        {{ modifyChar(vv) + ' ' }}
      </span>
    </li>
  </ul>
</template>

<script>
import dayjs from "dayjs";
import { WISH } from "./wish";
import { modifyChar, CHARACTER } from "./characters";
import "dayjs/locale/zh";
import { replaceAndLow, formatDayjs } from "../utils";

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

    replaceImg(event) {
      event.target.src = '/image/genshin/wish/_1.jpg'
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
