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

        <div v-bind:style="{ left: todayOffset }" class="timeline-today-line-pos" ref="findNowPos">
          <div class="timeline-today-line-pos-text">{{ currentTime }}</div>
        </div>

        <div class="timeline-wish-event-weapon">
          <div class="card event-item weapon" v-for="(value, i) in WISH.weapons" :class="[
            i > 0 && diffWishStyle(WISH.weapons[i - 1].end, value.start) < 0 ? 'rounded-l-xl' : '',
            i > 0 && diffWishStyle(WISH.weapons[i - 1].end, value.start) > 0 ? 'border-r-4 border-white' : '',
            i == 0 ? 'rounded-l-xl' : '',
            i == WISH.weapons.length - 1 ? 'rounded-r-xl' : '',
            i < WISH.weapons.length - 1 && diffWishStyle(value.end, WISH.weapons[i + 1].start) < 0 ? 'rounded-r-xl' : '',
          ]" v-bind:style="{
  width: wishWeapons[i].duration * (DUR_DAY_WIDTH + 1) + 'px',
  left: (durationWeapon[i] + 1) * (DUR_DAY_WIDTH + 1) + 'px',
  height: 'var(--event-height)'
}">
            <div class="card-image waves-effect waves-block waves-light" style="height: 100%">
              <div class="event-img">
                <img v-bind:src="'/image/genshin/wish/' +
                  value.name.concat('_' + value.image + '.jpg').toLowerCase().replace(/ /g, '_') +
                  ''" alt="">
              </div>
              <span class="left-align timeline-character-text sticky text-shadow-weapon ">
                「神铸赋形」活动祈愿
              </span>
            </div>
          </div>
        </div>

        <!-- dur day +1 cause line width is 1 px -->
        <!-- duration + 1 cause 从左边开始计算的  -->
        <div class="timeline-wish-event-character">
          <div class="card event-item " v-for="(value, i) in WISH.characters" :class="[
            'ele-' + ElementString[CHARACTER[value.wish5star].ele],

            !value.wish_2 && i > 0 && diffWishStyle(WISH.characters[i - 1].end, value.start) < 0 ? 'rounded-l-xl' : '',
            !value.wish_2 && i > 0 && diffWishStyle(WISH.characters[i - 1].end, value.start) > 0 ? 'border-r-4 border-white' : '',
            i == 0 ? 'rounded-l-xl' : '',
            i == WISH.characters.length - 1 ? 'rounded-r-xl' : '',
            !value.wish_2 && i < WISH.characters.length - 1 && diffWishStyle(value.end, WISH.characters[i + 1].start) < 0 ? 'rounded-r-xl' : '',

          ]" :style="{
  width: wishCharacters[i].duration * (DUR_DAY_WIDTH + 1) + 'px',
  left: (durationCharacter[i] + 1) * (DUR_DAY_WIDTH + 1) + 'px',
  marginTop: value.wish_2 ? '68px' : ''
}">
            <div class="card-image waves-effect waves-block waves-light" style="height: 100%">
              <div class="event-img responsive-img lazy">
                <img v-bind:src="'/image/genshin/wish/' +
                  value.name.concat('_' + value.image + '.jpg').toLowerCase().replace(/ /g, '_') +
                  ''" alt="">
              </div>
              <span class="left-align timeline-character-text sticky"
                :class="'ele-text-shadow-' + ElementString[CHARACTER[value.wish5star].ele]">
                {{ value.wishName }} 活动祈愿
                「{{ CHARACTER[value.wish5star].prefix }}」
                {{ CHARACTER[value.wish5star].name }}
              </span>
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

<script>
import "./genshin.scss";
import dayjs from "dayjs";
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import "dayjs/locale/zh";
import { processEvent } from "./eventHandle";
import { parseDayjs, ElementString } from "./utils";

dayjs.locale("zh");

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
let today = dayjs();

const eventObj = processEvent();

let firstDay = eventObj.firstDay;
let wishCharacters = eventObj.events[0];
let wishWeapons = eventObj.events[1];
let wishCharacterLength = wishCharacters.length;
let wishWeaponLength = wishWeapons.length;
let dates = eventObj.dates;
let monthList = eventObj.monthList;
let todayOffset = "";
let durationCharacter = [];
let durationWeapon = [];

// console.log(wishCharacters)

// console.log(monthList)

//设置时间轴
const setTimeAxis = () => {
  todayOffset = Math.abs(firstDay.diff(today, "day", true));
  todayOffset = (todayOffset + 1) * (DUR_DAY_WIDTH + 1) + "px";
  // console.log("todayOffset", todayOffset);
};
setTimeAxis();

//祈愿角色信息
const wishCharacterInfo = () => {
  for (let i = 0; i < wishCharacterLength; ++i) {
    let start = firstDay;
    const end = parseDayjs(wishCharacters[i].start).subtract(0, "minute");
    durationCharacter.push(end.diff(start, "day", true));
    // console.log(i, durationCharacter);
  }
};
// console.log("======== wish char ========")
wishCharacterInfo();
// console.log(durationCharacter)

//祈愿武器信息
const wishWeaponInfo = () => {
  for (let i = 0; i < wishWeaponLength; ++i) {
    let start = firstDay;
    const end = parseDayjs(wishWeapons[i].start).subtract(0, "minute");
    // console.log(start, end);
    // console.log(i, end.diff(start, "day", true));
    durationWeapon.push(end.diff(start, "day", true));
  }
};
// console.log("======== wish weapon ========");
wishWeaponInfo();
// console.log(durationWeapon);

export default {
  name: "GenshinTimeline",
  data() {
    return {
      monthList,
      dates,
      DUR_DAY_WIDTH,
      todayOffset,
      currentTime: new Date(),
      WISH,
      CHARACTER,
      durationCharacter,
      durationWeapon,
      wishCharacters,
      wishWeapons,
      colorMap,
      ElementString,
    };
  },
  mounted() {
    let _this = this;
    this.timer1 = setInterval(() => {
      _this.currentTime = dayjs().format("HH:mm:ss");
    }, 1000);

    this.$refs.setNowPos.scrollLeft = this.$refs.findNowPos.offsetLeft - document.body.clientWidth / 2;
  },
  methods: {
    setCurrentPos() {
      this.$refs.setNowPos.scrollLeft = this.$refs.findNowPos.offsetLeft - document.body.clientWidth / 2;
    },
    diffWishStyle(s, e) {
      if (s == e) return 0
      let res = parseDayjs(e).subtract(0, "minute")
        .diff(parseDayjs(s).subtract(0, "minute"), "hour", true) < 1
      if (res) return 1
      return -1
    },
  },
  beforeDestroy() {
    if (this.timer1)
      clearInterval(this.timer1);
  },

};
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
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.border-r-4 {
  border-right-width: 4px
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / 1);
}

.rounded-r-xl {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
}

@media only screen and (max-width: 600px) {

  .hide-on-small-only,
  .hide-on-small-and-down {
    /* display: none !important; */
  }
}

@media only screen and (min-width: 993px) {
  .hide-on-large-only {
    /* display: none !important; */
  }
}
</style>

<style>
.home {
  max-width: unset !important;
}
</style>