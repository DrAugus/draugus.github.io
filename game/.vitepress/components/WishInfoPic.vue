<template>
  <p class="center">也许有未实装、未确定的虚假信息</p>

  <a @click="sortLast">时间最近排序</a> |
  <a @click="sortEarly">时间最远排序</a>
  <br><br>


  <table>
    <tr>
      <th class="table-center">版本</th>
      <th class="table-center">日期</th>
      <th colspan="2" class="table-center"> {{ getWishName(WISH_TEXT) }}信息</th>
      <th colspan="2" class="table-center">5星(up次数)</th>

    </tr>
    <tr v-for="(v, i) in char">

      <td class="table-center">{{ v.version }}</td>
      <td class="table-center">{{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}</td>
      <td class="table-center" v-for="(vv, ii) in v.name" :colspan="v.name.length > 1 ? 1 : 2">
        <img v-bind:src="`/image/${getGameName(WISH_TEXT)}/wish/${combineWishPic(v.name[ii], v.image[ii])}`" width="320"
          @error="replaceImg" alt="">
      </td>
      <td class="table-center" v-for="(vv, ii) in v.name" :colspan="v.name.length > 1 ? 1 : 2">
        {{ CHARACTER[v.wish5star[ii]].name }}
        <Badge :text="v.image[ii] + ''" />
      </td>

    </tr>
  </table>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/zh";
import { combineWishPic, formatDayjs, getGameName, getWishName, GameName } from "./utils";

dayjs.locale("zh");

export default {
  name: "WishInfoPic",
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
      getWishName,
      getGameName,
      combineWishPic,
      dayjs,
      formatDayjs,
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
  },
  async mounted() {
    // default
    this.sortLast();
  },
};
</script>

<style scoped>
.table-center {
  text-align: center;
}

img {
  margin: 0 auto;
}
</style>
