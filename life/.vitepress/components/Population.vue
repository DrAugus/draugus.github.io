<template>
    <EChartsModel :option="option" />


    <details>
        <summary>列表显示</summary>
        <p>
            <span v-for="(v,k,i) in population">
            {{ k +': ' + v.birth }} <br/>
            </span>
        </p>
    </details>
</template>
  
<script>
import EChartsModel from "./EChartsModel.vue"
import population from "../data/society/population.json";

let yAxis = Object.keys(population)
let birth = Object.values(population).map(item => parseInt(item.birth))

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

export default {
    name: "Population",
    components: {
        EChartsModel,
    },
    data() {
        return {
            option: opt,
            population,
        };
    },
};
</script>
  
