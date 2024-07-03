<template>
  <!-- <h2>最近出场角色 情报</h2> -->
  <!-- todo 点击角色 再展示 曾经出场的 时间段 -->

  <a @click="sortLast">最近排序</a> |
  <a @click="sortEarly">最远排序</a>
  <br><br>

  <select v-model="selectedLastChar">
    <option disabled value="">选择角色</option>
    <option v-for="(v, i) in sliceCharZH"> {{ v }}</option>
  </select>
  <p v-if="selectedLastChar" class="choose">
    <strong>{{ selectedLastChar + ' ' }}</strong>
    <span class="underline">
      <span>{{ getSelectDuration(selectedLastChar) }} </span>
    </span>
    <br>
  </p>

  <hr>

  <div>
    <div v-for="(v, k) in displayRes" :key="k">
      <div class="char-container">
        <div class="char-avatar">
          <img :src="v.src" @error="replaceImg">
        </div>
        <div class="char-info">
          <div class="char-name">{{ v.nameZH }}</div>
          <div class="char-version">{{ 'ver' + v.version }}</div>
          <div class="char-duration">{{ v.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { GameName, getGameName, getWishName, replaceAndLow, compareDayjs, filterObject, currentDayjs, beforeToday, afterToday, durationTodayDay, composeCharSrc } from "./utils";

import "dayjs/locale/zh";

dayjs.locale("zh"); // use locale globally
// dayjs().locale('zh').format() // use locale in a specific instance



export default {
  name: "Fork",
  data() {
    return {
      // FORK_DESCRIBE,
      sliceCharZH: [],
      displayRes: [],
      selectedLastChar: "",
      selectedFork: "",
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
    GAME_NAME: {
      type: Number,
      required: true,
      default: GameName.Genshin
    },
  },
  methods: {
    sortLast() {
      this.displayRes = this.displayRes.sort((a, b) => a.tag - b.tag)
    },
    sortEarly() {
      this.displayRes = this.displayRes.sort((a, b) => b.tag - a.tag)
    },
    getSelectDuration(select) {
      // let idx = this.displayRes.findIndex(obj=> obj.nameZH === select)
      // return this.displayRes[idx].duration

      let target = this.displayRes.find(obj => obj.nameZH === select)
      if (target) return target.duration
      return '未找到'
    },
    replaceImg(event) {
      event.target.src = '/image/genshin/characters/paimon_faq.png'
    },
  },
  async mounted() {




    const FORK_DESCRIBE = {
      1: "首次出场",
      2: "首次复刻",
      3: "二次复刻",
      4: "三次复刻",
      5: "四次复刻",
      6: "五次复刻",
      7: "六次复刻"
    }

    // const sliceAllChar = [...new Set(allPastChar.map(obj => obj.wish5star))];


    // 此处不过滤常驻角色，因为有的常驻 up 过
    const all5star = Object.values(this.CHARACTER).filter(character => character.star === 5).map(obj => obj.id);
    // console.log('all5star', all5star)
    const all4star = Object.values(this.CHARACTER).filter(character => character.star === 4).map(obj => obj.id);
    // console.log(all4star)

    const sliceCharZH = all5star.map(v => this.CHARACTER[replaceAndLow(v)].name)
    this.sliceCharZH = sliceCharZH
    // console.log('sliceCharZH', sliceCharZH)

    // [char]: [wish1, wish2, ...]
    // only save: name, image, shortName, start, end, version
    let modify5starWishData = {}


    const modify5starWish = (char) => {
      for (let c of char) {
        modify5starWishData[c] = []
        for (let w of this.WISH.characters) {
          let idx = w.wish5star.indexOf(c)
          if (idx !== -1) {
            let obj = {}
            obj.name = w.name[idx]
            obj.image = w.image[idx]
            obj.shortName = w.wish5star[idx]
            obj.start = w.start
            obj.end = w.end
            obj.version = w.version

            modify5starWishData[c].push(obj)
          }
        }
      }
    }

    modify5starWish(all5star)
    // filter null
    modify5starWishData = filterObject(modify5starWishData, v => v.length)
    // 以防万一，还是排个序吧
    // 既然排序，直接倒序了，后面全部取第一个
    Object.values(modify5starWishData).forEach(function (value) {
      if (Array.isArray(value)) {
        value.sort((a, b) => b.image - a.image)
      }
    });
    // 至此不再修改此数据
    // console.log('modify5starWishData', modify5starWishData)

    // // 取最新的 obj 形式，不方便
    // let modify5starWishInfo = {}
    // Object.values(modify5starWishData).forEach(function (v) {
    //   modify5starWishInfo[v[0].shortName] = v[0]
    // });
    // console.log('modify5starWishInfo', modify5starWishInfo)
    // modify5starWishInfo = Object.fromEntries(Object.entries(modify5starWishInfo).sort(([, a], [, b]) => compareDayjs(a.end, b.end)));
    // console.log('modify5starWishInfo', modify5starWishInfo)

    // 取最新的 数组形式
    let modify5starWishInfo = []
    Object.values(modify5starWishData).forEach((v) => {
      modify5starWishInfo.push(v[0])
    });
    modify5starWishInfo = modify5starWishInfo.sort((a, b) => compareDayjs(a.end, b.end))
    // console.log('modify5starWishInfo', modify5starWishInfo)

    // 为 modify5starWishInfo 加一个新的字段 duration 
    for (let v of modify5starWishInfo) {
      if (currentDayjs(v.start, v.end)) {
        v.duration = 0
      } else {
        if (beforeToday(v.end)) {
          v.duration = durationTodayDay(v.end)
        } else if (afterToday(v.start)) {
          v.duration = durationTodayDay(v.start)
        }
      }
    }


    const findInCurrent = (wish5star) => sliceCurrentChar.indexOf(wish5star) != -1;

    const findInFuture = (wish5star) => sliceFutureChar.indexOf(wish5star) != -1;

    const isExclusive = (wish5star) => this.CHARACTER[wish5star].event_exclusive;

    const dayTip = (dur) => {
      let tip = ''

      if (dur > 0) tip = ` ${parseInt(dur)}天后登场`
      else if (dur < 0) tip = ` 距今${-parseInt(dur)}天`
      else tip = ` 当前${getWishName(this.GAME_NAME)}进行时`
      return tip
    }

    let displayRes = []
    for (let v of modify5starWishInfo) {
      let obj = {}
      obj.shortName = v.shortName
      obj.nameZH = this.CHARACTER[v.shortName].name
      obj.src = composeCharSrc(this.GAME_NAME, v.shortName)
      obj.version = v.version
      obj.duration = dayTip(v.duration)
      obj.tag = v.duration // 排序用 由远至近-由大到小
      displayRes.push(obj)
    }
    this.displayRes = displayRes
    // console.log('displayRes', displayRes)

    const showColor = (wish5star) => {
      let color = ''
      if (findInCurrent(wish5star)) color = 'fork-current'
      if (findInFuture(wish5star)) color = 'fork-future'
      if (!isExclusive(wish5star)) color = 'always-here'
      return color
    }






    this.selectedFork = ""
    this.selectedLastChar = ""
    // default
    this.sortEarly()


  }
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}

.date {
  font-family: 'Lora', 'Times New Roman', serif;
  font-style: italic;
}

.choose {
  color: rgb(242, 109, 109);
}

.always-here {
  color: rgb(106, 177, 52);
}

.fork-current {
  color: rgb(177, 80, 48);
}

.fork-future {
  color: rgb(69, 183, 236);
}

.char-img {
  width: 36px;
  border-radius: 9999px;
}

.char-container {
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 9999px;
  margin-bottom: 10px;
}

.char-avatar {
  width: 80px;
  /* background-color: #ccc; */
  /* height: 80px; */
  border-radius: 9999px;
  margin-left: 20px;
}

.char-info {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}

.char-name {
  font-size: 18px;
  font-weight: 800;
}

.char-version {
  font-size: 16px;
  color: #999;
}

.char-duration {
  font-size: 14px;
  color: #999;
}
</style>

