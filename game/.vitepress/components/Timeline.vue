<template>
  <VPHomeHero :name="replaceText('x时间轴')" :text="replaceText('全部x信息')" :actions="homeActions" :tagline="homeTagline"
    :style="getImgStyle()" />

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
  width: wishWeapons[i]?.duration * (DUR_DAY_WIDTH + 1) + 'px',
  left: (durationWeapon[i] + 1) * (DUR_DAY_WIDTH + 1) + 'px',
  height: 'var(--event-height)'
}">
            <div class="card-image waves-effect waves-block waves-light" style="height: 100%">
              <div class="event-img">
                <img v-bind:src="`/image/${gameName}/wish/` +
                  value.name.concat('_' + value.image + '.jpg').toLowerCase().replace(/ /g, '_') +
                  ''" @error="replaceImg" alt="">
              </div>
              <span class="left-align timeline-character-text sticky text-shadow-weapon ">
                {{ replaceText('', 1) }}
              </span>
            </div>
          </div>
        </div>

        <!-- dur day +1 cause line width is 1 px -->
        <!-- duration + 1 cause 从左边开始计算的  -->
        <div class="timeline-wish-event-character">
          <div class="card event-item " v-for="(value, i) in WISH.characters" :class="[
            'ele-' + CHARACTER[value.wish5star]?.ele?.id,

            !value.wish_2 && i > 0 && diffWishStyle(WISH.characters[i - 1].end, value.start) < 0 ? 'rounded-l-xl' : '',
            !value.wish_2 && i > 0 && diffWishStyle(WISH.characters[i - 1].end, value.start) > 0 ? 'border-r-4 border-white' : '',
            i == 0 ? 'rounded-l-xl' : '',
            i == WISH.characters.length - 1 ? 'rounded-r-xl' : '',
            !value.wish_2 && i < WISH.characters.length - 1 && diffWishStyle(value.end, WISH.characters[i + 1].start) < 0 ? 'rounded-r-xl' : '',

          ]" :style="{
  width: wishCharacters[i]?.duration * (DUR_DAY_WIDTH + 1) + 'px',
  left: (durationCharacter[i] + 1) * (DUR_DAY_WIDTH + 1) + 'px',
  marginTop: value.wish_2 ? '68px' : ''
}">
            <div class="card-image waves-effect waves-block waves-light" style="height: 100%">
              <div class="event-img responsive-img lazy">
                <img v-bind:src="`/image/${gameName}/wish/` +
                  value.name.concat('_' + value.image + '.jpg').toLowerCase().replace(/ /g, '_') +
                  ''" @error="replaceImg" alt="">
              </div>
              <span class="left-align timeline-character-text sticky"
                :class="'ele-text-shadow-' + CHARACTER[value.wish5star]?.ele?.id">
                {{ value.wishName }} {{ replaceText('活动x') }}
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
import { VPHomeHero } from 'vitepress/theme'

import { parseDayjs } from "./utils";
import { processEvent } from "./eventHandle";
import { current } from "./wishRecent";

import dayjs from "dayjs";
import "dayjs/locale/zh";
dayjs.locale("zh");

import "./timeline.scss";

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

export default {
  name: "GenshinTimeline",
  data() {
    return {
      monthList: [],
      dates: [],
      DUR_DAY_WIDTH,
      todayOffset: "",
      currentTime: new Date(),
      durationCharacter: [],
      durationWeapon: [],
      wishCharacters: [],
      wishWeapons: [],
      colorMap,
      homeActions: [],
      homeTagline: '',
      gameName: this.getGameName(),
    };
  },
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
      default: 0
    },
  },
  components: {
    VPHomeHero
  },
  mounted() {
    const eventObj = processEvent(this.WISH);

    let today = dayjs();

    let firstDay = eventObj.firstDay;
    this.wishCharacters = eventObj.events[0];
    this.wishWeapons = eventObj.events[1];

    // console.log(this.wishCharacters)

    let wishCharacterLength = this.wishCharacters.length;
    let wishWeaponLength = this.wishWeapons.length;

    this.dates = eventObj.dates;
    this.monthList = eventObj.monthList;

    // 设置时间轴
    this.todayOffset = Math.abs(firstDay.diff(today, "day", true));
    this.todayOffset = (this.todayOffset + 1) * (DUR_DAY_WIDTH + 1) + "px";

    // 祈愿角色信息
    for (let i = 0; i < wishCharacterLength; ++i) {
      let start = firstDay;
      const end = parseDayjs(this.wishCharacters[i].start).subtract(0, "minute");
      this.durationCharacter.push(end.diff(start, "day", true));
      // console.log(i, durationCharacter);
    }

    // 祈愿武器信息
    for (let i = 0; i < wishWeaponLength; ++i) {
      let start = firstDay;
      const end = parseDayjs(this.wishWeapons[i].start).subtract(0, "minute");
      // console.log(start, end);
      // console.log(i, end.diff(start, "day", true));
      this.durationWeapon.push(end.diff(start, "day", true));
    }


    this.homeActions = [
      { theme: 'alt', text: '返回上级', link: '/' + this.gameName + '/' },
      { theme: 'brand', text: this.replaceText('当前x'), link: '/' + this.gameName + '/wish' }
    ]

    for (let v of current.obj) {
      this.homeTagline += ' + ' + v.name
    }
    this.homeTagline = this.homeTagline.slice(3)

    // console.log(this.todayOffset)


    // current time
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

    getImgStyle() {
      // wish src
      let homeImg // = current.src
      // replace char src
      homeImg = []
      for (let v of current.obj) {
        homeImg.push(`/image/${this.gameName}/characters/full/${v.wish5star}.png`)
      }
      let objImg = { cnt: 0, src: '' }
      objImg.cnt = homeImg.length
      if (homeImg.length == 1) objImg.src = homeImg[0]
      if (homeImg.length == 2) objImg.src = `url(${homeImg[0]}),url(${homeImg[1]})`
      return {
        backgroundImage: objImg.src,
        backgroundRepeat: 'no-repeat,no-repeat',
        backgroundPosition: 'left 3%, right 3%',
      }
    },
    replaceImg(event) {
      event.target.src = `/image/${this.gameName}/wish/_1.jpg`
    },

    // tag 0 no handle
    // tag 1 weapon text
    replaceText(str, tag = 0) {
      if (this.WISH_TEXT == 0) {

        if (tag == 1) {
          return '「神铸赋形」活动祈愿'
        }

        return str.replace('x', '祈愿')
      } else if (this.WISH_TEXT == 1) {

        if (tag == 1) {
          return '「流光定影」活动跃迁'
        }

        return str.replace('x', '跃迁')
      }
    },

    getGameName() {
      if (this.WISH_TEXT == 0) return 'genshin'
      if (this.WISH_TEXT == 1) return 'hsr'
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