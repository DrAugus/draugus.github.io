<template>
    当前可能的飞行次数不会超过 14次
    <EChartsModel :option="option3" />

    以当前飞行了 8次 为基准，消耗为 ¥ {{ curExpend }}
    <EChartsModel :option="option" />

    如果觉得不够亏？可以点开下面的看看更亏的

    <EChartsModel :option="option2" />
</template>

<script setup lang="ts">
import EChartsModel from "../EChartsModel.vue";

// 0 - 20
let flyTimes = [];
let averageConsume = [];
let totalConsume = [];
const startFly = 8;
const curTax = 100;
const curExpend = 5318;
const sliceTimes = 15;
const maxTimes = 50;

const calAverageConsume = (times) =>
    ((curExpend + curTax * times) / (times + startFly)).toFixed(2);

const calTotalConsume = (times) =>
    curExpend + curTax * times;

for (let i = 0; i <= maxTimes - startFly; ++i) {
    flyTimes.push(i + startFly);
    averageConsume.push(calAverageConsume(i));
    totalConsume.push(calTotalConsume(i));
}

// flyTimes = flyTimes.sort((a, b) => b - a)
// averageConsume = averageConsume.sort((a, b) =>  b-a)

// console.log('flyTimes', flyTimes)
// console.log('averageConsume', averageConsume)
// console.log('totalConsume', totalConsume)


const option = {
    title: {
        text: '亏麻麻 飞行次数与每次消耗'
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
            saveAsImage: {}
        }
    },
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
            // colorBy: "data",
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
            // colorBy: "data",
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
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
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
            // colorBy: "data",
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
            // colorBy: "data",
            tooltip: {
                valueFormatter: function (value) {
                    return '总消耗 ¥' + value;
                }
            },
            data: totalConsume
        },
        {
            // name: '亏麻',
            type: 'bar',
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

const option3 = {
    // Make gradient line here
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            // max: 300
        },
        {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            // max: 300
        }
    ],
    title: [
        {
            left: 'center',
            text: '单次消耗'
        },
        {
            top: '55%',
            left: 'center',
            text: '总消耗'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [
        {
            axisLabel: {
                formatter: '{value} 次'
            },
            data: flyTimes.slice(0, sliceTimes)

        },
        {
            axisLabel: {
                formatter: '{value} 次'
            },
            data: flyTimes.slice(0, sliceTimes),
            gridIndex: 1
        }
    ],
    yAxis: [
        {
            axisLabel: {
                formatter: '¥{value}'
            },
        },
        {
            axisLabel: {
                formatter: '¥{value}'
            },
            gridIndex: 1
        }
    ],
    grid: [
        {
            bottom: '60%'
        },
        {
            top: '60%'
        }
    ],
    series: [
        {
            type: 'line',
            // showSymbol: false,
            tooltip: {
                valueFormatter: function (value) {
                    return '单次消耗 ¥' + value;
                }
            },
            label: {
                show: true
            },
            data: averageConsume.slice(0, sliceTimes)
        },
        {
            type: 'line',
            // showSymbol: false,
            tooltip: {
                valueFormatter: function (value) {
                    return '总消耗 ¥' + value;
                }
            },
            label: {
                show: true
            },
            data: totalConsume.slice(0, sliceTimes),
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};

</script>
