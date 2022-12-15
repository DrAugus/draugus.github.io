<template>
    <EChartsModel :option="option" />
</template>
  
<script>
import EChartsModel from "./EChartsModel.vue"

const opt = {
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
            "2022年11月5日起"
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
            data: [0, 10, 20, 50, 60, 80, 100, 80, 60, 60],
        },
        {
            name: "> 800km 燃油",
            type: 'line',
            // stack: 'Total',
            data: [0, 20, 40, 100, 120, 140, 200, 140, 120, 110],
        },
        {
            name: "基建",
            type: 'line',
            // stack: 'Total',
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        },
    ]
}

export default {
    name: "AirfarePrice",
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
  
