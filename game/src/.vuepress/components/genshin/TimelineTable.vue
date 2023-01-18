<template>

  <p class="center">也许有未实装、未确定的虚假信息</p>

  <table>
    <tr>
      <th>版本</th>
      <th>日期</th>
      <th>祈愿信息</th>
      <th>5星(up次数)</th>

    </tr>
    <tr v-for="(v,i) in WISH.characters">

      <td>{{ v.version }}</td>
      <td>{{ formatDate(dayjs(v.start)) + "~" + formatDate(dayjs(v.end)) }}</td>
      <td>
        <img v-bind:src="'https://github.com/DrAugus/data/blob/master/game/genshin/wish/' +
              replaceAndLow(v.name) + '_' + v.image + '.jpg?raw=true'" width="320" alt="">
      </td>
      <td>{{ CHARACTER[v.wish5star].name }} [{{ v.image }}]</td>

    </tr>
  </table>


</template>

<script>
import dayjs from "dayjs";
import {WISH} from "./wish";
import {CHARACTER} from "./characters";
import "dayjs/locale/zh";
import {replaceAndLow, formatDate} from "./utils";

dayjs.locale("zh");

export default {
  name: "TimelineTable",
  data() {
    return {
      WISH,
      CHARACTER,
      replaceAndLow,
      dayjs,
      formatDate,
    };
  },

};
</script>

<style scoped>


</style>
