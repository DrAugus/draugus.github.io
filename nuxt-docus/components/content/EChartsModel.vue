<template>

  <v-chart class="chart" :option="option" />

</template>
  
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from 'echarts/features';
import { PieChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import "echarts/lib/component/grid"

use([
  UniversalTransition,
  CanvasRenderer,
  PieChart,
  LineChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "EChartsModel",
  components: {
    VChart,
  },
  props:{
    option: Object,
  },
  provide: {
    [THEME_KEY]: "auto",
  },
};
</script>
  
<style scoped>
.chart {
  height: 100vh;
}
</style>
  
<style>
body {
  margin: 0;
}
</style>