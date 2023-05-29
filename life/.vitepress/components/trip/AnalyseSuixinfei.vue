<template>
    以当前飞行了 6次 为基准，消耗为 ¥5098
    <EChartsModel :option="option" />

    如果觉得不够亏？可以点开下面的看看更亏的

    <EChartsModel :option="option2" />
</template>
  
<script>
import EChartsModel from "../EChartsModel.vue"

// 0 - 20
let flyTimes = []
let averageConsume = []
let totalConsume = []
const startFly = 6;

const calAverageConsume = (times) =>
    ((5098 + 130 * times) / (times + 6)).toFixed(2)

const calTotalConsume = (times) =>
    5098 + 130 * times

for (let i = 0; i <= 100 - startFly; ++i) {
    flyTimes.push(i + startFly)
    averageConsume.push(calAverageConsume(i))
    totalConsume.push(calTotalConsume(i))
}

// flyTimes = flyTimes.sort((a, b) => b - a)
// averageConsume = averageConsume.sort((a, b) =>  b-a)

// console.log('flyTimes', flyTimes)
// console.log('averageConsume', averageConsume)
// console.log('totalConsume', totalConsume)


const option = {
    title: {
        text: '亏麻麻'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '¥{value}'
        },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            formatter: '{value} 次'
        },
        data: flyTimes
    },
    series: [
        {
            // name: '亏麻',
            type: 'bar',
            showBackground: true,
            colorBy: "data",
            tooltip: {
                valueFormatter: function (value) {
                    return '¥' + value;
                }
            },
            data: averageConsume
        },
        {
            // name: '亏麻',
            type: 'line',
            showBackground: true,
            colorBy: "data",
            tooltip: {
                valueFormatter: function (value) {
                    return '¥' + value;
                }
            },
            data: averageConsume
        },
    ]
};

const option2 = {
    title: {
        text: '亏麻麻'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '¥{value}'
        },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            formatter: '{value} 次'
        },
        data: flyTimes
    },
    series: [
        {
            // name: '亏麻',
            type: 'bar',
            showBackground: true,
            colorBy: "data",
            tooltip: {
                valueFormatter: function (value) {
                    return '均消耗 ¥' + value;
                }
            },
            data: averageConsume
        },
        {
            // name: '亏麻',
            type: 'line',
            showBackground: true,
            colorBy: "data",
            tooltip: {
                valueFormatter: function (value) {
                    return '总消耗 ¥' + value;
                }
            },
            data: totalConsume
        },
    ]
};

export default {
    name: "AirfarePrice",
    components: {
        EChartsModel,
    },
    data() {
        return {
            option: option,
            option2: option2,
        };
    },
};
</script>
  
