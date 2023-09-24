<template>
  <p class="center">也许有未实装、未确定的虚假信息</p>

  <a @click="sortLast">时间最近排序</a> |
  <a @click="sortEarly">时间最远排序</a>
  <br><br>


  <table>
    <tr>
      <th>版本</th>
      <th>日期</th>
      <th>祈愿信息</th>
      <th>5星(up次数)</th>

    </tr>
    <tr v-for="(v, i) in char">

      <td>{{ v.version }}</td>
      <td>{{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}</td>
      <td v-for="(vv, ii) in v.name">
        <img v-bind:src="`/image/hsr/wish/${combineWishPic(v.name[ii], v.image[ii])}`" width="320" @error="replaceImg"
          alt="">
      </td>
      <td v-for="(vv, ii) in v.name">
        {{ CHARACTER[v.wish5star[ii]].name }} [{{ v.image[ii] }}]
      </td>

    </tr>
  </table>
</template>

<script>
import dayjs from "dayjs";
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import "dayjs/locale/zh";
import { combineWishPic, formatDayjs } from "../utils";

dayjs.locale("zh");

export default {
  name: "WishInfo",
  data() {
    return {
      char: WISH.characters,
      CHARACTER,
      combineWishPic,
      dayjs,
      formatDayjs,
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
  },
  async mounted() {

    // default
    this.sortEarly()
  },
};
</script>

<style scoped></style>
