<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from 'echarts/features';
import {
  PieChart, LineChart, BarChart,
  LinesChart,
  EffectScatterChart

} from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  GeoComponent,

} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import "echarts/lib/component/grid";
// https://github.com/ecomfe/vue-echarts/issues/493#issuecomment-760111682
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/chart/map';

import * as echarts from 'echarts/index.blank'
// https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json
import * as world from '../data/world.json'
echarts.registerMap('world', world);

// import 'echarts/extension/bmap/bmap'
// bmap.registerMap('China', 'china');

use([
  UniversalTransition,
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  LinesChart,
  EffectScatterChart,

  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  GeoComponent,
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