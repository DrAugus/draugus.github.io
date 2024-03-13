<template>
  <p class="center">也许有未实装、未确定的虚假信息</p>

  <a @click="sortLast">时间最近排序</a> |
  <a @click="sortEarly">时间最远排序</a>
  <br><br>


  <ul>
    <li v-for="(v, i) in char">
      <Badge :text="'v' + v.version"></Badge>
      <span class="f-w-600">
        <span v-for="(vv, ii) in v.wishName">
          {{ combineQuoteZh(v.wishName[ii]) + getCharName(v.wish5star[ii], CHARACTER) }}
          <Badge :text="v.image[ii] + ' up'" :type="getBadgeType(v.image[ii])"></Badge>
        </span>
      </span>

      {{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}
      <span v-for="(vv, ii) in v.wish4star">
        {{ getCharName(replaceAndLow(vv), CHARACTER) + ' ' }}
      </span>
    </li>
  </ul>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/zh";
import { GameName, replaceAndLow, formatDayjs, getCharName, getGameName, combineQuoteZh } from "./utils";

dayjs.locale("zh");

export default {
  name: "WishInfo",
  props: {
    WISH: {
      type: Object,
      required: true,
    },
    CHARACTER: {
      type: Object,
      required: true,
    },
    // 0 genshin 1 hsr
    WISH_TEXT: {
      type: Number,
      required: true,
      default: GameName.Genshin
    },
  },
  data() {
    return {
      char: this.WISH.characters,
      replaceAndLow,
      dayjs,
      formatDayjs,
      getCharName,
      combineQuoteZh,
    };
  },
  methods: {
    sortLast() {
      this.char = this.char.sort(
        (a, b) => dayjs(b.start).diff(dayjs(a.start), "day", true)
      );
    },
    sortEarly() {
      this.char = this.char.sort(
        (a, b) => dayjs(a.start).diff(dayjs(b.start), "day", true)
      );
    },
    sortUptimes() {
      this.char = this.char.sort((a, b) => b.image - a.image);
    },

    replaceImg(event) {
      event.target.src = `/image/${getGameName(this.WISH_TEXT)}/wish/_1.jpg`;
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
    this.sortLast();
  },
};
</script>

<style scoped>
.f-w-600 {
  font-weight: 600;
}
</style>
