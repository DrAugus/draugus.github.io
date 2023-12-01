<template>
    <EChartsModel :option="option" />
</template>
  
<script>
import EChartsModel from "../EChartsModel.vue";

let opt = {
    title: {
        text: '机票价格波动'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['<= 800km 燃油', '> 800km 燃油', '基建']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            "2022年2月5日前", "2022年2月5日起", "2022年3月5日起",
            "2022年4月5日起", "2022年5月5日起", "2022年6月5日起",
            "2022年7月5日起", "2022年8月5日起", "2022年9月5日起",
            "2022年11月5日起", "2023年1月5日起", "2023年4月5日起"
        ]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: "<= 800km 燃油",
            type: 'line',
            // stack: 'Total',
            data: [0, 10, 20, 50, 60, 80, 100, 80, 60, 60, 40, 30],
        },
        {
            name: "> 800km 燃油",
            type: 'line',
            // stack: 'Total',
            data: [0, 20, 40, 100, 120, 140, 200, 140, 120, 110, 80, 60],
        },
        {
            name: "基建",
            type: 'line',
            // stack: 'Total',
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        },
    ]
};

const dateUpdate = [
    "2022年2月5日前", "2022年2月5日起", "2022年3月5日起",
    "2022年4月5日起", "2022年5月5日起", "2022年6月5日起",
    "2022年7月5日起", "2022年8月5日起", "2022年9月5日起",
    "2022年11月5日起", "2023年1月5日起", "2023年4月5日起",
    "2023年6月5日起", "2023年8月5日起", "2023年9月5日起",
    "2023年10月5日起", "2023年11月5日起", "2023年12月5日起"
];
const below800km = [
    0, 10, 20, 50, 60, 80,
    100, 80, 60, 60, 40, 30,
    20, 30, 60, 70, 60, 50
];
const above800km = [
    0, 20, 40, 100, 120, 140,
    200, 140, 120, 110, 80, 60,
    30, 60, 110, 130, 110, 90
];

const lengthUpdate = dateUpdate.length;
if (lengthUpdate != below800km.length && lengthUpdate != above800km.length) {
    console.error("ERROR DATA!!!");
}

// 基建
const tax = new Array(lengthUpdate).fill(50);

opt = {
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
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: dateUpdate
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
        },
        {
            name: "> 800km 燃油",
            type: 'line',
            // stack: 'Total',
            // label: {
            //     show: true
            // },
            data: above800km,
        },
        {
            name: "<= 800km 燃油",
            type: 'bar',
            // stack: 'Total',
            label: {
                show: true
            },
            data: below800km,
        },
        {
            name: "<= 800km 燃油",
            type: 'line',
            // stack: 'Total',
            // label: {
            //     show: true
            // },
            data: below800km,
        },
        {
            name: "基建",
            type: 'bar',
            // stack: 'Total',
            label: {
                show: true
            },
            data: tax,
        },
    ]
};

export default {
    name: "Airfare",
    components: {
        EChartsModel,
    },
    data() {
        return {
            option: opt,
        };
    },
};
</script>
  
