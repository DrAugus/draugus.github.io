<template>
    <h2>河南高考历年分数线(仅理科)</h2>
    <EChartsModel :option="option" />

    <h2>大学清单</h2>
    <University></University>
</template>
  
<script>
import EChartsModel from "../EChartsModel.vue"
import gaokaoInfo from '../../data/study/gaokao.json'
import University from "./University.vue"

const lineName = ['一本', '二本', '大专']

const scores = Object.values(gaokaoInfo.henan.science)

const filterScore = [
    scores.map(str => str.split(',')[0]),
    scores.map(str => str.split(',')[1]),
    scores.map(str => str.split(',')[2])
]

const opt = {
    title: {
        text: '河南高考历年分数线'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: lineName
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
        data: Object.keys(gaokaoInfo.henan.science)
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: lineName[0],
            type: 'line',
            // stack: 'Total',
            data: filterScore[0],
        },
        {
            name: lineName[1],
            type: 'line',
            // stack: 'Total',
            data: filterScore[1],
        },
        {
            name: lineName[2],
            type: 'line',
            // stack: 'Total',
            data: filterScore[2],
        },
    ]
}

export default {
    name: "Gaokao",
    components: {
        EChartsModel,
        University,
    },
    data() {
        return {
            option: opt,
        };
    },
};
</script>
  
