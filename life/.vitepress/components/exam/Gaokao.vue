<template>
    <TitleFormat :title="'河南高考历年分数线(仅理科)'" :number="2"></TitleFormat>
    <EChartsModel :option="option" />


    <details class="details custom-block">
        <summary>大学清单</summary>
        <University></University>
    </details>

</template>

<script setup lang="ts">
import EChartsModel from "../EChartsModel.vue";
import gaokaoInfo from '../../data/exam/gaokao.json';
import University from "./University.vue";
import TitleFormat from "../TitleFormat.vue";

const lineName = ['一本', '二本', '大专'];

const scores = Object.values(gaokaoInfo.henan.science);

const filterScore = [
    scores.map(str => str.split(',')[0]),
    scores.map(str => str.split(',')[1]),
    scores.map(str => str.split(',')[2])
];

const minScore = Math.min(...filterScore[1].map(v => parseInt(v))) - 30


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
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: Object.keys(gaokaoInfo.henan.science)
    },
    yAxis: {
        type: 'value',
        min: minScore,
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
        // {
        //     name: lineName[2],
        //     type: 'line',
        //     // stack: 'Total',
        //     data: filterScore[2],
        // },
    ]
};

const option = opt

</script>
