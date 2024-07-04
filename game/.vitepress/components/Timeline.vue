<template>

  <!--时间轴 电脑版-->
  <div class="hide-on-small-only">
    <p :style="{ textAlign: 'center' }">
      也许有未实装、未确定的虚假信息
      <a @click="setCurrentPos()">回到当前时间</a>
    </p>

    <div class="timeline-scroll-x" ref="setNowPos">


      <div class="timeline-month">
        <div v-for="(item, index) in monthList">
          <!-- +1 min-width: 1px -->
          <div v-bind:style="{ width: (DUR_DAY_WIDTH + 1) * item[1].total + 'px' }">
            <span class="timeline-month-text">{{ item[0] }}</span>
          </div>
        </div>
      </div>


      <div class="timeline-day">

        <div :style="todayOffset ? { left: todayOffset } : ''" class="timeline-today-line-pos" ref="findNowPos">
          <div class="timeline-today-line-pos-text">{{ currentTime }}</div>
        </div>

        <div class="timeline-wish-event-weapon">
          <div v-for="(value, i) in WISH.weapons">
            <div v-for="(_multi, j) in modifyImage(value.image)">
              <div class="card event-item weapon" :class="[getBorderRadius(wishWeapons, i)]"
                v-bind:style="getStyleWeapon(i, j)">
                <div class="card-image waves-effect waves-block waves-light" :class="[getBorderRadius(wishWeapons, i)]"
                  style="height: 100%">
                  <div class="event-img">
                    <img v-bind:src="`/image/${gameName}/wish/${combineWishPic(value.name, _multi)}`"
                      @error="replaceImg" alt="">
                  </div>
                  <span class="left-align timeline-character-text sticky text-shadow-weapon ">
                    {{ replaceText('', GAME_NAME, j + 1) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- dur day +1 cause line width is 1 px -->
        <!-- duration + 1 cause 从左边开始计算的  -->
        <div class="timeline-wish-event-character">
          <div v-for="(value, i) in WISH.characters">

            <div v-for="(_multi, j) in value.name">

              <div class="card event-item " :class="[
    'ele-' + CHARACTER[value.wish5star[j]]?.ele?.id,
    getBorderRadius(wishCharacters, i),
  ]" :style="getStyleCharacter(i, j)">
                <div class="card-image waves-effect waves-block waves-light"
                  :class="[getBorderRadius(wishCharacters, i)]" style="height: 100%">
                  <div class="event-img responsive-img lazy">
                    <img v-bind:src="`/image/${gameName}/wish/${combineWishPic(value.name[j], value.image[j])}`"
                      @error="replaceImg" alt="">
                  </div>
                  <span class="left-align timeline-character-text sticky"
                    :class="'ele-text-shadow-' + CHARACTER[value.wish5star[j]]?.ele?.id">
                    {{ combineQuoteZh(value.wishName[j]) + replaceText('活动x', GAME_NAME) +
    combineQuoteZh(CHARACTER[value.wish5star[j]].prefix + '·' + CHARACTER[value.wish5star[j]].name) }}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div v-bind:style="{ marginLeft: DUR_DAY_WIDTH }" v-for="(t, i) in dates" class="timeline-wrapper">
          <span class="timeline-day-index"> {{ t[0] }}
          </span>
          <span class="timeline-week-index"> {{ t[1] }} </span>
        </div>

      </div>

    </div>
  </div>

  <div class="hide-on-large-only">
    <!-- <h2>请在电脑端查看此页</h2> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { parseDayjs, getGameNameStr, combineWishPic, replaceText, GameName, WishType, combineQuoteZh } from "./utils";
import { processEvent } from "./eventHandle";

import dayjs from "dayjs";
import "dayjs/locale/zh";
dayjs.locale("zh");

import "./timeline.scss";
import { Characters, WishAll } from "./type";

const colorMap = {
  "denro": "#98e628",
  "geo": "#e2b032",
  "electro": "#d296fc",
  "hydro": "#03ddfe",
  "pyro": "#fa5d3e",
  "anemo": "#57dcb0",
  "cryo": "#84c2e6",
};

const DUR_DAY_WIDTH = 40;

const props = defineProps<{
  WISH: WishAll,
  CHARACTER: Characters,
  GAME_NAME: GameName,
}>();

const gameName = getGameNameStr(props.GAME_NAME);

const setNowPos = ref(null);
const findNowPos = ref(null);

// 在下一个 tick 中计算 offsetLeft 的值，然后更新 scrollLeft，这样可以保证 offsetLeft 的值已经计算完成
const setCurrentPos = async () => {
  // 等待 DOM 更新  
  await nextTick();

  // 确保元素已挂载到 DOM  
  if (setNowPos.value && findNowPos.value) {
    setNowPos.value.scrollLeft = findNowPos.value.offsetLeft - window.innerWidth / 2;
  }
};

let timer1: number = -1;
let currentTime = ref('');

const eventObj = processEvent(props.WISH);

const today = dayjs();
const firstDay = eventObj.firstDay;

const wishCharacters = eventObj.events[WishType.Characters];
const wishWeapons = eventObj.events[WishType.Weapons];
// console.log(wishCharacters);

const wishCharacterLength = wishCharacters.length;
const wishWeaponLength = wishWeapons.length;

const dates = eventObj.dates;
const monthList = eventObj.monthList;

// 设置时间轴
const todayOffsetNumber = Math.abs(firstDay.diff(today, "day", true));
const todayOffset = (todayOffsetNumber + 1) * (DUR_DAY_WIDTH + 1) + "px";

const start = firstDay;

let durationCharacter = ref([]);
let durationWeapon = ref([]);
let lenWeaponImage = ref([]);

onMounted(async () => {

  // 祈愿角色信息
  for (let i = 0; i < wishCharacterLength; ++i) {
    const end = parseDayjs(wishCharacters[i].start).subtract(0, "minute");
    durationCharacter.value.push(end.diff(start, "day", true));
    // console.log(i, durationCharacter);
  }

  // 祈愿武器信息
  for (let i = 0; i < wishWeaponLength; ++i) {
    const end = parseDayjs(wishWeapons[i].start).subtract(0, "minute");
    // console.log(start, end);
    // console.log(i, end.diff(start, "day", true));
    durationWeapon.value.push(end.diff(start, "day", true));

    let image = wishWeapons[i].image;
    lenWeaponImage.value.push(Array.isArray(image) ? image.length : 1);
  }

  timer1 = setInterval(() => {
    currentTime.value = dayjs().format("HH:mm:ss");
  }, 1000);

  setCurrentPos();
});
onUnmounted(() => {
  if (timer1) clearInterval(timer1);
});


// this.$nextTick(() => {
//   this.$refs.setNowPos.scrollLeft = this.$refs.findNowPos.offsetLeft - document.body.clientWidth / 2;
// });

// function setCurrentPos() {
//   this.$refs.setNowPos.scrollLeft = this.$refs.findNowPos.offsetLeft - document.body.clientWidth / 2;
// }

// 保证 e 在 s 之后
// start - end
function diffWishStyle(s, e) {
  if (s == e) return 0;
  let res = parseDayjs(e).subtract(0, "minute")
    .diff(parseDayjs(s).subtract(0, "minute"), "hour", true) < 1;
  if (res) return 1;
  return -1;
}
function getBorderRadius(wishInfo, i) {
  // console.log(wishInfo, i)
  const len = wishInfo.length;
  if (!len) return '';
  let style = '';
  if (i === 0) {
    style += 'rounded-l-xl ';
  } else if (i === len - 1) {
    style += 'rounded-r-xl ';
  } else {
    let diff = diffWishStyle(wishInfo[i].end, wishInfo[i + 1].start);
    if (diff === 1) {
      style += 'border-r-4 border-white ';
    } else if (diff === -1) {
      style += 'rounded-r-xl ';
    }

    let diff2 = diffWishStyle(wishInfo[i - 1].end, wishInfo[i].start);
    if (diff2 === 1) {
      style += 'border-r-4 border-white ';
    } else if (diff2 === -1) {
      style += 'rounded-l-xl ';
    }
  }

  if (style.includes('rounded-r-xl')) {
    style = style.replace('border-r-4 border-white ', '');
  }

  return style;
}


function replaceImg(event) {
  event.target.src = `/image/${gameName}/wish/_1.jpg`;
}

function getStyleWeapon(indexWeapon, indexImage) {

  let lenImage = lenWeaponImage.value[indexWeapon];
  let marginTop = '';
  if (lenImage == 2) {
    // 间距 0，1
    marginTop = `calc((var(--event-height) + var(--event-height-dur)) * ${indexImage})`;
  }

  return {
    width: wishWeapons[indexWeapon]?.duration * (DUR_DAY_WIDTH + 1) + 'px',
    left: (durationWeapon.value[indexWeapon] + 1) * (DUR_DAY_WIDTH + 1) + 'px',
    height: 'var(--event-height)',
    marginTop: marginTop
  };
}
function getStyleCharacter(indexChar, indexImage) {
  let lenImage = lenWeaponImage.value[indexChar];
  // 原神武器池和角色池长度不一样 lenImage 可能为空
  if (!lenImage) {
    lenImage = 1;
  }
  // 间距 0，1 或者 1，2
  let marginTop = `calc((var(--event-height) + var(--event-height-dur)) * ${lenImage - 1 + indexImage})`;

  return {
    width: wishCharacters[indexChar]?.duration * (DUR_DAY_WIDTH + 1) + 'px',
    left: (durationCharacter.value[indexChar] + 1) * (DUR_DAY_WIDTH + 1) + 'px',
    marginTop: marginTop
  };
}

function modifyImage(image) {
  if (Array.isArray(image)) {
    return image;
  }
  let arr = [image];
  return arr;
}

</script>

<style scoped>
.card {
  /*position: relative;*/
  /*margin: 0.5rem 0 1rem 0;*/
  /*background-color: #fff;*/
  /*-webkit-transition: -webkit-box-shadow .25s;*/
  /*transition: -webkit-box-shadow .25s;*/
  /*transition: box-shadow .25s;*/
  /*transition: box-shadow .25s, -webkit-box-shadow .25s;*/
  /*border-radius: 2px;*/
}

.card .card-image {
  position: relative;
}

.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  -webkit-transition: .3s ease-out;
  transition: .3s ease-out;
}

.waves-block {
  display: block;
}

.container {
  width: 99%;
}

.no-publish {
  background: linear-gradient(to left, #444, rgb(0 0 0 / 0%)) no-repeat
}

.grey-no-publish {
  filter: grayscale(100%) brightness(1) contrast(.5)
}

.rounded-l-xl {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.border-r-4 {
  border-right-width: 4px
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / 1);
}

.rounded-r-xl {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
}
</style>

<style>
.home {
  max-width: unset !important;
}
</style>