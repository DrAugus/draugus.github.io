<template>
    当前可能的飞行次数不会超过 14次
    <EChartsModel :option="option3" />

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
        text: '亏麻麻 飞行次数与每次消耗'
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
    xAxis: [
        {
            axisLabel: {
                formatter: '{value} 次'
            },
            data: flyTimes.slice(0, 10)

        },
        {
            axisLabel: {
                formatter: '{value} 次'
            },
            data: flyTimes.slice(0, 10),
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
            data: averageConsume.slice(0, 10)
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
            data: totalConsume.slice(0, 10),
            xAxisIndex: 1,
            yAxisIndex: 1
        }
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
            option3: option3,
        };
    },
};
</script>
  
