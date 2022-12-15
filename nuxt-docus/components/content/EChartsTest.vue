<template>
    <EChartsModel :option="option" />
</template>
  
<script>
import EChartsModel from "./EChartsModel.vue"

const opt = {
    title: {
        text: "Traffic Sources",
        left: "center",
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines",
        ],
    },
    series: [
        {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                { value: 335, name: "Direct" },
                { value: 310, name: "Email" },
                { value: 234, name: "Ad Networks" },
                { value: 135, name: "Video Ads" },
                { value: 1548, name: "Search Engines" },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                },
            },
        },
    ],
}

export default {
    name: "EChartsTest",
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
