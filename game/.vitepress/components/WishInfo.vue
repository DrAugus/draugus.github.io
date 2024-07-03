<template>
  <p class="center">也许有未实装、未确定的虚假信息</p>

  <a @click="sortLast">时间最近排序</a> |
  <a @click="sortEarly">时间最远排序</a>
  <br><br>

  <div v-if="DISPLAY === WishInfoType.Table">
    <table>
      <tr>
        <th class="table-center">版本</th>
        <th class="table-center">日期</th>
        <th colspan="2" class="table-center"> {{ getWishName(gameName) }}信息</th>
        <th colspan="2" class="table-center">5星(up次数)</th>

      </tr>
      <tr v-for="(v, i) in char">

        <td class="table-center">{{ v.version }}</td>
        <td class="table-center">{{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}</td>
        <td class="table-center" v-for="(vv, ii) in v.name" :colspan="v.name.length > 1 ? 1 : 2">
          <img v-bind:src="`/image/${getGameName(gameName)}/wish/${combineWishPic(v.name[ii], v.image[ii])}`"
            width="320" @error="replaceImg" alt="">
        </td>
        <td class="table-center" v-for="(vv, ii) in v.name" :colspan="v.name.length > 1 ? 1 : 2">
          <span v-if="v.wish5star"> {{ CHARACTER[v.wish5star[ii]].name }}</span>
          <Badge :text="v.image[ii] + ''" />
        </td>

      </tr>
    </table>
  </div>


  <div v-if="DISPLAY === WishInfoType.List">
    <ul>
      <li v-for="(v, i) in char">
        <Badge :text="'v' + v.version"></Badge>
        <span class="f-w-600">
          <span v-for="(vv, ii) in v.wish5star">
            {{ combineQuoteZh(v.wishName ? v.wishName[ii] : '') + getCharName(vv, CHARACTER) }}
            <Badge :text="v.image[ii] + ' up'" :type="getBadgeType(v.image[ii])"></Badge>
          </span>
        </span>

        {{ formatDayjs(v.start) + "~" + formatDayjs(v.end) }}
        <span v-for="(vv, ii) in v.wish4star">
          {{ getCharName(replaceAndLow(vv), CHARACTER) + ' ' }}
        </span>
      </li>
    </ul>
  </div>


</template>

<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/zh";
import { onMounted, ref, computed } from "vue";
import { Characters, WishAll } from "./type";
import { GameName, WishInfoType, combineQuoteZh, combineWishPic, formatDayjs, getCharName, getGameName, getWishName, replaceAndLow } from "./utils";

dayjs.locale("zh");

const props = defineProps<{
  WISH: WishAll,
  CHARACTER: Characters,
  WISH_TEXT: GameName,
  DISPLAY: WishInfoType,
}>();

const gameName = computed(() => {
  return props.WISH_TEXT ?? 'Genshin'; // 使用逻辑或操作符 ?? 来提供默认值  
});

let char = ref(props.WISH.characters);

function sortLast() {
  char.value = char.value.sort(
    (a, b) => dayjs(b.start).diff(dayjs(a.start), "day", true)
  );
}
function sortEarly() {
  char.value = char.value.sort(
    (a, b) => dayjs(a.start).diff(dayjs(b.start), "day", true)
  );
}
// function sortUptimes() {
//   char.value = char.value.sort((a, b) => b.image - a.image);
// }

function replaceImg(event) {
  event.target.src = `/image/${getGameName(gameName.value)}/wish/_1.jpg`;
}

function getBadgeType(upTimes) {
  let up = parseInt(upTimes);
  if (up > 6) return 'danger';
  if (up > 4) return 'warning';
  if (up > 2) return 'tip';
  return 'info';
}


onMounted(async () => {
  sortLast();
})

</script>

<style scoped>
.f-w-600 {
  font-weight: 600;
}

.table-center {
  text-align: center;
}

img {
  margin: 0 auto;
}
</style>
