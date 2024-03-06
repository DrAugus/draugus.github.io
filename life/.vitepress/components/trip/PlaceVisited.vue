<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

import { citiesData } from "../../data/trip/cities";

let map = null;


var icon = {
  type: 'image',
  image: 'https://a.amap.com/jsapi_demos/static/demo-center/marker/express2.png',
  size: [64, 30],
  anchor: 'center',
};
var textStyle = {
  fontSize: 12,
  fontWeight: 'normal',
  fillColor: '#fff',
  // fillColor: 'rgb(255, 215, 0)',
  // strokeColor: '#fff',
  // strokeWidth: 2,
  // fold: true,
  padding: '2, 5',
  backgroundColor: 'rgb(246,137,38)',
  borderColor: '#fff',
  borderWidth: 1,
};
var LabelsData = [
  {
    name: '自提点1',
    position: [116.461009, 39.991443],
    zooms: [10, 20],
    opacity: 1,
    zIndex: 10,
    icon,
    text: {
      content: '中邮速递易',
      direction: 'right',
      offset: [-20, -5],
      style: textStyle
    }
  },
];

const findInCities = (name) => {
  for (const city of citiesData) {
    if (name === city.name) {
      return city;
    }
  }
};

var specialCity = ['北京', '上海', '天津', '重庆'];
var colorLegend = {
  // 10: '#fde7a9',
  10: '#f9c02f',
  100: '#f5a54f',
  500: '#f18334',
  1000: '#cc5f42',
  5000: '#a94d36',
  100000: '#792a17',
};

const getMarkers = (AMap) => {
  let markers = [];
  let cities = ['郑州', '北京', '上海'];
  for (var city of cities) {
    // cityNames.push(city);
    var curCityData = findInCities(city);
    var number = 100;
    if (curCityData && number) {
      var color = getColorByNumber(number);
      textStyle.backgroundColor = color;
      var marker = new AMap.LabelMarker({
        name: city,
        position: [curCityData.x, curCityData.y],
        zIndex: number,
        text: {
          content: city + ': ' + 20,
          direction: 'center',
          style: textStyle,
        }
      });
      markers.push(marker);
    }
  }
  return markers;
};

function getColorByNumber(number) {
  var color;

  for (var key in colorLegend) {
    if (colorLegend.hasOwnProperty(key)) {
      if (number < parseInt(key)) {
        color = colorLegend[key];
        break;
      }
    }
  }

  return color;
}

onMounted(() => {
  AMapLoader.load({
    key: "86d5b3834c7e9dd95ac4517948ce435c", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        zoom: 4.5,
        center: [109.610747, 35.15261],
        viewMode: '3D',
        // pitch: 60,
        // mapStyle: 'amap://styles/whitesmoke',
        showIndoorMap: false,
        showLabel: false,
        // mapStyle: 'amap://styles/dark',
        mapStyle: 'amap://styles/fresh',
      });
      var layer = new AMap.LabelsLayer({
        zooms: [3, 20],
        zIndex: 1000,
        collision: false,
        allowCollision: false,
      });
      layer.add([]);
      // 图层添加到地图
      map.add(layer);
      let mark = getMarkers(AMap);
      layer.add(mark);
      console.log(mark);
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
