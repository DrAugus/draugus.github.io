<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from 'echarts/features';
import { PieChart, LineChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import "echarts/lib/component/grid";

use([
  UniversalTransition,
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
]);

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