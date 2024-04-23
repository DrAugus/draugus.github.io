<template>
    <TitleFormat :title="'预算'" :number="2"></TitleFormat>
    <div>
        <span v-for="(v, i) in infoSum">
            <TitleFormat :title="years[i] + ''" :number="3"></TitleFormat>
            全年旅行支出限额 <Badge :text="'¥' + infoBudget[i]"></Badge>
            <br />
            <blockquote>
                已消费
                <b>{{ ' ¥' + v }}
                    <Badge :text="(v / infoBudget[i] * 100).toFixed(2) + '%'"
                        :type="getBadge(v / infoBudget[i] * 100, 1)">
                    </Badge>
                </b>
                <br />
                剩余可支配 {{ ' ¥' + (infoBudget[i] - v) }}
                <Badge :text="((infoBudget[i] - v) / infoBudget[i] * 100).toFixed(2) + '%'"
                    :type="getBadge((infoBudget[i] - v) / infoBudget[i] * 100)"></Badge>
            </blockquote>
        </span>
    </div>

    <TitleFormat :title="'支出'" :number="2"></TitleFormat>

    <div v-for="(v, i) in infoTrip">
        <TitleFormat :title="years[i] + '年'" :number="3"></TitleFormat>


        <div v-for="(vv, ii) in v" :class="getBadge(vv.sum / infoSum[i] * 100, 1)" class="custom-block"
            :style="{ backgroundColor: getBlockBgColor(ii) }">

            <TitleFormat :title="vv.name" :number="4"></TitleFormat>

            <span class="italic">{{ modifyDate(vv.start) + ' ~ ' + modifyDate(vv.end) }}</span><br />

            <span v-if="vv.city">
                <b>城市：{{ vv.city }}</b>
                <br />
            </span>

            <span><b>总计{{ ' ￥' + vv.sum }}</b>
                <Badge :text="(vv.sum / infoSum[i] * 100).toFixed(2) + '%'"
                    :type="getBadge(vv.sum / infoSum[i] * 100, 1)">
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

        </div>

    </div>

    <TitleFormat :title="'其他额外开支'" :number="2"></TitleFormat>
    <div v-for="(v, i) in infoOther">
        <TitleFormat :title="years[i] + '年'" :number="3"></TitleFormat>
        <ul>
            <li v-for="(vv, ii) in v">
                {{ vv.name }}: {{ vv.sum }}
                <Badge :text="(vv.sum / infoSum[i] * 100).toFixed(2) + '%'"
                    :type="getBadge(vv.sum / infoSum[i] * 100, 1)">
                </Badge>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { TRAVEL_BILLS, LARGE_TRAVEL_PACKAGE, TRAVEL_BUDGET } from "../../data/trip/bill";
import { LargeTravelPackage, TravelBill } from "../../type";
import { ColorScheme, getColorScheme, modifyDate } from "../../utils";
import TitleFormat from "../TitleFormat.vue";


// others ----------
let objOther: {
    [key: number]: LargeTravelPackage[];
} = {};
LARGE_TRAVEL_PACKAGE.forEach(obj => {
    if (!objOther[obj.year]) { objOther[obj.year] = []; }
    objOther[obj.year].push(obj);
});


// trip -----------------
let objTrip: {
    [key: number]: TravelBill[];
} = {};
TRAVEL_BILLS.forEach(obj => {
    let year = obj.start.getFullYear();
    if (!objTrip[year]) { objTrip[year] = []; }
    objTrip[year].push(obj);
});
// console.log(objTrip);
// 倒序显示旅行
// 对每个键对应的数组进行排序
Object.keys(objTrip).forEach(key => {
    objTrip[key].sort((a: TravelBill, b: TravelBill) => {
        if (new Date(b.start) > new Date(a.start))
            return 1;
        if (new Date(b.start) < new Date(a.start))
            return -1;
        return 0;
    });
});
// console.log(objTrip)


// objSum -------------------
let objSum: {
    [key: number]: number;
} = {};
TRAVEL_BILLS.forEach(obj => {
    let year = obj.start.getFullYear();
    if (!objSum[year]) objSum[year] = 0;
    objSum[year] += obj.sum;
});
LARGE_TRAVEL_PACKAGE.forEach(obj => {
    let year = obj.year;
    if (!objSum[year]) objSum[year] = 0;
    objSum[year] += obj.sum;
});
// console.log(objSum);
// console.log(objBudget)


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

const objBudget: {
    [key: number]: number;
} = TRAVEL_BUDGET;


const getBlockBgColor = (n: number) => {
    const color = getColorScheme(ColorScheme.GracefulViolet);
    const key = n % color.length;
    return color[key];
}

// sort ==================
const years = Object.keys(objBudget)
    .reverse();
// console.log(years);

let infoBudget: number[] = [];
let infoOther: LargeTravelPackage[][] = [];
let infoTrip: TravelBill[][] = [];
let infoSum: number[] = [];

years.forEach(year => {
    const numYear: number = parseInt(year);
    infoBudget.push(objBudget[numYear]);
    infoSum.push(objSum[numYear]);

    infoOther.push(objOther[numYear]);
    infoTrip.push(objTrip[numYear]);
})


</script>

<style scoped>
.italic {
    font-style: italic;
}

.underline {
    text-decoration: underline;
}
</style>