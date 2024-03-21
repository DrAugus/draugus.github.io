<template>
    <EChartsModel :option="option" />

    <details class="details custom-block">
        <summary>详细文字</summary>
        <p v-for="(value, index) in details" :class="index == 0 ? 'cur-color' : ''">
            {{ value }}
        </p>
    </details>

    <details class="details custom-block">
        <summary>表格显示</summary>
        <table>
            <thead>
                <tr>
                    <th style="text-align:center;">日期</th>
                    <th style="text-align:center;">&lt;= 800km 燃油 ￥</th>
                    <th style="text-align:center;">&gt; 800km 燃油 ￥</th>
                    <th style="text-align:center;">基建 ￥</th>
                    <th style="text-align:center;">总税费 ¥</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, index) in dateUpdate" :class="index == 0 ? 'cur-bg-color' : ''">
                    <td style="text-align:center;">{{ value }}</td>
                    <td style="text-align:center;">{{ below800km[index] }}</td>
                    <td style="text-align:center;">{{ above800km[index] }}</td>
                    <td style="text-align:center;">{{ taxAirport[index] }}</td>
                    <td style="text-align:center;">{{ taxTotal[index] }}</td>
                </tr>
            </tbody>
        </table>
    </details>
</template>

<script setup lang="ts">
import EChartsModel from "../EChartsModel.vue";
import { AIRFARE_DATA } from "../../data/trip/airfare";
import { modifyDate1 } from "../../utils";

let getAllDate = AIRFARE_DATA.map(obj => modifyDate1(obj.date));
const getAllDateModify = AIRFARE_DATA.map(obj => obj.dateModify);
getAllDate.forEach((date, index) => {
    getAllDate[index] = date + getAllDateModify[index];
});

let dateUpdate = getAllDate;
let below800km = AIRFARE_DATA.map(obj => obj.costBelow800km);
let above800km = AIRFARE_DATA.map(obj => obj.costAbove800km);
let taxAirport = AIRFARE_DATA.map(obj => obj.taxAirport);
let details = AIRFARE_DATA.map(obj => obj.details);
let taxTotal = taxAirport.map((value, index) => {
    return (value + below800km[index]) + '/' + (value + above800km[index]);
});
// console.log("taxTotal", taxTotal)

let opt = {
    title: {
        text: '机票价格波动'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    toolbox: {
        feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // yAxis: {
    //     type: 'value',
    // },
    // xAxis: {
    //     type: 'category',
    //     data: dateUpdate,
    //     boundaryGap: [0, 0.01]
    // },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: dateUpdate,
        boundaryGap: [0, 0.01]
    },
    series: [
        {
            name: "> 800km 燃油",
            type: 'bar',
            // stack: 'Total',
            label: {
                show: true
            },
            data: above800km,
            markLine: {
                data: [{ type: "average" }]
            },
            markPoint: {
                data: [{ type: "max" }]
            }
        },
        // {
        //     name: "> 800km 燃油",
        //     type: 'line',
        //     // stack: 'Total',
        //     // label: {
        //     //     show: true
        //     // },
        //     data: above800km,
        // },
        {
            name: "<= 800km 燃油",
            type: 'bar',
            // stack: 'Total',
            label: {
                show: true
            },
            data: below800km,
            markLine: {
                data: [{ type: "average" }]
            },
            markPoint: {
                data: [{ type: "max" }]
            }
        },
        // {
        //     name: "<= 800km 燃油",
        //     type: 'line',
        //     // stack: 'Total',
        //     // label: {
        //     //     show: true
        //     // },
        //     data: below800km,
        // },
        {
            name: "基建",
            type: 'bar',
            // stack: 'Total',
            label: {
                show: true
            },
            data: taxAirport,
            markLine: {
                data: [{ type: "average" }]
            },
            markPoint: {
                data: [{ type: "max" }]
            }
        },
    ]
};


const option = opt;
dateUpdate = [...dateUpdate].reverse();
below800km = [...below800km].reverse();
above800km = [...above800km].reverse();
taxAirport = [...taxAirport].reverse();
details = [...details].reverse();
taxTotal = [...taxTotal].reverse()

</script>

<style scoped>
.cur-bg-color {
    background-color: #ffa9aa;
}

.cur-color {
    color: #ff3739;
}
</style>
