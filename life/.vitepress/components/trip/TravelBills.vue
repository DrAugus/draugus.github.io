<template>
    <h2>预算</h2>
    <p>
        <span v-for="(v, k, i) in sum">
            <b>{{ k + ' ' }}</b> 全年旅行支出限额
            <Badge :text="'¥' + budget[k]"></Badge>
            <br />
            <blockquote>
                当前已消费
                <b>{{ ' ¥' + v }}
                    <Badge :text="(v / budget[k] * 100).toFixed(2) + '%'" :type="getBadge(v / budget[k] * 100, 1)"></Badge>
                </b>
                <br />
                剩余可支配 {{ ' ¥' + parseFloat(budget[k] - v) }}
                <Badge :text="((budget[k] - v) / budget[k] * 100).toFixed(2) + '%'"
                    :type="getBadge((budget[k] - v) / budget[k] * 100)"></Badge>
            </blockquote>
        </span>
    </p>

    <h2>支出</h2>


    <div v-for="(v, k, i) in vTrip">
        <h3>{{ k + '年' }}</h3>
        <p v-for="(vv, ii) in v">
            <b>{{ vv.name }}</b> <br />
            <span class="italic">{{ vv.start + ' ~ ' + vv.end }}</span><br />
            <span><b>总计{{ ' ￥' + vv.sum }}</b>
                <Badge :text="(vv.sum / sum[k] * 100).toFixed(2) + '%'" :type="getBadge(vv.sum / sum[k] * 100, 1)"></Badge>
            </span>
            <br />
            <span v-if="vv.intro.tips">
                <b>温馨提示：</b><span v-html="vv.intro.tips"></span> <br />
            </span>

            <span v-if="vv.intro.hotels">
                <b>酒店：</b><span v-html="vv.intro.hotels"></span> <br />
            </span>
            <span v-if="vv.intro.transportation">
                <b>出行：</b><span v-html="vv.intro.transportation"></span> <br />
            </span>
            <span v-if="vv.intro.dining">
                <b>吃喝：</b><span v-html="vv.intro.dining"></span> <br />
            </span>
            <span v-if="vv.intro.entertainment">
                <b>玩乐：</b><span v-html="vv.intro.entertainment"></span> <br />
            </span>
            <span v-if="vv.intro.others">
                <b>其他：</b><span v-html="vv.intro.others"></span> <br />
            </span>
        </p>
    </div>


    <p>
        <span class="underline"><b>其他额外开支</b></span>
    </p>
    <div v-for="(v, k, i) in vOther">
        <b>{{ k + '年' }}</b>
        <ul>
            <li v-for="(vv, ii) in v">
                {{ vv.name }}: {{ vv.sum }}
                <Badge :text="(vv.sum / sum[k] * 100).toFixed(2) + '%'" :type="getBadge(vv.sum / sum[k] * 100, 1)"></Badge>
            </li>
        </ul>
    </div>
</template>
  
<script>

import cost from "../../data/trip/cost.json";

import { TRAVEL_BILLS, LARGE_TRAVEL_PACKAGE, TRAVEL_BUDGET } from "../../data/trip/bill";

const trip = cost.trip
const other = cost.other
const budget = TRAVEL_BUDGET

let vOther = {}
other.forEach(v => {
    if (!vOther[v.year]) { vOther[v.year] = [] }
    vOther[v.year].push(v)
})

let vTrip = {}
Object.values(trip).forEach(v => {
    let year = v.start.slice(0, 4)
    if (!vTrip[year]) { vTrip[year] = [] }
    vTrip[year].push(v)
})
// console.log(vTrip)

// 倒序显示旅行
// 对 object 中的键进行排序
const sortedKeys = Object.keys(vTrip).sort((a, b) => b - a);
// 对每个键对应的数组进行排序
sortedKeys.forEach(key => {
    vTrip[key].sort((a, b) => new Date(b.start) - new Date(a.start));
});
// console.log(vTrip)

let time = [];
let sum = {};
Object.values(trip).forEach((arr) => {
    let t = arr.start.split('/')[0]
    if (!sum[t]) sum[t] = 0
    sum[t] += parseInt(arr.sum)
    // console.log(t)
    // console.log(arr.sum)
    time.push(t)
});
other.forEach((arr) => {
    let t = arr.year
    sum[t] += parseInt(arr.sum)
    time.push(t)
});
time = [...new Set(time)]
// console.log(time)
// console.log(sum)
// console.log(budget)

export default {
    name: "TravelBills",
    components: {
    },
    data() {
        return {
            vOther,
            vTrip,
            sum,
            budget,
        };
    },
    methods: {
        getBadge(num, neg = 0) {
            let n = parseFloat(num)
            let s = ['tip', 'info', 'warning', 'danger']
            let res = 0
            if (n > 90) res = 0
            else if (n > 60) res = 1
            else if (n > 30) res = 2
            else res = 3
            if (neg) res = s.length - res - 1
            // console.log(n, res)
            return s[res]
        },
    },
};

</script>
  
<style scoped>
.italic {
    font-style: italic;
}

.underline {
    text-decoration: underline;
}
</style>
  