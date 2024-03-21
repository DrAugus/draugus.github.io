<template>
    <EChartsModel :option="option" />
</template>

<script setup lang="ts">
import EChartsModel from "./EChartsModel.vue";
import population from "../data/society/population.json";

let yAxis = Object.keys(population);
let birth = Object.values(population).map(item => parseInt(item.birth));

let opt;

opt = {
    title: {
        text: '中国人口统计'
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
            dataView: { show: true, readOnly: false },
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
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: yAxis
    },
    series: [
        {
            name: "出生人口(万)",
            type: 'bar',
            // stack: 'Total',
            data: birth
        },
    ]
};

const option = opt

</script>
