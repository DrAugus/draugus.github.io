<template>
  <blockquote>
    提示及参考：
    <ol>
      <li v-for="(v, i) in tipsInfo" v-html="v"></li>
    </ol>
  </blockquote>
  <div>
    <input v-model="money" type="number" placeholder="氪吗？每天氪多少(0-6)单？默认白嫖" @input="checkInput($event, 6)">
    <br /><br />
    <input v-model="lv1" type="number" placeholder="输入起始等级" @input="checkInput($event, lvMax - 1)">
    <br /><br />
    <input v-model="lv2" type="number" placeholder="输入目标等级" @input="checkInput($event, lvMax)">
    <br /><br />
    <input v-model="got" type="number" :placeholder="`输入已经获取的${expName}`" @input="checkInput($event, Infinity, 0)">
  </div>

  <h2 @click="showEXP"><a>点击</a>查询所需{{ expName }}</h2>
  <h3 id="expNeed">{{ expNeed }}</h3>
  <u id="prefixInfo">{{ prefixInfo }}</u><br>
  <span id="dayNeed">{{ dayNeed }}</span>
</template>

<script>

export default {
  data() {
    return {
      lv1: null,
      lv2: null,
      money: null,
      got: null,
      expNeed: null,
      prefixInfo: null,
      dayNeed: null,
      tipsInfo: [],
      expName: null,
    };
  },
  props: {
    EXP: Array,
    dailyTask: null,
    recovery: null,
    pay2win: Array,
    expChange: null,
    exploreName: Object,
    lvMax: null,
  },
  methods: {
    checkInput($event, max, min = 0) {
      max = parseInt(max)
      let value = $event.target.value
      if (value > max) value = max
      if (value.length > 4) value = value.slice(0, 4)
      if (value < min) value = min
      $event.target.value = value
    },

    showEXP() {
      let obj = this.getEXP(this.lv1, this.lv2, this.got, this.money);
      console.log(obj)
      this.expNeed = obj.show;
      this.prefixInfo = obj.objInfo?.prefixInfo;
      this.dayNeed = obj.objInfo?.dayInfo;
    },
    getDaySpend(exp, money) {

      const TOTAL_DAY_RENEW = 24 * 60 / this.recovery;
      const resin2exp = resin => resin * this.expChange;

      let cost = 0;
      let resinPlus = 0;
      if (money) {
        for (let i = 0; i <= money; ++i) {
          cost += this.pay2win[i];
        }
        resinPlus = 60 * money;
      }
      let resinDayTotal = TOTAL_DAY_RENEW + resinPlus;
      let dayEXPTotal = resin2exp(resinDayTotal) + this.dailyTask;
      let daySpend = Math.ceil(exp / dayEXPTotal);
      console.info("money", money, "exp", exp, "resin", resinDayTotal, "daySpend", daySpend);
      return {
        daySpend: daySpend,
        cost: cost
      };
    },
    showMore(obj) {
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

      return {
        prefixInfo: prefixInfo,
        dayInfo: dayInfo,
      }

    },
    getEXP(lv1, lv2, got, money) {

      if (!got) got = 0;
      if (!money) money = 0;

      let show = "非法输入，请正确输入";
      let objInfo = {}

      if (lv1 >= lv2 || lv1 > 59 || lv2 > 60) {
        return {
          show: show,
          objInfo: objInfo,
        };
      } else {
        let exp = 0;
        for (let i = lv1; i < lv2; ++i) {
          exp += this.EXP[i];
        }
        console.info("exp", exp);

        got = parseInt(got);
        if (got > exp) return show;

        exp -= got;
        console.info("got", got);
        objInfo = this.showMore(this.getDaySpend(exp, money));
        show = "所需经验为：" + exp;
      }

      return {
        show: show,
        objInfo: objInfo,
      };
    },
  },
  mounted() {
    let tipsInfo = []
    let expName = this.exploreName?.TrailblazeEXP?.name || this.exploreName?.AdventureEXP?.name
    let resumeName = this.exploreName?.TrailblazePower?.name || this.exploreName?.OriginalResin?.name
    let str = `每日任务合计 <b>${this.dailyTask}</b> ${expName}`
    tipsInfo.push(str)
    str = `${resumeName}-${expName}换算为 <b>1${resumeName}:${this.expChange}${expName}</b>`
    tipsInfo.push(str)
    str = `氪佬只能氪6次 ${this.pay2win}`
    tipsInfo.push(str)
    str = '不计算除每日任务外其他任务的奖励'
    tipsInfo.push(str)
    console.log(tipsInfo)
    this.tipsInfo = tipsInfo
    this.expName = expName
  },
};

</script>

<style scoped>
input {
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: #f0f0f0;
  font-size: 16px;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  outline: none;
}

input:hover {
  background-color: #e4e4e4;
}

input:focus {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>