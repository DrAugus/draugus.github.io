<template>
    <TitleFormat :title="'预算'" :number="2"></TitleFormat>
    <p>
        <span v-for="(v, k, i) in sum">
            <b>{{ k + ' ' }}</b> 全年旅行支出限额
            <Badge :text="'¥' + budget[k]"></Badge>
            <br />
            <blockquote>
                当前已消费
                <b>{{ ' ¥' + v }}
                    <Badge :text="(v / budget[k] * 100).toFixed(2) + '%'" :type="getBadge(v / budget[k] * 100, 1)">
                    </Badge>
                </b>
                <br />
                剩余可支配 {{ ' ¥' + (budget[k] - v) }}
                <Badge :text="((budget[k] - v) / budget[k] * 100).toFixed(2) + '%'"
                    :type="getBadge((budget[k] - v) / budget[k] * 100)"></Badge>
            </blockquote>
        </span>
    </p>

    <TitleFormat :title="'支出'" :number="2"></TitleFormat>

    <div v-for="(v, k, i) in vTrip">
        <TitleFormat :title="k + '年'" :number="3"></TitleFormat>
        <p v-for="(vv, ii) in v">
            <b>{{ vv.name }}</b> <br />
            <span class="italic">{{ modifyDate(vv.start) + ' ~ ' + modifyDate(vv.end) }}</span><br />
            <span><b>总计{{ ' ￥' + vv.sum }}</b>
                <Badge :text="(vv.sum / sum[k] * 100).toFixed(2) + '%'" :type="getBadge(vv.sum / sum[k] * 100, 1)">
                </Badge>
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
                <Badge :text="(vv.sum / sum[k] * 100).toFixed(2) + '%'" :type="getBadge(vv.sum / sum[k] * 100, 1)">
                </Badge>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { TRAVEL_BILLS, LARGE_TRAVEL_PACKAGE, TRAVEL_BUDGET } from "../../data/trip/bill";
import { LargeTravelPackage, TravelBill } from "../../type";
import TitleFormat from "../TitleFormat.vue";

const modifyDate = (date) =>
    date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });


let vOther: {
    [key: number]: LargeTravelPackage[];
} = {};
LARGE_TRAVEL_PACKAGE.forEach(obj => {
    if (!vOther[obj.year]) { vOther[obj.year] = []; }
    vOther[obj.year].push(obj);
});

let vTrip: {
    [key: number]: TravelBill[];
} = {};
TRAVEL_BILLS.forEach(obj => {
    let year = obj.start.getFullYear();
    if (!vTrip[year]) { vTrip[year] = []; }
    vTrip[year].push(obj);
});
// console.log(vTrip)

// 倒序显示旅行
// 对 object 中的键进行排序，即按年排序
const sortedKeys = Object.keys(vTrip).sort((a, b) => Number(b) - Number(a));
// 对每个键对应的数组进行排序
sortedKeys.forEach(key => {
    vTrip[key].sort((a: TravelBill, b: TravelBill) => {
        if (new Date(b.start) > new Date(a.start))
            return -1;
        if (new Date(b.start) < new Date(a.start))
            return 1;
        return 0;
    });
});
// console.log(vTrip)


// 
let sum: {
    [key: number]: number;
} = {};
TRAVEL_BILLS.forEach(obj => {
    let year = obj.start.getFullYear();
    if (!sum[year]) sum[year] = 0;
    sum[year] += obj.sum;
});
LARGE_TRAVEL_PACKAGE.forEach(obj => {
    let year = obj.year;
    if (!sum[year]) sum[year] = 0;
    sum[year] += obj.sum;
});
// console.log(sum);
// console.log(budget)


const getBadge = (num, neg = 0) => {
    let n = parseFloat(num);
    let s = ['tip', 'warning', 'danger'];
    let res = 0;
    if (n > 90) res = 0;
    else if (n > 60) res = 1;
    else if (n > 30) res = 2;
    else res = 2;
    if (neg) res = s.length - res - 1;
    // console.log(n, res)
    return s[res];
};

const budget: {
    [key: number]: number;
} = TRAVEL_BUDGET;
</script>

<style scoped>
.italic {
    font-style: italic;
}

.underline {
    text-decoration: underline;
}
</style>