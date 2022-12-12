<template>

  <h2>最近出场角色 情报</h2>

  <a @click="sortLast">最新排序</a> | 
  <a @click="sortEarly">最远排序</a>
  <br><br>

  <select v-model="selectedLastChar">
    <option disabled value="">选择角色</option>
    <option v-for="(v, i) in sliceCharZH"> {{ v }}</option>
  </select>
  <p v-if="selectedLastChar" class="choose">
    <strong>{{ selectedLastChar }}</strong><br>
    出场时间: <span class="date">{{ allLastChar.get(selectedLastChar).start }}</span>
    <br>
    结束时间: <span class="date">{{ allLastChar.get(selectedLastChar).end }}</span>
    <br>
    <span class="underline" v-if="allLastChar.get(selectedLastChar).durationStart2Today < 0">
      {{ -parseInt(allLastChar.get(selectedLastChar).durationStart2Today) }} 天后出场
    </span>
    <span class="underline" v-else>
      <span v-if="allLastChar.get(selectedLastChar).durationEnd2Today < 0">当期祈愿进行时</span>
      <span v-else>距今 {{ parseInt(allLastChar.get(selectedLastChar).durationEnd2Today) }} 天</span>
    </span>
    <br>
  </p>

  <hr>

  <p v-for="(v, k) in allLastChar">
    <strong>{{ v[0] }}</strong><br>
    出场时间: <span class="date">{{ v[1].start }}</span>
    <br>
    结束时间: <span class="date">{{ v[1].end }}</span>
    <br>
    <span class="underline" v-if="v[1].durationStart2Today < 0">
      {{ -parseInt(v[1].durationStart2Today) }} 天后出场
    </span>
    <span class="underline" v-else>
      <span v-if="v[1].durationEnd2Today < 0">当期祈愿进行时</span>
      <span v-else>距今 {{ parseInt(v[1].durationEnd2Today) }} 天</span>
    </span>
    <br>
  </p>

  <h2>角色复刻周期时间</h2>

  <select v-model="selectedFork">
    <option disabled value="">Please select one</option>
    <option v-for="(v, i) in sliceCharZH"> {{ v }}</option>
  </select>
  <p v-if="selectedFork" class="choose">
    <strong>{{ selectedFork }}</strong><br>
    <span v-for="(vv, ii) in displayMap.get(selectedFork).toNow">
      {{ FORK_DESCRIBE[ii + 1] }}距今{{ vv }}天<br>
    </span>
  </p>

  <p v-for="(v, k) in displayMap">
    <strong>{{ v[0] }}</strong><br>
    <span v-for="(vv, ii) in v[1].toNow">
      {{ FORK_DESCRIBE[ii + 1] }}距今{{ vv }}天<br>
    </span>
  </p>

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
  e.start = e.start.replace(/-/g, "/");
  e.end = e.end.replace(/-/g, "/");

  let start = dayjs(e.start, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute"),
    end = dayjs(e.end, "YYYY-MM-DD HH:mm:ss").subtract(0, "minute");

  // to today, every event, end time to now
  const durationEnd2Today = dayjs().diff(end, "day", true);
  const durationStart2Today = dayjs().diff(start, "day", true);

  return {
    ...e,
    index: i,
    index2: j,
    start,
    end,
    durationEnd2Today,
    durationStart2Today
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

const sliceChar = [...new Set(CHAR_ALL.map(obj => obj.wish5star))];
// console.log("sliceChar")
// console.log(sliceChar)
const sliceCharZH = sliceChar.map(v => CHARACTER[v].name)

// first slice
const sliceCharInfo = CHAR_ALL.map(object => {
  return {
    name: object.wish5star,
    times: object.image,
    start: formatDate(dayjs(object.start)),
    end: formatDate(dayjs(object.end)),
    durationEnd2Today: object.durationEnd2Today,
    durationStart2Today: object.durationStart2Today,
  };
})

// console.log("===sliceCharInfo===")
// console.log(sliceCharInfo)

// second filter
const filterCharInfo = () => {
  let allCharMap = new Map();
  for (let v of sliceChar) {
    allCharMap.set(v, sliceCharInfo.filter(d => d.name === v))
  }
  // console.log(allCharMap)
  return allCharMap
}

const mapCharInfo = filterCharInfo();

// third format
const formatCharInfo = (arr) => {
  let twiceDur = [];
  for (let i = 1; i < arr.length; ++i) {
    let dur = dayjs(arr[i].start).diff(arr[i - 1].end, "day", true);
    twiceDur.push(parseInt(dur))
  }
  let toNow = []
  for (let v of arr) {
    toNow.push(parseInt(v.durationEnd2Today))
  }
  return {
    twiceDur,
    toNow,
    len: arr.length,
  }
}

// fourth display
const displayCharInfo = () => {
  let displayMap = new Map();
  mapCharInfo.forEach((v, k) => {
    displayMap.set(
      CHARACTER[k].name,
      formatCharInfo(v)
    )
  })
  // console.log(displayMap)
  return displayMap
}

const displayMap = displayCharInfo()



// all recent char up, done, include future
const allLastChar = new Map(CHAR_ALL.map(object =>
  [
    CHARACTER[object.wish5star].name,
    {
      times: formatDate(dayjs(object.image)),
      start: formatDate(dayjs(object.start)),
      end: formatDate(dayjs(object.end)),
      durationEnd2Today: object.durationEnd2Today,
      durationStart2Today: object.durationStart2Today,
    }
  ]
));
// console.log("allLastChar")
// console.log(allLastChar)

// 
// every time duration, end to next start, by name 
// 

export default {
  name: "Fork",
  data() {
    return {
      EVENT,
      FORK_DESCRIBE,
      sliceCharZH,
      allLastChar,
      displayMap,
      selectedLastChar: "",
      selectedFork: "",
    };
  },
  methods: {
    sortLast() {
      this.allLastChar = new Map(Array.from(this.allLastChar).sort(
        (a, b) => a[1].durationEnd2Today - b[1].durationEnd2Today
      ))
    },
    sortEarly() {
      this.allLastChar = new Map(Array.from(this.allLastChar).sort(
        (a, b) => b[1].durationEnd2Today - a[1].durationEnd2Today
      ))
    },
  },
  async mounted() {
    this.selectedFork = ""
    this.selectedLastChar = ""
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
</style>
