<template>
  <v-chart class="chart" :option="option"/>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart} from "echarts/charts";
import {LineChart} from "echarts/charts";
import {UniversalTransition} from "echarts/features";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from "echarts/components";
import VChart, {THEME_KEY} from "vue-echarts";
import {ref, defineComponent} from "vue";

use([
  GridComponent,
  LegendComponent,
  CanvasRenderer,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "default",
  },
  setup() {
    const option = ref({
      title: {
        text: "Stacked Line"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    });

    return {option};
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
