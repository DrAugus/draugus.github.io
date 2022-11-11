<template>

  <h2>查询角色复刻周期时间</h2>
  todo

  <h2>最近出场的角色</h2>
  <div v-for="(v, k) in allLastChar">
    <strong>{{ v[0] }}</strong>: {{ v[1].start }}
    <br>
  </div>

  <h2>所有角色复刻周期</h2>
  todo
  
  <h2></h2>

  <h2></h2>

</template>

<script>
import dayjs from "dayjs";
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import { formatDate } from "./utils";

import "dayjs/locale/zh";

dayjs.locale("zh"); // use locale globally
// dayjs().locale('zh').format() // use locale in a specific instance

// refer eventHandle
const convertToDate = (e, i, j) => {

  // 暂时全按 safari 的格式进行格式化
  let isSafari = true;
  // if (typeof window !== undefined) {
  //     let userAgent = window.navigator.userAgent;
  //     isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  //     console.info(isSafari ? "now is safari" : "I am not safari");
  // }

  let start, end;
  if (isSafari) {
    e.start = e.start.replace(/-/g, "/");
    e.end = e.end.replace(/-/g, "/");
  }
  start = dayjs(e.start, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute");
  end = dayjs(e.end, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute");

  // to today, every event, end time to now
  const durationToToday = dayjs().diff(end, "day", true);

  return {
    ...e,
    index: i,
    index2: j,
    start,
    end,
    durationToToday
  };
};

const processEvent = () => {
  let eventsDataInfo = [];
  eventsDataInfo[0] = WISH.characters;
  eventsDataInfo[1] = WISH.weapons;

  let events = eventsDataInfo.map((e, i) => {
    if (Array.isArray(e)) {
      return e.map((item, j) => convertToDate(item, i, j));
    }

    return convertToDate(e, i, i);
  });

  return {
    events,
  };
};

const EVENT = processEvent().events;
const CHAR_ALL = EVENT[0]
// console.log("CHAR_ALL")
// console.log(CHAR_ALL)

const FORK_DESCRIBE = {
  1: "首次出场",
  2: "首次复刻",
  3: "二次复刻",
  4: "三次复刻",
  5: "四次复刻",
  6: "五次复刻",
  7: "六次复刻"
}

const sliceChar = [...new Set(CHAR_ALL.map(obj => obj.wish5star))].map(v => CHARACTER[v].name);
// console.log("sliceChar")
// console.log(sliceChar)

// first slice
const sliceInfoFirst = CHAR_ALL.map(object => {
  return {
    name: CHARACTER[object.wish5star].name,
    times: object.image,
    start: formatDate(dayjs(object.start)),
    end: formatDate(dayjs(object.end)),
    durationToToday: object.durationToToday,
  };
})

// console.log("===sliceInfoFirst===")
// console.log(sliceInfoFirst)

// all recent char up, done, include future
const allLastChar = new Map(CHAR_ALL.map(object =>
  [
    CHARACTER[object.wish5star].name,
    {
      times: formatDate(dayjs(object.image)),
      start: formatDate(dayjs(object.start)),
      end: object.end,
      durationToToday: object.durationToToday,
    }
  ]
));
// console.log("allLastChar")
// console.log(allLastChar)

// 
// every time duration, end to next start, by name 
// 

const get5Star = () => {
  let character = WISH.characters;
  let set = new Set();
  for (let ch of character) {
    set.add(ch.wish5star);
  }
  console.log(set);
  return set;
};

const changeWishObj = () => {
  let character = WISH.characters;
  const res = new Map();
};


export default {
  name: "Fork",
  data() {
    return {
      EVENT,
      allLastChar,
    };
  },
  methods: {},
};
</script>

<style scoped>

</style>
