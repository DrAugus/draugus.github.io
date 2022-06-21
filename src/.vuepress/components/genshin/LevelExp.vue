<template>

  <blockquote>
    提示及参考：
    <ol>
      <li>每日任务合计<u>1500</u>经验值</li>
      <li>树脂经验值换算为<u>1树脂:5经验值</u></li>
      <li>氪佬只能氪6次50, 100, 100, 150, 200, 200</li>
      <li>不计算除每日任务外其他任务的奖励</li>
    </ol>
  </blockquote>

  <input v-model="money" type="number" placeholder="氪吗？每天氪多少(0-6)单？默认白嫖"
         oninput="if(value>6)value=6;if(value.length>4)value=value.slice(0,4);if(value<0)value=0">
  <br>
  <input v-model="lv1" type="number" placeholder="输入起始等级"
         oninput="if(value>59)value=59;if(value.length>4)value=value.slice(0,4);if(value<0)value=0">
  <br>
  <input v-model="lv2" type="number" placeholder="输入目标等级"
         oninput="if(value>60)value=60;if(value.length>4)value=value.slice(0,4);if(value<0)value=0">
  <br>
  <input v-model="got" type="number" placeholder="输入已经获取的经验值"
         oninput="if(value<0)value=0">

  <h2 @click="showEXP"><a>点击</a>查询所需经验值</h2>
  <h3 id="need_exp">{{ need_exp }}</h3>
  <u id="prefix_info">{{ prefix_info }}</u><br>
  <span id="need_day">{{ need_day }}</span>

</template>

<script>

let prefix_info;
let need_day;

const EXP = [
  0, 375, 500, 625, 725,
  850, 950, 1075, 1200, 1300,
  1425, 1525, 1650, 1775, 1875,
  2000, 2375, 2500, 2625, 2775,
  2825, 3425, 3725, 4000, 4300,
  4575, 4875, 5150, 5450, 5725,
  6025, 6300, 6600, 6900, 7175,
  7475, 7750, 8050, 8325, 8625,
  10550, 11525, 12375, 13450, 14400,
  15350, 16325, 17275, 18250, 19200,
  26400, 28800, 31200, 33600, 36000,
  232350, 258950, 285750, 312825, 340125
];

//8min恢复一个原脆树脂
const RENEW = 8;
//一天180个树脂
const TOTAL_DAY_RENEW = 24 * 60 / RENEW;
//每日任务1500
const DAILY_TASK = 1500;
//氪佬 每天最多买6次 一次60树脂
const TU_HAO = [0, 50, 100, 100, 150, 200, 200];
//经验树脂比 为4:1
const resin2exp = resin => resin * 4;

const getDaySpend = (exp, money) => {
  let cost = 0;
  let resinPlus = 0;
  if (money) {
    for (let i = 0; i <= money; ++i) {
      cost += TU_HAO[i];
    }
    resinPlus = 60 * money;
  }
  let resinDayTotal = TOTAL_DAY_RENEW + resinPlus;
  let dayEXPTotal = resin2exp(resinDayTotal) + DAILY_TASK;
  let daySpend = Math.ceil(exp / dayEXPTotal);
  console.info("exp", exp, "resin", resinDayTotal, "daySpend", daySpend);
  return {
    daySpend: daySpend,
    cost: cost
  };
};

const showMore = (obj) => {
  let prefixInfo = "";
  let day = obj.daySpend;
  let dayInfo = "";

  if (obj.cost === 0) prefixInfo = "白嫖的神";
  else if (obj.cost === 800) prefixInfo = "氪佬悠着点啊";
  else prefixInfo = "氪佬大气";

  if (day < 7) {
    dayInfo = "仅剩" + day + "天，冲冲冲！";
  } else if (day < 30) {
    dayInfo = "仅剩" + day + "天，很快了！冲冲冲！！";
  } else if (day < 180) {
    dayInfo = "还有" + day + "天，加油";
  } else if (day < 365) {
    dayInfo = "还有" + day + "天，慢慢来";
  } else {
    dayInfo = "遥遥无期，还得" + day + "天啊";
  }

  prefix_info = prefixInfo;
  need_day = dayInfo;
};

const getEXP = (lv1, lv2, got, money) => {

  if (!got) got = 0;
  if (!money) money = 0;

  let show = "非法输入，请正确输入";

  if (lv1 >= lv2 || lv1 > 59 || lv2 > 60) {
    return show;
  } else {
    let exp = 0;
    for (let i = lv1; i < lv2; ++i) {
      exp += EXP[i];
    }
    console.info("exp", exp);

    got = parseInt(got);
    if (got > exp) return show;

    exp -= got;
    console.info("got", got);
    showMore(getDaySpend(exp, money));
    show = "所需经验为：" + exp;
  }

  return show;
};

export default {
  data() {
    return {
      lv1: null,
      lv2: null,
      money: null,
      got: null,
      need_exp: null,
      prefix_info: null,
      need_day: null,
    };
  },
  methods: {
    showEXP() {
      this.need_exp = getEXP(this.lv1, this.lv2, this.got, this.money);
      this.prefix_info = prefix_info;
      this.need_day = need_day;
    }
  }
};

</script>

<style scoped>

</style>